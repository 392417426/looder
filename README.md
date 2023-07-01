 ## h5有什么新的特性？
1. 新增了具有语义化的标签，例如header、article、section、footer等，
2. 新增了两个多媒体标签video、audio
3. 新增了绘图功能：canvas、svg
4. 新增一些表单属性，例如requeire、autofocus
5. 新增一些api. 地理定位、拖拽、localStorage和sessionStorage、应用缓存、web workers

## meta标签的理解
meta标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析

## src和href的区别
src用于替换的元素 href用来建立标签与外部资源之间的关系

## 介紹一下flex布局 属性有哪些
* flex布局是一种弹性布局，通过改变父元素的display属性，让父元素成为一个flex容器，从而可以自由操作父元素里面的项目排序
* flex-direction用于控制项目排列方向与顺序 row（横向排列） row-reverse（横向反向排列）column（纵向排列） column-reverse（纵向反向排列）
* flex-wrap用于控制项目是否换行 nowrap（不换行）wrap（换行）
* justify-content用于控制项目在横轴的对齐方式 flex-start（左对齐）center （居中）flex-end（右对齐）space-between（左右两端对齐）space-around（项目之间间距为左右两侧项目到容器间距的2倍）space-evenly（项目之间间距与项目与容器间距相等）
* align-items用于控制项目在纵轴排列方式
* align-content用于控制多行项目的对齐方式 
* order用于决定项目排序，数值越小，项目排列越靠前 默认0
* flex-grow用于决定项目在有剩余空间的情况下是否放大 默认0 默认不放大
* flex-shrink用于决定项目在空间不足时是否缩小 默认项目都是1，即空间不足时大家一起等比缩小
* flex-basis用于设置项目宽度
* align-self用于让个别项目拥有与其它项目不同的对齐方式

## px、em、rem的区别
* px：绝对单位
* em：相对于父元素的字体大小，一般是以body字体大小为基准
* rem：相对于html字体大小的单位

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

## css 伪类与伪元素
* 伪类是用于选择DOM树以外的信息或者不能用简单选择器表示的信息
* 伪元素是指DOM树没有定义的虚拟元素

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
1. get通过url传递数据，数据量一般不超过2kb，而post是作为http消息的实体内容传送到服务器上，数据量没有限制
2. get请求的url会被浏览器缓存，而post不会
3. get请求要URL编码，而post可以用多种编码方式
4. get只需要向服务器请求一次，post会先把header发送过去，然后服务器返回100，浏览器再把参数发送过去，服务器返回200

## post请求常见编码方式
* application/x-www-form-urlencoded 表单提交
* multipart/form-data 文件上传
* application/json 以json字符串提交
* text/xml 

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

## encodeURI和encodeURIComponent的区别
* encodeURI方法不会对下列字符编码 ASCII字母 数字 ~!@#$&*()=:/,;?+'
* encodeURIComponent方法不会对下列字符编码 ASCII字母 数字 ~!*()'
* encodeURIComponent编码范围更大

## AMD和CMD的区别
* AMD是依赖前置，必须要先把依赖加载完才执行下一步
* CMD是依赖就近，当需要用到的时候才加载依赖

## ajax请求过程
1、创建 XMLHttpRequest 对象
2、通过setRequestHeader改变头部信息
3、通过open方法来设置请求的类型、URL 以及是否异步请求
4、通过send方法发送请求
5、通过onreadystatechange来接收数据

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

##  addEventListener和attachevent的区别
addEventListener第三个参数为true，事件会在冒泡阶段执行，为false，事件会在捕获阶段执行

## js == 和 ===的区别
* == 数据类型不一样会隐式转换成相同的数据类型，再进行比较
* === 不会进行数据类型的隐式转换，还会比较数据类型

## 箭头函数的优点缺点
* 优点：写函数语法更加简单、函数内部的this默认指向上一级作用域的this
* 缺点：箭头函数没有自己的this对象 箭头函数不能作为构造函数、不可以使用arguments对象

## call、apply、bind三者的用法和区别
* 相同点： call、apply、bind都是改变this指向的方法
* 区别：call可以传多个参数，apply只能传一个参数，bind可以传多个参数,不会立马执行函数，apply和call会立马执行函数

## 闭包是什么？闭包的作用和副作用 应用场景 为啥变量会保存在内存里面
* 闭包是指有权访问另外一个函数作用域中的变量的函数
* 作用：可以读取函数内部的变量 避免污染全局变量
* 副作用：由于闭包会把变量保存在内存里面，容易导致内存溢出
* 应用场景：防抖函数、节流函数
* 函数a里面有个变量b，return一个函数返回变量b，在外面定义一个变量c，c=a()，当程序执行完这里的时候，a的执行环境并没有被销毁，变量b仍然被闭包函数的函数作用域链所引用，所以变量会一直存在内存里面

