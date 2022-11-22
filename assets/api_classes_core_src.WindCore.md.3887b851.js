import{_ as e,c as a,o as r,a as t}from"./app.d4ded0dd.js";const b=JSON.parse('{"title":"Class: WindCore","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":4},"headers":[{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"animationLoop","slug":"animationloop","link":"#animationloop","children":[]},{"level":3,"title":"ctx","slug":"ctx","link":"#ctx","children":[]},{"level":3,"title":"field","slug":"field","link":"#field","children":[]},{"level":3,"title":"forceStop","slug":"forcestop","link":"#forcestop","children":[]},{"level":3,"title":"generated","slug":"generated","link":"#generated","children":[]},{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"particles","slug":"particles","link":"#particles","children":[]},{"level":3,"title":"starting","slug":"starting","link":"#starting","children":[]},{"level":3,"title":"then","slug":"then","link":"#then","children":[]},{"level":3,"title":"Field","slug":"field-1","link":"#field-1","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"animate","slug":"animate","link":"#animate","children":[]},{"level":3,"title":"clearCanvas","slug":"clearcanvas","link":"#clearcanvas","children":[]},{"level":3,"title":"drawCoordsParticle","slug":"drawcoordsparticle","link":"#drawcoordsparticle","children":[]},{"level":3,"title":"drawParticles","slug":"drawparticles","link":"#drawparticles","children":[]},{"level":3,"title":"drawPixelParticle","slug":"drawpixelparticle","link":"#drawpixelparticle","children":[]},{"level":3,"title":"fadeIn","slug":"fadein","link":"#fadein","children":[]},{"level":3,"title":"getOptions","slug":"getoptions","link":"#getoptions","children":[]},{"level":3,"title":"intersectsCoordinate","slug":"intersectscoordinate","link":"#intersectscoordinate","children":[]},{"level":3,"title":"moveParticles","slug":"moveparticles","link":"#moveparticles","children":[]},{"level":3,"title":"postrender","slug":"postrender","link":"#postrender","children":[]},{"level":3,"title":"prepareParticlePaths","slug":"prepareparticlepaths","link":"#prepareparticlepaths","children":[]},{"level":3,"title":"prerender","slug":"prerender","link":"#prerender","children":[]},{"level":3,"title":"project","slug":"project","link":"#project","children":[]},{"level":3,"title":"randomize","slug":"randomize","link":"#randomize","children":[]},{"level":3,"title":"render","slug":"render","link":"#render","children":[]},{"level":3,"title":"setOptions","slug":"setoptions","link":"#setoptions","children":[]},{"level":3,"title":"start","slug":"start","link":"#start","children":[]},{"level":3,"title":"stop","slug":"stop","link":"#stop","children":[]},{"level":3,"title":"unproject","slug":"unproject","link":"#unproject","children":[]},{"level":3,"title":"updateData","slug":"updatedata","link":"#updatedata","children":[]}]}],"relativePath":"api/classes/core_src.WindCore.md","lastUpdated":null}'),d={name:"api/classes/core_src.WindCore.md"},n=t('<p><a href="./../">Class Docs</a> / <a href="./../modules/core_src">core/src</a> / WindCore</p><h1 id="class-windcore" tabindex="-1">Class: WindCore <a class="header-anchor" href="#class-windcore">\xB6</a></h1><p><a href="./../modules/core_src">core/src</a>.WindCore</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors">\xB6</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor">\xB6</a></h3><p>\u2022 <strong>new WindCore</strong>(<code>ctx</code>, <code>options</code>, <code>field?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ctx</code></td><td style="text-align:left;"><code>CanvasRenderingContext2D</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="./../interfaces/core_src.IOptions"><code>IOptions</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>field?</code></td><td style="text-align:left;"><a href="./core_src.Field"><code>Field</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L62" target="_blank" rel="noreferrer">packages/core/src/index.ts:62</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties">\xB6</a></h2><h3 id="animationloop" tabindex="-1">animationLoop <a class="header-anchor" href="#animationloop">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>animationLoop</strong>: <code>number</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L57" target="_blank" rel="noreferrer">packages/core/src/index.ts:57</a></p><hr><h3 id="ctx" tabindex="-1">ctx <a class="header-anchor" href="#ctx">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>ctx</strong>: <code>CanvasRenderingContext2D</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L53" target="_blank" rel="noreferrer">packages/core/src/index.ts:53</a></p><hr><h3 id="field" tabindex="-1">field <a class="header-anchor" href="#field">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>field</strong>: <a href="./core_src.Field"><code>Field</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L55" target="_blank" rel="noreferrer">packages/core/src/index.ts:55</a></p><hr><h3 id="forcestop" tabindex="-1">forceStop <a class="header-anchor" href="#forcestop">\xB6</a></h3><p>\u2022 <strong>forceStop</strong>: <code>boolean</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L52" target="_blank" rel="noreferrer">packages/core/src/index.ts:52</a></p><hr><h3 id="generated" tabindex="-1">generated <a class="header-anchor" href="#generated">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>generated</strong>: <code>boolean</code> = <code>false</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L60" target="_blank" rel="noreferrer">packages/core/src/index.ts:60</a></p><hr><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>options</strong>: <a href="./../interfaces/core_src.IOptions"><code>IOptions</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L54" target="_blank" rel="noreferrer">packages/core/src/index.ts:54</a></p><hr><h3 id="particles" tabindex="-1">particles <a class="header-anchor" href="#particles">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>particles</strong>: <code>any</code>[] = <code>[]</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L56" target="_blank" rel="noreferrer">packages/core/src/index.ts:56</a></p><hr><h3 id="starting" tabindex="-1">starting <a class="header-anchor" href="#starting">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>starting</strong>: <code>boolean</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L59" target="_blank" rel="noreferrer">packages/core/src/index.ts:59</a></p><hr><h3 id="then" tabindex="-1">then <a class="header-anchor" href="#then">\xB6</a></h3><p>\u2022 <code>Private</code> <strong>then</strong>: <code>number</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L58" target="_blank" rel="noreferrer">packages/core/src/index.ts:58</a></p><hr><h3 id="field-1" tabindex="-1">Field <a class="header-anchor" href="#field-1">\xB6</a></h3><p>\u25AA <code>Static</code> <strong>Field</strong>: typeof <a href="./core_src.Field"><code>Field</code></a> = <code>Field</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L50" target="_blank" rel="noreferrer">packages/core/src/index.ts:50</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods">\xB6</a></h2><h3 id="animate" tabindex="-1">animate <a class="header-anchor" href="#animate">\xB6</a></h3><p>\u25B8 <strong>animate</strong>(): <code>void</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L154" target="_blank" rel="noreferrer">packages/core/src/index.ts:154</a></p><hr><h3 id="clearcanvas" tabindex="-1">clearCanvas <a class="header-anchor" href="#clearcanvas">\xB6</a></h3><p>\u25B8 <strong>clearCanvas</strong>(): <code>void</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L135" target="_blank" rel="noreferrer">packages/core/src/index.ts:135</a></p><hr><h3 id="drawcoordsparticle" tabindex="-1">drawCoordsParticle <a class="header-anchor" href="#drawcoordsparticle">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>drawCoordsParticle</strong>(<code>particle</code>, <code>min</code>, <code>max</code>): <code>void</code></p><p>\u7528\u4E8E\u7ED8\u5236\u5750\u6807\u7C92\u5B50</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>particle</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>min</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>max</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L349" target="_blank" rel="noreferrer">packages/core/src/index.ts:349</a></p><hr><h3 id="drawparticles" tabindex="-1">drawParticles <a class="header-anchor" href="#drawparticles">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>drawParticles</strong>(): <code>void</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L253" target="_blank" rel="noreferrer">packages/core/src/index.ts:253</a></p><hr><h3 id="drawpixelparticle" tabindex="-1">drawPixelParticle <a class="header-anchor" href="#drawpixelparticle">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>drawPixelParticle</strong>(<code>particle</code>, <code>min</code>, <code>max</code>): <code>void</code></p><p>\u7528\u4E8E\u7ED8\u5236\u50CF\u7D20\u7C92\u5B50</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>particle</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>min</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>max</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L298" target="_blank" rel="noreferrer">packages/core/src/index.ts:298</a></p><hr><h3 id="fadein" tabindex="-1">fadeIn <a class="header-anchor" href="#fadein">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>fadeIn</strong>(): <code>void</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L246" target="_blank" rel="noreferrer">packages/core/src/index.ts:246</a></p><hr><h3 id="getoptions" tabindex="-1">getOptions <a class="header-anchor" href="#getoptions">\xB6</a></h3><p>\u25B8 <strong>getOptions</strong>(): <a href="./../interfaces/core_src.IOptions"><code>IOptions</code></a></p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6">\xB6</a></h4><p><a href="./../interfaces/core_src.IOptions"><code>IOptions</code></a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L109" target="_blank" rel="noreferrer">packages/core/src/index.ts:109</a></p><hr><h3 id="intersectscoordinate" tabindex="-1">intersectsCoordinate <a class="header-anchor" href="#intersectscoordinate">\xB6</a></h3><p>\u25B8 <strong>intersectsCoordinate</strong>(<code>coordinates</code>): <code>boolean</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>coordinates</code></td><td style="text-align:left;">[<code>number</code>, <code>number</code>]</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7">\xB6</a></h4><p><code>boolean</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L131" target="_blank" rel="noreferrer">packages/core/src/index.ts:131</a></p><hr><h3 id="moveparticles" tabindex="-1">moveParticles <a class="header-anchor" href="#moveparticles">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>moveParticles</strong>(): <code>void</code></p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L199" target="_blank" rel="noreferrer">packages/core/src/index.ts:199</a></p><hr><h3 id="postrender" tabindex="-1">postrender <a class="header-anchor" href="#postrender">\xB6</a></h3><p>\u25B8 <strong>postrender</strong>(): <code>void</code></p><p>each frame render end</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L197" target="_blank" rel="noreferrer">packages/core/src/index.ts:197</a></p><hr><h3 id="prepareparticlepaths" tabindex="-1">prepareParticlePaths <a class="header-anchor" href="#prepareparticlepaths">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>prepareParticlePaths</strong>(): <code>any</code>[]</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10">\xB6</a></h4><p><code>any</code>[]</p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L399" target="_blank" rel="noreferrer">packages/core/src/index.ts:399</a></p><hr><h3 id="prerender" tabindex="-1">prerender <a class="header-anchor" href="#prerender">\xB6</a></h3><p>\u25B8 <strong>prerender</strong>(): <code>void</code></p><p>\u6E32\u67D3\u524D\u5904\u7406</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L170" target="_blank" rel="noreferrer">packages/core/src/index.ts:170</a></p><hr><h3 id="project" tabindex="-1">project <a class="header-anchor" href="#project">\xB6</a></h3><p>\u25B8 <strong>project</strong>(...<code>args</code>): <code>null</code> | [<code>number</code>, <code>number</code>]</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12">\xB6</a></h4><p><code>null</code> | [<code>number</code>, <code>number</code>]</p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L122" target="_blank" rel="noreferrer">packages/core/src/index.ts:122</a></p><hr><h3 id="randomize" tabindex="-1">randomize <a class="header-anchor" href="#randomize">\xB6</a></h3><p>\u25B8 <code>Private</code> <strong>randomize</strong>(): <code>number</code></p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13">\xB6</a></h4><p><code>number</code></p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L429" target="_blank" rel="noreferrer">packages/core/src/index.ts:429</a></p><hr><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render">\xB6</a></h3><p>\u25B8 <strong>render</strong>(): <code>void</code></p><p>\u5F00\u59CB\u6E32\u67D3</p><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-25" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-25">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L188" target="_blank" rel="noreferrer">packages/core/src/index.ts:188</a></p><hr><h3 id="setoptions" tabindex="-1">setOptions <a class="header-anchor" href="#setoptions">\xB6</a></h3><p>\u25B8 <strong>setOptions</strong>(<code>options</code>): <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="./../interfaces/core_src.IOptions"><code>IOptions</code></a>&gt;</td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-26" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-26">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L82" target="_blank" rel="noreferrer">packages/core/src/index.ts:82</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start">\xB6</a></h3><p>\u25B8 <strong>start</strong>(): <code>void</code></p><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-27" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-27">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L141" target="_blank" rel="noreferrer">packages/core/src/index.ts:141</a></p><hr><h3 id="stop" tabindex="-1">stop <a class="header-anchor" href="#stop">\xB6</a></h3><p>\u25B8 <strong>stop</strong>(): <code>void</code></p><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-28" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-28">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L148" target="_blank" rel="noreferrer">packages/core/src/index.ts:148</a></p><hr><h3 id="unproject" tabindex="-1">unproject <a class="header-anchor" href="#unproject">\xB6</a></h3><p>\u25B8 <strong>unproject</strong>(...<code>args</code>): <code>null</code> | [<code>number</code>, <code>number</code>]</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18">\xB6</a></h4><p><code>null</code> | [<code>number</code>, <code>number</code>]</p><h4 id="defined-in-29" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-29">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L127" target="_blank" rel="noreferrer">packages/core/src/index.ts:127</a></p><hr><h3 id="updatedata" tabindex="-1">updateData <a class="header-anchor" href="#updatedata">\xB6</a></h3><p>\u25B8 <strong>updateData</strong>(<code>field</code>): <code>void</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7">\xB6</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>field</code></td><td style="text-align:left;"><a href="./core_src.Field"><code>Field</code></a></td></tr></tbody></table><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19">\xB6</a></h4><p><code>void</code></p><h4 id="defined-in-30" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-30">\xB6</a></h4><p><a href="https://github.com/sakitam-fdd/wind-layer/blob/72f1aa1/packages/core/src/index.ts#L113" target="_blank" rel="noreferrer">packages/core/src/index.ts:113</a></p>',219),i=[n];function s(c,o,h,l,p,f){return r(),a("div",null,i)}const x=e(d,[["render",s]]);export{b as __pageData,x as default};
