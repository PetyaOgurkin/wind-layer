import{_ as e,c as r,o as t,a}from"./app.8688f4f3.js";const b=JSON.parse('{"title":"Interface: BaseLayerOptions","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":4},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"displayRange","slug":"displayrange","link":"#displayrange","children":[]},{"level":3,"title":"flipY","slug":"flipy","link":"#flipy","children":[]},{"level":3,"title":"getExtent","slug":"getextent","link":"#getextent","children":[]},{"level":3,"title":"getGridTiles","slug":"getgridtiles","link":"#getgridtiles","children":[]},{"level":3,"title":"getPixelsToProjUnit","slug":"getpixelstoprojunit","link":"#getpixelstoprojunit","children":[]},{"level":3,"title":"getPixelsToUnits","slug":"getpixelstounits","link":"#getpixelstounits","children":[]},{"level":3,"title":"getTileProjSize","slug":"gettileprojsize","link":"#gettileprojsize","children":[]},{"level":3,"title":"getViewTiles","slug":"getviewtiles","link":"#getviewtiles","children":[]},{"level":3,"title":"getZoom","slug":"getzoom","link":"#getzoom","children":[]},{"level":3,"title":"glScale","slug":"glscale","link":"#glscale","children":[]},{"level":3,"title":"heightSegments","slug":"heightsegments","link":"#heightsegments","children":[]},{"level":3,"title":"mask","slug":"mask","link":"#mask","children":[]},{"level":3,"title":"onInit","slug":"oninit","link":"#oninit","children":[]},{"level":3,"title":"picking","slug":"picking","link":"#picking","children":[]},{"level":3,"title":"renderFrom","slug":"renderfrom","link":"#renderfrom","children":[]},{"level":3,"title":"renderType","slug":"rendertype","link":"#rendertype","children":[]},{"level":3,"title":"styleSpec","slug":"stylespec","link":"#stylespec","children":[]},{"level":3,"title":"triggerRepaint","slug":"triggerrepaint","link":"#triggerrepaint","children":[]},{"level":3,"title":"widthSegments","slug":"widthsegments","link":"#widthsegments","children":[]},{"level":3,"title":"wireframe","slug":"wireframe","link":"#wireframe","children":[]}]}],"relativePath":"api/interfaces/gl_core_src.BaseLayerOptions.md","lastUpdated":1709225622000}'),d={name:"api/interfaces/gl_core_src.BaseLayerOptions.md"},n=a('<p><a href="./../">Class Docs</a> / <a href="./../modules/gl_core_src">gl-core/src</a> / BaseLayerOptions</p><h1 id="interface-baselayeroptions" tabindex="-1">Interface: BaseLayerOptions <a class="header-anchor" href="#interface-baselayeroptions">\xB6</a></h1><p><a href="./../modules/gl_core_src">gl-core/src</a>.BaseLayerOptions</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy">\xB6</a></h2><ul><li><p><a href="./gl_core_src.UserOptions"><code>UserOptions</code></a></p><p>\u21B3 <strong><code>BaseLayerOptions</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties">\xB6</a></h2><h3 id="displayrange" tabindex="-1">displayRange <a class="header-anchor" href="#displayrange">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>displayRange</strong>: [<code>number</code>, <code>number</code>]</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#displayrange">displayRange</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L64" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:64</a></p><hr><h3 id="flipy" tabindex="-1">flipY <a class="header-anchor" href="#flipy">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>flipY</strong>: <code>boolean</code></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#flipy">flipY</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L115" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:115</a></p><hr><h3 id="getextent" tabindex="-1">getExtent <a class="header-anchor" href="#getextent">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>getExtent</strong>: () =&gt; <code>number</code>[]</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration">\xB6</a></h4><p>\u25B8 (): <code>number</code>[]</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns">\xB6</a></h5><p><code>number</code>[]</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L113" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:113</a></p><hr><h3 id="getgridtiles" tabindex="-1">getGridTiles <a class="header-anchor" href="#getgridtiles">\xB6</a></h3><p>\u2022 <strong>getGridTiles</strong>: (<code>tileSize</code>: <code>number</code>) =&gt; <a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1">\xB6</a></h4><p>\u25B8 (<code>tileSize</code>): <a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><p>\u8FD9\u91CC\u6211\u4EEC Mock \u4E00\u4E2A\u74E6\u7247\u56FE\u5C42\uFF0C\u7528\u4E8E\u83B7\u53D6\u89C6\u91CE\u5185\u7684\u6240\u6709\u53EF\u6E32\u67D3\u74E6\u7247\uFF0C\u4E0EgetViewTiles\u4E0D\u540C\u7684\u662F \u6B64\u65B9\u6CD5\u4E0D\u4F1A\u9650\u5236\u5C42\u7EA7\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5728\u5927\u5C42\u7EA7\u65F6\u4E5F\u80FD\u5408\u7406\u91C7\u6837</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters">\xB6</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tileSize</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1">\xB6</a></h5><p><a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L94" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:94</a></p><hr><h3 id="getpixelstoprojunit" tabindex="-1">getPixelsToProjUnit <a class="header-anchor" href="#getpixelstoprojunit">\xB6</a></h3><p>\u2022 <strong>getPixelsToProjUnit</strong>: () =&gt; [<code>number</code>, <code>number</code>]</p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2">\xB6</a></h4><p>\u25B8 (): [<code>number</code>, <code>number</code>]</p><p>\u50CF\u7D20\u5230\u6295\u5F71\u5750\u6807\u7684\u8F6C\u6362\u5173\u7CFB</p><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2">\xB6</a></h5><p>[<code>number</code>, <code>number</code>]</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L110" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:110</a></p><hr><h3 id="getpixelstounits" tabindex="-1">getPixelsToUnits <a class="header-anchor" href="#getpixelstounits">\xB6</a></h3><p>\u2022 <strong>getPixelsToUnits</strong>: () =&gt; [<code>number</code>, <code>number</code>]</p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3">\xB6</a></h4><p>\u25B8 (): [<code>number</code>, <code>number</code>]</p><p>\u83B7\u53D6\u5F53\u524D\u89C6\u56FE\u4E0B\u50CF\u7D20\u548C\u6295\u5F71\u7684\u8F6C\u6362\u5173\u7CFB</p><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3">\xB6</a></h5><p>[<code>number</code>, <code>number</code>]</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L105" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:105</a></p><hr><h3 id="gettileprojsize" tabindex="-1">getTileProjSize <a class="header-anchor" href="#gettileprojsize">\xB6</a></h3><p>\u2022 <strong>getTileProjSize</strong>: (<code>z</code>: <code>number</code>, <code>tiles</code>: <a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]) =&gt; [<code>number</code>, <code>number</code>]</p><h4 id="type-declaration-4" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-4">\xB6</a></h4><p>\u25B8 (<code>z</code>, <code>tiles</code>): [<code>number</code>, <code>number</code>]</p><p>\u83B7\u53D6\u67D0\u5C42\u7EA7\u4E0B\u74E6\u7247\u7684\u6295\u5F71\u5BBD\u9AD8</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1">\xB6</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>z</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tiles</code></td><td style="text-align:left;"><a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4">\xB6</a></h5><p>[<code>number</code>, <code>number</code>]</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L100" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:100</a></p><hr><h3 id="getviewtiles" tabindex="-1">getViewTiles <a class="header-anchor" href="#getviewtiles">\xB6</a></h3><p>\u2022 <strong>getViewTiles</strong>: (<code>data</code>: <code>any</code>, <code>renderType</code>: <a href="./../enums/gl_core_src.RenderType"><code>RenderType</code></a>) =&gt; <a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><h4 id="type-declaration-5" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-5">\xB6</a></h4><p>\u25B8 (<code>data</code>, <code>renderType</code>): <a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><p>\u83B7\u53D6\u5F53\u524D\u89C6\u91CE\u5185\u7684\u74E6\u7247</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2">\xB6</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>renderType</code></td><td style="text-align:left;"><a href="./../enums/gl_core_src.RenderType"><code>RenderType</code></a></td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5">\xB6</a></h5><p><a href="./../classes/gl_core_src.TileID"><code>TileID</code></a>[]</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L88" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:88</a></p><hr><h3 id="getzoom" tabindex="-1">getZoom <a class="header-anchor" href="#getzoom">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>getZoom</strong>: () =&gt; <code>number</code></p><h4 id="type-declaration-6" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-6">\xB6</a></h4><p>\u25B8 (): <code>number</code></p><h5 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6">\xB6</a></h5><p><code>number</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L112" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:112</a></p><hr><h3 id="glscale" tabindex="-1">glScale <a class="header-anchor" href="#glscale">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>glScale</strong>: () =&gt; <code>number</code></p><h4 id="type-declaration-7" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-7">\xB6</a></h4><p>\u25B8 (): <code>number</code></p><h5 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7">\xB6</a></h5><p><code>number</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L117" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:117</a></p><hr><h3 id="heightsegments" tabindex="-1">heightSegments <a class="header-anchor" href="#heightsegments">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>heightSegments</strong>: <code>number</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#heightsegments">heightSegments</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L66" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:66</a></p><hr><h3 id="mask" tabindex="-1">mask <a class="header-anchor" href="#mask">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>mask</strong>: <code>Object</code></p><p>\u53EF\u4EE5\u4E3A\u4EFB\u610F GeoJSON \u6570\u636E</p><h4 id="type-declaration-8" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-8">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Attributes</code>[]</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./../enums/gl_core_src.MaskType"><code>MaskType</code></a></td></tr></tbody></table><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#mask">mask</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L78" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:78</a></p><hr><h3 id="oninit" tabindex="-1">onInit <a class="header-anchor" href="#oninit">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>onInit</strong>: (<code>error</code>: <code>any</code>, <code>data</code>: <code>any</code>) =&gt; <code>void</code></p><h4 id="type-declaration-9" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-9">\xB6</a></h4><p>\u25B8 (<code>error</code>, <code>data</code>): <code>void</code></p><h5 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3">\xB6</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>error</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h5 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8">\xB6</a></h5><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L118" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:118</a></p><hr><h3 id="picking" tabindex="-1">picking <a class="header-anchor" href="#picking">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>picking</strong>: <code>boolean</code></p><p>\u662F\u5426\u5F00\u542F\u62FE\u53D6</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#picking">picking</a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L74" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:74</a></p><hr><h3 id="renderfrom" tabindex="-1">renderFrom <a class="header-anchor" href="#renderfrom">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>renderFrom</strong>: <a href="./../enums/gl_core_src.RenderFrom"><code>RenderFrom</code></a></p><p>\u6307\u5B9A\u6E32\u67D3\u901A\u9053</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#renderfrom">renderFrom</a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L43" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:43</a></p><hr><h3 id="rendertype" tabindex="-1">renderType <a class="header-anchor" href="#rendertype">\xB6</a></h3><p>\u2022 <strong>renderType</strong>: <a href="./../enums/gl_core_src.RenderType"><code>RenderType</code></a></p><p>\u6E32\u67D3\u7C7B\u578B \u76EE\u524D\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A 0\uFF1A\u666E\u901A raster \u74E6\u7247\u6E32\u67D3 1\uFF1A\u6C14\u8C61\u6570\u636E\u7684\u8272\u6591\u56FE\u6E32\u67D3 2\uFF1A\u98CE\u7B49 vector \u6570\u636E\u7684\u7C92\u5B50\u6E32\u67D3</p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#rendertype">renderType</a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L39" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:39</a></p><hr><h3 id="stylespec" tabindex="-1">styleSpec <a class="header-anchor" href="#stylespec">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>styleSpec</strong>: <code>Object</code></p><h4 id="type-declaration-10" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-10">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dropRate?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>dropRateBump?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>fadeOpacity?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>fill-color?</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>numParticles?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>opacity?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>size?</code></td><td style="text-align:left;">[<code>number</code>, <code>number</code>]</td><td style="text-align:left;">arrow size</td></tr><tr><td style="text-align:left;"><code>space?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">arrow space</td></tr><tr><td style="text-align:left;"><code>speedFactor?</code></td><td style="text-align:left;"><code>number</code> | <code>any</code>[]</td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#stylespec">styleSpec</a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L44" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:44</a></p><hr><h3 id="triggerrepaint" tabindex="-1">triggerRepaint <a class="header-anchor" href="#triggerrepaint">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>triggerRepaint</strong>: () =&gt; <code>void</code></p><h4 id="type-declaration-11" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-11">\xB6</a></h4><p>\u25B8 (): <code>void</code></p><h5 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9">\xB6</a></h5><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L114" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:114</a></p><hr><h3 id="widthsegments" tabindex="-1">widthSegments <a class="header-anchor" href="#widthsegments">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>widthSegments</strong>: <code>number</code></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#widthsegments">widthSegments</a></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L65" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:65</a></p><hr><h3 id="wireframe" tabindex="-1">wireframe <a class="header-anchor" href="#wireframe">\xB6</a></h3><p>\u2022 <code>Optional</code> <strong>wireframe</strong>: <code>boolean</code></p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8">\xB6</a></h4><p><a href="./gl_core_src.UserOptions">UserOptions</a>.<a href="./gl_core_src.UserOptions#wireframe">wireframe</a></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/renderer/index.ts#L67" target="_blank" rel="noreferrer">packages/gl-core/src/renderer/index.ts:67</a></p>',186),i=[n];function s(o,c,l,h,p,g){return t(),r("div",null,i)}const y=e(d,[["render",s]]);export{b as __pageData,y as default};