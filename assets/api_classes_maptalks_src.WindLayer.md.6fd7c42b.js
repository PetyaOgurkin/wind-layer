import{_ as e,c as a,o as t,a as r}from"./app.8688f4f3.js";const k=JSON.parse('{"title":"Class: WindLayer","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":4},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"_map","slug":"map","link":"#map","children":[]},{"level":3,"title":"field","slug":"field","link":"#field","children":[]},{"level":3,"title":"options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"_getRenderer","slug":"getrenderer","link":"#getrenderer","children":[]},{"level":3,"title":"draw","slug":"draw","link":"#draw","children":[]},{"level":3,"title":"drawOnInteracting","slug":"drawoninteracting","link":"#drawoninteracting","children":[]},{"level":3,"title":"getData","slug":"getdata","link":"#getdata","children":[]},{"level":3,"title":"getWindOptions","slug":"getwindoptions","link":"#getwindoptions","children":[]},{"level":3,"title":"pickWindOptions","slug":"pickwindoptions","link":"#pickwindoptions","children":[]},{"level":3,"title":"prepareToDraw","slug":"preparetodraw","link":"#preparetodraw","children":[]},{"level":3,"title":"setData","slug":"setdata","link":"#setdata","children":[]},{"level":3,"title":"setWindOptions","slug":"setwindoptions","link":"#setwindoptions","children":[]}]}],"relativePath":"api/classes/maptalks_src.WindLayer.md","lastUpdated":1709225622000}'),d={name:"api/classes/maptalks_src.WindLayer.md"},s=r('<p><a href="./../">Class Docs</a> / <a href="./../modules/maptalks_src">maptalks/src</a> / WindLayer</p><h1 id="class-windlayer" tabindex="-1">Class: WindLayer <a class="header-anchor" href="#class-windlayer">\xB6</a></h1><p><a href="./../modules/maptalks_src">maptalks/src</a>.WindLayer</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy">\xB6</a></h2><ul><li><p><code>&quot;maptalks&quot;</code></p><p>\u21B3 <strong><code>WindLayer</code></strong></p></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors">\xB6</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor">\xB6</a></h3><p>\u2022 <strong>new WindLayer</strong>(<code>id</code>, <code>data</code>, <code>options?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides">\xB6</a></h4><p>CanvasLayer.constructor</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L192" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:192</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties">\xB6</a></h2><h3 id="map" tabindex="-1">_map <a class="header-anchor" href="#map">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>_map</strong>: <code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L189" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:189</a></p><hr><h3 id="field" tabindex="-1">field <a class="header-anchor" href="#field">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>field</strong>: <code>undefined</code> | <a href="./maptalks_src.Field"><code>Field</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L187" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:187</a></p><hr><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>options</strong>: <code>IWindOptions</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L190" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:190</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods">\xB6</a></h2><h3 id="getrenderer" tabindex="-1">_getRenderer <a class="header-anchor" href="#getrenderer">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>_getRenderer</strong>(): <code>any</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns">\xB6</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L281" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:281</a></p><hr><h3 id="draw" tabindex="-1">draw <a class="header-anchor" href="#draw">\xB6</a></h3><p>\u25B8 <strong>draw</strong>(): <a href="./maptalks_src.WindLayer"><code>WindLayer</code></a></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1">\xB6</a></h4><p><a href="./maptalks_src.WindLayer"><code>WindLayer</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L266" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:266</a></p><hr><h3 id="drawoninteracting" tabindex="-1">drawOnInteracting <a class="header-anchor" href="#drawoninteracting">\xB6</a></h3><p>\u25B8 <strong>drawOnInteracting</strong>(): <code>void</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L277" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:277</a></p><hr><h3 id="getdata" tabindex="-1">getData <a class="header-anchor" href="#getdata">\xB6</a></h3><p>\u25B8 <strong>getData</strong>(): <code>undefined</code> | <a href="./maptalks_src.Field"><code>Field</code></a></p><p>get wind layer data</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3">\xB6</a></h4><p><code>undefined</code> | <a href="./maptalks_src.Field"><code>Field</code></a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L222" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:222</a></p><hr><h3 id="getwindoptions" tabindex="-1">getWindOptions <a class="header-anchor" href="#getwindoptions">\xB6</a></h3><p>\u25B8 <strong>getWindOptions</strong>(): <code>Partial</code>&lt;<code>IOptions</code>&gt;</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4">\xB6</a></h4><p><code>Partial</code>&lt;<code>IOptions</code>&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L262" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:262</a></p><hr><h3 id="pickwindoptions" tabindex="-1">pickWindOptions <a class="header-anchor" href="#pickwindoptions">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>pickWindOptions</strong>(): <code>void</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L207" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:207</a></p><hr><h3 id="preparetodraw" tabindex="-1">prepareToDraw <a class="header-anchor" href="#preparetodraw">\xB6</a></h3><p>\u25B8 <strong>prepareToDraw</strong>(): <code>never</code>[]</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6">\xB6</a></h4><p><code>never</code>[]</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L273" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:273</a></p><hr><h3 id="setdata" tabindex="-1">setData <a class="header-anchor" href="#setdata">\xB6</a></h3><p>\u25B8 <strong>setData</strong>(<code>data</code>, <code>options?</code>): <a href="./maptalks_src.WindLayer"><code>WindLayer</code></a></p><p>set layer data</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Partial</code>&lt;<code>IField</code>&gt;</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7">\xB6</a></h4><p><a href="./maptalks_src.WindLayer"><code>WindLayer</code></a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L232" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:232</a></p><hr><h3 id="setwindoptions" tabindex="-1">setWindOptions <a class="header-anchor" href="#setwindoptions">\xB6</a></h3><p>\u25B8 <strong>setWindOptions</strong>(<code>options</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Partial</code>&lt;<code>IOptions</code>&gt;</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/maptalks/src/Canvas.ts#L249" target="_blank" rel="noreferrer">packages/maptalks/src/Canvas.ts:249</a></p>',98),n=[s];function i(o,c,l,h,p,f){return t(),a("div",null,n)}const b=e(d,[["render",i]]);export{k as __pageData,b as default};