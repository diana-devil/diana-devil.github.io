(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{424:function(t,e,v){"use strict";v.r(e);var _=v(2),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"同步和异步通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步通讯"}},[t._v("#")]),t._v(" 同步和异步通讯")]),t._v(" "),e("p",[t._v("微服务间通讯有同步和异步两种方式：")]),t._v(" "),e("p",[t._v("同步通讯：就像打电话，需要实时响应。")]),t._v(" "),e("p",[t._v("异步通讯：就像发邮件，不需要马上回复。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/RabbitMQ/image-20210717161939695.png",alt:"image-20210717161939695"}})]),t._v(" "),e("p",[t._v("两种方式各有优劣，打电话可以立即得到响应，但是你却不能跟多个人同时通话。发送邮件可以同时与多个人收发邮件，但是往往响应会有延迟。")]),t._v(" "),e("h3",{attrs:{id:"同步通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步通讯"}},[t._v("#")]),t._v(" 同步通讯")]),t._v(" "),e("p",[t._v("我们之前学习的Feign调用就属于同步方式，虽然调用可以实时得到结果，但存在下面的问题：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/RabbitMQ/image-20210717162004285.png",alt:"image-20210717162004285"}})]),t._v(" "),e("p",[t._v("总结：")]),t._v(" "),e("p",[t._v("同步调用的优点：")]),t._v(" "),e("ul",[e("li",[t._v("时效性较强，可以立即得到结果")])]),t._v(" "),e("p",[e("strong",[t._v("同步调用的问题：")])]),t._v(" "),e("ul",[e("li",[t._v("耦合度高")]),t._v(" "),e("li",[t._v("性能和吞吐能力下降")]),t._v(" "),e("li",[t._v("有额外的资源消耗")]),t._v(" "),e("li",[t._v("有级联失败问题")])]),t._v(" "),e("h3",{attrs:{id:"异步通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步通讯"}},[t._v("#")]),t._v(" 异步通讯")]),t._v(" "),e("p",[t._v("异步调用则可以避免上述问题：")]),t._v(" "),e("p",[t._v("我们以购买商品为例，用户支付后需要调用订单服务完成订单状态修改，调用物流服务，从仓库分配响应的库存并准备发货。")]),t._v(" "),e("p",[t._v("在事件模式中，支付服务是事件发布者（publisher），在支付完成后只需要发布一个支付成功的事件（event），事件中带上订单id。")]),t._v(" "),e("p",[t._v("订单服务和物流服务是事件订阅者（Consumer），订阅支付成功的事件，监听到事件后完成自己业务即可。")]),t._v(" "),e("p",[t._v("为了解除事件发布者与订阅者之间的耦合，两者并不是直接通信，而是有一个中间人（Broker）。发布者发布事件到Broker，不关心谁来订阅事件。订阅者从Broker订阅事件，不关心谁发来的消息。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/RabbitMQ/image-20210422095356088.png",alt:"image-20210422095356088"}})]),t._v(" "),e("p",[t._v("Broker 是一个像数据总线一样的东西，所有的服务要接收数据和发送数据都发到这个总线上，这个总线就像协议一样，让服务间的通讯变得标准和可控。")]),t._v(" "),e("p",[t._v("好处：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("吞吐量提升：无需等待订阅者处理完成，响应更快速")])]),t._v(" "),e("li",[e("p",[t._v("故障隔离：服务没有直接调用，不存在级联失败问题")])]),t._v(" "),e("li",[e("p",[t._v("调用间没有阻塞，不会造成无效的资源占用")])]),t._v(" "),e("li",[e("p",[t._v("耦合度极低，每个服务都可以灵活插拔，可替换")])]),t._v(" "),e("li",[e("p",[t._v("流量削峰：不管发布事件的流量波动多大，都由Broker接收，订阅者可以按照自己的速度去处理事件")])])]),t._v(" "),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[t._v("架构复杂了，业务没有明显的流程线，不好管理")]),t._v(" "),e("li",[t._v("需要依赖于Broker的可靠、安全、性能")])]),t._v(" "),e("p",[t._v("好在现在开源软件或云平台上 Broker 的软件是非常成熟的，比较常见的一种就是我们今天要学习的MQ技术。")]),t._v(" "),e("h3",{attrs:{id:"同步与异步的选用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步与异步的选用"}},[t._v("#")]),t._v(" "),e("strong",[t._v("同步与异步的选用")])]),t._v(" "),e("ul",[e("li",[t._v("并发性要求不高，优先考虑同步，时效性较强，可以立即得到结果，可以拿到结果去做一些事。")]),t._v(" "),e("li",[t._v("如果并发性要求较高，希望解除耦合关系，且不需要知道服务的结果，选用异步调用")])]),t._v(" "),e("h2",{attrs:{id:"技术对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术对比"}},[t._v("#")]),t._v(" 技术对比：")]),t._v(" "),e("p",[t._v("MQ，中文是消息队列（MessageQueue），字面来看就是存放消息的队列。也就是事件驱动架构中的Broker。")]),t._v(" "),e("p",[t._v("比较常见的MQ实现：")]),t._v(" "),e("ul",[e("li",[t._v("ActiveMQ")]),t._v(" "),e("li",[t._v("RabbitMQ")]),t._v(" "),e("li",[t._v("RocketMQ")]),t._v(" "),e("li",[t._v("Kafka")])]),t._v(" "),e("p",[t._v("几种常见MQ的对比：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("RabbitMQ")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("ActiveMQ")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("RocketMQ")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Kafka")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("公司/社区")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Rabbit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Apache")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("阿里")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Apache")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("开发语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Erlang")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Java")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Java")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Scala&Java")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("协议支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("AMQP，XMPP，SMTP，STOMP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("OpenWire,STOMP，REST,XMPP,AMQP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自定义协议")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自定义协议")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一般")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("单机吞吐量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一般")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("差")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非常高")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("消息延迟")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("微秒级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("毫秒级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("毫秒级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("毫秒以内")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("消息可靠性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一般")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一般")])])])]),t._v(" "),e("p",[t._v("追求可用性：Kafka、 RocketMQ 、RabbitMQ")]),t._v(" "),e("p",[t._v("追求可靠性：RabbitMQ、RocketMQ")]),t._v(" "),e("p",[t._v("追求吞吐能力：RocketMQ、Kafka")]),t._v(" "),e("p",[t._v("追求消息低延迟：RabbitMQ、Kafka")])])}),[],!1,null,null,null);e.default=a.exports}}]);