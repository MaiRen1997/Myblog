(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{700:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"hive简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive简介"}},[s._v("#")]),s._v(" Hive简介")]),s._v(" "),t("p",[s._v("Hive是Facebook开源的一款基于Hadoop的数据仓库工具，是目前应用最广泛的大数据处理解决方案，它能将SQL查询转变为 MapReduce（Google提出的一个软件架构，用于大规模数据集的并行运算）任务，对SQL提供了完美的支持，能够非常方便的实现大数据统计。")]),s._v(" "),t("img",{attrs:{src:"https://gitee.com/jackfrued/mypic/raw/master/20220210080608.png"}}),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("说明")]),s._v("：可以通过"),t("a",{attrs:{href:"https://www.edureka.co/blog/hadoop-ecosystem",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.edureka.co/blog/hadoop-ecosystem"),t("OutboundLink")],1),s._v("来了解Hadoop生态圈。")])]),s._v(" "),t("p",[s._v("如果要简单的介绍Hive，那么以下两点是其核心：")]),s._v(" "),t("ol",[t("li",[s._v("把HDFS中结构化的数据映射成表。")]),s._v(" "),t("li",[s._v("通过把Hive-SQL进行解析和转换，最终生成一系列基于Hadoop的MapReduce任务/Spark任务，通过执行这些任务完成对数据的处理。也就是说，即便不学习Java、Scala这样的编程语言，一样可以实现对数据的处理。")])]),s._v(" "),t("p",[s._v("Hive和传统关系型数据库的对比如下表所示。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th",[s._v("Hive")]),s._v(" "),t("th",[s._v("RDBMS")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("查询语言")]),s._v(" "),t("td",[s._v("HQL")]),s._v(" "),t("td",[s._v("SQL")])]),s._v(" "),t("tr",[t("td",[s._v("存储数据")]),s._v(" "),t("td",[s._v("HDFS")]),s._v(" "),t("td",[s._v("本地文件系统")])]),s._v(" "),t("tr",[t("td",[s._v("执行方式")]),s._v(" "),t("td",[s._v("MapReduce / Spark")]),s._v(" "),t("td",[s._v("Executor")])]),s._v(" "),t("tr",[t("td",[s._v("执行延迟")]),s._v(" "),t("td",[s._v("高")]),s._v(" "),t("td",[s._v("低")])]),s._v(" "),t("tr",[t("td",[s._v("数据规模")]),s._v(" "),t("td",[s._v("大")]),s._v(" "),t("td",[s._v("小")])])])]),s._v(" "),t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("搭建如下图所示的大数据平台。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/jackfrued/mypic/raw/master/20220210080638.png",alt:"bigdata-basic-env"}})])]),s._v(" "),t("li",[t("p",[s._v("通过Client节点访问大数据平台。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/jackfrued/mypic/raw/master/20220210080655.png",alt:"bigdata-vpc"}})])]),s._v(" "),t("li",[t("p",[s._v("创建文件Hadoop的文件系统。")]),s._v(" "),t("div",{staticClass:"language-Shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hadoop fs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mkdir")]),s._v(" /data\nhadoop fs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-chmod")]),s._v(" g+w /data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将准备好的数据文件拷贝到Hadoop文件系统中。")]),s._v(" "),t("div",{staticClass:"language-Shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hadoop fs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-put")]),s._v(" /home/ubuntu/data/* /data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"创建-删除数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-删除数据库"}},[s._v("#")]),s._v(" 创建/删除数据库")]),s._v(" "),t("p",[s._v("创建。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-Shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hive "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create database demo;"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("删除。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("切换。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("p",[s._v("Hive的数据类型如下所示。")]),s._v(" "),t("p",[s._v("基本数据类型。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("占用空间")]),s._v(" "),t("th",[s._v("支持版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("tinyint")]),s._v(" "),t("td",[s._v("1-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("smallint")]),s._v(" "),t("td",[s._v("2-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("int")]),s._v(" "),t("td",[s._v("4-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("bigint")]),s._v(" "),t("td",[s._v("8-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("boolean")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("float")]),s._v(" "),t("td",[s._v("4-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("double")]),s._v(" "),t("td",[s._v("8-Byte")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("string")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("binary")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.8版本")])]),s._v(" "),t("tr",[t("td",[s._v("timestamp")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.8版本")])]),s._v(" "),t("tr",[t("td",[s._v("decimal")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.11版本")])]),s._v(" "),t("tr",[t("td",[s._v("char")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.13版本")])]),s._v(" "),t("tr",[t("td",[s._v("varchar")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.12版本")])]),s._v(" "),t("tr",[t("td",[s._v("date")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("0.12版本")])])])]),s._v(" "),t("p",[s._v("复杂数据类型。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("描述")]),s._v(" "),t("th",[s._v("例子")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("struct")]),s._v(" "),t("td",[s._v("和C语言中的结构体类似")]),s._v(" "),t("td",[t("code",[s._v("struct<first_name:string, last_name:string>")])])]),s._v(" "),t("tr",[t("td",[s._v("map")]),s._v(" "),t("td",[s._v("由键值对构成的元素的集合")]),s._v(" "),t("td",[t("code",[s._v("map<string,int>")])])]),s._v(" "),t("tr",[t("td",[s._v("array")]),s._v(" "),t("td",[s._v("具有相同类型的变量的容器")]),s._v(" "),t("td",[t("code",[s._v("array<string>")])])])])]),s._v(" "),t("h3",{attrs:{id:"创建和使用表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建和使用表"}},[s._v("#")]),s._v(" 创建和使用表")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建内部表。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" user_info \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nuser_id string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nuser_name string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \nsex string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nage "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ncity string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nfirstactivetime string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nextra1 string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nextra2 map"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" format delimited "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),s._v("\ncollection items "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v("\nmap "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lines")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v("\nstored "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" textfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("加载数据。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" inpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/ubuntu/data/user_info/user_info.txt'")]),s._v(" overwrite "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" user_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" inpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/data/user_info/user_info.txt'")]),s._v(" overwrite "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" user_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建分区表。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" user_trade \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nuser_name string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\npiece "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nprice "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\npay_amount "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ngoods_category string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\npay_time "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \npartitioned "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dt string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" format delimited "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("设置动态分区。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dynamic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dynamic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nonstrict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dynamic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("partitions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dynamic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("partitions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pernode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("拷贝数据（Shell命令）。")]),s._v(" "),t("div",{staticClass:"language-Shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hdfs dfs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-put")]),s._v(" /home/ubuntu/data/user_trade/* /user/hive/warehouse/demo.db/user_trade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修复分区表。")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("msck repair "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" user_trade"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),t("h4",{attrs:{id:"基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[s._v("#")]),s._v(" 基本语法")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_info "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" city"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'beijing'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" sex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'female'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" piece"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pay_amount "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_trade "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-03-24'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" goods_category"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'food'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"group-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" group by")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询2019年1月到4月，每个品类有多少人购买，累计金额是多少")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" goods_category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" user_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pay_amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_trade "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-01-01'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-04-30'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" goods_category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询2019年4月支付金额超过5万元的用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pay_amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_trade "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-04-01'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-04-30'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" user_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pay_amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"order-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[s._v("#")]),s._v(" order by")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询2019年4月支付金额最多的用户前5名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pay_amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_trade "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-04-01'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-04-30'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" user_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"常用函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用函数"}},[s._v("#")]),s._v(" 常用函数")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("from_unixtime")]),s._v("：将时间戳转换成日期")]),s._v(" "),t("li",[t("code",[s._v("unix_timestamp")]),s._v("：将日期转换成时间戳")]),s._v(" "),t("li",[t("code",[s._v("datediff")]),s._v("：计算两个日期的时间差")]),s._v(" "),t("li",[t("code",[s._v("if")]),s._v("：根据条件返回不同的值")]),s._v(" "),t("li",[t("code",[s._v("substr")]),s._v("：字符串取子串")]),s._v(" "),t("li",[t("code",[s._v("get_json_object")]),s._v("：从JSON字符串中取出指定的"),t("code",[s._v("key")]),s._v("对应的"),t("code",[s._v("value")]),s._v("，如："),t("code",[s._v("get_json_object(info, '$.first_name')")]),s._v("。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);