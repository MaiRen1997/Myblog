(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{496:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"flex布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[s._v("#")]),s._v(" FLEX布局")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("css3引入一种新的布局模式——Flexible Box布局，即伸缩布局盒模型（弹性盒布局），用来提供一个更有效的方式制定、调整和分布一个容器里的项目布局，即使他们的大小是未知或者动态的。\n\n主要思想是让容器有能力让其子项目能够改变其宽度、高度（甚至顺序），以最佳的方式填充可用空间（主要是为了适应所有类型的显示设备和屏幕大小）,flex容器会使子项目扩展来填充可用空间，或缩小他们以防止溢出容器,最重要的是，flex布局反向不可预知。\n\n\nFlex容器：采用 Flex 布局的元素的父元素；\nFlex项目：采用 Flex 布局的元素的父元素的子元素；\n容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。\n主轴的开始位置（与边框的交叉点）叫做main start；\n主轴的开始位置结束位置叫做main end；\n交叉轴的开始位置叫做cross start；\n交叉轴的结束位置叫做cross end；\n项目默认沿主轴排列；\n\n父元素设置弹性盒，子元素就会默认按照主轴方向依次排列，和float：left这个感觉差不多\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("img",{attrs:{src:"31img%5C3.png",alt:"1578361222007"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"31img%5Cflex.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"flex容器属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex容器属性"}},[s._v("#")]),s._v(" flex容器属性")]),s._v(" "),n("p",[s._v("​\t1、display:flex、inline-flex")]),s._v(" "),n("p",[s._v("​\t\t\tflex：块状元素，具备自占一行、可以设置宽高的特征")]),s._v(" "),n("p",[s._v("​\t\t\tinline-flex：行内块的特征，既可以设置宽高（不设置与内容保持一致）")]),s._v(" "),n("p",[s._v("​\t\t如果父元素是弹性盒，子元素默认在主轴方向，从起点往终点排列")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("设置元素盒模型改成弹性盒模型\n注意，盒子设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("​\t2、flex-direction，设置主轴方向的属性，同时也更改了子元素的排列方向")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("flex-direction:属性规定灵活项目的方向（主轴方向）。\n    row:默认值。灵活的项目将水平显示，正如一个行一样。     横向，起点在左，终点在右，此时\n    row-reverse:与row相同，但是以相反的顺序。\t\t\t\t起点在右，终点在左\n    column:灵活的项目将垂直显示，正如一个列一样。\t\t\t竖向 起点在上，终点在下\n    column-reverse:与column相同，但是以相反的顺序。\t\t\t起点在上，终点在下\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("​\t3、flex-wrap")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("flex-wrap: 用于设置伸缩项目在主轴上的换行方式\n    nowrap:默认值。规定灵活的项目不拆行（主轴为行时）或不拆列（主轴为列时）。子元素等比收缩来适应父元素的宽度      默认情况下，如果子项目的宽度加起来超过了弹性容器的宽度，子元素默认会等比缩放，来适应弹性容器的宽度（不会换行）\n    wrap:规定灵活的项目在必要的时候拆行或拆列。子项目正常折行，不会收缩\n    \t\n    wrap-reverse:规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。\n    \t子项目正常进行折行，并且改变行的顺序，每行的高度都是弹性容器高度的1/n，如果子项目的高度超过1/n，就会溢出\n    \t\t如果子项目设置了固定高度，那么子项目的高度是多少就显示多少\n    \t\t如果子项目没有设置高度，那么高度就会拉伸的与行同高\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("​\t4、 flex-flow")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap;-简化代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("​\t5、 justify-content")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("justify-content：用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。\n    flex-start:默认值。项目位于容器的开头。\t\n    flex-end:项目位于容器的结尾。\t\n    center:项目位于容器的中心。\t\n    space-between:项目位于各行之间留有空白的容器内。\n    space-around:项目位于各行之前、之间、之后都留有空白的容器内。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("​\t6、align-items   针对单行子元素而言")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("align-items:定义flex子项目在flex容器的侧轴（纵轴）方向上的对齐方式。\n\n  stretch:默认值。子元素被拉伸以适应容器。\n  如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。\n  center:元素位于容器的中心。\n  flex-start:元素位于容器的开头。\n  flex-end:元素位于容器的结尾。\n  baseline:元素位于容器的基线上。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("​\t7、align-content   针对多行子元素而言")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("align-content：用于设置多行子元素在容器侧轴上的对齐方式(多行时才有效)；\n\n   stretch:默认值。元素被拉伸以适应容器。各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸。\n   center:元素位于容器的中心。\n   flex-start:元素位于容器的开头。\n   flex-end:元素位于容器的结尾。\n   space-between:元素位于各行之间留有空白的容器内。\n   space-around:元素位于各行之前、之间、之后都留有空白的容器内。\n   说明：\n   align-content在侧轴上执行样式的时候，会把默认的间距给合并。对于单行子元素，该属性不起作用\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"flex项目属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex项目属性"}},[s._v("#")]),s._v(" flex项目属性")]),s._v(" "),n("p",[s._v("1、align-self属性       写在子元素身上的，可以重写父元素的属性效果的")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v('align-self：属性定义flex子项   单独  在侧轴（纵轴）方向上的对齐方式\n\t注意：align-self 属性可重写灵活容器的 align-items 属性。\n\t\t\n\t\tauto:默认值。元素继承了它的父容器的align-items属性。如果没有父容器则为 "stretch"。\t\n        stretch:元素被拉伸以适应容器。\n        center:元素位于容器的中心。\n        flex-start:元素位于容器的开头。\n        flex-end:元素位于容器的结尾。\n        baseline:元素位于容器的基线上。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("2、flex-xxx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("flex-grow：用于设置或检索弹性盒子项目的扩展比率； （写在子元素身上）     \n      \n      使用此属性，一定要给父元素设置高度或者宽度\n      number:规定项目将相对于其他灵活的项目进行扩展的量。默认值是 0。\n     即当容器空间大于内部元素空间之和时，剩余部分将根据各元素指定的flex-grow按比例分配，使各子元素增大；默认值为0，表示剩余空间不分配。\n\t\nflex-shrink：设置弹性盒的伸缩项目的收缩比率；\n     \n     number:规定项目将相对于其他灵活的项目进行收缩的量。默认值是 1。\n    Flex子元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值；默认值为1，表示溢出时等比例缩小；\n    \n   算法-公式：\n    超出空间的像素数：1000-(900+200)=-100px; \n    加权总和：=(第一个子元素的宽度)*(shrink)+（第二个子元素的宽度）*   (shrink)+....; \n    A收缩的像素数：(Awidth*shrink)/加权综合)*超出空间 =收缩的像素数   \n    \nflex-basis:设置弹性盒伸缩基准值（指定flex-item在主轴上的初始大小）\n       \n       number:规定灵活项目的初始长度。\n       auto：默认值。长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定。\n\norder：属性设置或检索弹性盒模型对象的子元素出现的順序。\n        number:值越小排列越靠前，值越大顺序越靠后\n        \t\t属性值可以设置负值\n\n6）flex：\n（1）flex 属性用于设置或检索弹性盒模型对象的子元素如何分配父元素的空间。\n（2）flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。\n   简写：flex的默认值：0  1  auto；//\n   \t\t\t\t\t auto=1 1 auto\n    \t\t\t\t none= 0 0 auto\n    \t\t\t\t 1= 1 1 auto \n   还可以给每个子元素设置flex：1  flex：1  flex：5     这样还可以按照1：1：5的比例分配高度\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("h2",{attrs:{id:"xx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xx"}},[s._v("#")]),s._v(" xx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 居中：给弹性项目（子元素）设置margin:auto，自动获取弹性容器中剩余的空间。可以使弹性子元素在弹性容器的两轴方向都完全居中。\n\t既水平居中，又垂直居中\n\t\n2. 设置了 margin-right/left/bottom/top: auto; 它将剩余的空间放置在元素的某侧（left是左侧，right是右侧）；\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);