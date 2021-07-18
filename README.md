## h5有什么新的特性？
1. 新增了具有语义化的标签，例如header、article、section、footer等，
2. 新增了两个多媒体标签video、audio
3. 新增了绘图功能：canvas、svg
4. 新增一些表单属性，例如requeire、autofocus
5. 新增一些api. 地理定位、拖拽、localStorage和sessionStorage、应用缓存、web workers

## meta标签的理解
meta标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析

## 介紹一下flex布局 属性有哪些
flex布局是一种弹性布局，通过改变父元素的display属性，让父元素成为一个flex容器，从而可以自由操作父元素里面的项目排序
flex-direction用于控制项目排列方向与顺序 row（横向排列） row-reverse（横向反向排列）column（纵向排列） column-reverse（纵向反向排列）
flex-wrap用于控制项目是否换行 nowrap（不换行）wrap（换行）
justify-content用于控制项目在横轴的对齐方式 flex-start（左对齐）center （居中）flex-end（右对齐）space-between（左右两端对齐）space-around（项目之间间距为左右两侧项目到容器间距的2倍）space-evenly（项目之间间距与项目与容器间距相等）
align-items用于控制项目在纵轴排列方式
align-content用于控制多行项目的对齐方式 
order用于决定项目排序，数值越小，项目排列越靠前 默认0
flex-grow用于决定项目在有剩余空间的情况下是否放大 默认0 默认不放大
flex-shrink用于决定项目在空间不足时是否缩小 默认项目都是1，即空间不足时大家一起等比缩小
flex-basis用于设置项目宽度
align-self用于让个别项目拥有与其它项目不同的对齐方式

## px、em、rem的区别
px：绝对单位
em：相对于父元素的字体大小，一般是以body字体大小为基准
rem：相对于html字体大小的单位

## 行元素块元素和空元素分别有哪些？有什么区别？
1. 行元素： a、span、label、i、b、input、select、code、img
2. 块元素：div、p、address、dl、dd、dt、from、h1、h2、ol、ul、li、td、tr、th、table
3. 空元素：link、meta、br、hr、area、source
#### 区别：
1. 行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效
2. 行元素会在同一行水平排列
3. 行元素会各占据一行，垂直方向排列
4. 没有内容的 HTML 内容被称为空元素。空元素是在开始标签中关闭的。

## link 和@import 的区别是？
1. link引用CSS时，在页面载入时同时加载；@import需要页面完全载入以后加载。
2. ink可以通过js改变样式；而@import不支持。

## 对html语义化如何理解？
1. 能够清楚地展示代码结构，便于阅读
2. 有利于seo，有利于爬虫抓取更多有效的信息
3. 有利于各种设备解析代码结构
4. 便于团队开发与维护

## 常用浏览器的内核分别是什么？
1. Trident（ie）
2. webkit
3. Gecko（firefox）
4. blink（opera）

## 标准的CSS盒子模型？与低版本IE的盒子模型有什么不同的？
内容(content)、内边距(padding)、边框(border)、外边距(margin) 标准的盒子模型里内容的宽度等于content的宽度，低版本的ie里内容的宽度等于content+padding+border

## 前端页面有哪三层构成，分别是什么？作用是什么？
网页分成三个层次，即：结构层、表示层、行为层。
1. 网页的结构层（html或xhtml）
2. 网页的表示层（css）
3. 网页的行为层（js）

## html元素的id跟class什么区别
1. 在css样式表中书写时，id选择符前缀应加"#"，class选择符前缀应加"."
2. id属性在一个页面中书写时只能使用一次，而class可以反复使用
3. id作为元素标签用于区分不同结构和内容，而class作为一个样式，可以应用到任何结构和内容当中去
4. 目前浏览器都允许同一个页面出现多个相同属性值的id，一般情况能正常显示，不过当javascript通过id来控制元素时就会出错

## CSS display:none和visibility:hidden的区别
visibility:hidden隐藏，但在浏览时保留位置；display:none视为不存在，且不加载

## 对单页面应用的了解
#### 优点：
1. 用户不需要重新刷新页面，通过异步获取数据进行局部渲染，用户体验更好。
2. 前端与后台代码完全分离，有利于分离前端与后台的工作，代码管理更加方便
3. 减轻服务器压力，服务器不用关心展示逻辑和页面合成
#### 缺点：
1. 不利于seo3
2. 不利于导航，前进、后退需要通过程序控制
3. 首次加载会比较慢

