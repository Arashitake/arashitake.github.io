import{_ as a,r as t,o as i,c as l,b as n,a as o,w as c,e as s,d as r}from"./app.0d4c2068.js";const p={},d={id:"git-\u56DE\u9000\u7248\u672C",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#git-\u56DE\u9000\u7248\u672C","aria-hidden":"true"},"#",-1),v=s(),u=s("Git \u56DE\u9000\u7248\u672C"),_=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F\uFF1A\u7248\u672C\u53F7\u548C\u63D0\u4EA4\u4F5C\u8005\u3001\u7248\u672C</span>
<span class="token function">git</span> log
<span class="token comment"># \u663E\u793A\u7B80\u7565\u4FE1\u606F</span>
<span class="token function">git</span> reflog
<span class="token comment">#1\u3001\u67E5\u770B\u4E4B\u524D\u7684\u7248\u672C</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
<span class="token comment">#2\u3001\u5728\u672C\u5730\u4ED3\u5E93\u56DE\u9000\u5230id\u7248\u672C</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>
<span class="token comment">#3\u3001\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u4E0E\u672C\u5730\u4ED3\u5E93\u540C\u6B65\uFF0C\u5747\u56DE\u9000\u5230\u5BF9\u5E94\u7248\u672C</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> origin \u5206\u652F\u540D
<span class="token comment">#4\u3001\u518D\u6B21\u66F4\u65B0\uFF0C\u540C\u6B65\u672C\u5730\u3001\u8FDC\u7A0B</span>
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2024/05/30/pnkZgiLdJNFGWm8.png" alt=""><img src="https://s2.loli.net/2024/05/30/BNbUavlG268Ogmq.png" alt=""><img src="https://s2.loli.net/2024/05/30/rXLpuC8gAq7UQ3Y.png" alt=""></p>`,2);function g(b,h){const e=t("font");return i(),l("div",null,[n("h2",d,[m,v,o(e,{color:"red"},{default:c(()=>[u]),_:1})]),_])}var f=a(p,[["render",g],["__file","05.git\u56DE\u9000\u7248\u672C.html.vue"]]);export{f as default};
