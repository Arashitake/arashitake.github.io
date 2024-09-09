import{_ as n,o as s,c as a,d as i}from"./app.0d4c2068.js";const e={},l=i(`<h2 id="git-\u67E5\u770B\u4E0E\u672C\u5730\u4ED3\u5E93\u76F8\u8054\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u6216\u91CD\u7ED1" tabindex="-1"><a class="header-anchor" href="#git-\u67E5\u770B\u4E0E\u672C\u5730\u4ED3\u5E93\u76F8\u8054\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u6216\u91CD\u7ED1" aria-hidden="true">#</a> Git \u67E5\u770B\u4E0E\u672C\u5730\u4ED3\u5E93\u76F8\u8054\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u6216\u91CD\u7ED1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u672C\u5730\u6DFB\u52A0\u4E86\u54EA\u4E9B\u8FDC\u7A0B\u5206\u652F\u5730\u5740</span>
<span class="token function">git</span> remote
<span class="token comment">#\u67E5\u770B\u5360\u7528\u7684\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment">#\u5220\u9664\u8BE5\u5360\u7528\u7684\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin
<span class="token comment">#\u91CD\u65B0\u7ED1\u5B9A\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin SSH\u5730\u5740

<span class="token comment">#git\u67E5\u770B\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u5173\u8054\u914D\u7F6E</span>
\u90A3\u4E48\u5982\u4F55\u67E5\u770B\u5DF2\u7ECF\u914D\u7F6E\u5206\u652F\u5173\u8054\u4FE1\u606F\u5462\uFF0C\u901A\u8FC7\u4E0B\u8FF0\u4E09\u6761\u547D\u4EE4\u5747\u53EF\uFF1A
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span>

<span class="token function">git</span> remote show origin

<span class="token function">cat</span> .git/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2024/05/30/EptcMNkHxli5PS7.png" alt=""></p><h2 id="git-\u5C06\u8FDC\u7A0B\u7684\u5206\u652F\u4E0E\u672C\u5730\u5206\u652F\u76F8\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#git-\u5C06\u8FDC\u7A0B\u7684\u5206\u652F\u4E0E\u672C\u5730\u5206\u652F\u76F8\u5173\u8054" aria-hidden="true">#</a> Git \u5C06\u8FDC\u7A0B\u7684\u5206\u652F\u4E0E\u672C\u5730\u5206\u652F\u76F8\u5173\u8054</h2><h3 id="\u65B9\u6CD5\u4E00-\u76F4\u63A5-clone-\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u76F4\u63A5-clone-\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u76F4\u63A5 clone \u8FDC\u7A0B\u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u62C9\u53D6\u8FDC\u7A0B\u5230\u672C\u5730</span>
<span class="token function">git</span> clone SSH\u5730\u5740

<span class="token comment">#2\u3001cd\u8FDB\u53BB\u62C9\u53D6\u7684\u4ED3\u5E93\u5185</span>
<span class="token builtin class-name">cd</span> xxx

<span class="token comment">#3\u3001\u67E5\u770B\u5206\u652F\uFF08\u67E5\u770B\u8FDC\u7A0B\u7684\u5206\u652F\uFF09</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment">#4\u3001\u76F4\u63A5\u5207\u6362\u5230\u60F3\u8981\u64CD\u4F5C\u7684\u5206\u652F</span>
<span class="token function">git</span> checkout \u60F3\u8981\u64CD\u4F5C\u7684\u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C-\u5C06\u672C\u5730\u4ED3\u5E93\u5728\u4E0D\u514B\u9686\u7684\u60C5\u51B5\u4E0B-\u76F4\u63A5\u5173\u8054\u5230\u8FDC\u7A0B\u4E0A\u7684\u67D0\u5206\u652F-\u5E76\u4E0A\u4F20\u3001\u4E0B\u62C9\u8FDC\u7A0B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-\u5C06\u672C\u5730\u4ED3\u5E93\u5728\u4E0D\u514B\u9686\u7684\u60C5\u51B5\u4E0B-\u76F4\u63A5\u5173\u8054\u5230\u8FDC\u7A0B\u4E0A\u7684\u67D0\u5206\u652F-\u5E76\u4E0A\u4F20\u3001\u4E0B\u62C9\u8FDC\u7A0B\u6587\u4EF6" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A\u5C06\u672C\u5730\u4ED3\u5E93\u5728\u4E0D\u514B\u9686\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u5173\u8054\u5230\u8FDC\u7A0B\u4E0A\u7684\u67D0\u5206\u652F\uFF0C\u5E76\u4E0A\u4F20\u3001\u4E0B\u62C9\u8FDC\u7A0B\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u65B0\u5EFA\u672C\u5730\u4ED3\u5E93</span>
<span class="token function">git</span> init

<span class="token comment">#2\u3001\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u8054</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin SSH\u5730\u5740

<span class="token comment">#3\u3001\u5148\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u6307\u5B9A\u5206\u652F\u7684\u6587\u4EF6\u62C9\u53D6\u4E0B\u6765</span>
<span class="token function">git</span> pull origin \u5206\u652F\u540D

<span class="token comment">#4\u3001\u65B0\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5EFA\u5206\u652F\u540D

<span class="token comment">#5\u3001\u5207\u6362\u5230\u5206\u652F\u5230\u65B0\u5206\u652F\u53BB</span>
<span class="token function">git</span> checkout \u65B0\u5EFA\u5206\u652F\u540D

<span class="token comment">#6\u3001\uFF08\u8FD9\u4E00\u6B65\u6267\u4E0D\u6267\u884C\u90FDOK\uFF0C\u4E0D\u5F71\u54CD\u7ED3\u679C\uFF09\u6B64\u65F6\u5DF2\u7ECF\u5173\u8054\uFF0C\u518D\u6B21\u63D0\u4EA4\uFF0C\u5373\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\u5BF9\u5E94\u5206\u652F</span>
<span class="token function">git</span> push origin \u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2024/05/30/cCsdRegkal8VwK5.png" alt=""></p><p><img src="https://s2.loli.net/2024/05/30/kP6ONEHMp1bW5Yz.png" alt=""></p><p><img src="https://s2.loli.net/2024/05/30/4sko8d3igRAbUpS.png" alt=""></p><ul><li><p>\uFF081\uFF09\u672C\u5730\u7684 MR \u4E0E\u8FDC\u7A0B\u7684 MR\uFF1A</p></li><li><p><img src="https://s2.loli.net/2024/05/30/hZDQtgCGfex7Ub2.png" alt=""></p></li><li><p>\uFF082\uFF09\u672C\u5730\u7684 Boold \u4E0E\u8FDC\u7A0B\u7684 Boold\uFF1A</p></li><li><p><img src="https://s2.loli.net/2024/05/30/PM7pueI5T1WGsJU.png" alt=""></p></li><li><p>\u901A\u8FC7\u4E0A\u8FF0\uFF081\uFF09\u548C\uFF082\uFF09\u7684\u5BF9\u6BD4\u5B9E\u9A8C\u53EF\u5F97\uFF1A</p><ul><li>pull \u4E0B\u62C9\u540E\uFF0C\u65B0\u5EFA\u5206\u652F\uFF0C\u518D\u5207\u6362\u5206\u652F\uFF0C\u4E0D\u9700\u8981\u518D push \u5C31\u5DF2\u7ECF\u4E0E\u8FDC\u7A0B\u5BF9\u5E94\u5206\u652F\u76F8\u8FDE\u63A5\u4E86</li></ul></li><li><p>\u5207\u6362\u65F6\uFF0C\u672C\u5730\u4E5F\u6709\u6240\u8868\u793A\uFF08\u6587\u4EF6\u5939\u5185\u5185\u5BB9\u4F1A\u5BF9\u5E94\u8FDC\u7A0B\u7684\u5206\u652F\u8FDB\u884C\u663E\u793A\uFF09</p><ul><li>Boold \u5206\u652F\uFF1A</li><li><img src="https://s2.loli.net/2024/05/30/kYgIsxaJlQdNEFG.png" alt=""></li><li><img src="https://s2.loli.net/2024/05/30/AvsWiM96t5mzJRr.png" alt=""></li><li>MR \u5206\u652F\uFF1A</li><li><img src="https://s2.loli.net/2024/05/30/zBqeQjayA4N1r7s.png" alt=""></li></ul></li></ul><h2 id="git-\u5F3A\u5236\u63A8\u9001\u672C\u5730\u5230\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#git-\u5F3A\u5236\u63A8\u9001\u672C\u5730\u5230\u8FDC\u7A0B" aria-hidden="true">#</a> Git \u5F3A\u5236\u63A8\u9001\u672C\u5730\u5230\u8FDC\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span> --set-upstream origin \u672C\u5730\u5206\u652F:\u8FDC\u7A0B\u5206\u652F

<span class="token comment"># e.g.:</span>
 <span class="token function">git</span> push <span class="token parameter variable">-f</span> --set-upstream origin master:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u521B\u5EFA\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u76F8\u5173\u8054-\u672C\u5730\u5206\u652F\u4E0D\u5B58\u5728\u65F6" tabindex="-1"><a class="header-anchor" href="#git-\u521B\u5EFA\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u76F8\u5173\u8054-\u672C\u5730\u5206\u652F\u4E0D\u5B58\u5728\u65F6" aria-hidden="true">#</a> Git \u521B\u5EFA\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u76F8\u5173\u8054\uFF08\u672C\u5730\u5206\u652F\u4E0D\u5B58\u5728\u65F6\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> \u672C\u5730\u5206\u652F\u540D origin/\u8FDC\u7A0B\u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u51FA\u73B0\u63D0\u793A\uFF1A</p><blockquote><p>fatal: Cannot update paths and switch to branch \u2018\u8FDC\u7A0B\u5206\u652F\u540D\u2019 at the same time.</p><p>Did you intend to checkout &#39;origin/\u8FDC\u7A0B\u5206\u652F\u540D&#39; which can not be resolved as commit?</p></blockquote><p>\u8868\u793A\u62C9\u53D6\u4E0D\u6210\u529F\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u518D\u6B21\u6267\u884C\u4E0A\u4E00\u53E5\u7684\u547D\u4EE4\u5373\u53EF</p><h2 id="git-\u5220\u9664\u672C\u5730\u53CA\u540C\u6B65\u5230\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#git-\u5220\u9664\u672C\u5730\u53CA\u540C\u6B65\u5230\u8FDC\u7A0B" aria-hidden="true">#</a> Git \u5220\u9664\u672C\u5730\u53CA\u540C\u6B65\u5230\u8FDC\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5230\u672C\u5730</span>
<span class="token function">git</span> clone ssh\u5730\u5740

<span class="token comment">#2\u3001cd\u8FDB\u53BB\u6240\u62C9\u53D6\u7684\u4ED3\u5E93\u5185</span>
<span class="token builtin class-name">cd</span> \xD7\xD7\xD7

<span class="token comment">#3\u3001\u67E5\u770B\u5206\u652F\uFF08\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\uFF09</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>	<span class="token comment">#\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u7684\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>	<span class="token comment">#\u67E5\u770B\u672C\u5730\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F</span>

<span class="token comment">#4\u3001\u5207\u6362\u5230\u60F3\u8981\u64CD\u4F5C\u7684\u5206\u652F</span>
<span class="token function">git</span> checkout \u60F3\u8981\u64CD\u4F5C\u7684\u5206\u652F

<span class="token comment">#5-1\u3001\u5728\u672C\u5730\u4ED3\u5E93\u5220\u9664\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> \u6211\u7684\u6587\u4EF6
\uFF08\u5982\u679C\u8981\u5220\u9664\u6587\u4EF6\u540D\u4E2D\u5E26\u6709\u7A7A\u683C\u7684\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u52A0\u5F15\u53F7\uFF09
    eg: <span class="token function">git</span> <span class="token function">rm</span> <span class="token string">&quot;Git &amp; GitHnb.md&quot;</span>
<span class="token comment">#5-2\u3001\u5728\u672C\u5730\u4ED3\u5E93\u5220\u9664\u6587\u4EF6\u5939</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> \u6211\u7684\u6587\u4EF6\u5939/
\u6B64\u5904-r\u8868\u793A\u9012\u5F52\u6240\u6709\u5B50\u76EE\u5F55\uFF0C\u5982\u679C\u4F60\u8981\u5220\u9664\u7684\uFF0C\u662F\u7A7A\u7684\u6587\u4EF6\u5939\uFF0C\u6B64\u5904\u53EF\u4EE5\u4E0D\u7528\u5E26\u4E0A-r\u3002

<span class="token comment">#6\u3001\u63D0\u4EA4\u4FEE\u6539\u63CF\u8FF0+\u63D0\u4EA4\u6682\u5B58\u533A\u7684\u4FEE\u6539</span>
<span class="token function">git</span> commit -m\u201D\u6211\u7684\u4FEE\u6539\u201D

<span class="token comment">#7\u3001\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push origin \u60F3\u8981\u64CD\u4F5C\u7684\u5206\u652F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898</strong>\uFF1Agit commit \u9047\u5230\u201Cmodified: xxx/xxx(modified content)\u201D \u95EE\u9898 <ul><li>\u51FA\u73B0\u539F\u56E0\uFF1A\u5728 xxx/xxx \u76EE\u5F55\u4E0B\u5B58\u5728\u201C.git\u201D\u6587\u4EF6\u76EE\u5F55</li><li>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5220\u9664\u6389 xxx/xxx \u76EE\u5F55\u4E0B\u5B58\u5728\u201C.git\u201D\u6587\u4EF6\u76EE\u5F55\uFF0C\u91CD\u65B0\u6267\u884C commit \u64CD\u4F5C</li></ul></li></ul><h2 id="git-\u5220\u9664\u4E86\u8FDC\u7A0B\u5206\u652F-\u672C\u5730\u5206\u652F\u4ECD\u7136\u663E\u793A\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#git-\u5220\u9664\u4E86\u8FDC\u7A0B\u5206\u652F-\u672C\u5730\u5206\u652F\u4ECD\u7136\u663E\u793A\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> Git \u5220\u9664\u4E86\u8FDC\u7A0B\u5206\u652F\uFF0C\u672C\u5730\u5206\u652F\u4ECD\u7136\u663E\u793A\u7684\u89E3\u51B3\u65B9\u6848</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote prune origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-\u5728\u672C\u5730\u4E3A\u8FDC\u7A0B\u65B0\u589E\u4E00\u4E2A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#git-\u5728\u672C\u5730\u4E3A\u8FDC\u7A0B\u65B0\u589E\u4E00\u4E2A\u5206\u652F" aria-hidden="true">#</a> Git \u5728\u672C\u5730\u4E3A\u8FDC\u7A0B\u65B0\u589E\u4E00\u4E2A\u5206\u652F</h2><ul><li>\u8FDC\u7A0B\u91CC\u65B0\u51FA\u73B0\u8BE5\u5206\u652F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u521D\u59CB\u5316\u73AF\u5883\uFF0C\u751F\u6210.git\u73AF\u5883\uFF0C\u5EFA\u7ACB\u672C\u5730\u4ED3\u5E93</span>
<span class="token function">git</span> init

<span class="token comment">#2\u3001\u5C06\u672C\u5730\u6240\u6709\u6587\u4EF6\u6DFB\u52A0\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment">#3\u3001\u63D0\u4EA4\u63CF\u8FF0+\u63D0\u4EA4\u6682\u5B58\u533A\u6587\u4EF6</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> \u201C\u63D0\u4EA4\u63CF\u8FF0\u201D

<span class="token comment">#4\u3001\u521B\u5EFA\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5EFA\u5206\u652F\u540D

<span class="token comment">#5\u3001\u5207\u6362\u5230\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> checkout \u65B0\u5EFA\u5206\u652F\u540D

<span class="token comment">#6\u3001\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin \u8FDC\u7A0B\u4ED3\u5E93SSH\u5730\u5740

<span class="token comment">#7\u3001\u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6307\u5B9A\u5206\u652F</span>
<span class="token function">git</span> push origin \u6307\u5B9A\u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u4E0A\u4F20\u672C\u5730\u4ED3\u5E93\u5185\u6587\u4EF6\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6307\u5B9A\u5206\u652F\u4E0A" tabindex="-1"><a class="header-anchor" href="#git-\u4E0A\u4F20\u672C\u5730\u4ED3\u5E93\u5185\u6587\u4EF6\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6307\u5B9A\u5206\u652F\u4E0A" aria-hidden="true">#</a> Git \u4E0A\u4F20\u672C\u5730\u4ED3\u5E93\u5185\u6587\u4EF6\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6307\u5B9A\u5206\u652F\u4E0A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u5728\u65B0\u521B\u5EFA\u7684\u672C\u5730\u6587\u4EF6\u5939\uFF0C\u521D\u59CB\u5316\u73AF\u5883\uFF0C\u751F\u6210.git \u73AF\u5883</span>
	<span class="token function">git</span> init
<span class="token comment">#2\u3001\u8FDE\u63A5\u8FDC\u7A0B\u4ED3\u5E93</span>
	<span class="token function">git</span> remote <span class="token function">add</span> origin \u8FDC\u7A0B\u4ED3\u5E93\u7684SSH\u5730\u5740
<span class="token comment">#3\u3001\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6307\u5B9A\u5206\u652F</span>
	<span class="token function">git</span> pull origin \u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u540D
<span class="token comment">#4\u3001\u8FFD\u8E2A\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\uFF0C\u4E0E\u672C\u5730\u4ED3\u5E93\u5EFA\u7ACB\u8054\u7CFB</span>
	<span class="token function">git</span> checkout <span class="token parameter variable">--track</span> origin/\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u540D
<span class="token comment">#5\u3001\u5728\u672C\u5730\u4ED3\u5E93\u4E2D\u6DFB\u52A0\u6587\u4EF6\u6216\u4FEE\u6539\u6587\u4EF6\uFF08\u8981\u4E0A\u4F20\u5230\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u7684\u5185\u5BB9\uFF09</span>
<span class="token comment">#6\u3001\u5C06\u6587\u4EF6\u6DFB\u52A0\u6682\u5B58\u533A</span>
	<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment">#7\u3001\u63D0\u4EA4\u6682\u5B58\u533A\u4FEE\u6539\u7684\u6587\u4EF6</span>
    <span class="token function">git</span> commit -m<span class="token string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>
<span class="token comment">#8\u3001\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u6307\u5B9A\u5206\u652F</span>
    <span class="token function">git</span> push origin \u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1A\u5982\u679C\u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0D\u662F\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u514B\u9686\uFF0C\u800C\u662F\u672C\u5730\u521B\u5EFA\u7684\u4ED3\u5E93\uFF0C\u5E76\u4E14\u4ED3\u5E93\u4E2D\u5B58\u5728\u6587\u4EF6\uFF0C\u6B64\u65F6\u518D\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u6587\u4EF6\u7684\u65F6\u5019\u4F1A\u62A5\u9519\uFF08fatal: refusing to merge unrelated histories \uFF09\uFF0C\u89E3\u51B3\u6B64\u95EE\u9898\u53EF\u4EE5\u5728 git pull \u547D\u4EE4\u540E\u52A0\u5165\u53C2\u6570\u2013allow-unrelated-histories</strong></p>`,32),t=[l];function c(d,o){return s(),a("div",null,t)}var p=n(e,[["render",c],["__file","04.git\u5206\u652F\u672C\u5730\u548C\u8FDC\u7A0B.html.vue"]]);export{p as default};
