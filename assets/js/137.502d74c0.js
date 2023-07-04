(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{476:function(t,i,e){"use strict";e.r(i);var a=e(2),v=Object(a.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"git常用命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" Git常用命令")]),t._v(" "),i("h3",{attrs:{id:"git全局设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git全局设置"}},[t._v("#")]),t._v(" Git全局设置")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("设置用户信息")]),t._v(" "),i("blockquote",[i("p",[i("code",[t._v('git config -- global user.name "xxx"')]),t._v("————设置用户名，随便设")]),t._v(" "),i("p",[i("code",[t._v('git config -- global user.email "xxx.com"')]),t._v("————设置用户邮箱，随便设")])])]),t._v(" "),i("li",[i("p",[t._v("查看配置信息")]),t._v(" "),i("blockquote",[i("p",[i("code",[t._v("git config --list")])])])])]),t._v(" "),i("h3",{attrs:{id:"获取git仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获取git仓库"}},[t._v("#")]),t._v(" 获取Git仓库")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("从本地初始化一个Git仓库（不常用）")]),t._v(" "),i("blockquote",[i("ol",[i("li",[t._v("任意创建一个空目录，作为本地git仓库。")]),t._v(" "),i("li",[t._v("在 Git bash 中输入  "),i("code",[t._v("git init")]),t._v("  ,可以生成一个本地仓库")])])])]),t._v(" "),i("li",[i("p",[t._v("从远程仓库克隆")]),t._v(" "),i("blockquote",[i("ul",[i("li",[i("p",[i("code",[t._v("git clone")]),t._v("+地址")])]),t._v(" "),i("li",[i("p",[t._v("注意，仓库之间不能嵌套")])])])])])]),t._v(" "),i("h3",{attrs:{id:"工作区、暂存区、版本库-概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#工作区、暂存区、版本库-概念"}},[t._v("#")]),t._v(" 工作区、暂存区、版本库 概念")]),t._v(" "),i("p",[i("img",{attrs:{src:"/assets/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/Git/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.png",alt:""}})]),t._v(" "),i("h3",{attrs:{id:"git工作区中文件的两种状态"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git工作区中文件的两种状态"}},[t._v("#")]),t._v(" Git工作区中文件的两种状态")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("untracked")]),t._v("未跟踪（未被纳入版本控制）\n"),i("ul",[i("li",[i("strong",[t._v("新创建的文件，未执行"),i("code",[t._v("git add")]),t._v("+(file/*)(可以指定当前文件 file，也可以指定"),i("code",[t._v("*")]),t._v(",表示提交所有)属于未跟踪状态")])])])]),t._v(" "),i("li",[i("code",[t._v("tracked")]),t._v("已跟踪（被纳入版本控制）\n"),i("ul",[i("li",[i("code",[t._v("Unmodified")]),t._v("  未修改状态——"),i("strong",[t._v("执行"),i("code",[t._v("git commit")]),t._v("命令后，被提交的文件，是未修改状态")])]),t._v(" "),i("li",[i("code",[t._v("Modified")]),t._v(" 已修改状态——"),i("strong",[t._v("提交文件后，对文件进行了修改，就是已修改状态")])]),t._v(" "),i("li",[i("code",[t._v("Staged")]),t._v("已暂存状态———— "),i("strong",[t._v("执行"),i("code",[t._v("git add *")]),t._v("命令后，会将信息存入index文件中，属于暂存状态")])])])])]),t._v(" "),i("h3",{attrs:{id:"本地仓库操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库操作"}},[t._v("#")]),t._v(" 本地仓库操作")]),t._v(" "),i("ul",[i("li",[i("p",[i("code",[t._v("git status")]),t._v("——查看文件状态")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git add")]),t._v("——将文件的修改加入暂存区")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git add *")]),t._v("——对工作区所有文件执行操作")]),t._v(" "),i("li",[i("code",[t._v("git add user.txt")]),t._v("——对工作区指定文件进行操作")]),t._v(" "),i("li",[i("strong",[t._v("执行后，信息被存入"),i("code",[t._v("index")]),t._v("文件下,文件状态由"),i("code",[t._v("untracked")]),t._v("变为"),i("code",[t._v("Staged")])])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git reset")]),t._v("——将暂存区的文件取消暂存或者是切换到指定版本")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset user.txt")]),t._v("——对工作区指定文件进行操作\n"),i("ul",[i("li",[i("strong",[t._v("取消暂存状态，执行后文件状态更改为"),i("code",[t._v("untracked")])])])])]),t._v(" "),i("li",[i("code",[t._v("git reset --hard be17bf08e857f0ad8aff68df5f988dc7e20eab50")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("会回到指定版本号的版本状态，版本号由"),i("code",[t._v("git log")]),t._v(" 提供")])])])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git commit")]),t._v("——将暂存区的文件修改提交到版本库")]),t._v(" "),i("ul",[i("li",[i("code",[t._v('git commit -m "init" user.txt')]),t._v(" "),i("ul",[i("li",[i("code",[t._v('-m "init" 表示msg,本次提交要说明的信息,日志显示的时候，会显示该信息')])]),t._v(" "),i("li",[i("strong",[t._v("双引号内可以跟中文")])])])]),t._v(" "),i("li",[i("strong",[t._v("执行后，状态由"),i("code",[t._v("Staged")]),t._v("变为"),i("code",[t._v("Unmodified")])])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git log")]),t._v("——查看日志")]),t._v(" "),i("ul",[i("li",[t._v("执行后，会显示之前的"),i("code",[t._v("git commit")]),t._v("信息")])]),t._v(" "),i("div",{staticClass:"language-xml extra-class"},[i("pre",{pre:!0,attrs:{class:"language-xml"}},[i("code",[t._v("$ git log\ncommit be17bf08e857f0ad8aff68df5f988dc7e20eab50 (HEAD -> master)\nDate:   Mon May 16 15:09:16 2022 +0800\n    \n    update user.txt\n    \ncommit 04a05f597aa85ca85c7cc0767828e497f0b320b3\nDate:   Mon May 16 14:56:33 2022 +0800\n    \n    init\n")])])])])]),t._v(" "),i("h3",{attrs:{id:"远程仓库操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库操作"}},[t._v("#")]),t._v(" 远程仓库操作")]),t._v(" "),i("ul",[i("li",[i("p",[i("code",[t._v("git remote")]),t._v("——查看远程仓库")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git remote -v")]),t._v("——查看详细信息")])]),t._v(" "),i("div",{staticClass:"language-git extra-class"},[i("pre",{pre:!0,attrs:{class:"language-git"}},[i("code",[i("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git remote"),i("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -v")])]),t._v("\norigin  https://gitee.com/diana-liangbing/hellogit.git (fetch)\norigin  https://gitee.com/diana-liangbing/hellogit.git (push)\n")])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git remote add")]),t._v("——添加远程仓库(将本地仓库和远程仓库关联起来)")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git remote add origin https://gitee.com/diana-liangbing/repo1.git")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("origin")]),t._v(",不是默认，可改，但是推荐这个")]),t._v(" "),i("li",[i("code",[t._v("https://gitee.com/diana-liangbing/repo1.git")]),t._v(",对应的远程仓库的链接")])])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git clone")]),t._v("——从远程仓库克隆")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git clone https://gitee.com/diana-liangbing/hellogit.git")]),t._v(",将远程仓库克隆下来")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git pull")]),t._v("——从远程仓库拉取")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("git pull origin master")])]),t._v(" "),i("li",[i("strong",[t._v("git pull [remote-name] [branch-name]")])])]),t._v(" "),i("blockquote",[i("ul",[i("li",[t._v("作用是从远程仓库获取最先版本并合并到本地仓库")]),t._v(" "),i("li",[t._v("如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存在文件，在拉取的时候会报错\n"),i("ul",[i("li",[t._v("在"),i("code",[t._v("git pull")]),t._v("后加参数 "),i("code",[t._v("--allow-unrelated-histories")])]),t._v(" "),i("li",[t._v("按"),i("code",[t._v("i")]),t._v("进入插入模式，可以输入信息")]),t._v(" "),i("li",[t._v("输入完成，按 esc，退出编辑")]),t._v(" "),i("li",[t._v("输入"),i("code",[t._v("：wq")]),t._v(" 保存并退出")])])])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git push")]),t._v("——推送到远程仓库")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("git push origin master")])]),t._v(" "),i("li",[i("strong",[t._v("git push [remote-name] [branch-name]")])])]),t._v(" "),i("blockquote",[i("ul",[i("li",[t._v("将文件推送到远程仓库之前，要先提交到本地仓库")])]),t._v(" "),i("div",{staticClass:"language-xml extra-class"},[i("pre",{pre:!0,attrs:{class:"language-xml"}},[i("code",[t._v('git add *\ngit commit -m "init" 111.txt\ngit push origin master\n')])])]),i("ul",[i("li",[i("code",[t._v("origin")]),t._v(" 表示远程仓库的名称，可以用 "),i("code",[t._v("git remote")]),t._v("得到")]),t._v(" "),i("li",[i("code",[t._v("master")]),t._v(" 表示当前分支，"),i("code",[t._v("master")]),t._v("是主分支，默认分支")])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git rm -r --cached .idea")])]),t._v(" "),i("ul",[i("li",[t._v("删除掉git文件列表里的文件，保留本地文件  ———— "),i("code",[t._v("--cached")])]),t._v(" "),i("li",[t._v("在云端删除idea文件，但是本地保留着")])])])]),t._v(" "),i("h3",{attrs:{id:"本地仓库同时关联多个远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库同时关联多个远程仓库"}},[t._v("#")]),t._v(" 本地仓库同时关联多个远程仓库")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("分开推送")]),t._v(" "),i("p",[t._v("首先查看当前本地仓库所关联的远程仓库")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),i("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\norigin  https://gitee.com/diana-liangbing/hellogit.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin  https://gitee.com/diana-liangbing/hellogit.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),i("p",[t._v("然后添加额外的远程仓库")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee https://gitee.com/xxx/xxx.git\n")])])]),i("p",[t._v("这里的重点在于"),i("code",[t._v("gitee")]),t._v("这个，相当于额外命名了一个远程仓库；此时再去运行"),i("code",[t._v("git remote -v")])]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),i("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\norigin  https://gitee.com/diana-liangbing/hellogit.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin  https://gitee.com/diana-liangbing/hellogit.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngitee  https://gitee.com/xxx/xxx.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngitee  https://gitee.com/xxx/xxx.git "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),i("p",[t._v("如果想要推送的话，需要分开推送")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push  gitee master // 到gitee\n$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push  origin master // 到origin\n")])])]),i("p",[t._v("这种情况，适用于仓库较少，且需要区别管理的情况。")])]),t._v(" "),i("li",[i("p",[t._v("同步推送")]),t._v(" "),i("p",[t._v("如果仓库数量多，且需要同步进行推送，可以采用这个方法")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url "),i("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--add")]),t._v(" origin https://gitee.com/xxx/xxx.git\n")])])]),i("p",[t._v("这样，多个仓库就都关联到了"),i("code",[t._v("origin")]),t._v("上，同步推送的话，")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push  origin master // 同步推送\n")])])])])]),t._v(" "),i("h3",{attrs:{id:"分支操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("同一个仓库可以有多个分支，各个分支相互独立，互不干扰，"),i("code",[t._v("git init")]),t._v("时，会默认创建一个master分支")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git branch")]),t._v(" ——查看分支")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git branch")]),t._v("——列出所有本地分支\n"),i("ul",[i("li",[t._v("当前分支是绿色的，且前加了※")])])]),t._v(" "),i("li",[i("code",[t._v("git branch -r")]),t._v("——列出所有远程分支")]),t._v(" "),i("li",[i("code",[t._v("git branch -a")]),t._v("——列出所有本地分支和远程分支")]),t._v(" "),i("li",[i("code",[t._v("git branch -d b1")]),t._v("——删除b1对应分支")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git branch [name]")]),t._v("——创建分支")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git branch b1")]),t._v("——创建分支b1 --名字随便取")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git checkout [name]")]),t._v("——切换分支")]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("每个分支相互独立，本地仓库的文件显示的是当前分支的文件")]),t._v("，可以看到b1分支有一个b1.txt，而master分支下没有")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git checkout b1")]),t._v("——切换到b1分支")])])]),t._v(" "),i("p",[i("img",{attrs:{src:"/assets/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/Git/b1%E5%88%86%E6%94%AF.png",alt:""}})]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git checkout master")]),t._v("——切换到master分支")])]),t._v(" "),i("p",[i("img",{attrs:{src:"/assets/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/Git/mster%E5%88%86%E6%94%AF.png",alt:""}})])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git push [remote-name] [branch-name]")]),t._v("——推送至远程仓库分支")]),t._v(" "),i("div",{staticClass:"language-xml extra-class"},[i("pre",{pre:!0,attrs:{class:"language-xml"}},[i("code",[t._v("$ git push origin b1-- 将b1分支推送到远程仓库\n\nTotal 0 (delta 0), reused 0 (delta 0), pack-reused 0\nremote: Powered by GITEE.COM [GNK-6.3]\nremote: Create a pull request for 'b1' on Gitee by visiting:\nremote:     https://gitee.com/diana-liangbing/repo1/pull/new/diana-liangbing:b1...diana-liangbing:master\nTo https://gitee.com/diana-liangbing/repo1.git\n * [new branch]      b1 -> b1\n")])])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git merge [name]")]),t._v("——合并分支")]),t._v(" "),i("ul",[i("li",[i("p",[i("code",[t._v("git merge b1")]),t._v("——现处在master分支，要合并b1分支下的文件")])]),t._v(" "),i("li",[i("p",[t._v("合并冲突    "),i("strong",[t._v("(两个分支下都有这个文件，且文件内容不同，就会出现冲突)")])]),t._v(" "),i("div",{staticClass:"language-xml extra-class"},[i("pre",{pre:!0,attrs:{class:"language-xml"}},[i("code",[t._v("$ git merge b1\nAuto-merging b1.txt\nCONFLICT (content): Merge conflict in b1.txt\nAutomatic merge failed; fix conflicts and then commit the result.\n\n--------------------------------------------------冲突时  master分支下  b1.txt内部文件-------------------------------------------\nb1 分支独有\n<<<<<<< HEAD\nmaster修改了\n=======\nb1分支修改了\n\n>>>>>>> b1\n")])])])]),t._v(" "),i("li",[i("p",[t._v("冲突解决 （手动修改文件……）")]),t._v(" "),i("ul",[i("li",[t._v("手动修改文件，达到想要的结果")]),t._v(" "),i("li",[i("code",[t._v("git add")])]),t._v(" "),i("li",[i("code",[t._v('git commit -m "手动修改了融合错误" *')]),t._v(" "),i("ul",[i("li",[t._v("报错：fatal: cannot do a partial commit during a merge.")]),t._v(" "),i("li",[i("strong",[t._v("解决方法:  在原命令后面加  "),i("code",[t._v("-i")])])]),t._v(" "),i("li",[i("code",[t._v('git commit -m "手动修改了融合错误" * -i')]),t._v("---——错误解决")])])]),t._v(" "),i("li",[i("code",[t._v("git push origin master")])])]),t._v(" "),i("p",[i("img",{attrs:{src:"/assets/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/Git/master%E5%88%86%E6%94%AF%E4%BF%AE%E6%94%B9.png",alt:""}})])])])])]),t._v(" "),i("h3",{attrs:{id:"标签操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#标签操作"}},[t._v("#")]),t._v(" 标签操作")]),t._v(" "),i("ul",[i("li",[t._v("Git中的标签，指的是某个分支某个特定时间点的状态。通过标签，可以很方便的切换到标记时的状态\n"),i("ul",[i("li",[t._v("比较有代表性的是 人们会使用这个功能来标记发布节点（v1.0  v1.2）")])])]),t._v(" "),i("li",[i("code",[t._v("git tag")]),t._v(" ——列出已有标签")]),t._v(" "),i("li",[i("code",[t._v("git tag [name]")]),t._v("——创建标签\n"),i("ul",[i("li",[i("code",[t._v("git tag v1")])])])]),t._v(" "),i("li",[i("code",[t._v("git push [remote-name] [tag-name]")]),t._v("——将标签推送至远程仓库\n"),i("ul",[i("li",[i("code",[t._v("git push origin v1")])]),t._v(" "),i("li",[t._v("记录当前工作区状态，并完成上传")])])]),t._v(" "),i("li",[i("code",[t._v("git checkout -b [branch] [tag-name]")]),t._v("——检出标签（将当时标签标记的代码clone下来）\n"),i("ul",[i("li",[t._v("检出标签时需要新建一个分支来指向标签")])])])]),t._v(" "),i("h2",{attrs:{id:"idea-集合git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#idea-集合git"}},[t._v("#")]),t._v(" Idea 集合Git")]),t._v(" "),i("h3",{attrs:{id:"在idea中配置git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在idea中配置git"}},[t._v("#")]),t._v(" 在IDEA中配置Git")]),t._v(" "),i("p",[t._v("设置——>git——>git可执行文件目录——>git.exe")]),t._v(" "),i("h3",{attrs:{id:"获取git仓库-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获取git仓库-2"}},[t._v("#")]),t._v(" 获取Git仓库")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("新建本地仓库")]),t._v(" "),i("blockquote",[i("p",[t._v("vcs——>创建Git仓库")])])]),t._v(" "),i("li",[i("p",[t._v("链接到远程仓库")]),t._v(" "),i("blockquote",[i("p",[t._v("VCS——>从版本控制中获取——>输入远程仓库的url")])])])]),t._v(" "),i("h3",{attrs:{id:"本地仓库操作-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库操作-2"}},[t._v("#")]),t._v(" 本地仓库操作")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("文件未加入暂存区(红色）")])]),t._v(" "),i("li",[i("p",[t._v("将文件加入暂存区（绿色）")]),t._v(" "),i("ul",[i("li",[t._v("创建文件时，自动提示，点击确定，即可加入暂存区")]),t._v(" "),i("li",[t._v("右键单击Git——>添加")])])]),t._v(" "),i("li",[i("p",[t._v("将暂存区文件提交到版本库（黑色）")]),t._v(" "),i("ul",[i("li",[t._v("右键单击Git——>添加文件，前提是 必须在缓存区里面")]),t._v(" "),i("li",[i("strong",[t._v("简单方式  右上角  对号——>提交 ，不用先存暂存区，直接点√就可以")])])])]),t._v(" "),i("li",[i("p",[t._v("查看日志")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("简单方式  右上角  小表符号 可以查看日志信息")])])])])]),t._v(" "),i("h3",{attrs:{id:"远程仓库操作-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库操作-2"}},[t._v("#")]),t._v(" 远程仓库操作")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("查看远程仓库")]),t._v(" "),i("ul",[i("li",[t._v("右键单击文件夹目录，Git——>管理远程")])])]),t._v(" "),i("li",[i("p",[t._v("添加远程仓库")]),t._v(" "),i("ul",[i("li",[t._v("右键单击文件夹目录，Git——>管理远程——>＋  加号，— 减号，修改")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("推送至远程仓库")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("右上角  对号——>提交并推送")]),t._v(" ，适用用还没有提交到版本库的文件")]),t._v(" "),i("li",[i("strong",[t._v("右上角  上箭头——>推送")]),t._v("，适用于已经提交到版本库的文件")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("从远程仓库拉取")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("右上角  下箭头——>更新")])])])])]),t._v(" "),i("h3",{attrs:{id:"分支操作-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支操作-2"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("查看分支")]),t._v(" "),i("ul",[i("li",[t._v("右下角")])]),t._v(" "),i("p",[i("img",{attrs:{src:"/assets/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/Git/%E5%88%86%E6%94%AF.png",alt:""}})])]),t._v(" "),i("li",[i("p",[t._v("创建分支")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("点开有个新分支")])])])]),t._v(" "),i("li",[i("p",[t._v("切换分支")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("点开，点击要切换的分支，最上面有个签出")])])])]),t._v(" "),i("li",[i("p",[t._v("将分支推送到远程仓库")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("点开，点击要切换的分支，点击推送")])])])]),t._v(" "),i("li",[i("p",[t._v("合并分支")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("点开，点击要切换的分支，点击合并或者基变")])])])])])])}),[],!1,null,null,null);i.default=v.exports}}]);