## zeptojs是什么？zeptojs跟jq的区别是什么？
zeptojs是一款偏向于移动端、主要是针对webkit内核进行处理的js框架。
它的语法跟jq类似，但它的体积要比jq要小很多，为移动设备提供了必要的触摸事件。
zepto它不兼容ie，它偏向于移动应用开发。它的事件委托机制是按队列执行，而jq是按照选择符进行匹配的。
zepto获取元素的宽度和高度是根据盒子模型来获取的，而jQuery会忽略盒模型，始终返回内容区域的宽/高

## gulp是什么？
gulp是一个自动化构建项目流程的工具，它能够自动化帮助我们完成项目过程中的大量重复工作，为开发带来便利。
通过npm安装插件，然后在配置文件中新建一个任务，设置要处理的文件来源，调用该插件，最后设置处理后的文件路径
#### 插件:
1. js：gulp-jshint
2. css：gulp-minify-css
3. html：gulp-minify-html
4. contat: gulp-concat

## webpack是什么？
webpack是一个模块打包工具。它能把js、css、图片、字体等作为模块进行使用和处理。

## get与post的区别？
1. get通过url传递数据，数据量一般不超过1kb，而post是作为http消息的实体内容传送到服务器上。
2. get是安全性比较低，post安全性比较高
3. get为了防止乱码需要对数据进行encodeURIComponent编码

## pc开发过程中有哪些兼容性问题？如何解决？
1. ie7下li垂直排列，每列之间会有3个像素 解决方法：li设置vertical-align:top
2. ie7下display:inline-block;解决方法：display:block;\*display:inline;\*zoom:1;
3. 图片与父元素之间有3个像素空白 解决方法：vertical-align:middle
4. css透明度 ie需要用到滤镜

## 安卓与ios有什么兼容性问题？
1. 安卓手机css3动画会比较卡，需要做成3d效果的动画启动gpu渲染
2. 点击页面元素高亮，设置-webkit-tap-highlight-color:rgba(0,0,0,0)
3. 输入框固定在页面底部，输入时小键盘挡住输入框，可以通过绝对定位加上js实现
4. 音频和视频不能自动播放，需要设置页面触摸事件来触发

## 多终端设备要兼容哪几种分辨率？
手机：宽度小于768px 平板：768px到980px pc：980px以上

## 应用缓存是什么？
应用缓存作用是可以在没有网络的情况下，正常的访问页面。它通过在客户端缓存静态文件，这样的话每次打开页面就可以读取缓存里面的内容，
减轻服务器的压力，提高页面加载速度。它一般是跟localStorage一起用的， 新建一个minifest文件，通过在头部设置manifest文件路径，在manifest上设置要缓存的文件。
如果需要更新文件的话，只需要改变文件的版本号即可。

## 15、localStorage与sessionStorage cookie的区别?
#### 共同点：
都是保存在客户端，且同源

#### 区别：
1. cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
2. 存储大小限制也不同，cookie数据不能超过4k。而sessionStorage和localStorage可以达到5M
3. 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，localStorage：始终有效，窗口或浏览器关闭也一直保存，cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
4. 作用域不同，sessionStorage仅限于当前窗口；localStorage与cookie在所有同源窗口中都是共享的

## js对象有哪些？
 Object、Function、Array、String、 Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError
、SyntaxError、TypeError、URIError

## Browser对象有哪些？
1. Window:表示浏览器打开的窗口
2. Navigator：表示包含有关浏览器的信息
3. Screen：包含有关客户端显示屏幕的信息
4. History：浏览器历史纪录
5. Location：包含当前url的信息

#### 方法
1. window 方法：alert、open、close
2. history 方法：back、forwards、go
3. location 方法：assign、replace、reload

## Dom对象有哪些？
1. document：每个载入浏览器的html文档都会成为document对象
2. element：html元素
3. Attribute：html属性
4. Event:代表事件的状态

## null和undefined的区别？
1. null表示一个尚未存在的对象；undefined表示一个对象创建了但没有初始化。
2. null的类型是object，是一个不存在的对象的占位符，而undefinded的类型是undefined

