(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{381:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("首先需要安装Redis所需要的依赖：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" gcc tcl\n")])])]),a("p",[s._v("然后将课前资料提供的Redis安装包上传到虚拟机的任意目录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210629114325516.png",alt:"image-20210629114325516"}})]),s._v(" "),a("p",[s._v("例如，我放到了/tmp目录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210629114830642.png",alt:"image-20210629114830642"}})]),s._v(" "),a("p",[s._v("解压缩：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzf")]),s._v(" redis-6.2.4.tar.gz\n")])])]),a("p",[s._v("解压后：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/image-20210629114941810.png",alt:"image-20210629114941810"}})]),s._v(" "),a("p",[s._v("进入redis目录：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.2.4\n")])])]),a("p",[s._v("运行编译命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("如果没有出错，应该就安装成功了。")]),s._v(" "),a("p",[s._v("然后修改redis.conf文件中的一些配置：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0.0.0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保护模式，关闭保护模式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("protected-mode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库数量，设置为1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("databases")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n")])])]),a("p",[s._v("启动Redis：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-server redis.conf\n")])])]),a("p",[s._v("停止redis服务：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-cli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);