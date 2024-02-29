import{_ as e,c as t,o as d,a}from"./app.8688f4f3.js";const x=JSON.parse('{"title":"Class: TileSource","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":4},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"#private","slug":"private","link":"#private","children":[]},{"level":3,"title":"dispatcher","slug":"dispatcher","link":"#dispatcher","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"layer","slug":"layer","link":"#layer","children":[]},{"level":3,"title":"maxZoom","slug":"maxzoom","link":"#maxzoom","children":[]},{"level":3,"title":"minZoom","slug":"minzoom","link":"#minzoom","children":[]},{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"parseOptions","slug":"parseoptions","link":"#parseoptions","children":[]},{"level":3,"title":"renderer","slug":"renderer","link":"#renderer","children":[]},{"level":3,"title":"roundZoom","slug":"roundzoom","link":"#roundzoom","children":[]},{"level":3,"title":"scheme","slug":"scheme","link":"#scheme","children":[]},{"level":3,"title":"tileBounds","slug":"tilebounds","link":"#tilebounds","children":[]},{"level":3,"title":"tileSize","slug":"tilesize","link":"#tilesize","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"url","slug":"url","link":"#url","children":[]},{"level":3,"title":"wrapX","slug":"wrapx","link":"#wrapx","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors","link":"#accessors","children":[{"level":3,"title":"sourceCache","slug":"sourcecache","link":"#sourcecache","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"abortTile","slug":"aborttile","link":"#aborttile","children":[]},{"level":3,"title":"asyncActor","slug":"asyncactor","link":"#asyncactor","children":[]},{"level":3,"title":"clear","slug":"clear","link":"#clear","children":[]},{"level":3,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":3,"title":"emit","slug":"emit","link":"#emit","children":[]},{"level":3,"title":"getFadeTime","slug":"getfadetime","link":"#getfadetime","children":[]},{"level":3,"title":"getTileUrl","slug":"gettileurl","link":"#gettileurl","children":[]},{"level":3,"title":"getUrl","slug":"geturl","link":"#geturl","children":[]},{"level":3,"title":"has","slug":"has","link":"#has","children":[]},{"level":3,"title":"hasTile","slug":"hastile","link":"#hastile","children":[]},{"level":3,"title":"load","slug":"load","link":"#load","children":[]},{"level":3,"title":"loadTile","slug":"loadtile","link":"#loadtile","children":[]},{"level":3,"title":"loaded","slug":"loaded","link":"#loaded","children":[]},{"level":3,"title":"off","slug":"off","link":"#off","children":[]},{"level":3,"title":"on","slug":"on","link":"#on","children":[]},{"level":3,"title":"onAdd","slug":"onadd","link":"#onadd","children":[]},{"level":3,"title":"once","slug":"once","link":"#once","children":[]},{"level":3,"title":"prepare","slug":"prepare","link":"#prepare","children":[]},{"level":3,"title":"reload","slug":"reload","link":"#reload","children":[]},{"level":3,"title":"unloadTile","slug":"unloadtile","link":"#unloadtile","children":[]},{"level":3,"title":"update","slug":"update","link":"#update","children":[]}]}],"relativePath":"api/classes/maptalks_src.TileSource.md","lastUpdated":1709225622000}'),r={name:"api/classes/maptalks_src.TileSource.md"},n=a('<p><a href="./../">Class Docs</a> / <a href="./../modules/maptalks_src">maptalks/src</a> / TileSource</p><h1 id="class-tilesource" tabindex="-1">Class: TileSource <a class="header-anchor" href="#class-tilesource">\xB6</a></h1><p><a href="./../modules/maptalks_src">maptalks/src</a>.TileSource</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy">\xB6</a></h2><ul><li><p><code>EventEmitter</code></p><p>\u21B3 <strong><code>TileSource</code></strong></p></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors">\xB6</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor">\xB6</a></h3><p>\u2022 <strong>new TileSource</strong>(<code>id</code>, <code>options</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>TileSourceOptions</code></td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides">\xB6</a></h4><p>EventEmitter.constructor</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:668</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties">\xB6</a></h2><h3 id="private" tabindex="-1">#private <a class="header-anchor" href="#private">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>#private</strong>: <code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:625</p><hr><h3 id="dispatcher" tabindex="-1">dispatcher <a class="header-anchor" href="#dispatcher">\xB6</a></h3><p>\u2022 <strong>dispatcher</strong>: <code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:661</p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id">\xB6</a></h3><p>\u2022 <strong>id</strong>: <code>string</code></p><p>\u6570\u636E\u6E90 id</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:629</p><hr><h3 id="layer" tabindex="-1">layer <a class="header-anchor" href="#layer">\xB6</a></h3><p>\u2022 <strong>layer</strong>: <code>WithNull</code>&lt;<code>BaseLayer</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:662</p><hr><h3 id="maxzoom" tabindex="-1">maxZoom <a class="header-anchor" href="#maxzoom">\xB6</a></h3><p>\u2022 <strong>maxZoom</strong>: <code>number</code></p><p>\u652F\u6301\u7684\u6700\u5927\u5C42\u7EA7</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:641</p><hr><h3 id="minzoom" tabindex="-1">minZoom <a class="header-anchor" href="#minzoom">\xB6</a></h3><p>\u2022 <strong>minZoom</strong>: <code>number</code></p><p>\u652F\u6301\u7684\u6700\u5C0F\u5C42\u7EA7</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:637</p><hr><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options">\xB6</a></h3><p>\u2022 <strong>options</strong>: <code>TileSourceOptions</code></p><p>\u914D\u7F6E\u9879</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:659</p><hr><h3 id="parseoptions" tabindex="-1">parseOptions <a class="header-anchor" href="#parseoptions">\xB6</a></h3><p>\u2022 <strong>parseOptions</strong>: <code>ParseOptionsType</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:667</p><hr><h3 id="renderer" tabindex="-1">renderer <a class="header-anchor" href="#renderer">\xB6</a></h3><p>\u2022 <strong>renderer</strong>: <code>Renderer</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:660</p><hr><h3 id="roundzoom" tabindex="-1">roundZoom <a class="header-anchor" href="#roundzoom">\xB6</a></h3><p>\u2022 <strong>roundZoom</strong>: <code>boolean</code></p><p>\u751F\u6210\u74E6\u7247\u65F6\u7684\u914D\u7F6E</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:645</p><hr><h3 id="scheme" tabindex="-1">scheme <a class="header-anchor" href="#scheme">\xB6</a></h3><p>\u2022 <strong>scheme</strong>: <code>&quot;xyz&quot;</code> | <code>&quot;tms&quot;</code></p><p>\u74E6\u7247\u89C4\u8303</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:649</p><hr><h3 id="tilebounds" tabindex="-1">tileBounds <a class="header-anchor" href="#tilebounds">\xB6</a></h3><p>\u2022 <strong>tileBounds</strong>: <code>undefined</code> | <code>Bounds</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:655</p><hr><h3 id="tilesize" tabindex="-1">tileSize <a class="header-anchor" href="#tilesize">\xB6</a></h3><p>\u2022 <strong>tileSize</strong>: <code>number</code></p><p>\u74E6\u7247\u5927\u5C0F</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:654</p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type">\xB6</a></h3><p>\u2022 <strong>type</strong>: <a href="./../enums/maptalks_src.LayerSourceType#tile"><code>tile</code></a></p><p>\u6570\u636E\u6E90\u7C7B\u578B</p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:633</p><hr><h3 id="url" tabindex="-1">url <a class="header-anchor" href="#url">\xB6</a></h3><p>\u2022 <strong>url</strong>: <code>string</code> | <code>string</code>[]</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:650</p><hr><h3 id="wrapx" tabindex="-1">wrapX <a class="header-anchor" href="#wrapx">\xB6</a></h3><p>\u2022 <strong>wrapX</strong>: <code>boolean</code></p><p>\u662F\u5426\u8DE8\u4E16\u754C\u6E32\u67D3</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:666</p><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors">\xB6</a></h2><h3 id="sourcecache" tabindex="-1">sourceCache <a class="header-anchor" href="#sourcecache">\xB6</a></h3><p>\u2022 <code>get</code> <strong>sourceCache</strong>(): <code>SourceCache</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns">\xB6</a></h4><p><code>SourceCache</code></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:669</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods">\xB6</a></h2><h3 id="aborttile" tabindex="-1">abortTile <a class="header-anchor" href="#aborttile">\xB6</a></h3><p>\u25B8 <strong>abortTile</strong>(<code>tile</code>, <code>callback</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tile</code></td><td style="text-align:left;"><code>Tile</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:686</p><hr><h3 id="asyncactor" tabindex="-1">asyncActor <a class="header-anchor" href="#asyncactor">\xB6</a></h3><p>\u25B8 <strong>asyncActor</strong>(<code>tile</code>, <code>url</code>): <code>Promise</code>&lt;<code>unknown</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tile</code></td><td style="text-align:left;"><code>Tile</code></td></tr><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2">\xB6</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:683</p><hr><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear">\xB6</a></h3><p>\u25B8 <strong>clear</strong>(): <a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><p>\u6E05\u7A7A\u6240\u6709\u7684\u8BA2\u9605\u8005</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3">\xB6</a></h4><p><a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from">\xB6</a></h4><p>EventEmitter.clear</p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:165</p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy">\xB6</a></h3><p>\u25B8 <strong>destroy</strong>(): <code>void</code></p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:688</p><hr><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit">\xB6</a></h3><p>\u25B8 <strong>emit</strong>(<code>type</code>, <code>args?</code>): <code>any</code></p><p>\u89E6\u53D1\u4E8B\u4EF6</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>args?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5">\xB6</a></h4><p><code>any</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1">\xB6</a></h4><p>EventEmitter.emit</p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:160</p><hr><h3 id="getfadetime" tabindex="-1">getFadeTime <a class="header-anchor" href="#getfadetime">\xB6</a></h3><p>\u25B8 <strong>getFadeTime</strong>(): <code>number</code></p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6">\xB6</a></h4><p><code>number</code></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:681</p><hr><h3 id="gettileurl" tabindex="-1">getTileUrl <a class="header-anchor" href="#gettileurl">\xB6</a></h3><p>\u25B8 <strong>getTileUrl</strong>(<code>tileID</code>): <code>string</code>[]</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tileID</code></td><td style="text-align:left;"><a href="./maptalks_src.TileID"><code>TileID</code></a></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7">\xB6</a></h4><p><code>string</code>[]</p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:684</p><hr><h3 id="geturl" tabindex="-1">getUrl <a class="header-anchor" href="#geturl">\xB6</a></h3><p>\u25B8 <strong>getUrl</strong>(<code>x</code>, <code>y</code>, <code>z</code>): <code>string</code> | <code>string</code>[]</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>z</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8">\xB6</a></h4><p><code>string</code> | <code>string</code>[]</p><h4 id="defined-in-25" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-25">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:682</p><hr><h3 id="has" tabindex="-1">has <a class="header-anchor" href="#has">\xB6</a></h3><p>\u25B8 <strong>has</strong>(<code>type</code>): <code>any</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9">\xB6</a></h4><p><code>any</code></p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2">\xB6</a></h4><p>EventEmitter.has</p><h4 id="defined-in-26" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-26">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:161</p><hr><h3 id="hastile" tabindex="-1">hasTile <a class="header-anchor" href="#hastile">\xB6</a></h3><p>\u25B8 <strong>hasTile</strong>(<code>coord</code>): <code>boolean</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>coord</code></td><td style="text-align:left;"><a href="./maptalks_src.TileID"><code>TileID</code></a></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-27" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-27">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:680</p><hr><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load">\xB6</a></h3><p>\u25B8 <strong>load</strong>(<code>cb?</code>): <code>void</code></p><p>\u517C\u5BB9 TileJSON \u52A0\u8F7D\uFF0C\u9700\u8981\u5177\u4F53\u5B9E\u73B0</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cb?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-28" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-28">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:677</p><hr><h3 id="loadtile" tabindex="-1">loadTile <a class="header-anchor" href="#loadtile">\xB6</a></h3><p>\u25B8 <strong>loadTile</strong>(<code>tile</code>, <code>callback</code>): <code>any</code></p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tile</code></td><td style="text-align:left;"><code>Tile</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12">\xB6</a></h4><p><code>any</code></p><h4 id="defined-in-29" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-29">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:685</p><hr><h3 id="loaded" tabindex="-1">loaded <a class="header-anchor" href="#loaded">\xB6</a></h3><p>\u25B8 <strong>loaded</strong>(): <code>boolean</code></p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-30" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-30">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:678</p><hr><h3 id="off" tabindex="-1">off <a class="header-anchor" href="#off">\xB6</a></h3><p>\u25B8 <strong>off</strong>(<code>type</code>, <code>handler?</code>, <code>context?</code>): <a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><p>\u53D6\u6D88\u76D1\u542C</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>handler?</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14">\xB6</a></h4><p><a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3">\xB6</a></h4><p>EventEmitter.off</p><h4 id="defined-in-31" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-31">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:154</p><hr><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on">\xB6</a></h3><p>\u25B8 <strong>on</strong>(<code>type</code>, <code>handler</code>, <code>context?</code>): <a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><p>\u6DFB\u52A0\u8BA2\u9605\u8005</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">\u4E8B\u4EF6\u7C7B\u578B</td></tr><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">\u56DE\u8C03\u51FD\u6570</td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">\u4E0A\u4E0B\u6587</td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15">\xB6</a></h4><p><a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4">\xB6</a></h4><p>EventEmitter.on</p><h4 id="defined-in-32" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-32">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:140</p><hr><h3 id="onadd" tabindex="-1">onAdd <a class="header-anchor" href="#onadd">\xB6</a></h3><p>\u25B8 <strong>onAdd</strong>(<code>layer</code>, <code>cb?</code>): <code>void</code></p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>cb?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-33" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-33">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:670</p><hr><h3 id="once" tabindex="-1">once <a class="header-anchor" href="#once">\xB6</a></h3><p>\u25B8 <strong>once</strong>(<code>type</code>, <code>handler</code>, <code>context?</code>): <a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><p>\u6DFB\u52A0\u4E00\u6B21\u6027\u8BA2\u9605\u8005</p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17">\xB6</a></h4><p><a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5">\xB6</a></h4><p>EventEmitter.once</p><h4 id="defined-in-34" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-34">\xB6</a></h4><p>node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:147</p><hr><h3 id="prepare" tabindex="-1">prepare <a class="header-anchor" href="#prepare">\xB6</a></h3><p>\u25B8 <strong>prepare</strong>(<code>renderer</code>, <code>dispatcher</code>, <code>parseOptions</code>): <code>void</code></p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>renderer</code></td><td style="text-align:left;"><code>Renderer</code></td></tr><tr><td style="text-align:left;"><code>dispatcher</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>parseOptions</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-35" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-35">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:672</p><hr><h3 id="reload" tabindex="-1">reload <a class="header-anchor" href="#reload">\xB6</a></h3><p>\u25B8 <strong>reload</strong>(<code>clear</code>): <code>void</code></p><h4 id="parameters-15" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-15">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>clear</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-36" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-36">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:679</p><hr><h3 id="unloadtile" tabindex="-1">unloadTile <a class="header-anchor" href="#unloadtile">\xB6</a></h3><p>\u25B8 <strong>unloadTile</strong>(<code>tile</code>, <code>callback</code>): <code>void</code></p><h4 id="parameters-16" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-16">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tile</code></td><td style="text-align:left;"><code>Tile</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-20" tabindex="-1">Returns <a class="header-anchor" href="#returns-20">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-37" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-37">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:687</p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update">\xB6</a></h3><p>\u25B8 <strong>update</strong>(<code>data</code>, <code>clear?</code>): <a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="parameters-17" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-17">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>TileSourceInterval</code></td></tr><tr><td style="text-align:left;"><code>clear?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-21" tabindex="-1">Returns <a class="header-anchor" href="#returns-21">\xB6</a></h4><p><a href="./maptalks_src.TileSource"><code>TileSource</code></a></p><h4 id="defined-in-38" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-38">\xB6</a></h4><p>packages/gl-core/dist/index.d.ts:671</p>',309),i=[n];function l(s,o,c,h,p,f){return d(),t("div",null,i)}const u=e(r,[["render",l]]);export{x as __pageData,u as default};