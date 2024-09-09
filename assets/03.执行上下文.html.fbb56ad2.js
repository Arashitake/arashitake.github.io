import{_ as r,r as s,o as i,c as o,a as n,b as e,e as t}from"./app.0d4c2068.js";const d={},c=e("h2",{id:"es3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es3","aria-hidden":"true"},"#"),t(" ES3")],-1),_=e("p",null,"\u6267\u884C\u4E0A\u4E0B\u6587\u5728 ES3 \u4E2D:",-1),h=e("h2",{id:"es5-es2016",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es5-es2016","aria-hidden":"true"},"#"),t(" ES5 (ES2016)")],-1),l=e("p",null,"\u5728 ES5 \u4E2D\uFF0C\u6211\u4EEC\u6539\u8FDB\u4E86\u547D\u540D\u65B9\u5F0F\uFF0C\u628A\u6267\u884C\u4E0A\u4E0B\u6587\u6700\u521D\u7684\u4E09\u4E2A\u90E8\u5206\u6539\u4E3A:",-1),m=e("h2",{id:"es7-es2018",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es7-es2018","aria-hidden":"true"},"#"),t(" ES7 (ES2018)")],-1);function u(v,p){const a=s("Mermaid");return i(),o("div",null,[c,_,n(a,{id:"mermaid_1a962850","data-code":`graph LR
    A[ES3] --> B[\u4F5C\u7528\u57DF: scope, \u4E5F\u5E38\u5E38\u88AB\u53EB\u505A\u4F5C\u7528\u57DF\u94FE];
    A --> C[\u53D8\u91CF\u5BF9\u8C61: variable object, \u7528\u4E8E\u5B58\u50A8\u53D8\u91CF\u7684\u5BF9\u8C61];
    A --> D[this\u503C: this value];`}),h,l,n(a,{id:"mermaid_382ee148","data-code":`graph LR
  A[ES5] --> B[lexical environment: \u8BCD\u6CD5\u73AF\u5883, \u5F53\u83B7\u53D6\u53D8\u91CF\u65F6\u4F7F\u7528];
  A --> C[variable environment: \u53D8\u91CF\u73AF\u5883, \u5F53\u58F0\u660E\u53D8\u91CF\u65F6\u4F7F\u7528];
  A --> D[this value: this\u503C];`}),m,n(a,{id:"mermaid_382ee14c","data-code":`graph LR
  A[ES7] --> B[lexical environment: \u8BCD\u6CD5\u73AF\u5883, \u5F53\u83B7\u53D6\u53D8\u91CF\u6216\u8005this\u503C\u65F6\u4F7F\u7528];
  A --> C[variable environment: \u53D8\u91CF\u73AF\u5883, \u5F53\u58F0\u660E\u53D8\u91CF\u65F6\u4F7F\u7528];
  A --> D[code evaluation state: \u4EE3\u7801\u8BC4\u4F30\u72B6\u6001, \u7528\u4E8E\u6062\u590D\u4EE3\u7801\u6267\u884C\u4F4D\u7F6E];
  A --> E[Function: \u6267\u884C\u7684\u4EFB\u52A1\u662F\u51FD\u6570\u65F6\u4F7F\u7528, \u8868\u793A\u6B63\u5728\u88AB\u6267\u884C\u7684\u51FD\u6570];
  A --> F[ScriptOrModule: \u6267\u884C\u7684\u4EFB\u52A1\u662F\u811A\u672C\u6216\u8005\u6A21\u5757\u65F6\u4F7F\u7528, \u8868\u793A\u6B63\u5728\u88AB\u6267\u884C\u7684\u4EE3\u7801];
  A --> G[Realm: \u9886\u57DF, \u4F7F\u7528\u7684\u57FA\u7840\u5E93\u548C\u5185\u7F6E\u5BF9\u8C61\u5B9E\u4F8B];
  A --> H[Generator: \u4EC5\u751F\u6210\u5668\u4E0A\u4E0B\u6587\u6709\u8FD9\u4E2A\u5C5E\u6027, \u8868\u793A\u5F53\u524D\u751F\u6210\u5668];`})])}var E=r(d,[["render",u],["__file","03.\u6267\u884C\u4E0A\u4E0B\u6587.html.vue"]]);export{E as default};
