import{_ as n,o as s,c as a,d as t}from"./app.0d4c2068.js";const p={},e=t(`<h2 id="\u670D\u52A1\u7AEF\u7684\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u7684\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u7684\u73AF\u5883\u914D\u7F6E</h2><blockquote><p>nodemon \u81EA\u52A8\u91CD\u542F\u5DE5\u5177</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u521D\u59CB\u5316node\u9879\u76EE</span>
<span class="token function">npm</span> init <span class="token parameter variable">--yes</span>
<span class="token comment"># 2. \u5B89\u88C5express</span>
<span class="token function">npm</span> i express
<span class="token comment"># 3. \u542F\u52A8\u670D\u52A1\u7AEF\u7684\u670D\u52A1</span>
<span class="token function">node</span> server.js
<span class="token comment"># 4. nodemon\u81EA\u52A8\u91CD\u542F\u5DE5\u5177: \u76D1\u6D4B\u5230server.js\u66F4\u6539\u81EA\u52A8\u91CD\u542F(\u5168\u5C40)</span>
<span class="token function">npm</span> i nodemon <span class="token parameter variable">-g</span>
<span class="token comment"># 5. \u542F\u52A8\u670D\u52A1\u6307\u4EE4\u66F4\u6539</span>
nodemon server.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ie-\u7F13\u5B58\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#ie-\u7F13\u5B58\u95EE\u9898" aria-hidden="true">#</a> IE \u7F13\u5B58\u95EE\u9898</h2><p>IE \u6D4F\u89C8\u5668\u4F1A\u5BF9 AJAX \u7684\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58, \u7F13\u5B58\u5230\u672C\u5730, \u4F46\u5F53\u4E0B\u4E00\u6B21\u8BF7\u6C42\u540E, \u8C03\u7528\u7684\u4E0D\u662F AJAX \u8BF7\u6C42\u6765\u7684, \u800C\u662F\u6D4F\u89C8\u5668\u672C\u5730\u7F13\u5B58</p><p>\u89E3\u51B3\u65B9\u6CD5: \u4F20\u9012\u591A\u4E00\u4E2A\u5F53\u524D\u65F6\u95F4\u6233\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u521B\u5EFA\u5BF9\u8C61</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. \u521D\u59CB\u5316\uFF0C\u8BBE\u7F6E\u8BF7\u6C42\u65B9\u6CD5\u548Curl</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:8000/ie?t=&quot;</span> <span class="token operator">+</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3. \u53D1\u9001</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajax-\u539F\u751F\u5C01\u88C5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#ajax-\u539F\u751F\u5C01\u88C5\u4F7F\u7528" aria-hidden="true">#</a> AJAX \u539F\u751F\u5C01\u88C5\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u8BF7\u6C42\u53C2\u6570\u95EE\u9898\uFF1A
1.\u8BF7\u6C42\u53C2\u6570\u4F4D\u7F6E\u95EE\u9898\uFF08get/post)
2.\u8BF7\u6C42\u53C2\u6570\u683C\u5F0F\u95EE\u9898\uFF1A
    application/x-www-form-urlencoded
    application/json
*/</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5B58\u50A8\u7684\u662F\u9ED8\u8BA4\u503C</span>
  <span class="token keyword">var</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">//\u4F7F\u7528options\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u8986\u76D6defaults\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u521B\u5EFAajax\u5BF9\u8C61</span>
  <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//\u62FC\u63A5\u8BF7\u6C42\u53C2\u6570\u7684\u53D8\u91CF</span>
  <span class="token keyword">var</span> params <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//\u5FAA\u73AF\u7528\u6237\u4F20\u9012\u8FDB\u6765\u7684\u5BF9\u8C61\u683C\u5F0F\u53C2\u6570</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> attr <span class="token keyword">in</span> defaults<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5C06\u53C2\u6570\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F</span>
    params <span class="token operator">+=</span> attr <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> defaults<span class="token punctuation">.</span>data<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u5C06\u53C2\u6570\u6700\u540E\u9762\u7684&amp;\u622A\u53D6\u6389</span>
  <span class="token comment">//\u5C06\u622A\u53D6\u7684\u7ED3\u679C\u91CD\u65B0\u8D4B\u503C\u7ED9params\u53D8\u91CF</span>
  params <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> params<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u5224\u65AD\u8BF7\u6C42\u65B9\u5F0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    defaults<span class="token punctuation">.</span>url <span class="token operator">=</span> defaults<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">&quot;?&quot;</span> <span class="token operator">+</span> params<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u914D\u7F6Eajax\u5BF9\u8C61</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>type<span class="token punctuation">,</span> defaults<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u53D1\u9001\u8BF7\u6C42</span>
  <span class="token comment">//\u5982\u679C\u8BF7\u6C42\u65B9\u5F0F\u4E3Apost</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u7528\u6237\u5E0C\u671B\u7684\u5411\u670D\u52A1\u5668\u7AEF\u4F20\u9012\u7684\u8BF7\u6C42\u53C2\u6570\u7684\u7C7B\u578B</span>
    <span class="token keyword">var</span> contentType <span class="token operator">=</span> defaults<span class="token punctuation">.</span>header<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8BBE\u7F6E\u8BF7\u6C42\u53C2\u6570\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> contentType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5224\u65AD\u7528\u6237\u5E0C\u671B\u7684\u8BF7\u6C42\u53C2\u6570\u683C\u5F0F\u7684\u7C7B\u578B</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType <span class="token operator">==</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5982\u679C\u7C7B\u578B\u4E3Ajson,\u5219\u5411\u670D\u52A1\u5668\u7AEF\u4F20\u9012json\u6570\u636E\u7C7B\u578B\u7684\u53C2\u6570</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5982\u679C\u7C7B\u578B\u4E0D\u4E3Ajson,\u5219\u5411\u670D\u52A1\u5668\u7AEF\u4F20\u9012\u666E\u901A\u7C7B\u578B\u7684\u53C2\u6570</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5982\u679C\u8BF7\u6C42\u65B9\u5F0F\u4E3Aget</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u76D1\u542Cxhr\u5BF9\u8C61\u4E0B\u9762\u7684onload\u4E8B\u4EF6</span>
  <span class="token comment">//\u5F53xhr\u5BF9\u8C61\u63A5\u6536\u5B8C\u54CD\u5E94\u6570\u636E\u540E\u89E6\u53D1</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u83B7\u53D6\u54CD\u5E94\u5934\u4E2D\u7684\u6570\u636E</span>
    <span class="token keyword">var</span> getContentType <span class="token operator">=</span> xhr<span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u670D\u52A1\u5668\u7AEF\u8FD4\u56DE\u7684\u6570\u636E</span>
    <span class="token keyword">var</span> responseText <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>

    <span class="token comment">//\u5982\u679C\u54CD\u5E94\u7C7B\u578B\u4E2D\u5305\u542Bapplication/json</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>getContentType<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5C06json\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Ajson\u5BF9\u8C61</span>
      responseText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5F53http\u72B6\u6001\u7801\u7B49\u4E8E200\u7684\u65F6\u5019</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u8BF7\u6C42\u6210\u529F \u8C03\u7528\u5904\u7406\u6210\u529F\u60C5\u51B5\u7684\u51FD\u6570</span>
      defaults<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>responseText<span class="token punctuation">,</span> xhr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u8BF7\u6C42\u5931\u8D25 \u8C03\u7528\u5904\u7406\u5931\u8D25\u60C5\u51B5\u7684\u51FD\u6570</span>
      defaults<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>responseText<span class="token punctuation">,</span> xhr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//\u8BF7\u6C42\u5730\u5740</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000/first&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u91CC\u662Fsuccess\u51FD\u6570&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","3. other.html.vue"]]);export{r as default};
