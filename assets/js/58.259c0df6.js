(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{394:function(v,_,l){"use strict";l.r(_);var i=l(2),s=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"redis缓存持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存持久化"}},[v._v("#")]),v._v(" Redis缓存持久化")]),v._v(" "),_("ul",[_("li",[v._v("RDB持久化\n"),_("ul",[_("li",[v._v("bgsave开始时会fork主进程得到子进程，子进程共享主进程的内存数据。完成fork后读取内存数据并写入 RDB 文件。")])])]),v._v(" "),_("li",[v._v("AOF持久化\n"),_("ul",[_("li",[v._v("Redis处理的每一个写命令都会记录在AOF文件")])])]),v._v(" "),_("li",[v._v("当redis重新启动后，会读取"),_("strong",[v._v("存储到磁盘的")]),v._v("RDB文件或者AOF文件来更新数据")])]),v._v(" "),_("h2",{attrs:{id:"redis集群模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis集群模式"}},[v._v("#")]),v._v(" Redis集群模式")]),v._v(" "),_("ul",[_("li",[v._v("Redis 主从+哨兵模式\n"),_("ul",[_("li",[v._v("主从之间的数据同步有 "),_("strong",[v._v("全量同步，增量同步")])]),v._v(" "),_("li",[v._v("哨兵可以监控Redis集群状态\n"),_("ul",[_("li",[v._v("当主节点宕机后，会自动选主，恢复故障")])])])])]),v._v(" "),_("li",[v._v("Redis 分片集群\n"),_("ul",[_("li",[v._v("类似于 ES的分片集群")]),v._v(" "),_("li",[_("strong",[v._v("采用散列插槽的模式")]),v._v(" "),_("ul",[_("li",[v._v("数据通过hash运算绑定一个插槽\n"),_("ul",[_("li",[_("code",[v._v("{a}num")]),v._v("与"),_("code",[v._v("a")]),v._v("都在同一个插槽")]),v._v(" "),_("li",[v._v('key中包含"{}"，且“{}”中至少包含1个字符，“{}”中的部分是有效部分。'),_("strong",[v._v("按照有效部分计算插槽。")])]),v._v(" "),_("li",[v._v("一般同一个类型的 数据 加相同的{}，可以放到到同一个插槽，进而访问到同一片，即放到一台服务器上，不用进行重定向")])])]),v._v(" "),_("li",[_("strong",[v._v("数据与插槽绑定")]),v._v("，每个片给分配插槽，分片上的插槽可以通过"),_("code",[v._v("reshard")]),v._v("进行转移")]),v._v(" "),_("li",[v._v("无论在哪一个结点访问数据都会自动路由到对应结点上")])])]),v._v(" "),_("li",[v._v("集群伸缩\n"),_("ul",[_("li",[v._v("加入集群，转移插槽，删除插槽\n"),_("ul",[_("li",[v._v("当一个结点上有插槽时，不能直接删除，需要将插槽转移才能删除")])])])])]),v._v(" "),_("li",[v._v("故障转移\n"),_("ul",[_("li",[v._v("分片集群不需要哨兵，可以互相之间进行心跳检测。当出现故障时，可进行自动故障转移。")])])])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);