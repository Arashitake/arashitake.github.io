import{_ as n,o as s,c as a,d as t}from"./app.0d4c2068.js";const p={},e=t(`<ol><li>\u4F60\u597D\uFF01\u8BF7\u95EE\u4F60\u77E5\u9053\u4E2D\u56FD\u7684\u5927\u5B66\u5417</li><li>\u90A3\u4F60\u77E5\u4E0D\u77E5\u9053\u6709\u63A5\u53E3\u6570\u636E\u53EF\u4EE5\u83B7\u5F97\u8FD9\u4E9B\u5927\u5B66\u7684\u7B80\u5355\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A\u5927\u5B66\u540D\u5B57\uFF0C\u5927\u5B66\u7C7B\u578B\uFF08985\u3001211\u3001\u7EFC\u5408\u7C7B\u3001\u7406\u5DE5\u7C7B\uFF09\uFF0C\u5927\u5B66\u7684\u6821\u5FBD\uFF0C\u5927\u5B66\u7684\u5927\u81F4\u5730\u5740\uFF08\u7701\u4EFD-\u57CE\u5E02\uFF09\uFF0C\u5927\u5B66\u7B80\u4ECB\u7B49</li></ol><p><a href="https://gaokao.baidu.com/okam/pages/home/index" target="_blank" rel="noopener noreferrer">\u9AD8\u8003\u52A0\u6CB9</a></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>url<span class="token punctuation">]</span>(gaokao.baidu.com/okam/pages/ranklist/index?province=\u5168\u56FD&amp;title=\u6821\u53CB\u4F1A\u6392\u884C&amp;rankType=<span class="token number">1</span>)
<span class="token comment">// \u83B7\u53D6\u5B66\u6821\u7684</span>
https<span class="token operator">:</span><span class="token comment">//gaokao.baidu.com/gaokao/gkschool/list?</span>
province=\u5168\u56FD&amp;
title=\u6821\u53CB\u4F1A\u6392\u884C&amp;
rankType=<span class="token number">1</span>&amp;
needFilter=<span class="token number">1</span>&amp;
pn=<span class="token number">1</span>&amp; <span class="token comment">// \u4FEE\u6539\u8FD9\u4E2A</span>
rn=<span class="token number">10</span> <span class="token comment">//</span>

res.data.ranking.tRow<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token property">&quot;h5Url&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token property">&quot;college_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u5B89\u4EA4\u901A\u5927\u5B66&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9655\u897F\u897F\u5B89&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;school_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7EFC\u5408\u7C7B&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;education&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u672C\u79D1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u516C\u529E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;batch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u672C\u79D1\u6279&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u53CC\u4E00\u6D41&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;985&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u5F3A\u57FA\u8BA1\u5212&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>https<span class="token operator">:</span><span class="token comment">//gaokao.baidu.com/okam/pages/ranklist/index?</span>
city=\u6B66\u6C49\u5E02&amp;
province=\u6E56\u5317&amp;
rankType=<span class="token number">1</span>&amp;
title=\u6821\u53CB\u4F1A\u6392\u884C&amp;
userProvince=\u5E7F\u4E1C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u83B7\u53D6\u4E13\u4E1A\u7684</span>
https<span class="token operator">:</span><span class="token comment">//gaokao.baidu.com/gaokao/gkmajor/majorlist?</span>
degreeName=&amp;
subjectCategory=&amp;
subjectName=&amp;
sort_key=&amp;sort_type=&amp;pn=<span class="token number">0</span>&amp;rn=<span class="token number">10</span>&amp;needFilter=<span class="token number">1</span>&amp;major=
<span class="token comment">// res.data.selectlist.collegeDegree</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// res.data.selectlist.universityDegree</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;hasSubCate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u54F2\u5B66&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u54F2\u5B66\u7C7B&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u83B7\u53D6\u4E13\u4E1A\u7684</span>
https<span class="token operator">:</span><span class="token comment">//gaokao.baidu.com/gaokao/gkmajor/majorlist?</span>
degreeName=\u672C\u79D1&amp;
subjectCategory=\u5386\u53F2\u5B66&amp;
subjectName=\u5386\u53F2\u5B66\u7C7B&amp;
sort_key=&amp;sort_type=&amp;pn=<span class="token number">0</span>&amp;rn=<span class="token number">10</span>&amp;needFilter=<span class="token number">0</span>&amp;major=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>transform-origin: 0 0; transition: all ease-in-out 0.3s;</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hoverHiddenBox left-to-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Some content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hoverHiddenBox right-to-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Some content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hoverHiddenBox top-to-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Some content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;div class=&quot;hoverHiddenBox bottom-to-top&quot;&gt;Some content&lt;/div&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  $<span class="token property">duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
  $<span class="token property">distance</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  $<span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token selector">.card2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>

    <span class="token selector">.hoverHiddenBox</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all $duration ease<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
      <span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

      <span class="token selector">&amp;.left-to-right</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.right-to-left</span> <span class="token punctuation">{</span>
        <span class="token property">right</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.top-to-bottom</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.bottom-to-top</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token selector">.hoverHiddenBox</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token selector">&amp;.left-to-right</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>$distance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.right-to-left</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-$distance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.top-to-bottom</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>$distance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.bottom-to-top</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-$distance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.card1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>

    <span class="token selector">.hoverHiddenBox</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all $duration ease<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

      <span class="token selector">&amp;.left-to-right</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.right-to-left</span> <span class="token punctuation">{</span>
        <span class="token property">right</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.top-to-bottom</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.bottom-to-top</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> -$distance<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token selector">.hoverHiddenBox</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> $opacity<span class="token punctuation">;</span>
        <span class="token selector">&amp;.left-to-right</span> <span class="token punctuation">{</span>
          <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.right-to-left</span> <span class="token punctuation">{</span>
          <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.top-to-bottom</span> <span class="token punctuation">{</span>
          <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">&amp;.bottom-to-top</span> <span class="token punctuation">{</span>
          <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","00.test.html.vue"]]);export{r as default};
