---
layout: Post
title: "CSRF"
subtitle: "web安全笔记（二）"
date: 2022-02-19
useHeaderImage: true
headerImage: /img/in-post/network-security/csrf.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - web安全
---

::: info
【第二届青训营-寒假前端场】课程 web 开发的安全之旅的扩展笔记
首发: [【第二届青训营-寒假前端场】- web 安全笔记（二）—— CSRF](https://forum.juejin.cn/youthcamp/post/7065874012001452045?from=4)
:::

## _CSRF：Cross-site request forgery_

- _Meaning_\
  **跨站请求伪造**（Cross-site request forgery），也被称为 **one-click attack** 或者 **session riding**，通常缩写为 **CSRF** 或者 **XSRF**， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。跟**XSS**（跨网站脚本）相比，**XSS** 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。
- 中心：**欺骗用户浏览器，让其以用户的名义运行操作**
- _Tips_
  - 在用户不知情的前提下
  - 利用用户权限（cookie）
  - 构造指定 HTTP 请求，窃取或修改用户敏感信息
- _example_ ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b08f733dd0642c697bff2a40e3fcc1d~tplv-k3u1fbpfcp-zoom-1.image)

## CSRF 的常见形式

### CSRF——GET

- 超链接
  ```
   <a href="https://bank.com/transfer?to=hacker&amount=100">点击抽奖</a>
  ```
- 图片隐藏链接
  ```
   <img style="display:none;" src="https://bank.com/transfer?to=hacker&amount=100"/>
  ```
- 表单
  ```
   <form action="https://bank.com/transfer_tons_of_money" method="POST">
     <input name="amount" value="1000000000" type="hidden"/>
     <input name="to" value="hacker" type="hidden"/>
   </form>
  ```

## 如何防御 CSRF

目前防御 CSRF 攻击主要有**三种策略**

1.  验证 HTTP Referer 字段
2.  在请求地址中添加 token 并验证
3.  在 HTTP 头中自定义属性并验证

### 在请求头部：HTTP 头或 HTTP Referer

CSRF：请求来源是异常来源，可以通过限制请求来源，来防御 CSRF 攻击
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dac6a453b2b94fe4933fdd84debaed0e~tplv-k3u1fbpfcp-zoom-1.image)

### 在请求地址中添加 token 并验证

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68ff4bf0cde941cea349c12ac71f9be0~tplv-k3u1fbpfcp-zoom-1.image)
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f96353ff3a145e2a0b890f36fa806c9~tplv-k3u1fbpfcp-zoom-1.image)

### 通过 iframe 攻击

在页面的 iframe 中隐藏一个点击，点击中隐藏一个 http 请求，而在 iframe 中发生的请求是同源请求，就完成攻击了
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be426674654a42b1834bea52a785e2b8~tplv-k3u1fbpfcp-zoom-1.image)
可以利用一个 HTTP 响应头部来进行防御，来规避通过 iframe 这种 CSRF 方式进行攻击

- `X-Frame-Options: DENY/SAMEORIGIN`
  - `DENY`：表示当前页面不能被当作 iframe 进行加载
  - `SAMEORIGN`：表示必须是同源的页面才能加载我这个 iframe

CSRF 的一种攻击方式：以为偷懒把 get 请求改成既可以 get 又可以 post 的请求，这会导致攻击者攻击的时候，既可以获取用户数据，也可以篡改用户数据，太危险了！！
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33b6c093d58d4c2bacc683884078cc26~tplv-k3u1fbpfcp-zoom-1.image)

### SameSite Cookie

另外一种防御方法
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80a17cdd3621485d9ce8c9f3ed1defcc~tplv-k3u1fbpfcp-zoom-1.image)

- 原理
  - CSRF 是利用用户权限来制作攻击，而用户权限一般存放在 Cookie 中，如果我们的 Cookie 只能为本页面发送的请求所用，其他页面的请求都不能带上我们的 Cookie，那攻击者就不能进行请求伪造。**这从根源上解决了 CSRF 的攻击方式**。
- ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03c1ca2c631e4fd39b8b0c753bc8d9fd~tplv-k3u1fbpfcp-zoom-1.image)
  - 限制 domain 属性
  - 页面域名的匹配

##### SameSite 和 CORS 的区分

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/876b10b8dcf64dbda8f1a8ac2d92f130~tplv-k3u1fbpfcp-zoom-1.image)

> 对于 CSRF 攻击，不能针对某种攻击而进行防御，而是应该建立一个中间件（Middleware），在其中去生成各种防御 CSRF 的策略

## CSRF 与其他攻击的一些区别

### CSRF 和 XSS 的关系

- 从名字上来看，**_CSRF_** 和 **_XSS_** 同为跨站攻击，XSS 攻击是跨站脚本攻击，CSRF 攻击是请求伪造，也就是 CSRF 攻击本不是出自用户之手，却经过第三方恶意攻击者的处理，伪装成了受信任用户的“亲历亲为”。
- 我们所能见到的大部分网站，都是通过 cookie 等方式记录、分辨出受信任用户的身份，再予以授权的。所以要伪造用户的正常操作，最好的方法是通过 XSS 或链接引导等途径，让用户在本机发起自己所不知道的危险请求，使得恶意攻击有机可乘，获取用户 cookie 等信息，以达到身份伪装目的。
- **XSS 是实现 CSRF 的诸多途径中的一条，但并不是唯一的一条。**

### CSRF 和 SSRF 的区别

- **_CSRF_**：Cross-site request forgery，跨站请求伪造
  - 是服务器端没有对用户提交的数据进行严格的把控，导致攻击者可以利用用户的 Cookie 信息伪造用户请求发送至服务器。
- **_SSRF_**：Server Side RequestForgery，服务器端请求伪造
  - 是服务器对用户提供的可控 URL 地址过于信任，没有经过严格检测，导致攻击者可以以此为跳板攻击内网或其他服务器。

> 区别来源于：[CSRF 和 SSRF 的区别是什么 - 网络安全 - 亿速云 (yisu.com)](https://www.yisu.com/zixun/498229.html)

## 小结

攻击者并不能通过 CSRF 攻击来直接获取用户的账户控制权，也不能直接窃取用户的任何信息。\
他们能做到的，是**欺骗用户浏览器，让其以用户的名义运行操作**。

> [跨站请求伪造\_百度百科 (baidu.com)](https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0/13777878?fromtitle=CSRF&fromid=2735433&fr=aladdin)
