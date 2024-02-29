import{_ as e,c as t,o as r,a}from"./app.8688f4f3.js";const b=JSON.parse('{"title":"Class: Tile","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":4},"headers":[{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"#textures","slug":"textures","link":"#textures","children":[]},{"level":3,"title":"aborted","slug":"aborted","link":"#aborted","children":[]},{"level":3,"title":"actor","slug":"actor","link":"#actor","children":[]},{"level":3,"title":"errorCount","slug":"errorcount","link":"#errorcount","children":[]},{"level":3,"title":"geometry","slug":"geometry","link":"#geometry","children":[]},{"level":3,"title":"maxErrorCount","slug":"maxerrorcount","link":"#maxerrorcount","children":[]},{"level":3,"title":"reloadCallback","slug":"reloadcallback","link":"#reloadcallback","children":[]},{"level":3,"title":"request","slug":"request","link":"#request","children":[]},{"level":3,"title":"state","slug":"state","link":"#state","children":[]},{"level":3,"title":"tileBounds","slug":"tilebounds","link":"#tilebounds","children":[]},{"level":3,"title":"tileID","slug":"tileid","link":"#tileid","children":[]},{"level":3,"title":"tileMeshs","slug":"tilemeshs","link":"#tilemeshs","children":[]},{"level":3,"title":"tileSize","slug":"tilesize","link":"#tilesize","children":[]},{"level":3,"title":"uses","slug":"uses","link":"#uses","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors","link":"#accessors","children":[{"level":3,"title":"textures","slug":"textures-1","link":"#textures-1","children":[]},{"level":3,"title":"tileCenter","slug":"tilecenter","link":"#tilecenter","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"copy","slug":"copy","link":"#copy","children":[]},{"level":3,"title":"createMesh","slug":"createmesh","link":"#createmesh","children":[]},{"level":3,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":3,"title":"getBounds","slug":"getbounds","link":"#getbounds","children":[]},{"level":3,"title":"getMesh","slug":"getmesh","link":"#getmesh","children":[]},{"level":3,"title":"hasData","slug":"hasdata","link":"#hasdata","children":[]},{"level":3,"title":"isLoaded","slug":"isloaded","link":"#isloaded","children":[]},{"level":3,"title":"setTextures","slug":"settextures","link":"#settextures","children":[]},{"level":3,"title":"updateGeometry","slug":"updategeometry","link":"#updategeometry","children":[]},{"level":3,"title":"wasRequested","slug":"wasrequested","link":"#wasrequested","children":[]}]}],"relativePath":"api/classes/gl_core_src.Tile.md","lastUpdated":1709225622000}'),d={name:"api/classes/gl_core_src.Tile.md"},s=a('<p><a href="./../">Class Docs</a> / <a href="./../modules/gl_core_src">gl-core/src</a> / Tile</p><h1 id="class-tile" tabindex="-1">Class: Tile <a class="header-anchor" href="#class-tile">\xB6</a></h1><p><a href="./../modules/gl_core_src">gl-core/src</a>.Tile</p><p>\u8FD9\u91CC\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u74E6\u7247\u5B9E\u73B0\uFF0C\u4ED6\u4E3B\u8981\u662F\u4E3A\u4E86\u7EDF\u5404\u5730\u56FE\u7C7B\u5E93\u7684\u74E6\u7247\u76F8\u5173\u64CD\u4F5C \u6211\u4EEC\u5E38\u89C4\u9700\u8981\u7684\u662F\u5728\u67D0\u4E2A\u5730\u56FE\u7C7B\u5E93\u4E0B\u67D0\u4E2A\u74E6\u7247\u7684 xyz \u4EE5\u53CA\u5176\u5BF9\u5E94\u6295\u5F71\u4E0B \u7684\u74E6\u7247\u8303\u56F4\uFF08\u5E38\u89C4\u60C5\u51B5\u4F7F\u7528\u4E16\u754C\u5750\u6807\uFF0C\u90E8\u5206\u7C7B\u5E93\u53EF\u80FD\u76F4\u63A5\u4F7F\u7528\u50CF\u7D20\u4F4D\u7F6E\u5E76\u4E14\u5728\u6BCF\u4E00\u5E27\u66F4\u65B0\uFF09\uFF0C \u5E76\u4E14\u5728\u6B64\u6211\u4EEC\u9700\u8981\u7EF4\u62A4\u74E6\u7247\u7684\u72B6\u6001\u3002</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors">\xB6</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor">\xB6</a></h3><p>\u2022 <strong>new Tile</strong>(<code>tileID</code>, <code>options?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tileID</code></td><td style="text-align:left;"><a href="./gl_core_src.TileID"><code>TileID</code></a></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>TileOptions</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L81" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:81</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties">\xB6</a></h2><h3 id="textures" tabindex="-1">#textures <a class="header-anchor" href="#textures">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>#textures</strong>: <code>Map</code>&lt;<code>number</code>, <code>Texture</code>&lt;<code>TextureOptions</code>&gt;&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L75" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:75</a></p><hr><h3 id="aborted" tabindex="-1">aborted <a class="header-anchor" href="#aborted">\xB6</a></h3><p>\u2022 <strong>aborted</strong>: <code>boolean</code></p><p>\u74E6\u7247 \u662F\u5426\u53D6\u6D88\u8BF7\u6C42</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L22" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:22</a></p><hr><h3 id="actor" tabindex="-1">actor <a class="header-anchor" href="#actor">\xB6</a></h3><p>\u2022 <strong>actor</strong>: <code>any</code></p><p>worker \u6267\u884C\u5668</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L32" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:32</a></p><hr><h3 id="errorcount" tabindex="-1">errorCount <a class="header-anchor" href="#errorcount">\xB6</a></h3><p>\u2022 <strong>errorCount</strong>: <code>number</code> = <code>0</code></p><p>\u74E6\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u6B21\u6570</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L47" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:47</a></p><hr><h3 id="geometry" tabindex="-1">geometry <a class="header-anchor" href="#geometry">\xB6</a></h3><p>\u2022 <strong>geometry</strong>: <code>Plane</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L71" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:71</a></p><hr><h3 id="maxerrorcount" tabindex="-1">maxErrorCount <a class="header-anchor" href="#maxerrorcount">\xB6</a></h3><p>\u2022 <strong>maxErrorCount</strong>: <code>number</code> = <code>3</code></p><p>\u5141\u8BB8\u7684\u74E6\u7247\u6700\u5927\u5931\u8D25\u6B21\u6570</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L52" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:52</a></p><hr><h3 id="reloadcallback" tabindex="-1">reloadCallback <a class="header-anchor" href="#reloadcallback">\xB6</a></h3><p>\u2022 <strong>reloadCallback</strong>: <code>any</code></p><p>\u74E6\u7247\u91CD\u52A0\u8F7D\u56DE\u8C03</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L27" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:27</a></p><hr><h3 id="request" tabindex="-1">request <a class="header-anchor" href="#request">\xB6</a></h3><p>\u2022 <strong>request</strong>: <code>Map</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L73" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:73</a></p><hr><h3 id="state" tabindex="-1">state <a class="header-anchor" href="#state">\xB6</a></h3><p>\u2022 <strong>state</strong>: <a href="./../enums/gl_core_src.TileState"><code>TileState</code></a></p><p>\u74E6\u7247\u6570\u636E\u52A0\u8F7D\u72B6\u6001</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L42" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:42</a></p><hr><h3 id="tilebounds" tabindex="-1">tileBounds <a class="header-anchor" href="#tilebounds">\xB6</a></h3><p>\u2022 <strong>tileBounds</strong>: <a href="./../interfaces/gl_core_src.ProjTileBounds"><code>ProjTileBounds</code></a></p><p>\u74E6\u7247\u7684\u4E16\u754C\u8303\u56F4</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L57" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:57</a></p><hr><h3 id="tileid" tabindex="-1">tileID <a class="header-anchor" href="#tileid">\xB6</a></h3><p>\u2022 <strong>tileID</strong>: <a href="./gl_core_src.TileID"><code>TileID</code></a></p><p>\u74E6\u7247 ID</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L37" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:37</a></p><hr><h3 id="tilemeshs" tabindex="-1">tileMeshs <a class="header-anchor" href="#tilemeshs">\xB6</a></h3><p>\u2022 <strong>tileMeshs</strong>: <code>Map</code>&lt;<code>string</code>, <code>default</code>&gt;</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L69" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:69</a></p><hr><h3 id="tilesize" tabindex="-1">tileSize <a class="header-anchor" href="#tilesize">\xB6</a></h3><p>\u2022 <strong>tileSize</strong>: <code>number</code></p><p>\u74E6\u7247\u5C3A\u5BF8</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L62" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:62</a></p><hr><h3 id="uses" tabindex="-1">uses <a class="header-anchor" href="#uses">\xB6</a></h3><p>\u2022 <strong>uses</strong>: <code>number</code> = <code>0</code></p><p>\u74E6\u7247\u4F7F\u7528\u6B21\u6570\uFF08\u5728\u591A\u4E2A render \u5171\u4EAB source \u65F6\uFF0C\u74E6\u7247\u53EA\u80FD\u5728\u4E3A\u88AB\u4EFB\u4F55\u6E32\u67D3\u5668\u4F7F\u7528\u65F6\u624D\u80FD\u88AB\u9500\u6BC1\uFF09</p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L67" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:67</a></p><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors">\xB6</a></h2><h3 id="textures-1" tabindex="-1">textures <a class="header-anchor" href="#textures-1">\xB6</a></h3><p>\u2022 <code>get</code> <strong>textures</strong>(): <code>Map</code>&lt;<code>number</code>, <code>Texture</code>&lt;<code>TextureOptions</code>&gt;&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns">\xB6</a></h4><p><code>Map</code>&lt;<code>number</code>, <code>Texture</code>&lt;<code>TextureOptions</code>&gt;&gt;</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L120" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:120</a></p><hr><h3 id="tilecenter" tabindex="-1">tileCenter <a class="header-anchor" href="#tilecenter">\xB6</a></h3><p>\u2022 <code>get</code> <strong>tileCenter</strong>(): <code>number</code>[]</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1">\xB6</a></h4><p><code>number</code>[]</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L124" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:124</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods">\xB6</a></h2><h3 id="copy" tabindex="-1">copy <a class="header-anchor" href="#copy">\xB6</a></h3><p>\u25B8 <strong>copy</strong>(<code>tile</code>): <a href="./gl_core_src.Tile"><code>Tile</code></a></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tile</code></td><td style="text-align:left;"><a href="./gl_core_src.Tile"><code>Tile</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2">\xB6</a></h4><p><a href="./gl_core_src.Tile"><code>Tile</code></a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L290" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:290</a></p><hr><h3 id="createmesh" tabindex="-1">createMesh <a class="header-anchor" href="#createmesh">\xB6</a></h3><p>\u25B8 <strong>createMesh</strong>(<code>passId</code>, <code>bbox</code>, <code>renderer</code>, <code>program</code>, <code>force?</code>): <code>undefined</code> | <code>default</code></p><p>\u521B\u5EFA <code>TileMesh</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>passId</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>bbox</code></td><td style="text-align:left;"><a href="./../interfaces/gl_core_src.ProjTileBounds"><code>ProjTileBounds</code></a></td></tr><tr><td style="text-align:left;"><code>renderer</code></td><td style="text-align:left;"><code>Renderer</code></td></tr><tr><td style="text-align:left;"><code>program</code></td><td style="text-align:left;"><code>Program</code></td></tr><tr><td style="text-align:left;"><code>force?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3">\xB6</a></h4><p><code>undefined</code> | <code>default</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L191" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:191</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy">\xB6</a></h3><p>\u25B8 <strong>destroy</strong>(): <code>void</code></p><p>\u91CA\u653E\u74E6\u7247\u8D44\u6E90</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L302" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:302</a></p><hr><h3 id="getbounds" tabindex="-1">getBounds <a class="header-anchor" href="#getbounds">\xB6</a></h3><p>\u25B8 <strong>getBounds</strong>(): <a href="./../interfaces/gl_core_src.ProjTileBounds"><code>ProjTileBounds</code></a></p><p>\u83B7\u53D6\u74E6\u7247\u4E16\u754C\u5750\u6807\u7CFB\u4E0B\u7684\u8303\u56F4</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5">\xB6</a></h4><p><a href="./../interfaces/gl_core_src.ProjTileBounds"><code>ProjTileBounds</code></a></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L286" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:286</a></p><hr><h3 id="getmesh" tabindex="-1">getMesh <a class="header-anchor" href="#getmesh">\xB6</a></h3><p>\u25B8 <strong>getMesh</strong>(<code>passId</code>): <code>undefined</code> | <code>default</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>passId</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6">\xB6</a></h4><p><code>undefined</code> | <code>default</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L116" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:116</a></p><hr><h3 id="hasdata" tabindex="-1">hasData <a class="header-anchor" href="#hasdata">\xB6</a></h3><p>\u25B8 <strong>hasData</strong>(): <code>boolean</code></p><p>\u74E6\u7247\u662F\u5426\u5DF2\u7ECF\u52A0\u8F7D\u5230\u6570\u636E</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L94" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:94</a></p><hr><h3 id="isloaded" tabindex="-1">isLoaded <a class="header-anchor" href="#isloaded">\xB6</a></h3><p>\u25B8 <strong>isLoaded</strong>(): <code>boolean</code></p><p>\u74E6\u7247\u662F\u5426\u52A0\u8F7D\u5B8C\u6210</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L108" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:108</a></p><hr><h3 id="settextures" tabindex="-1">setTextures <a class="header-anchor" href="#settextures">\xB6</a></h3><p>\u25B8 <strong>setTextures</strong>(<code>renderer</code>, <code>index</code>, <code>image</code>, <code>parseOptions</code>, <code>userData?</code>): <code>void</code></p><p>\u521B\u5EFA\u7EB9\u7406</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>renderer</code></td><td style="text-align:left;"><code>Renderer</code></td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>image</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>parseOptions</code></td><td style="text-align:left;"><a href="./../modules/gl_core_src#parseoptionstype"><code>ParseOptionsType</code></a></td></tr><tr><td style="text-align:left;"><code>userData?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L221" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:221</a></p><hr><h3 id="updategeometry" tabindex="-1">updateGeometry <a class="header-anchor" href="#updategeometry">\xB6</a></h3><p>\u25B8 <strong>updateGeometry</strong>(<code>bbox</code>, <code>renderer</code>, <code>force?</code>): <code>void</code></p><p>\u66F4\u65B0\u74E6\u7247\u9876\u70B9\u4FE1\u606F</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>bbox</code></td><td style="text-align:left;"><a href="./../interfaces/gl_core_src.ProjTileBounds"><code>ProjTileBounds</code></a></td></tr><tr><td style="text-align:left;"><code>renderer</code></td><td style="text-align:left;"><code>Renderer</code></td></tr><tr><td style="text-align:left;"><code>force?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-25" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-25">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L138" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:138</a></p><hr><h3 id="wasrequested" tabindex="-1">wasRequested <a class="header-anchor" href="#wasrequested">\xB6</a></h3><p>\u25B8 <strong>wasRequested</strong>(): <code>boolean</code></p><p>\u74E6\u7247\u662F\u5426\u5DF2\u7ECF\u8BF7\u6C42\u8FC7</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-26" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-26">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/12f3939/packages/gl-core/src/tile/Tile.ts#L101" target="_blank" rel="noreferrer">packages/gl-core/src/tile/Tile.ts:101</a></p>',193),l=[s];function i(o,c,n,h,g,f){return r(),t("div",null,l)}const u=e(d,[["render",i]]);export{b as __pageData,u as default};