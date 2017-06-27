## 1、对单页面应用的了解
#### 优点：
1. 用户不需要重新刷新页面，通过异步获取数据进行局部渲染，用户体验更好。
2. 前端与后台代码完全分离，有利于分离前端与后台的工作，代码管理更加方便
3. 减轻服务器压力，服务器不用关心展示逻辑和页面合成
#### 缺点：
1. 不利于seo
2. 不利于导航，前进、后退需要通过程序控制
3. 首次加载会比较慢

## 2、怎样将页面组件化?
* 一个页面就是一个模版，一个整体的视图，页面中的每个栏目就是各个模块，每个模块中可能同时包含html代码、样式和脚本。可以说，
一个页面是通过不同的模块组装起来的

## 3、boostrap是什么？
* boostrap是一款偏向于移动设备的响应式ui框架。

## 4、zeptojs是什么？
* zeptojs是一款偏向于移动端、主要是针对webkit内核进行处理的js框架。
它的语法跟jq类似，但它的体积要比jq要小很多，为移动设备提供了必要的触摸事件。

## 5、gulp是什么？
* gulp是一个自动化构建项目流程的工具。
通过npm安装插件，然后在配置文件中新建一个任务，设置要处理的文件来源，调用该插件，最后设置处理后的文件路径
#### 插件:
1. js：gulp-jshint
2. css：gulp-minify-css
3. html：gulp-minify-html
4. contat: gulp-concat

## 6、webpack是什么？
* webpack是一个模块打包工具。它能把js、css、图片、字体等作为模块进行使用和处理。

## 8、h5有什么新的特性？
1. 新增了具有语义化的标签，例如header、article、section、footer等，
2. 新增了两个多媒体标签video、audio
3. 新增了绘图功能：canvas、svg
4. 新增一些表单属性，例如requeire、autofocus
5. 新增一些api. 地理定位、拖拽、localStorage和sessionStorage、应用缓存、web workers

## 9、get与post的区别？
1. get通过url传递数据，数据量一般不超过1kb，而post是作为http消息的实体内容传送到服务器上。
2. get是安全性比较低，post安全性比较高
3. get为了防止乱码需要对数据进行encodeURIComponent编码

## 10、pc开发过程中有哪些兼容性问题？如何解决？
1. ie7下li垂直排列，每列之间会有3个像素 解决方法：li设置vertical-align:top
2. ie7下display:inline-block;解决方法：display:block;\*display:inline;\*zoom:1;
3. 图片与父元素之间有3个像素空白 解决方法：vertical-align:middle
4. css透明度 ie需要用到滤镜

## 11、安卓与ios有什么兼容性问题？
1. 安卓手机css3动画会比较卡，需要做成3d效果的动画启动gpu渲染
2. 点击页面元素高亮，设置-webkit-tap-highlight-color:rgba(0,0,0,0)
3. 输入框固定在页面底部，输入时小键盘挡住输入框，可以通过绝对定位加上js实现
4. 音频和视频不能自动播放，需要设置页面触摸事件来触发

## 12、vuejs是什么？
* vuejs是一个响应式的js框架，也就是双向数据绑定。它主要应用在单页面应用，是一个组件化的工具。

## 13、多终端设备要兼容哪几种分辨率？
* 手机：宽度小于768px 平板：768px到980px pc：980px以上

## 14、应用缓存是什么？
* 应用缓存作用是可以在没有网路的情况下，正常的访问页面。它通过在客户端缓存静态文件，这样的话每次打开页面就可以读取缓存里面的内容，
减轻服务器的压力，提高页面加载速度。它一般是跟localStorage一起用的， 新建一个minifest文件，通过在头部设置manifest文件路径，在manifest上设置要缓存的文件。
如果需要更新文件的话，只需要改变文件的版本号即可。

## 15、localStorage与sessionStorage cookie的区别?
#### 共同点：
* 都是保存在客户端，且同源

#### 区别：
1. cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
2. 存储大小限制也不同，cookie数据不能超过4k。而sessionStorage和localStorage可以达到5M
3. 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，localStorage：始终有效，窗口或浏览器关闭也一直保存，cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
4. 作用域不同，sessionStorage仅限于当前窗口；localStorage与cookie在所有同源窗口中都是共享的

## 16、 js对象有哪些？
* Object、Function、Array、String、 Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError
、SyntaxError、TypeError、URIError

## 17、Browser对象有哪些？
1. Window:表示浏览器打开的窗口
2. Navigator：表示包含有关浏览器的信息
3. Screen：包含有关客户端显示屏幕的信息
4. History：浏览器历史纪录
5. Location：包含当前url的信息

#### 方法
1. window 方法：alert、open、close
2. history 方法：back、forwards、go
3. location 方法：assign、replace、reload

## 18、Dom对象有哪些？
1. document：每个载入浏览器的html文档都会成为document对象
2. element：html元素
3. Attribute：html属性
4. Event:代表事件的状态

