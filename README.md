## 1、对单页面应用的了解
#### 优点：
1. 用户不需要重新刷新页面，通过ajax获取数据进行局部渲染，渲染速度很快，用户体验更好。
2. 前端与后台代码完全分离，有利于分离前端与后台的工作，代码管理更加方便
3. 减轻服务器压力，服务器不用关心展示逻辑和页面合成
#### 缺点：
1. 不利于seo
2. 不利于导航，前进、后台需要通过程序控制
3. 首次加载会比较慢


2、怎样将页面组件化?


3、boostrap是什么？


4、zepto是什么？


5、gulp是什么？


6、webpack是什么？


7、less是什么?


8、h5有什么新的特性？


9、get与post的区别？


10、pc开发过程中有哪些兼容性问题？如何解决？


11、安卓与ios有什么兼容性问题？


12、vuejs是什么？


13、多终端设备要兼容哪几种分辨率？


14、应用缓存是什么？
Html5的一个重要特性就是离线存储，所谓的离线存储就是将一些资源文件保存在本地，这样后续的页面重新加载将使用本地资源文件，在离线情况下可以继续访问web应用，同时通过一定的手法（更新相关文件或者使用相关API），可以更新、删除离线存储等操作。
Html5的离线存储使用一个manifest文件来标明哪些文件是需要被存储的，使用如
来引入一个manifest文件，这个文件的路径可以是相对的，也可以是绝对的，如果你的web应用很多，而且希望能集中管理manifest文件，那么静态文件服务器是个不错的选择。

15、localStorage与sessionStorage cookie的区别?


16、 js对象有哪些？


17、Browser对象有哪些？


18、Dom对象有哪些？


19、行元素和块元素分别有哪些？有什么区别？


20、link 和@import 的区别是？


21、对html语义化如何理解？


22、rem是什么？怎么使用？


23、常用浏览器的内核分别是什么？


24、CSS的盒模型？

25、前端页面有哪三层构成，分别是什么？作用是什么？
网页分成三个层次，即：结构层、表示层、行为层。
1、网页的结构层（structurallayer）由HTML 或XHTML
之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出这些标签不包含任何关于如何显示有关内容的信息。例如，P标签表达了这样一种语义："这是一个文本段。"
2、网页的表示层（presentationlayer）由CSS 负责创建。CSS对"如何显示有关内容"的问题做出了回答。
3、网页的行为层（behaviorlayer）负责回答"内容应该如何对事件做出反应"这一问题。这是Javascript 语言和DOM 主宰的领域。


26、html中form里action方法的get和post有什么区别？
1、Get是用来从服务器上获得数据，而Post是用来向服务器上传递数据。
2、Get将表单中数据的按照variable=value的形式，添加到action所指向的URL后面，并且两者使用"?"连接，而各个变量之间使用"&"连接。Post是将表单中的数据放在form的数据体中，按照变量和值相对应的方式，传递到action所指向URL。
3、Get是不安全的，因为在传输过程，数据被放在请求的URL中，而如今现有的很多服务器、代理服务器或者用户代理都会将请求URL记录到日志文件中，然后放在某个地方，这样就可能会有一些隐私的信息被第三方看到。另外，用户也可以在浏览器上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前。Post的所有操作对用户来说都是不可见的。
4、Get传输的数据量小，这主要是因为受URL长度限制。而Post可以传输大量的数据，所以在上传文件只能使用Post（当然还有一个原因，将在后面的提到）。
5、Get限制Form表单的数据集的值必须为ASCII字符。而Post支持整个ISO10646字符集。
6、Get是Form的默认方法。

27、html元素的id跟class什么区别
id和class是网页中两个通用属性，他们协同工作使整个页面丰富多彩，当我们为一个元素定义样式时，二者都可用，但有区别？
1、在css样式表中书写时，id选择符前缀应加"#"，class选择符前缀应加"."
2、id属性在一个页面中书写时只能使用一次，而class可以反复使用
3、id作为元素标签用于区分不同结构和内容，而class作为一个样式，可以应用到任何结构和内容当中去
4、布局上的一般原则：id先确定结构和内容再为它定义样式。而class正好相反，是先定义样式，然后在页面中根据不同需求把样式应用到不同结构和内容上
5、目前浏览器都允许同一个页面出现多个相同属性值的id，一般情况能正常显示，不过当javascript通过id来控制元素时就会出错
6、在实际应用中，class常被用到文字版块和页面修饰上，而id多被用在宏伟布局和设计包含块，或包含框的样式。

27、Ajax是什么？
Ajax不是一个技术，它实际上是几种技术，每种技术都有其独特这处，合在一起就成了一个功能强大的新技术。Ajax包括：
1、XHTML和CSS
2、使用文档对象模型(Document Object Model)作动态显示和交互
3、使用XML和XSLT做数据交互和操作
4、使用XMLHttpRequest进行异步数据接收
5、使用JavaScript将它们绑定在一起


28、CSS display:none和visibility:hidden的区别
visibility:hidden隐藏，但在浏览时保留位置
display:none视为不存在，且不加载

29、null和undefined的区别？


30、JSON 的了解？


31、nodejs是什么？


32、HTTP状态码有哪些？