## js基本类型与引用类型的区别
* 基本类型的值是放在栈内存里面的，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
* 引用类型的地址是放在栈内存里面，它的值是放在堆内存里面的，占据空间大、大小不固定，因为它们保存在内存的方式不一样，所以变量的复制与函数传参有所差异。

## 栈内存和堆内存的区别
栈内存储存基础数据类型的值以及引用类型的地址、堆内存储存引用类型的值
栈内存数据类似栈数据结构遵循先进后出原则，堆内存是一颗二叉树来的

## 回调地狱的理解以及解决方式
异步回调里面不断嵌套异步请求
generator或者async和await

## 类数组转化成数组的必备条件是啥？
必须具备长度length属性

## es6特性
* 局部变量let命令 常量const命令
* 变量的解构与赋值
* 拓展字符串、数组、对象、正则、函数的一些方法
* 新增了for of循环，用来遍历具有迭代器接口的数据结构
* 新增了symbol数据类型
* 新增了set、map数据结构
* 新增了promise、Generator这两个新的api、async和await语法糖，用来解决异步编程问题
* 新增了prosx代理api 用来修改目标对象某些操作的默认行为
* 新增了reflect api 用来规范对象里面的方法，让方法的返回结果更加合理
* 新增class关键字，用来定义对象的

## 跨域是什么？如何解决跨域问题？
发起请求所在的域跟请求资源所在的域不一样，那就是跨域，它是浏览器的同源策略造成的,只要协议、域名、端口有一个不一样就可以说是跨域。jsonp、cors、websocket

## http和https的区别 
http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议
https它是需要申请ca证书的，http不需要申请证书的

## http缓存
强缓存：cache-control（max-age）、expires 文件资源的过期时间没有失效，浏览器会直接读取缓存里面的文件
协商缓存：last-modified/if-Modified-since、etag/if-none-match 第一次请求的时候服务器会返回last-modified（etag），第二次请求的时候浏览器会在请求的头部加上if-modified-since（if-none-match），服务器接收到if-modified-since（if-none-match），然后进行匹配

## http状态码
1、201 成功请求并创建了新的资源
2、202 已经接受请求，但未处理完成
3、204 服务器成功处理，但未返回内容
4、205 服务器处理成功，用户终端应重置文档视图
5、300 请求的资源可包括多个位置
6、301 请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI
7、302 资源只是临时被移动，客户端应继续使用原有URI
8、304 所请求的资源未修改，服务器不会返回任何资源
9、305 请求使用代理
10、400 客户端请求的语法错误，服务器无法理解
11、401 请求要求用户的身份认证
12、402 保留，将来使用
13、403 服务器理解请求客户端的请求，但是拒绝执行此请求
14、405 客户端请求中的方法被禁止

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

## Vue动态组件、异步组件
Component标签通过is来切换组件
异步组件是把组件打包到另外一个文件里面，当需要用到的时候按需加载

## Vuejs组件通讯
父组件通过属性来传递数据给子组件，子组件通过emit方法定义一个事件返回数据给父组件，父组件监听事件接收返回的数据，还可以通过全局状态进行通讯 创建一个新的vue实例 然后在vue的原型上新增一个属性，这个属性跟新创建的实力关联起来，然后在组件里面使用这个属性使用来定义事件，这样其它组件都可以通过这个属性监听到定义事件


## vue3中ref和reactive有啥区别
ref主要是用于定义基本数据类型，也可以定义对象类型，它是内容调用reactive实现的
reative只能定义对象类型的
ref通过Object.defineProperty来实现响应式的，reative是通过es6里的代理proxy来实现的

## Vue2和vue3的区别 
响应式原理发生了改变，vue2是通过defineproperty来拦截数据的，3是通过proxy代理来拦截数据的
3新增了composition api，解决了2组件使用多个mixins出现命名空间冲突的问题
能够更友好的支持typescipt
打包代码时候，可以不用全部打包vue框架了

## Vuejs key的作用
数组顺序发生改变的时候，vue不会移动列表里的元素匹配数组顺序的，它是就地更新元素的

## 响应式原理
.
响应式原理是采用观察者模式。当创建vue实例的时候，通过Object.defineProperty对属性进行拦截，在get函数里收集依赖，谁使用了这个属性的函数，在set函数发布更新，执行对应的函数

