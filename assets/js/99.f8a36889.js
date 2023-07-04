(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{436:function(t,v,_){"use strict";_.r(v);var i=_(2),a=Object(i.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("传统的缓存策略一般是请求到达Tomcat后，先查询Redis，如果未命中则查询数据库，如图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210821075259137.png",alt:"image-20210821075259137"}})]),t._v(" "),v("p",[t._v("存在下面的问题：")]),t._v(" "),v("p",[t._v("•请求要经过Tomcat处理，Tomcat的性能成为整个系统的瓶颈")]),t._v(" "),v("p",[t._v("•Redis缓存失效时，会对数据库产生冲击")]),t._v(" "),v("p",[t._v("多级缓存就是充分利用请求处理的每个环节，分别添加缓存，减轻Tomcat压力，提升服务性能：")]),t._v(" "),v("ul",[v("li",[t._v("浏览器访问静态资源时，优先读取浏览器本地缓存")]),t._v(" "),v("li",[t._v("访问非静态资源（ajax查询数据）时，访问服务端")]),t._v(" "),v("li",[t._v("请求到达Nginx后，优先读取Nginx本地缓存")]),t._v(" "),v("li",[t._v("如果Nginx本地缓存未命中，则去直接查询Redis（不经过Tomcat）")]),t._v(" "),v("li",[t._v("如果Redis查询未命中，则查询Tomcat")]),t._v(" "),v("li",[t._v("请求进入Tomcat后，优先查询JVM进程缓存")]),t._v(" "),v("li",[t._v("如果JVM进程缓存未命中，则查询数据库")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210821075558137.png",alt:"image-20210821075558137"}})]),t._v(" "),v("p",[t._v("在多级缓存架构中，Nginx内部需要编写本地缓存查询、Redis查询、Tomcat查询的业务逻辑，因此这样的nginx服务不再是一个"),v("strong",[t._v("反向代理服务器")]),t._v("，而是一个编写"),v("strong",[t._v("业务的Web服务器了")]),t._v("。")]),t._v(" "),v("p",[t._v("因此这样的业务Nginx服务也需要搭建集群来提高并发，再有专门的nginx服务来做反向代理，如图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210821080511581.png",alt:"image-20210821080511581"}})]),t._v(" "),v("p",[t._v("另外，我们的Tomcat服务将来也会部署为集群模式：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%BF%9B%E9%98%B6/image-20210821080954947.png",alt:"image-20210821080954947"}})]),t._v(" "),v("p",[t._v("可见，多级缓存的关键有两个：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("一个是在nginx中编写业务，实现nginx本地缓存、Redis、Tomcat的查询")])]),t._v(" "),v("li",[v("p",[t._v("另一个就是在Tomcat中实现JVM进程缓存")])])]),t._v(" "),v("p",[t._v("其中Nginx编程则会用到OpenResty框架结合Lua这样的语言。")])])}),[],!1,null,null,null);v.default=a.exports}}]);