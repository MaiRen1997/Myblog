(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{713:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"使用缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存"}},[s._v("#")]),s._v(" 使用缓存")]),s._v(" "),t("p",[s._v("通常情况下，Web应用的性能瓶颈都会出现在关系型数据库上，当并发访问量较大时，如果所有的请求都需要通过关系型数据库完成数据持久化操作，那么数据库一定会不堪重负。优化Web应用性能最为重要的一点就是使用缓存，把那些数据体量不大但访问频率非常高的数据提前加载到缓存服务器中，这又是典型的空间换时间的方法。通常缓存服务器都是直接将数据置于内存中而且使用了非常高效的数据存取策略（哈希存储、键值对方式等），在读写性能上远远优于关系型数据库的，因此我们可以让Web应用接入缓存服务器来优化其性能，其中一个非常好的选择就是使用Redis。")]),s._v(" "),t("p",[s._v("Web应用的缓存架构大致如下图所示。")]),s._v(" "),t("p",[t("img",{attrs:{src:"res/redis-cache-service.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"django项目接入redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#django项目接入redis"}},[s._v("#")]),s._v(" Django项目接入Redis")]),s._v(" "),t("p",[s._v("在此前的课程中，我们介绍过Redis的安装和使用，此处不再进行赘述。如果需要在Django项目中接入Redis，可以使用三方库"),t("code",[s._v("django-redis")]),s._v("，这个三方库又依赖了一个名为"),t("code",[s._v("redis")]),s._v(" 的三方库，它封装了对Redis的各种操作。")]),s._v(" "),t("p",[s._v("安装"),t("code",[s._v("django-redis")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" django-redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改Django配置文件中关于缓存的配置。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("CACHES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定通过django-redis接入Redis服务")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BACKEND'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_redis.cache.RedisCache'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器的URL")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'LOCATION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis://1.2.3.4:6379/0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis中键的前缀（解决命名冲突）")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'KEY_PREFIX'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vote'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他的配置选项")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OPTIONS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CLIENT_CLASS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_redis.client.DefaultClient'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接池（预置若干备用的Redis连接）参数")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CONNECTION_POOL_KWARGS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_connections'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接Redis的用户口令")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foobared'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("至此，我们的Django项目已经可以接入Redis，接下来我们修改项目代码，用Redis为之写的获取学科数据的接口提供缓存服务。")]),s._v(" "),t("h3",{attrs:{id:"为视图提供缓存服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为视图提供缓存服务"}},[s._v("#")]),s._v(" 为视图提供缓存服务")]),s._v(" "),t("h4",{attrs:{id:"声明式缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明式缓存"}},[s._v("#")]),s._v(" 声明式缓存")]),s._v(" "),t("p",[s._v("所谓声明式缓存是指不修改原来的代码，通过Python中的装饰器（代理）为原有的代码增加缓存功能。对于FBV，代码如下所示。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decorators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cache_page\n\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@api_view")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@cache_page")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("show_subjects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""获取学科数据"""')]),s._v("\n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Subject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SubjectSerializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" many"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'subjects'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("上面的代码通过Django封装的"),t("code",[s._v("cache_page")]),s._v("装饰器缓存了视图函数的返回值（响应对象），"),t("code",[s._v("cache_page")]),s._v("的本意是缓存视图函数渲染的页面，对于返回JSON数据的视图函数，相当于是缓存了JSON数据。在使用"),t("code",[s._v("cache_page")]),s._v("装饰器时，可以传入"),t("code",[s._v("timeout")]),s._v("参数来指定缓存过期时间，还可以使用"),t("code",[s._v("cache")]),s._v("参数来指定需要使用哪一组缓存服务来缓存数据。Django项目允许在配置文件中配置多组缓存服务，上面的"),t("code",[s._v("cache='default'")]),s._v("指定了使用默认的缓存服务（因为之前的配置文件中我们也只配置了名为"),t("code",[s._v("default")]),s._v("的缓存服务）。视图函数的返回值会被序列化成字节串放到Redis中（Redis中的str类型可以接收字节串），缓存数据的序列化和反序列化也不需要我们自己处理，因为"),t("code",[s._v("cache_page")]),s._v("装饰器会调用"),t("code",[s._v("django-redis")]),s._v("库中的"),t("code",[s._v("RedisCache")]),s._v("来对接Redis，该类使用了"),t("code",[s._v("DefaultClient")]),s._v("来连接Redis并使用了"),t("a",{attrs:{href:"https://python3-cookbook.readthedocs.io/zh_CN/latest/c05/p21_serializing_python_objects.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pickle序列化"),t("OutboundLink")],1),s._v("，"),t("code",[s._v("django_redis.serializers.pickle.PickleSerializer")]),s._v("是默认的序列化类。")]),s._v(" "),t("p",[s._v("如果缓存中没有学科的数据，那么通过接口访问学科数据时，我们的视图函数会通过执行"),t("code",[s._v("Subject.objects.all()")]),s._v("向数据库发出SQL语句来获得数据，视图函数的返回值会被缓存，因此下次请求该视图函数如果缓存没有过期，可以直接从缓存中获取视图函数的返回值，无需再次查询数据库。如果想了解缓存的使用情况，可以配置数据库日志或者使用Django-Debug-Toolbar来查看，第一次访问学科数据接口时会看到查询学科数据的SQL语句，再次获取学科数据时，不会再向数据库发出SQL语句，因为可以直接从缓存中获取数据。")]),s._v(" "),t("p",[s._v("对于CBV，可以利用Django中名为"),t("code",[s._v("method_decorator")]),s._v("的装饰器将"),t("code",[s._v("cache_page")]),s._v("这个装饰函数的装饰器放到类中的方法上，效果跟上面的代码是一样的。需要提醒大家注意的是，"),t("code",[s._v("cache_page")]),s._v("装饰器不能直接放在类上，因为它是装饰函数的装饰器，所以Django框架才提供了"),t("code",[s._v("method_decorator")]),s._v("来解决这个问题，很显然，"),t("code",[s._v("method_decorator")]),s._v("是一个装饰类的装饰器。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("utils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decorators "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" method_decorator\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decorators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cache_page\n\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@method_decorator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decorator"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cache_page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SubjectView")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListAPIView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""获取学科数据的视图类"""')]),s._v("\n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Subject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SubjectSerializer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"编程式缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程式缓存"}},[s._v("#")]),s._v(" 编程式缓存")]),s._v(" "),t("p",[s._v("所谓编程式缓存是指通过自己编写的代码来使用缓存服务，这种方式虽然代码量会稍微大一些，但是相较于声明式缓存，它对缓存的操作和使用更加灵活，在实际开发中使用得更多。下面的代码去掉了之前使用的"),t("code",[s._v("cache_page")]),s._v("装饰器，通过"),t("code",[s._v("django-redis")]),s._v("提供的"),t("code",[s._v("get_redis_connection")]),s._v("函数直接获取Redis连接来操作Redis。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("show_subjects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""获取学科数据"""')]),s._v("\n    redis_cli "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_redis_connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先尝试从缓存中获取学科数据")]),s._v("\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis_cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vote:polls:subjects'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果获取到学科数据就进行反序列化操作")]),s._v("\n        data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果缓存中没有获取到学科数据就查询数据库")]),s._v("\n        queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Subject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SubjectSerializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" many"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将查到的学科数据序列化后放到缓存中")]),s._v("\n        redis_cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vote:polls:subjects'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'subjects'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("需要说明的是，Django框架提供了"),t("code",[s._v("cache")]),s._v("和"),t("code",[s._v("caches")]),s._v("两个现成的变量来支持缓存操作，前者访问的是默认的缓存（名为"),t("code",[s._v("default")]),s._v("的缓存），后者可以通过索引运算获取指定的缓存服务（例如："),t("code",[s._v("caches['default']")]),s._v("）。向"),t("code",[s._v("cache")]),s._v("对象发送"),t("code",[s._v("get")]),s._v("和"),t("code",[s._v("set")]),s._v("消息就可以实现对缓存的读和写操作，但是这种方式能做的操作有限，不如上面代码中使用的方式灵活。还有一个值得注意的地方，由于可以通过"),t("code",[s._v("get_redis_connection")]),s._v("函数获得的Redis连接对象向Redis发起各种操作，包括"),t("code",[s._v("FLUSHDB")]),s._v("、"),t("code",[s._v("SHUTDOWN")]),s._v("等危险的操作，所以在实际商业项目开发中，一般都会对"),t("code",[s._v("django-redis")]),s._v("再做一次封装，例如封装一个工具类，其中只提供了项目需要用到的缓存操作的方法，从而避免了直接使用"),t("code",[s._v("get_redis_connection")]),s._v("的潜在风险。当然，自己封装对缓存的操作还可以使用“Read Through”和“Write Through”的方式实现对缓存的更新，这个在下面会介绍到。")]),s._v(" "),t("h3",{attrs:{id:"缓存相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存相关问题"}},[s._v("#")]),s._v(" 缓存相关问题")]),s._v(" "),t("h4",{attrs:{id:"缓存数据的更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存数据的更新"}},[s._v("#")]),s._v(" 缓存数据的更新")]),s._v(" "),t("p",[s._v("在使用缓存时，一个必须搞清楚的问题就是，当数据改变时，如何更新缓存中的数据。通常更新缓存有如下几种套路，分别是：")]),s._v(" "),t("ol",[t("li",[s._v("Cache Aside Pattern")]),s._v(" "),t("li",[s._v("Read/Write Through Pattern")]),s._v(" "),t("li",[s._v("Write Behind Caching Pattern")])]),s._v(" "),t("p",[s._v("第1种方式的具体做法就是，当数据更新时，先更新数据库，再删除缓存。注意，不能够使用先更新数据库再更新缓存的方式，也不能够使用先删除缓存再更新数据库的方式，大家可以自己想一想为什么（考虑一下有并发的读操作和写操作的场景）。当然，先更新数据库再删除缓存的做法在理论上也存在风险，但是发生问题的概率是极低的，所以不少的项目都使用了这种方式。")]),s._v(" "),t("p",[s._v("第1种方式相当于编写业务代码的开发者要自己负责对两套存储系统（缓存和关系型数据库）的操作，代码写起来非常的繁琐。第2种方式的主旨是将后端的存储系统变成一套代码，对缓存的维护封装在这套代码中。其中，Read Through指在查询操作中更新缓存，也就是说，当缓存失效的时候，由缓存服务自己负责对数据的加载，从而对应用方是透明的；而Write Through是指在更新数据时，如果没有命中缓存，直接更新数据库，然后返回。如果命中了缓存，则更新缓存，然后再由缓存服务自己更新数据库（同步更新）。刚才我们说过，如果自己对项目中的Redis操作再做一次封装，就可以实现“Read Through”和“Write Through”模式，这样做虽然会增加工作量，但无疑是一件“一劳永逸”且“功在千秋”的事情。")]),s._v(" "),t("p",[s._v("第3种方式是在更新数据的时候，只更新缓存，不更新数据库，而缓存服务这边会"),t("strong",[s._v("异步的批量更新")]),s._v("数据库。这种做法会大幅度提升性能，但代价是牺牲数据的"),t("strong",[s._v("强一致性")]),s._v("。第3种方式的实现逻辑比较复杂，因为他需要追踪有哪数据是被更新了的，然后再批量的刷新到持久层上。")]),s._v(" "),t("h4",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[s._v("#")]),s._v(" 缓存穿透")]),s._v(" "),t("p",[s._v("缓存是为了缓解数据库压力而添加的一个中间层，如果恶意的访问者频繁的访问缓存中没有的数据，那么缓存就失去了存在的意义，瞬间所有请求的压力都落在了数据库上，这样会导致数据库承载着巨大的压力甚至连接异常，类似于分布式拒绝服务攻击（DDoS）的做法。解决缓存穿透的一个办法是约定如果查询返回为空值，把这个空值也缓存起来，但是需要为这个空值的缓存设置一个较短的超时时间，毕竟缓存这样的值就是对缓存空间的浪费。另一个解决缓存穿透的办法是使用布隆过滤器，具体的做法大家可以自行了解。")]),s._v(" "),t("h4",{attrs:{id:"缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[s._v("#")]),s._v(" 缓存击穿")]),s._v(" "),t("p",[s._v("在实际的项目中，可能存在某个缓存的key某个时间点过期，但恰好在这个时间点对有对该key的大量的并发请求过来，这些请求没有从缓存中找到key对应的数据，就会直接从数据库中获取数据并写回到缓存，这个时候大并发的请求可能会瞬间把数据库压垮，这种现象称为缓存击穿。比较常见的解决缓存击穿的办法是使用互斥锁，简单的说就是在缓存失效的时候，不是立即去数据库加载数据，而是先设置互斥锁（例如：Redis中的setnx），只有设置互斥锁的操作成功的请求，才能执行查询从数据库中加载数据并写入缓存，其他设置互斥锁失败的请求，可以先执行一个短暂的休眠，然后尝试重新从缓存中获取数据，如果缓存还没有数据，则重复刚才的设置互斥锁的操作，大致的参考代码如下所示。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis_cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" redis_cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setnx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mutex'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expire"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mutex'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delete"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mutex'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis_cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[s._v("#")]),s._v(" 缓存雪崩")]),s._v(" "),t("p",[s._v("缓存雪崩是指在将数据放入缓存时采用了相同的过期时间，这样就导致缓存在某一时刻同时失效，请求全部转发到数据库，导致数据库瞬时压力过大而崩溃。解决缓存雪崩问题的方法也比较简单，可以在既定的缓存过期时间上加一个随机时间，这样可以从一定程度上避免不同的key在同一时间集体失效。还有一种办法就是使用多级缓存，每一级缓存的过期时间都不一样，这样的话即便某个级别的缓存集体失效，但是其他级别的缓存还能够提供数据，避免所有的请求都落到数据库上。")])])}),[],!1,null,null,null);t.default=e.exports}}]);