## 虚拟dom是什么？
一个dom树结构以js对象表示出来，这个对象包含了 tag、props、children 三个属性。

## vuejs修饰符
* stop 阻止事件冒泡
* prevent 阻止事件默认行为
* once 事件只触发一次
* capture 事件在捕获阶段触发
* self 事件只在当前元素上触发

## 从输入地址到浏览器展示页面的过程中经历了什么
1、域名通过dns解析，找到ip，通过ip找到服务器，建立tcp连接
2、tcp连接成功后，浏览器发送http请求（加载资源前在浏览器缓存里面找资源，找不到资源或者缓存时间过期），服务器接收请求并返回页面资源
3、浏览器加载页面资源，并解析html文档，生成DOM树和cssom树，DOM树和cssom会合并成渲染树，然后布局和计算渲染树每个节点的位置和大小等等内容
4、把渲染树渲染到屏幕上

## tcp三次握手
客户端发送一个带有SYN标志的数据包给服务端，服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息，最后客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功

## dns解析过程
1、查询浏览器dns缓存
2、查询系统dns缓存
3、查询运营商服务器
4、查询域名服务器

## 域名组成
例子（www.baidu.com） www是三级域名 baidu是二级域名 .com是顶级域名 .root是根域名 

## dns查询方式
递归查询、迭代查询

## cdn是什么？
它能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度

## 垃圾回收机制
* 主要是通过标记清除算法或者引用计数算法来定期找出不再使用的内存，然后把内存释放出来

* 标记清除算法
* 垃圾收集器在运行时会给内存中的所有变量都加上一个标记，假设内存中所有对象都是垃圾，全标记为0
* 然后从各个根对象开始遍历，把不是垃圾的节点改成1
* 清理所有标记为0的垃圾，销毁并回收它们所占用的内存空间
* 最后，把所有内存中对象标记修改为0，等待下一轮垃圾回收

* 引用计数算法
* 当声明了一个变量并且将一个引用类型赋值给该变量的时候这个值的引用次数就为 1
* 如果同一个值又被赋给另一个变量，那么引用数加 1
* 如果该变量的值被其他的值覆盖了，则引用次数减 1
* 当这个值的引用次数变为 0 的时候，说明没有变量在使用，这个值没法被访问了，回收空间，垃圾回收器会在运行的时候清理掉引用次数为 0 的值占用的内存

## xss攻击、攻击方式与防止xss攻击
* xss通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。
* 反射型（xss）：攻击者通过构建一个链接，把恶意脚本放在url上面，引导用户点击该链接，服务器接收到url的参数没做过滤然后直接返回给客服端，然后客服端执行了恶意脚本，进而危害数据安全
* 存储型（xss）：攻击者直接把恶意脚本保存在数据库里面，然后返回给客服端执行
* dom型（xss）:通过innerHtml、document.write等等方法在页面中插入代码
* 用户输入要进行过滤、转义html代码、尽量不要使用innenrhtml和document.write插入html代码

## 线性结构和非线性结构有哪些
* 线性结构:栈，队列，链表，线性表
* 非线性结构：二维数组，树、图

## webpack性能优化
* 1、配置noParse告诉webpack不要编译某些文件
* 2、配置loader时通过test、exclude缩小搜索范围
* 3、通过dllplugin把基础库分离到dll文件
* 4、使用HappyPack开启多进程处理模块
* 5、使用UglifyJSPlugin配置parallel开启多进程进行打包
* 6、通过配置externals可以使基础库不会打包，然后通过htmlwebpackplugin插件往页面模版上注入cdn链接

## web性能优化
* 1、使用缓存机制缓存静态资源
* 2、请求资源避免重定向
* 3、异步加载第三方资源
* 4、减少使用cookie
* 5、压缩合并图片变成精灵图、小图标图片可以做成字体图标
* 6、样式放在head里面，脚本要放在body底部
* 7、压缩合并脚本和样式
* 8、使用cdn加载静态资源
* 9、在head里面加上dns预解析
* 10、减少DOM节点嵌套
* 11、高频率触发的事件可以使用防抖和节流函数
* 12、图片加载使用懒加载、图片加载前可以给图片一张默认图片，尽量避免图片重置大小
* 13、样式避免没要的嵌套、避免使用表达式、删除没用的样式

## 如何理解 JS 的异步?
JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。

## 阐述一下 JS 的事件循环
事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。在Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
根据 W3C官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

1. Object 函数是Function的一个实例
2. Object 作为对象是继承自Function.prototype的，又Function.prototype 继承自 Object.prototype
3. Function 是自己的构造函数



 