## 19、行元素块元素和空元素分别有哪些？有什么区别？
1. 行元素： a、span、label、i、b、input、select、code、img
2. 块元素：div、p、address、dl、dd、dt、from、h1、h2、ol、ul、li、td、tr、th、table
3. 空元素：link、meta、br、hr、area、source
#### 区别：
1. 块元素可以包含行元素，而行元素不能包含块元素；
2. 行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效
3. 行元素会在同一行水平排列
4. 行元素会各占据一行，垂直方向排列
5. 没有内容的 HTML 内容被称为空元素。空元素是在开始标签中关闭的。

## 20、link 和@import 的区别是？
1. link引用CSS时，在页面载入时同时加载；@import需要页面完全载入以后加载。
2. ink可以通过js改变样式；而@import不支持。

## 21、对html语义化如何理解？
1. 能够清楚地展示代码结构，便于阅读
2. 有利于seo，有利于爬虫抓取更多有效的信息
3. 有利于各种设备解析代码结构
4. 便于团队开发与维护

## 22、rem是什么？怎么使用？
* rem是指相对于根元素的字体大小的单位。屏幕的宽度 / 设计图的宽度 * 40

## 23、常用浏览器的内核分别是什么？
1. Trident（ie）
2. webkit
3. Gecko（firefox）
4. blink（opera）

## 24、标准的CSS盒子模型？与低版本IE的盒子模型有什么不同的？
* 内容(content)、内边距(padding)、边框(border)、外边距(margin) 标准的盒子模型里内容的宽度等于content的宽度，低版本的ie里内容的宽度等于content+padding+border

## 25、前端页面有哪三层构成，分别是什么？作用是什么？
* 网页分成三个层次，即：结构层、表示层、行为层。
1. 网页的结构层（html或xhtml）
2. 网页的表示层（css）
3. 网页的行为层（js）

## 26、html中form里action 方法的get和post有什么区别？
1. Get是用来从服务器上获得数据，而Post是用来向服务器上传递数据。
2. Get将表单中数据的按照variable=value的形式，添加到action所指向的URL后面，并且两者使用"?"连接，而各个变量之间使用"&"连接。Post是将表单中的数据放在form的数据体中，按照变量和值相对应的方式，传递到action所指向URL。
3. Get是不安全的，因为在传输过程，数据被放在请求的URL中，而如今现有的很多服务器、代理服务器或者用户代理都会将请求URL记录到日志文件中，然后放在某个地方，这样就可能会有一些隐私的信息被第三方看到。另外，用户也可以在浏览器上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前。Post的所有操作对用户来说都是不可见的。
4. Get传输的数据量小，这主要是因为受URL长度限制。而Post可以传输大量的数据，所以在上传文件只能使用Post（当然还有一个原因，将在后面的提到）。
5. Get限制Form表单的数据集的值必须为ASCII字符。而Post支持整个ISO10646字符集。
6. Get是Form的默认方法。

## 27、html元素的id跟class什么区别
1. 在css样式表中书写时，id选择符前缀应加"#"，class选择符前缀应加"."
2. id属性在一个页面中书写时只能使用一次，而class可以反复使用
3. id作为元素标签用于区分不同结构和内容，而class作为一个样式，可以应用到任何结构和内容当中去
4. 目前浏览器都允许同一个页面出现多个相同属性值的id，一般情况能正常显示，不过当javascript通过id来控制元素时就会出错

## 28、CSS display:none和visibility:hidden的区别
* visibility:hidden隐藏，但在浏览时保留位置；display:none视为不存在，且不加载

## 29、null和undefined的区别？
1. null表示一个尚未存在的对象；undefined表示一个对象创建了但没有初始化。
2. null的类型是object，是一个不存在的对象的占位符，而undefinded的类型是undefined

## 30、JSON 的了解？
* json是一种轻量级的数据交换格式。它是以键值对保存js对象，它的本质是一个字符串。
1. JSON.parse(）将字符串转换成js对象
2. JSON.stringify() 将js对象转化成字符串

## 31、js数据类型：
* null、undefinded、number、boolean、string、object

## 32、HTML的Doctype和严格模式与混杂模式？
* 告诉浏览器以怎么的文档类型来解析文档 在标准模式中，浏览器以其支持的最高标准呈现页面。在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。

## 33、<script>、<script async>和<script defer>的区别？
1. <script> 当浏览器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。
2. <script async>当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。
3. <script defer>当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。

## 34、this的理解
* this在不同的作用域下this的指向对象是不同的。如果this在一个函数里面，那么它指向的对象是widnow。如果this在一个构造函数里面，
那么它指向的对象是调用它的对象。

## 35、如何做响应式页面？
* 首先在文档的头部meta设置name属性为viewport，禁止用户缩放，然后通过媒体查询，把页面进行栅格化。

## 36、$(this)和this的区别？
** $(this)代表的是一个jquery对象，它可以使用jqeury中封装的方法，this代表的是一个html对象


从毕业到现在，有3年前端开发经验。最近我参与的项目是腾讯家居。这个项目小组有8个人，4个前端，4个后台。
在这个项目中，我主要负责平台的pc端和移动端的页面制作，还有一些微信上的推广活动，
用到的技术有h5、css3、less、jquery、gulp、swiper等。
以前我在北京中科汇联这间公司，主要做政府网站以及一些企业的门户网站。




