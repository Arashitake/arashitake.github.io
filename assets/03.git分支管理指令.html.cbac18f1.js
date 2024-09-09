import{_ as n,o as s,c as a,d as e}from"./app.0d4c2068.js";const i={},l=e(`<h2 id="git-\u5206\u652F\u7BA1\u7406\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F\u7BA1\u7406\u6307\u4EE4" aria-hidden="true">#</a> Git \u5206\u652F\u7BA1\u7406\u6307\u4EE4</h2><ul><li>\u5148\u67E5\u770B\u5206\u652F\uFF0C\u5728\u8DF3\u5230\u5BF9\u5E94\u7684\u5206\u652F\u91CC\u53BB</li><li><img src="https://s2.loli.net/2024/05/30/BeQiudOI9WkDhlq.png" alt="123"></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u5206\u652F</span>
<span class="token function">git</span> branch	<span class="token comment">#\u67E5\u770B\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>	<span class="token comment">#\u67E5\u770B\u4E0E\u672C\u5730\u4ED3\u5E93\u6240\u5173\u8054\u7684\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>	<span class="token comment">#\u540C\u65F6\u663E\u793A\u4E0A\u8FF0\u4E24\u8005</span>

<span class="token comment">#\u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5EFA\u5206\u652F\u540D

<span class="token comment">#\u5207\u6362\u5206\u652F</span>
<span class="token function">git</span> checkout \u5206\u652F\u540D

<span class="token comment">#\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> \u5206\u652F\u540D

<span class="token comment">#\u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF08\u4EB2\u6D4B\u53EF\u7528\uFF09</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> \u5206\u652F\u540D

<span class="token comment">#\u5408\u5E76\u5206\u652F</span>
<span class="token function">git</span> merge \u88AB\u5408\u5E76\u7684\u5206\u652F

<span class="token comment">#\u7ED9\u4E00\u4E2Agit\u5206\u652F\u6539\u540D\u7684\u65B9\u6CD5</span>
<span class="token comment">#\u5982\u679C\u5BF9\u4E8E\u5206\u652F\u4E0D\u662F\u5F53\u524D\u5206\u652F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u4EE3\u7801\uFF1A</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> \u539F\u5206\u652F\u540D \u65B0\u5206\u652F\u540D
<span class="token comment">#\u5982\u679C\u662F\u5F53\u524D\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u52A0\u4E0A\u65B0\u540D\u5B57</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> \u65B0\u5206\u652F\u540D\u79F0

<span class="token comment">#\u67E5\u770B\u5DF2\u7ECF\u914D\u7F6E\u5206\u652F\u5173\u8054\u4FE1\u606F\uFF0C\u901A\u8FC7\u4E0B\u8FF0\u4E09\u6761\u547D\u4EE4\u5747\u53EF\uFF1A</span>
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span>

<span class="token function">git</span> remote show origin

<span class="token function">cat</span> .git/config

<span class="token comment">#\u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u7684\u540D\u5B57</span>
<span class="token comment">#\u5220\u9664\u8FDC\u7A0B\u5206\u652F\u2014\u2014\u91CD\u547D\u540D\u672C\u5730\u5206\u652F\u2014\u2014\u63A8\u9001\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> push <span class="token parameter variable">--delete</span> origin <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
<span class="token comment">#\u82E5\u672C\u5730\u6B64\u65F6\u5DF2\u7ECF\u5728\u8BE5\u5206\u652F\uFF1A</span>
    <span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
<span class="token comment">#\u82E5\u672C\u5730\u6B64\u65F6\u4E0D\u5728\u8BE5\u5206\u652F\u4E0A</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CE8\u610F\u70B9\uFF1A\u63A8\u9001\u7684\u65F6\u5019\uFF0C\u8981\u4E0E\u672C\u5730\u5206\u652F\u540D\u4E00\u81F4</li><li><img src="https://s2.loli.net/2024/05/30/xrRPBQ5kCelUiNJ.png" alt="image-20201003103204376.png"></li><li>git branch\u3001git branch -a\u3001git branch -r\uFF1A</li><li><img src="https://s2.loli.net/2024/05/30/EGZif5L73MKJH9o.png" alt="image-20201103083723072.png"></li></ul><h2 id="git-\u7684-status-\u7F13\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#git-\u7684-status-\u7F13\u5B58\u533A" aria-hidden="true">#</a> Git \u7684 status\uFF08\u7F13\u5B58\u533A\uFF09</h2><ul><li>modified\uFF08\u6539\u8FDB\u7684\uFF1B\u4FEE\u6539\u7684\uFF09\uFF0C\u8868\u793A\u8FD9\u4E24\u4E2A\u90E8\u5206\u662F\u4FEE\u6539\u8FC7\u7684</li></ul><p><img src="https://s2.loli.net/2024/05/30/3O7QhgzWDylwsG6.png" alt=""></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5220\u9664\u7F13\u5B58\u533A\u6240\u6709\u6587\u4EF6\u547D\u4EE4</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>   <span class="token comment">#\u4E3B\u8981\u8FD9\u4E2A\u70B9\u4E00\u5B9A\u8981\u5199</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[l];function c(p,r){return s(),a("div",null,t)}var d=n(i,[["render",c],["__file","03.git\u5206\u652F\u7BA1\u7406\u6307\u4EE4.html.vue"]]);export{d as default};