## JSON 的了解？
json是一种轻量级的数据交换格式。它是以键值对保存js对象，它的本质是一个字符串。
1. JSON.parse(）将字符串转换成js对象
2. JSON.stringify() 将js对象转化成字符串

## js数据类型：
* null、undefinded、number、boolean、string、object、symbol

## HTML的Doctype和严格模式与混杂模式？
告诉浏览器以怎么的文档类型来解析文档 在标准模式中，浏览器以其支持的最高标准呈现页面。在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。

## <script>、<script async>和<script defer>的区别？
1. <script> 当浏览器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。
2. <script async>当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。
3. <script defer>当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。

## this的理解
   this在函数内部，表示调用该函数的对象。

## $(this)和this的区别？
$(this)代表的是一个jquery对象，它可以使用jqeury中封装的方法，this代表的是一个html对象

## css垂直水平居中？
display: flex;justify-content:center;align-items:center;
position:absolute;left:50%;top:50%;translate(-50%, -50%);
position:absolute;left:50%;top:50%;margin-left:-元素的宽度 margin-top:-元素的高度

## box-sizing
content-box：元素的宽度和高度包括内边距
border-box：元素的宽度和高度包括内边距和边框

## position abosulte和relative区别
abosulte相对于 static 定位以外的第一个父元素进行定位
relative相对于元素本身位置定位

## 原型和原型连
原型：我们创建一个函数，函数会带有一个prototype属性，这个属性会指向一个对象，可以让特定的实例共享它所包含的属性和方法。
原型链：一个对象不断往上级找原型，这样形成的结构，叫做原型链 

## 浅拷贝和深拷贝有什么区别？
如果拷贝的时候，把数据所有的引用关系都拷贝一份，那么这叫做深拷贝；如果拷贝的时候，只把数据的属性拷贝一份，那么这叫做浅拷贝

## break与continue的区别？
break跳出循环；continue它是中断本次循环，继续下一轮循环

## 实例与对象？
实例一般是指某一个构造函数创建出来的对象。实例就是对象，对象是一个泛称

## xhtml与html的区别？
XHTML 元素必须被正确地嵌套。XHTML 元素必须被关闭。标签名必须用小写字母。XHTML 文档必须拥有根元素。

## js编程方式有哪几种？
构造函数创建对象、对象字面量方式创建对象、原型方式、工厂方式创建对象

## js对象的继承方式
原型链继承、构造函数继承、组合继承、寄生继承、寄生组合继承

## js面向对象的特性是什么
继承、封装、多态

## 箭头函数的优点缺点
* 优点：写函数语法更加简单、函数内部的this默认指向上一级作用域的this
* 缺点：箭头函数没有自己的this对象 箭头函数不能作为构造函数、不可以使用arguments对象

## call、apply、bind三者的用法和区别
* 相同点： call、apply、bind都是改变this指向的方法
* 区别：call可以传多个参数，apply只能传一个参数，bind可以传多个参数,不会立马执行函数，apply和call会立马执行函数

## 闭包的作用和副作用
* 作用：可以读取函数内部的变量 让这些变量的值始终保持在内存中
* 副作用：由于闭包会把变量保存在内存里面，容易导致内存溢出

## 回调地狱的理解以及解决方式
异步回调里面不断嵌套异步请求
generator或者async和await

## 类数组转化成数组的必备条件是啥？
必须具备长度length属性

## vuejs的理解？
vuejs是一个构建用户界面的渐进式框架。它的体积很小，性能很高。它只关心视图，能够轻易跟其他框架混合开发。

## vuejs的核心思想是什么？
数据驱动、组件化

## vue组件的生命周期
1.beforeCreate 
2.created 
3.beforeMount 
4.mounted 
5.beforeUpdate
6.updated 
7.beforeDestory 
8.destroyed 

## vuejs compute和methods的区别
compute会缓存前一次计算结果的，methods会每次执行方法

## vuejs data为什么要用函数返回对象？
data对应的值是一个对象，对象是引用类型，所以修改data的值会导致其它相同的组件受到影响，通过函数返回一个对象，这样的话data的值就是一个完全独立的对象了

## vuejs v-for和v-if哪个先执行？为啥不建议放在一起使用？
v-for比-if先执行 只要数组发生变化，每次都需要遍历整个数组，会造成性能上的浪费

二叉树是n(n>=0)个结点的有限集合，该集合或者为空集合，或者有一个根结点和两颗互不相交的、分别称为根结点的左子树和右子树组成
在二叉树的第i层上最多有2^(i-1)个结点
深度为k的二叉树最多有2^k - 1个结点
对任何一个二叉树，如果其终点结点数为n0，度为2的节点为n2，则n0=n2+1

前序遍历
若二叉树为空，则空操作返回，否则先访问根结点，然后前序遍历左子树，再前序遍历根子树。

中序遍历
若二叉树为空，则空操作返回，否则从根结点开始（注意并不是先访问根结点）中序遍历根结点的左子树，然后是访问根结点，最后中序遍历右子树

后序遍历
若二叉树为空，则空操作返回，否则从左到右先叶子后结点的方式遍历访问左右子树，最后是访问根结点。

层序遍历
若二叉树为空，则空操作返回，否则从树的第一层，也就是根结点开始访问，从上而下逐层遍历，在同一层中，按从左到右的顺序对结点组个访问


1. Object 函数是Function的一个实例
2. Object 作为对象是继承自Function.prototype的，又Function.prototype 继承自 Object.prototype
3. Function 是自己的构造函数
