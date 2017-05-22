## 1、对单页面应用的了解
#### 优点：
1. 用户不需要重新刷新页面，通过ajax获取数据进行局部渲染，渲染速度很快，用户体验更好。
2. 前端与后台代码完全分离，有利于分离前端与后台的工作，代码管理更加方便
3. 减轻服务器压力，服务器不用关心展示逻辑和页面合成
#### 缺点：
1. 不利于seo
2. 不利于导航，前进、后退需要通过程序控制
3. 首次加载会比较慢

## 2、怎样将页面组件化?


## 3、boostrap是什么？
* boostrap是一款偏向于移动设备的响应式ui框架。

## 4、zeptojs是什么？
* zeptojs是一款偏向于移动端、主要是针对webkit内核进行处理的js框架。
它的语法跟jq类似，但它的体积要比jq要小很多，为移动设备提供了必要的触摸事件。

## 5、gulp是什么？
* gulp是一个自动化构建项目流程的工具。
gulp通过设置监听器，可以自动编译less等css预编译语言，可以对js、css、html等文件进行压缩合并等处理。
#### 插件:
1. js：gulp-jshint
2. css：gulp-minify-css
3. html：gulp-minify-html
4. contat: gulp-concat

## 6、webpack是什么？
* webpack是一个模块打包工具。它能把js、css、图片、字体等作为模块进行使用和处理。

## 7、less是什么?
* less是一门css预处理语言，它能够将css结构化，提供变量、混合以及函数等功能，让css代码更容易维护。

## 8、h5有什么新的特性？
1. 新增了header、article、section、footer等具有语义化的标签，让代码更加方便阅读
2. 新增了多媒体标签video、audio
3. 新增了画布canvas
4. 地理定位、拖放、表单属性
5. web存储 localStorage和sessionStorage
6. 应用程序缓存
7. web workers

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
*

## 13、多终端设备要兼容哪几种分辨率？
* 手机：宽度小于768px 平板：768px到980px pc：980px以上

## 14、应用缓存是什么？
Html5的一个重要特性就是离线存储，所谓的离线存储就是将一些资源文件保存在本地，这样后续的页面重新加载将使用本地资源文件，在离线情况下可以继续访问web应用，同时通过一定的手法（更新相关文件或者使用相关API），可以更新、删除离线存储等操作。
Html5的离线存储使用一个manifest文件来标明哪些文件是需要被存储的，使用如
来引入一个manifest文件，这个文件的路径可以是相对的，也可以是绝对的，如果你的web应用很多，而且希望能集中管理manifest文件，那么静态文件服务器是个不错的选择。

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

## 19、行元素和块元素分别有哪些？有什么区别？
* 行元素： a、span、label、i、b、input、select、code、img <br />
块元素：div、p、address、dl、dd、dt、from、h1、h2、ol、ul、li、td、tr、th、table<br />
#### 区别：
1. 块元素可以包含行元素，而行元素不能包含块元素；
2. 行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效
3. 行元素会在同一行水平排列
4. 行元素会各占据一行，垂直方向排列

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
1. ie内核
2. webkit
3. Gecko（firefox）
4. Presto（opera）

## 24、CSS的盒模型？
* 内容(content)、填充(padding)、边框(border)、边界(margin)

## 25、前端页面有哪三层构成，分别是什么？作用是什么？
* 网页分成三个层次，即：结构层、表示层、行为层。
1. 网页的结构层（html或xhtml）
2. 网页的表示层（css）
3. 网页的行为层（js）

## 26、html中form里action方法的get和post有什么区别？
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