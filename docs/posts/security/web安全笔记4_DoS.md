---
layout: Post
title: "DoS"
subtitle: "web安全笔记（四）"
date: 2022-02-20
useHeaderImage: true
headerImage: /img/in-post/network-security/dos.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - web安全
---

::: info
【第二届青训营-寒假前端场】课程 web 开发的安全之旅的扩展笔记
首发: [【第二届青训营-寒假前端场】- web 安全笔记（四）—— DoS](https://forum.juejin.cn/youthcamp/post/7066086394912833573?from=4)
:::

## DoS

- _Meaning_\
  DoS（Denial of Service），即拒绝服务，造成 DoS 的攻击行为被称为 DoS 攻击，其目的是使计算机或网络无法提供正常的服务。最常见的 DoS 攻击有**计算机网络宽带攻击**和**连通性攻击**。
  - 简称：使系统过于忙碌而不能执行有用的业务并且占尽关键系统资源
    > DoS 攻击是指故意的攻击网络协议实现的缺陷或直接通过野蛮手段残忍地耗尽被攻击对象的资源，目的是让目标计算机或网络无法提供正常的服务或资源访问，使目标系统服务系统停止响应甚至崩溃，而在此攻击中并不包括侵入目标服务器或目标网络设备。这些服务资源包括网络带宽，文件系统空间容量，开放的进程或者允许的连接。这种攻击会导致资源的匮乏，无论计算机的处理速度多快、内存容量多大、网络带宽的速度多快都无法避免这种攻击带来的后果。
    >
    > 来源：[dos 攻击\_百度百科 (baidu.com)](https://baike.baidu.com/item/dos%E6%94%BB%E5%87%BB/3792374?fr=aladdin)
- _principle_
  - 通过某种方式（构造特定请求），导致服务器资源被显著消耗，来不及响应更多请求，导致请求挤压，进而雪崩效应。

### 贪婪模式

- 正则表达式：贪婪模式，贪婪与非贪婪模式影响的是被量词修饰的子表达式的匹配行为。
  - **贪婪匹配** ：贪婪模式在整个表达式匹配成功的提前下，尽可能多的匹配。即，正则表达式一般趋于最大长度匹配。
  - **非贪婪匹配**：在整个表达式匹配成功的前提下，以最少的匹配字符。
- 如何区分两种模式 - 默认是贪婪模式，在量词后面直接加上一个问号 “?” 就是非贪婪模式。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c66a8f0e65954524b9d8f29d04037e98~tplv-k3u1fbpfcp-zoom-1.image)

## DoS 类型

### ReDoS：Regex DoS

- _Meaning_\
   正则表达式所引发的 DoS 攻击，贪婪模式造成的
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4e1323f7e0046f8aa72cfd20086b853~tplv-k3u1fbpfcp-zoom-1.image)

### DDoS：Distributed DoS

短时间内，来自大量僵尸设备的请求流量，服务器不能及时完成全部请求，导致请求堆积，进而雪崩效应，无法响应新请求。

> 量大：通过大量数据去打败服务器！

- 攻击特点
  - 直接访问 _ip_
  - 任意 _API_
  - 消耗（耗尽）大量带宽

##### DDoS demo

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dd36d8fc37b4b7aaa532fe85306021a~tplv-k3u1fbpfcp-zoom-1.image)
攻击者发送 SYN 请求到服务器，服务器返回 ACK+SYN 时，但攻击者不会返回 ACK（第三次握手），导致三次握手没有完成，连接数不能被释放。而在这种占用的情况下，服务器达到最大连接数，就不能发送新请求，导致请求堆积，进而雪崩效应，这就是一次 DDoS 攻击的过程。

## DoS 的防御

### ReDoS

- 进行 Code Review，禁止写出贪婪匹配的方式
- 进行代码扫描和正则性能测试
- 拒绝使用用户提供的正则

### DDoS

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f1fca860800466e8325eb589d007f59~tplv-k3u1fbpfcp-zoom-1.image)

- 过滤

  - 在负载均衡层和 API 网关层进行一些流量的识别，把能够识别的一些恶意攻击进行过滤，转到其他服务或直接拒绝

- 流量
  - **牵制 CDN**：所有的流量都要经过 CDN 才能够得到我们具体的服务
  - **快速扩容**：当服务检测到流量快速激增时，我们有一个方案，能够自动执行快速扩容的操作，以承载更多的流量
  - **非核心服务降级**：所有的非核心业务服务统统降级或者关闭，这样子可以均出更多的计算资源，去应对激增的流量

## 小结

DoS 攻击几乎是从互联网络的诞生以来，就伴随着互联网络的发展而一直存在也不断发展和升级。要避免系统免受 DoS 攻击：

- 网络管理员要积极谨慎地维护系统，确保无安全隐患和漏洞。
- 而针对恶意攻击方式，则需要安装防火墙等安全设备过滤 DoS 攻击，同时强烈建议网络管理员应当定期查看安全设备的日志，及时发现对系统的安全威胁行为。
  > 更多相关内容可看：[dos 攻击\_百度百科 (baidu.com)](https://baike.baidu.com/item/dos%E6%94%BB%E5%87%BB/3792374?fr=aladdin)
