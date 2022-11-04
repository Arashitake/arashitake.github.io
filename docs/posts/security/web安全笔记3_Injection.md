---
layout: Post
title: "Injection"
subtitle: "web安全笔记（三）"
date: 2022-02-19
useHeaderImage: true
headerImage: /img/in-post/network-security/injection.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - web安全
---

::: info
【第二届青训营-寒假前端场】课程 web 开发的安全之旅的扩展笔记
首发: [【第二届青训营-寒假前端场】- web 安全笔记（三）—— Injection](https://forum.juejin.cn/youthcamp/post/7066062685690920996?from=4)
:::

## Injection

- _Meaning_\
   攻击者给程序提供恶意的输入，解析引擎把恶意输入作为命令或者查询的一部分，顺带着改变了程序执行的流程。
- 注入是 web 程序最古老的和最危险的攻击之一，它们能导致数据被偷，数据丢失，数据完整性丢失，DoS，甚至系统沦丧。主要产生原因是对用户输入验证不足。
  > 注入攻击的类型：[你知道几种 web 注入攻击？ (baidu.com)](https://baijiahao.baidu.com/s?id=1632641114268530695&wfr=spider&for=pc)

## Injection 分类

### SQL Injection

- _meaning_\
  攻击者成功的向服务器提交恶意的 SQL 查询代码，程序在接收后错误的将攻击者的输入作为查询语句的一部分执行，导致原始的查询逻辑被改变，额外的执行了攻击者精心构造的恶意代码。\
  ![image-20220217224830536.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4519f36b538a42b9b5de3ce255bb2eab~tplv-k3u1fbpfcp-zoom-1.image)
- _SQL Injection demo_ \
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dbd6f01c444400680de87758d95ec02~tplv-k3u1fbpfcp-zoom-1.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2360ade931e845b98ae834186da873ea~tplv-k3u1fbpfcp-zoom-1.image)

### CLI Injection

> 命令行注入

- **_CLI demo_**：视频格式转化
  - 对视频格式进行一些转换，对接受参数没有进行任何过滤 \
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4447fc44909e4c8bbc2530f8c7da4d5a~tplv-k3u1fbpfcp-zoom-1.image)
  - 参数传入 CLI 命令，执行删除 \
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5801f017980945a5a52daef246e3b1e4~tplv-k3u1fbpfcp-zoom-1.image)
  - 执行读取修改 \
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99e2fb3c6c384a088508bc54b56ab31c~tplv-k3u1fbpfcp-zoom-1.image)
    > 转移流量，进行流量攻击，导致服务器挂掉

### OS command Injection

- _Meaning_\
   **操作系统命令注入**（也称为 shell 注入）是一个 Web 安全漏洞，它使攻击者可以在运行应用程序的服务器上执行任意操作系统（OS）命令，并且通常会完全破坏该应用程序及其所有数据。攻击者通常可以利用 OS 命令注入漏洞来破坏托管基础结构的其他部分，利用信任关系将攻击转移到组织内的其他系统。
  > 详细了解可以看这个：[操作系统命令注入（OS command injection）学习笔记\_汗的博客-CSDN 博客](https://blog.csdn.net/Alexhcf/article/details/105937997)

### CRLF Injection

- _Meaning_\
  CRLF 的含义是“carriage return/line feed”，意思就是回车。攻击者可以通过在一段数据中加入 CRLF 命令来改变接受这个数据的应用程序处理这个数据的方式，从而执行 CRLF 注入攻击。
- CRLF 攻击最基本的例子包括向记录文件中增加伪造的记录。也就是说，有安全漏洞的应用程序把一个用户输入的内容写到系统记录文件中。
  > [CRLF 注入攻击\_百度百科 (baidu.com)](https://baike.baidu.com/item/CRLF%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB/14696969)

### SSRF：Server-Side Request Forgery

- _Meaning_\
  SSRF（Server-Side Request Forgery，服务器端请求伪造）是一种**由攻击者构造，由服务端发起请求**的一个网络攻击，一般用来在外网探测或攻击内网服务，其影响效果根据服务器用的函数不同，从而造成不同的影响。 【攻击者 ——> 服务器 ——> 目标主机】
- _Source_
  SSRF 形成的原因大都是由于服务端提供了**从其他服务器获取数据的功能**且没有对目标地址做过滤与限制。比如从指定 URL 地址获取网页文本内容，加载指定地址的图片，下载等等。
- strictly，SSRF 不是 Injection，但是原理类似
  > 本段解释来源：[SSRF 原理 - 简书 (jianshu.com)](https://www.jianshu.com/p/7eb20247193a)
- **SSRF 是利用存在缺陷的 web 应用作为代理攻击远程和本地的服务器**
- **_SSRPF demo_**：内网攻击 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b23e1dc4d7f477d8700f963d85e3d9c~tplv-k3u1fbpfcp-zoom-1.image)
  > 推荐相关阅读：[SSRF---窥探内网，必不可少 - 简书 (jianshu.com)](https://www.jianshu.com/p/08ad1341dcd8)

## Injection 的防御

- _SQL Injection_
  - 找到项目中查询 SQL 的地方，使用 prepared statement，将 SQL 语句进行提前的编译，导致 Injection 攻击不能完成
- _CLI_
  - 建立允许名单和过滤，如禁止`rm`这种高危操作的执行
- _OS command_
  - 最小权限原则：禁止使用`sudo`和`root`
- _CRLF_
  - **永远不要相信输入的内容**。
  - 在你控制范围以外的任何来源的输入内容都必须要进行检查，在你的应用程序对数据执行操作之前，任何不符合预期的数据类型的字符都要删除，如过滤掉 CR 和 LF 字符。
- _SSRF_
  - 对 URL 类型参数进行协议、域名、ip 等限制，避免攻击者访问内网

## 小结

新的注入方式会不断出现，过滤方式也要随之更新，有可能会有滞后，但指令和数据的良好隔离才是解决命令注入的根本之道。
