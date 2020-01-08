// @ts-ignore
import { Layer } from 'ol/layer.js';
// @ts-ignore
import { fromUserExtent, fromUserCoordinate } from 'ol/proj.js';
// @ts-ignore
import CanvasLayerRenderer from 'ol/renderer/canvas/Layer.js';
// @ts-ignore
import { compose as composeTransform, makeInverse, apply as applyTransform } from 'ol/transform.js';
// @ts-ignore
import { containsExtent, intersects, getIntersection, isEmpty } from 'ol/extent.js';

import WindCore from 'wind-core';

const ViewHint = {
  ANIMATING: 0,
  INTERACTING: 1
};

export const Field = WindCore.Field;

export class WindLayerRender extends CanvasLayerRenderer {
  private wind: WindCore | null;
  private pixelTransform: any;
  private inversePixelTransform: any;
  private context: CanvasRenderingContext2D;
  private containerReused: boolean;
  private container: HTMLDivElement | HTMLCanvasElement;

  constructor(layer: WindLayer) {
    super(layer);

    this.wind = null;
  }

  prepareFrame(frameState: {
    layerStatesArray: { [x: string]: any; };
    layerIndex: string | number;
    pixelRatio: any;
    viewState: any;
    viewHints: any;
    extent: any;
  }) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewResolution = viewState.resolution;

    const hints = frameState.viewHints;

    let renderedExtent = frameState.extent;
    if (layerState.extent !== undefined) {
      renderedExtent = getIntersection(renderedExtent, fromUserExtent(layerState.extent, viewState.projection));
    }

    if (!hints[ViewHint.ANIMATING] && !hints[ViewHint.INTERACTING] && !isEmpty(renderedExtent)) {
      let projection = viewState.projection;
      // console.log(this, projection, renderedExtent, viewResolution);
    }

    return true;
  }

  renderFrame(frameState: any, target: any) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const size = frameState.size;

    let width = Math.round(size[0] * pixelRatio);
    let height = Math.round(size[1] * pixelRatio);
    const rotation = viewState.rotation;
    if (rotation) {
      const size = Math.round(Math.sqrt(width * width + height * height));
      width = size;
      height = size;
    }

    // set forward and inverse pixel transforms
    composeTransform(this.pixelTransform,
      frameState.size[0] / 2, frameState.size[1] / 2,
      1 / pixelRatio, 1 / pixelRatio,
      rotation,
      -width / 2, -height / 2
    );
    makeInverse(this.inversePixelTransform, this.pixelTransform);

    // @ts-ignore
    const canvasTransform = this.createTransformString(this.pixelTransform);

    // @ts-ignore
    this.useContainer(target, canvasTransform, layerState.opacity);

    const context = this.context;
    const canvas = context.canvas;

    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
    } else if (!this.containerReused) {
      context.clearRect(0, 0, width, height);
    }

    // clipped rendering if layer extent is set
    let clipped = false;
    if (layerState.extent) {
      const layerExtent = fromUserExtent(layerState.extent, viewState.projection);
      clipped = !containsExtent(layerExtent, frameState.extent) && intersects(layerExtent, frameState.extent);
      if (clipped) {
        // @ts-ignore
        this.clipUnrotated(context, frameState, layerExtent);
      }
    }

    if (!this.wind) {
      const layer = this.getLayer();
      const data = layer.getData();

      this.wind = new WindCore(this.context, {}, data);

      this.wind.project = this.getPixelFromCoordinateInternal.bind(this, frameState);
      this.wind.postrender = () => {};
    }

    this.wind.prerender();

    // @ts-ignore
    this.preRender(context, frameState);
    // render
    this.wind.render();
    // @ts-ignore
    this.postRender(context, frameState);

    if (clipped) {
      context.restore();
    }

    if (canvasTransform !== canvas.style.transform) {
      canvas.style.transform = canvasTransform;
    }

    return this.container;
  }

  private getPixelFromCoordinateInternal(frameState: {
    viewState: any;
    coordinateToPixelTransform: any;
  }, coordinate: [number, number]) {
    const viewState = frameState.viewState;
    const viewCoordinate = fromUserCoordinate(coordinate, viewState.projection);
    if (!frameState) {
      return null;
    } else {
      return applyTransform(frameState.coordinateToPixelTransform, viewCoordinate.slice(0, 2));
    }
  }

  public getLayer(): WindLayer {
    return super.getLayer();
  }
}

export class WindLayer extends Layer {
  private renderer_: WindLayerRender;
  private field: any;
  private _map: any;

  constructor(data: any, options: any) {
    super(options);

    this.field = null;

    this._map = null;

    if (data) {
      this.setData(data);
    }
  }

  public render(frameState: any, target: any) {
    const layerRenderer = this.getRenderer();

    if (layerRenderer.prepareFrame(frameState)) {
      return layerRenderer.renderFrame(frameState, target);
    }
  }

  public getRenderer() {
    if (!this.renderer_) {
      this.renderer_ = this.createRenderer();
    }
    return this.renderer_;
  }

  private createRenderer() {
    return new WindLayerRender(this);
  }

  public getData () {
    return this.field;
  }

  /**
   * set layer data
   * @param data
   * @returns {OlWindy}
   */
  public setData (data: any) {
    // @ts-ignore
    if (data && data instanceof Field) {
      this.field = data;
    } else {
      console.error('inValid');
    }
    return this;
  }

  public on(...args: any[]) {
    return super.on(...args);
  }

  public un(...args: any[]) {
    return super.on(...args);
  }
}
