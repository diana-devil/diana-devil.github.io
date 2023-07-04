(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{458:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"栈基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈基础"}},[t._v("#")]),t._v(" 栈基础")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("理解栈")]),t._v(" "),s("ul",[s("li",[t._v("栈是一种“操作受限”的线性表，只允许在一端插入和删除数据。")]),t._v(" "),s("li",[t._v("当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、先进后出的特性，这时我们就应该首选“栈”这种数据结构")])])]),t._v(" "),s("li",[s("p",[t._v("实现栈")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("顺序栈")]),t._v("——用数组实现的栈")]),t._v(" "),s("li",[s("strong",[t._v("链式栈")]),t._v("——用链表实现的栈")]),t._v(" "),s("li",[s("strong",[t._v("复杂度")]),t._v(" "),s("ul",[s("li",[t._v("不管是顺序栈还是链式栈，入栈、出栈只涉及栈顶个别数据的操作，所以时间复杂度都是 ==O(1)==。")]),t._v(" "),s("li",[t._v("在入栈和出栈过程中，只需要一两个临时变量存储空间，所以空间复杂度是 ==O(1)==。")])])])])])]),t._v(" "),s("h2",{attrs:{id:"栈在函数调用中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈在函数调用中的应用"}},[t._v("#")]),t._v(" 栈在函数调用中的应用")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成**“栈”**这种结构, 用来存储函数调用时的临时变量。每进入一个函数，就会将临时变量作为一个栈帧入栈，当被调用函数执行完成，返回之后，将这个函数对应的栈帧出栈。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("为什么函数调用要用栈来保存临时变量呢？")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t其实，我们不一定非要用栈来保存临时变量，只不过如果这个函数调用符合后进先出的特性，用栈这种数据结构来实现，是最顺理成章的选择。")]),t._v(" "),s("p",[t._v("​\t 从调用函数进入被调用函数，对于数据来说，变化的是什么呢？是作用域。所以根本上，只要能保证每进入一个新的函数，都是一个新的作用域就可以。而要实现这个，用栈就非常方便。")]),t._v(" "),s("p",[t._v("​\t在进入被调用函数的时候，分配一段栈空间给这个函数的变量，在函数结束的时候，将栈顶复位，正好回到调用函数的作用域内。")])])]),t._v(" "),s("li",[s("p",[t._v("程序调用add函数时的栈内 情况")])])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"/assets/算法/程序中栈的运用.webp"}}),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   reuturn "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"栈在表达式求值中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈在表达式求值中的应用"}},[t._v("#")]),t._v(" 栈在表达式求值中的应用")]),t._v(" "),s("p",[s("code",[t._v("3+5*8-6")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("实现流程")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t编译器就是通过两个栈来实现的。"),s("strong",[t._v("其中一个保存操作数的栈，另一个是保存运算符的栈。")])]),t._v(" "),s("ol",[s("li",[t._v("我们从左向右遍历表达式，当遇到数字，我们就直接压入操作数栈；")]),t._v(" "),s("li",[t._v("当遇到运算符，就与运算符栈的栈顶元素进行比较。")]),t._v(" "),s("li",[t._v("如果比运算符栈顶元素的优先级高，就将当前运算符压入栈；")]),t._v(" "),s("li",[s("strong",[t._v("如果比运算符栈顶元素的优先级低或者相同")]),t._v("，从运算符栈中取栈顶运算符，从操作数栈的栈顶取 2 个操作数，然后进行计算，再把计算完的结果压入操作数栈，继续比较。")])])])]),t._v(" "),s("li",[s("p",[t._v("图示")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"/assets/算法/栈计算四则运算.webp"}})])]),t._v(" "),s("h2",{attrs:{id:"栈在括号匹配中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈在括号匹配中的应用"}},[t._v("#")]),t._v(" 栈在括号匹配中的应用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("背景")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t我们假设表达式中只包含三种括号，圆括号 ()、方括号[]和花括号{}，并且它们可以任意嵌套。那我现在给你一个包含三种括号的表达式字符串，如何检查它是否合法呢？")])])]),t._v(" "),s("li",[s("p",[t._v("实现流程")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 我们用栈来保存未匹配的左括号，从左到右依次扫描字符串。\n1. 当扫描到左括号时，则将其压入栈中；\n1. 当扫描到右括号时，从栈顶取出一个左括号。如果能够匹配，比如“(”跟“)”匹配，“[”跟“]”匹配，“{”跟“}”匹配，则继续扫描剩下的字符串。\n1. **如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，则说明为非法格式。**\n")])])])])])]),t._v(" "),s("h2",{attrs:{id:"栈-如何实现浏览器的前进和后退功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈-如何实现浏览器的前进和后退功能"}},[t._v("#")]),t._v(" 栈：如何实现浏览器的前进和后退功能？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("实现流程")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("我们使用两个栈，X 和 Y，我们把首次浏览的页面依次压入栈 X，当点击后退按钮时，再依次从栈 X 中出栈，并将出栈的数据依次放入栈 Y。")])]),t._v(" "),s("li",[s("p",[t._v("当我们点击前进按钮时，我们依次从栈 Y 中取出数据，放入栈 X 中。")])]),t._v(" "),s("li",[s("p",[t._v("当栈 X 中没有数据时，那就说明没有页面可以继续后退浏览了。当栈 Y 中没有数据，那就说明没有页面可以点击前进按钮浏览了。")])]),t._v(" "),s("li",[s("p",[t._v("当栈Y中有数据c，而此时又访问了新的网页，X中入栈了新成员，则页面c无法在通过前进、后退按钮重复查看了，此时要情空栈Y。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/assets/算法/前进后退1.webp"}}),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/assets/算法/前进后退2.webp"}})])])])])]),t._v(" "),s("h2",{attrs:{id:"jvm内存中的栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存中的栈"}},[t._v("#")]),t._v(" JVM内存中的栈")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("问题")]),t._v(" "),s("blockquote",[s("p",[t._v("我们都知道，JVM 内存管理中有个“堆栈”的概念。==栈内存用来存储局部变量和方法调用，堆内存用来存储 Java 中的对象。==")]),t._v(" "),s("p",[s("strong",[t._v("那 JVM 里面的“栈”跟我们这里说的“栈”是不是一回事呢？如果不是，那它为什么又叫作“栈”呢？")])])])]),t._v(" "),s("li",[s("p",[t._v("解答")]),t._v(" "),s("p",[t._v("**内存中的堆栈和数据结构堆栈不是一个概念，可以说内存中的堆栈是真实存在的物理区，数据结构中的堆栈是抽象的数据存储结构。  **")])])]),t._v(" "),s("blockquote",[s("p",[t._v("​\t内存空间在逻辑上分为三部分：代码区、静态数据区和动态数据区，动态数据区又分为栈区和堆区。")]),t._v(" "),s("p",[t._v("​\t代码区：存储方法体的二进制代码。高级调度（作业调度）、中级调度（内存调度）、低级调度（进程调度）控制代码区执行代码的切换。")]),t._v(" "),s("p",[t._v("​\t静态数据区：存储全局变量、静态变量、常量，常量包括final修饰的常量和String常量。系统自动分配和回收。")]),t._v(" "),s("p",[t._v("​\t 栈区：存储运行方法的形参、局部变量、返回值。由系统自动分配和回收。")]),t._v(" "),s("p",[t._v("​\t堆区：new一个对象的引用或地址存储在栈区，指向该对象存储在堆区中的真实数据。")])]),t._v(" "),s("p",[s("strong",[t._v("它们都有“栈”的特性——后进先出，所以都叫“栈”也无可厚非。可以把内存中的栈当中数据结构栈的一种实现")])])])}),[],!1,null,null,null);s.default=r.exports}}]);