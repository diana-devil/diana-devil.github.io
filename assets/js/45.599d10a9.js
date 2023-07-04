(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{380:function(s,t,a){"use strict";a.r(t);var r=a(2),n=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"事务简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务简介"}},[s._v("#")]),s._v(" 事务简介")]),s._v(" "),t("blockquote",[t("p",[s._v("事务 是一组操作的集合，"),t("strong",[s._v("它是一个不可分割的工作单位")]),s._v("，"),t("strong",[s._v("事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败")]),s._v("。")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("注意")]),s._v(" "),t("p",[s._v("默认MySQL的事务是自动提交的，也就是说，当执行完一条DML语句时，MySQL会立即隐式的提交事务。")])])]),s._v(" "),t("h2",{attrs:{id:"事务操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务操作"}},[s._v("#")]),s._v(" 事务操作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("未控制事务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("正常情况")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E6%AD%A3%E5%B8%B8%E6%83%85%E5%86%B5.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("异常情况")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5.png",alt:""}})])])])]),s._v(" "),t("li",[t("p",[s._v("控制事务1")]),s._v(" "),t("p",[s._v("手动修改数据库默认的自动提交行为，"),t("strong",[s._v("将自动提交修改为手动提交")]),s._v("--不推荐")]),s._v(" "),t("p",[t("strong",[s._v("此时我们执行的DML语句都不会提交, 需要手动的执行commit进行提交")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看/设置事务的提交方式")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1  1代表自动提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 设置为0 表示更改为手动提交")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("sql执行成功，提交事务")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("sql执行异常，回滚事务")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])])]),s._v(" "),t("li",[t("p",[s._v("控制事务2")]),s._v(" "),t("p",[t("strong",[s._v("手动开启事务")]),s._v("-- 推荐")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 方式二 转账操作 (张三给李四转账1000)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 开启事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1. 查询张三账户余额")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2. 将张三账户余额-1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n程序执行报错 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3. 将李四账户余额+1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 提交事务  如果上面sql正常执行，则会自动执行 commit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 回滚事务  如果上面sql执行异常，则会自动执行 rollback")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"事务四大特性-acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务四大特性-acid"}},[s._v("#")]),s._v(" 事务四大特性（ACID）")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("原子性")]),s._v("--undo log\n"),t("ul",[t("li",[s._v("原子性（"),t("strong",[s._v("A")]),s._v("tomicity）：事务是不可分割的最小操作单元，要么全部成功，要么全部失败。")])])]),s._v(" "),t("li",[t("strong",[s._v("一致性")]),s._v("-- undo log + redo log\n"),t("ul",[t("li",[s._v("一致性（"),t("strong",[s._v("C")]),s._v("onsistency）：事务完成时，必须使所有的数据都保持一致状态。")])])]),s._v(" "),t("li",[t("strong",[s._v("隔离性")]),s._v("-- MVCC + 锁\n"),t("ul",[t("li",[s._v("隔离性（"),t("strong",[s._v("I")]),s._v("solation）：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立。\n环境下运行。")])])]),s._v(" "),t("li",[t("strong",[s._v("持久性")]),s._v("-- redo log\n"),t("ul",[t("li",[s._v("持久性（"),t("strong",[s._v("D")]),s._v("urability）：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。")])])])]),s._v(" "),t("h2",{attrs:{id:"并发事务问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发事务问题"}},[s._v("#")]),s._v(" 并发事务问题")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("脏读")])]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("一个事务读到另外一个事务还没有提交的数据")])]),s._v(" "),t("blockquote",[t("p",[s._v("事务A执行了第2句，更新了id为1的数据，但是还没有"),t("strong",[s._v("提交事务")]),s._v("；")]),s._v(" "),t("p",[s._v("此时事务B读取了"),t("strong",[s._v("更新后id为1的数据")]),s._v("，即出现了脏读。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E8%84%8F%E8%AF%BB.png",alt:""}})])])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("不可重复读")])]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。")])]),s._v(" "),t("blockquote",[t("p",[s._v("事务A在第1句查看了id为1的数据，设内容为"),t("code",[s._v("a")]),s._v("。")]),s._v(" "),t("p",[s._v("然后事务B提交了对id为1数据的修改；")]),s._v(" "),t("p",[s._v("事务A在第三句又一次查看了id为去的数据，结果内容为"),t("code",[s._v("b")]),s._v(";")]),s._v(" "),t("p",[s._v("两次查看结果不一致，即 不可重复读")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E4%B8%8D%E5%8F%AF%E9%87%8D%E5%A4%8D%E8%AF%BB.png",alt:""}})])])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("幻读")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v('一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据\n已经存在，好像出现了 "幻影"。')]),s._v(" "),t("blockquote",[t("p",[s._v("事务A执行第一句，select id为1的数据，但是显示没有数据；")]),s._v(" "),t("p",[s._v("此时事务B插入了id为1的数据；")]),s._v(" "),t("p",[s._v("事务A的第二句，想插入id为1的数据，但是提示，id重复（事务B插入了数据），不可插入；")]),s._v(" "),t("p",[s._v("事务A的第三句，再次查询id为1的数据，仍然显示没有数据；")]),s._v(" "),t("p",[s._v("查询没有，插入却提示存在，这种情况即为 "),t("strong",[s._v("幻读")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E5%B9%BB%E8%AF%BB.png",alt:""}})])])])])]),s._v(" "),t("h2",{attrs:{id:"事务隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[s._v("#")]),s._v(" 事务隔离级别")]),s._v(" "),t("p",[t("strong",[s._v("注意：事务隔离级别越高，数据越安全，但是性能越低。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL/%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.png",alt:""}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看事务隔离级别")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@TRANSACTION_ISOLATION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- mysql 默认是  REPEATABLE READ")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置事务隔离级别")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" \n{ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNCOMMITTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEATABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SERIALIZABLE")]),s._v(" }\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);