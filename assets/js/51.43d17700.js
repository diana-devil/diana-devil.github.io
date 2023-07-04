(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{389:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"集群结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群结构"}},[s._v("#")]),s._v(" 集群结构")]),s._v(" "),t("p",[s._v("分片集群需要的节点数量较多，这里我们搭建一个最小的分片集群，包含3个master节点，每个master包含一个slave节点，结构如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702164116027.png",alt:"image-20210702164116027"}})]),s._v(" "),t("p",[s._v("这里我们会在同一台虚拟机中开启6个redis实例，模拟分片集群，信息如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("IP")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("PORT")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("角色")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("7001")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("master")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("7002")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("master")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("7003")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("master")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("8001")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("slave")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("8002")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("slave")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.150.101")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("8003")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("slave")])])])]),s._v(" "),t("h2",{attrs:{id:"准备实例和配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备实例和配置"}},[s._v("#")]),s._v(" 准备实例和配置")]),s._v(" "),t("p",[s._v("删除之前的7001、7002、7003这几个目录，重新创建出7001、7002、7003、8001、8002、8003目录：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/tmp目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除旧的，避免配置干扰")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),s._v("\n")])])]),t("p",[s._v("在/tmp下准备一个新的redis.conf文件，内容如下：")]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[s._v("port 6379\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启集群功能")]),s._v("\ncluster-enabled yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群的配置文件名称，不需要我们创建，由redis自己维护")]),s._v("\ncluster-config-file /tmp/6379/nodes.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点心跳失败的超时时间")]),s._v("\ncluster-node-timeout 5000\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 持久化文件存放目录")]),s._v("\ndir /tmp/6379\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定地址")]),s._v("\nbind 0.0.0.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让redis后台运行")]),s._v("\ndaemonize yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册的实例ip")]),s._v("\nreplica-announce-ip 192.168.150.101\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保护模式")]),s._v("\nprotected-mode no\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库数量")]),s._v("\ndatabases 1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志")]),s._v("\nlogfile /tmp/6379/run.log\n")])])]),t("p",[s._v("将这个文件拷贝到每个目录下：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/tmp目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行拷贝")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf\n")])])]),t("p",[s._v("修改每个目录下的redis.conf，将其中的6379修改为与所在目录一致：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/tmp目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/6379/{}/g'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/redis.conf\n")])])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("p",[s._v("因为已经配置了后台启动模式，所以可以直接启动服务：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/tmp目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一键启动所有服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" redis-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/redis.conf\n")])])]),t("p",[s._v("通过ps查看状态：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n")])])]),t("p",[s._v("发现服务都已经正常启动：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702174255799.png",alt:"image-20210702174255799"}})]),s._v(" "),t("p",[s._v("如果要关闭所有进程，可以执行命令：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v("\n")])])]),t("p",[s._v("或者（推荐这种方式）：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" redis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),t("h2",{attrs:{id:"创建集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建集群"}},[s._v("#")]),s._v(" 创建集群")]),s._v(" "),t("p",[s._v("虽然服务启动了，但是目前每个服务之间都是独立的，没有任何关联。")]),s._v(" "),t("p",[s._v("我们需要执行命令来创建集群，在Redis5.0之前创建集群比较麻烦，5.0之后集群管理命令都集成到了redis-cli中。")]),s._v(" "),t("p",[s._v("1）Redis5.0之前")]),s._v(" "),t("p",[s._v("Redis5.0之前集群命令都是用redis安装包下的src/redis-trib.rb来实现的。因为redis-trib.rb是有ruby语言编写的所以需要安装ruby环境。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib ruby rubygems\ngem "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\n")])])]),t("p",[s._v("然后通过命令来管理集群：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入redis的src目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/redis-6.2.4/src\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建集群")]),s._v("\n./redis-trib.rb create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--replicas")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7003 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8003\n")])])]),t("p",[s._v("2）Redis5.0以后")]),s._v(" "),t("p",[s._v("我们使用的是Redis6.2.4版本，集群管理以及集成到了redis-cli中，格式如下：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),s._v(" create --cluster-replicas "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:7003 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".150.101:8003\n")])])]),t("p",[s._v("命令说明：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("redis-cli --cluster")]),s._v("或者"),t("code",[s._v("./redis-trib.rb")]),s._v("：代表集群操作命令")]),s._v(" "),t("li",[t("code",[s._v("create")]),s._v("：代表是创建集群")]),s._v(" "),t("li",[t("code",[s._v("--replicas 1")]),s._v("或者"),t("code",[s._v("--cluster-replicas 1")]),s._v(" ：指定集群中每个master的副本个数为1，此时"),t("code",[s._v("节点总数 ÷ (replicas + 1)")]),s._v(" 得到的就是master的数量。因此节点列表中的前n个就是master，其它节点都是slave节点，随机分配到不同master")])]),s._v(" "),t("p",[s._v("运行后的样子：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702181101969.png",alt:"image-20210702181101969"}})]),s._v(" "),t("p",[s._v("这里输入yes，则集群开始创建：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702181215705.png",alt:"image-20210702181215705"}})]),s._v(" "),t("p",[s._v("通过命令可以查看集群状态：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" cluster nodes\n")])])]),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702181922809.png",alt:"image-20210702181922809"}})]),s._v(" "),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("p",[s._v("尝试连接7001节点，存储一个数据：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接")]),s._v("\nredis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取数据")]),s._v("\nget num\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次存储")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("p",[s._v("结果悲剧了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702182343979.png",alt:"image-20210702182343979"}})]),s._v(" "),t("p",[s._v("集群操作时，需要给"),t("code",[s._v("redis-cli")]),s._v("加上"),t("code",[s._v("-c")]),s._v("参数才可以：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v("\n")])])]),t("p",[s._v("这次可以了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210702182602145.png",alt:"image-20210702182602145"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);