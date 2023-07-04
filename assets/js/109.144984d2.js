(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{448:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在介绍Sentinel之前，我们先来看一下雪崩问题。")]),t._v(" "),e("h2",{attrs:{id:"雪崩问题及解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雪崩问题及解决方案"}},[t._v("#")]),t._v(" 雪崩问题及解决方案")]),t._v(" "),e("h3",{attrs:{id:"雪崩问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雪崩问题"}},[t._v("#")]),t._v(" "),e("strong",[t._v("雪崩问题")])]),t._v(" "),e("p",[e("strong",[t._v("微服务调用链路中的某个服务故障，引起整个链路中的所有微服务都不可用，这就是雪崩问题")])]),t._v(" "),e("p",[t._v("微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/1533829099748.png",alt:"1533829099748"}})]),t._v(" "),e("p",[t._v("如图，如果服务提供者I发生了故障，当前的应用的部分业务因为依赖于服务I，因此也会被阻塞。此时，其它不依赖于服务I的业务似乎不受影响。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/1533829198240.png",alt:"1533829198240"}})]),t._v(" "),e("p",[t._v("但是，依赖服务I的业务请求被阻塞，用户不会得到响应，则tomcat的这个线程不会释放，于是越来越多的用户请求到来，越来越多的线程会阻塞：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/1533829307389.png",alt:"1533829307389"}})]),t._v(" "),e("p",[t._v("服务器支持的线程和并发数有限，请求一直阻塞，会导致服务器资源耗尽，从而导致所有其它服务都不可用，那么当前服务也就不可用了。")]),t._v(" "),e("p",[t._v("那么，依赖于当前服务的其它服务随着时间的推移，最终也都会变的不可用，形成级联失败，雪崩就发生了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715172710340.png",alt:"image-20210715172710340"}})]),t._v(" "),e("h3",{attrs:{id:"雪崩问题解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雪崩问题解决"}},[t._v("#")]),t._v(" 雪崩问题解决")]),t._v(" "),e("p",[t._v("解决雪崩问题的常见方式有四种：")]),t._v(" "),e("ul",[e("li",[t._v("超时处理")]),t._v(" "),e("li",[t._v("仓壁模式--线程隔离")]),t._v(" "),e("li",[t._v("熔断降级-断路器")]),t._v(" "),e("li",[t._v("流量控制")])]),t._v(" "),e("h4",{attrs:{id:"超时处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#超时处理"}},[t._v("#")]),t._v(" 超时处理")]),t._v(" "),e("p",[t._v("•超时处理：设定超时时间，请求超过一定时间没有响应就返回错误信息，不会无休止等待")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715172820438.png",alt:"image-20210715172820438"}})]),t._v(" "),e("h4",{attrs:{id:"仓壁模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仓壁模式"}},[t._v("#")]),t._v(" 仓壁模式")]),t._v(" "),e("p",[t._v("方案2：仓壁模式")]),t._v(" "),e("p",[t._v("仓壁模式来源于船舱的设计：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715172946352.png",alt:"image-20210715172946352"}})]),t._v(" "),e("p",[t._v("船舱都会被隔板分离为多个独立空间，当船体破损时，只会导致部分空间进入，将故障控制在一定范围内，避免整个船体都被淹没。")]),t._v(" "),e("p",[t._v("于此类似，我们可以限定每个业务能使用的线程数，避免耗尽整个tomcat的资源，因此也叫线程隔离。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715173215243.png",alt:"image-20210715173215243"}})]),t._v(" "),e("h4",{attrs:{id:"断路器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断路器"}},[t._v("#")]),t._v(" 断路器")]),t._v(" "),e("p",[t._v("断路器模式：由"),e("strong",[t._v("断路器")]),t._v("统计业务执行的异常比例，如果超出阈值则会"),e("strong",[t._v("熔断")]),t._v("该业务，拦截访问该业务的一切请求。")]),t._v(" "),e("p",[t._v("断路器会统计访问某个服务的请求数量，异常比例：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715173327075.png",alt:"image-20210715173327075"}})]),t._v(" "),e("p",[t._v("当发现访问服务D的请求异常比例过高时，"),e("strong",[t._v("认为服务D有导致雪崩的风险，会拦截访问服务D的一切请求")]),t._v("，形成熔断：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715173428073.png",alt:"image-20210715173428073"}})]),t._v(" "),e("h4",{attrs:{id:"限流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限流"}},[t._v("#")]),t._v(" 限流")]),t._v(" "),e("p",[e("strong",[t._v("流量控制")]),t._v("：限制业务访问的QPS，避免服务因流量的突增而故障。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715173555158.png",alt:"image-20210715173555158"}})]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("什么是雪崩问题？")]),t._v(" "),e("ul",[e("li",[t._v("微服务之间相互调用，因为调用链中的一个服务故障，引起整个链路都无法访问的情况。")])]),t._v(" "),e("p",[t._v("可以认为：")]),t._v(" "),e("p",[e("strong",[t._v("限流")]),t._v("是对服务的保护，避免因瞬间高并发流量而导致服务故障，进而避免雪崩。是一种"),e("strong",[t._v("预防")]),t._v("措施。")]),t._v(" "),e("p",[e("strong",[t._v("超时处理、线程隔离、降级熔断")]),t._v("是在部分服务故障时，将故障控制在一定范围，避免雪崩。是一种"),e("strong",[t._v("补救")]),t._v("措施。")]),t._v(" "),e("h2",{attrs:{id:"服务保护技术对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务保护技术对比"}},[t._v("#")]),t._v(" 服务保护技术对比")]),t._v(" "),e("p",[t._v("在SpringCloud当中支持多种服务保护技术：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/Netflix/Hystrix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netfix Hystrix"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/alibaba/Sentinel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinel"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/resilience4j/resilience4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resilience4J"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("早期比较流行的是Hystrix框架，但目前国内实用最广泛的还是阿里巴巴的Sentinel框架，这里我们做下对比：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Sentinel")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Hystrix")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("隔离策略")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("信号量隔离")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("线程池隔离/信号量隔离")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("熔断降级策略")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("基于慢调用比例或异常比例")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("基于失败比率")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("实时指标实现")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("滑动窗口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("滑动窗口（基于 RxJava）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("规则配置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持多种数据源")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持多种数据源")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("扩展性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("多个扩展点")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("插件的形式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("基于注解的支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("限流")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("基于 QPS，支持基于调用关系的限流")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有限的支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("流量整形")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持慢启动、匀速排队模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("系统自适应保护")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("控制台")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("开箱即用，可配置规则、查看秒级监控、机器发现等")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不完善")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("常见框架的适配")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Servlet、Spring Cloud、Dubbo、gRPC  等")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Servlet、Spring Cloud Netflix")])])])]),t._v(" "),e("h2",{attrs:{id:"sentinel介绍和安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sentinel介绍和安装"}},[t._v("#")]),t._v(" Sentinel介绍和安装")]),t._v(" "),e("h3",{attrs:{id:"初识sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识sentinel"}},[t._v("#")]),t._v(" 初识Sentinel")]),t._v(" "),e("p",[t._v("Sentinel是阿里巴巴开源的一款微服务流量控制组件。官网地址：https://sentinelguard.io/zh-cn/index.html")]),t._v(" "),e("p",[t._v("Sentinel 具有以下特征:")]),t._v(" "),e("p",[t._v("•"),e("strong",[t._v("丰富的应用场景")]),t._v("：Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。")]),t._v(" "),e("p",[t._v("•"),e("strong",[t._v("完备的实时监控")]),t._v("：Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。")]),t._v(" "),e("p",[t._v("•"),e("strong",[t._v("广泛的开源生态")]),t._v("：Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。")]),t._v(" "),e("p",[t._v("•"),e("strong",[t._v("完善的")]),t._v(" "),e("strong",[t._v("SPI")]),t._v(" "),e("strong",[t._v("扩展点")]),t._v("：Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等。")]),t._v(" "),e("h3",{attrs:{id:"安装sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装sentinel"}},[t._v("#")]),t._v(" 安装Sentinel")]),t._v(" "),e("p",[t._v("1）下载")]),t._v(" "),e("p",[t._v("sentinel官方提供了UI控制台，方便我们对系统做限流设置。大家可以在"),e("a",{attrs:{href:"https://github.com/alibaba/Sentinel/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v("下载。")]),t._v(" "),e("p",[t._v("2）运行")]),t._v(" "),e("p",[e("strong",[t._v("D:\\Program\\Sentinel")])]),t._v(" "),e("p",[t._v("将jar包放到任意非中文目录，执行命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" sentinel-dashboard-1.8.1.jar\n")])])]),e("p",[t._v("如果要修改Sentinel的默认端口、账户、密码，可以通过下列配置：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("配置项")])]),t._v(" "),e("th",[e("strong",[t._v("默认值")])]),t._v(" "),e("th",[e("strong",[t._v("说明")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("server.port")]),t._v(" "),e("td",[t._v("8080")]),t._v(" "),e("td",[t._v("服务端口")])]),t._v(" "),e("tr",[e("td",[t._v("sentinel.dashboard.auth.username")]),t._v(" "),e("td",[t._v("sentinel")]),t._v(" "),e("td",[t._v("默认用户名")])]),t._v(" "),e("tr",[e("td",[t._v("sentinel.dashboard.auth.password")]),t._v(" "),e("td",[t._v("sentinel")]),t._v(" "),e("td",[t._v("默认密码")])])])]),t._v(" "),e("p",[t._v("例如，修改端口：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" sentinel-dashboard-1.8.1.jar\n")])])]),e("p",[t._v("3）访问")]),t._v(" "),e("p",[t._v("访问http://localhost:8080页面，就可以看到sentinel的控制台了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715190827846.png",alt:"image-20210715190827846"}})]),t._v(" "),e("p",[t._v("需要输入账号和密码，默认都是：sentinel")]),t._v(" "),e("p",[t._v("登录后，发现一片空白，什么都没有：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715191134448.png",alt:"image-20210715191134448"}})]),t._v(" "),e("p",[t._v("这是因为我们还没有与微服务整合。")]),t._v(" "),e("h2",{attrs:{id:"微服务整合sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务整合sentinel"}},[t._v("#")]),t._v(" 微服务整合Sentinel")]),t._v(" "),e("p",[t._v("我们在order-service中整合sentinel，并连接sentinel的控制台，步骤如下：")]),t._v(" "),e("p",[t._v("1）引入sentinel依赖")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--sentinel--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-alibaba-sentinel"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("2）配置控制台")]),t._v(" "),e("p",[t._v("修改application.yaml文件，添加下面内容：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8088")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transport")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dashboard")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),e("p",[t._v("3）访问order-service的任意端点")]),t._v(" "),e("p",[t._v("打开浏览器，访问http://localhost:8088/order/101，这样才能触发sentinel的监控。")]),t._v(" "),e("p",[t._v("然后再访问sentinel的控制台，查看效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210715191241799.png",alt:"image-20210715191241799"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);