/// <summary>
/// 运动框架，支持匀速、缓冲，加速等运动
/// </summary>
/// <param name="obj"> 需要移动的对象 </param>
/// <param name="json"> 参数 </param>
/// <param name="options"> 自定义设置 </param>
function startMove(obj, json, options) {
    options = options || {};
    options.time = options.time || 3000;
    options.type = options.type || "linear";

    var count = parseInt(options.time / 30);
    var n = 0;

    var start = {};
    var distance = {};
    json = formatStyleName(json);

    for (var name in json) {
        if (name == "opacity") {
            start[name] = parseInt(100 * Math.round(getStyle(obj, "opacity")));
        } else {
            start[name] = parseInt(getStyle(obj, name));
        }
        //解决属性在CSS中未赋值的问题，像默认的 auto 等
        if (isNaN(start[name]))
        {
            var initParams = {
                'left': obj.offsetLeft,
                'top': obj.offsetTop,
                'width': obj.offsetWidth,
                'height': obj.offsetHeight,
                'margin': 0,
                'marginLeft': 0,
                'marginTop': 0,
                'marginRight': 0,
                'marginBottom': 0,
                'padding': 0,
                'paddingLeft': 0,
                'paddingTop': 0,
                'paddingRight': 0,
                'paddingBottom': 0,
                'borderWidth': 0,
                'borderLeftWidth': 0,
                'borderRightWidth': 0,
                'borderTopWidth': 0,
                'borderBottomWidth': 0,
                'opacity': 100,
                'zIndex': 0
            }
            start[name] = initParams[name] || 0;  //当initParams中没有匹配的属性时，可以做错误处理，直接抛出异常
        }
        distance[name] = json[name] - start[name];
    }

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        n++;
        for (var name in json) {
            switch (options.type) {
                case "linear":
                    var cur = start[name] + n * distance[name] / count;
                    break;
                case "buffer":
                    var a = 1 - n / count;
                    var cur = start[name] + distance[name] * (1 - a * a * a);
                    break;
                case "speed":
                    var a = n / count;
                    var cur = start[name] + distance[name] * a * a * a;
                    break;
            }
            switch(name){
                case  "opacity" :
                    obj.style.filter = "alpha(opacity:" + cur + ")";
                    obj.style.opacity = cur / 100;
                    break;
                case "z-index" :
                    obj.style.zIndex = cur;
                    break;
                 default :
                     obj.style[name] = cur + "px";
                    break;
            }
        }
        if (n == count) {
            clearInterval(obj.timer);
            options.end && options.end();
        }
    }, 30);
}

/// <summary>
/// 格式化参数中的属性
/// </summary>
/// <param name="json"> </param>
function formatStyleName(json) {
    for (var name in json) {
        var attr = transformStyleName(name);
        if (attr != name) {
            json[attr] = json[name];
            delete json[name];
        }
    }
    return json;
}

/// <summary>
/// 将CSS属性转换成JS中的属性，即将类似 "margin-left" 的属性转换成 "marginLeft"
/// </summary>
/// <param name="name"> 属性名称 </param>
function transformStyleName(name) {
    if (name == "float") {
        return obj.currentStyle ? "styleFloat" : "cssFloat";
    } else if (name.indexOf("-") > -1) {
        name = name.replace(/-(\w)/, function () {
            return arguments[1].toUpperCase();
        });
    }
    return name;
}

/// <summary>
/// 取属性所对应的样式值
/// </summary>
/// <param name="name"> 属性名称 </param>
function getStyle(obj, name) {
    name = transformStyleName(name);
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}

/*ajax({
    url: "./TestXHR.aspx",              //请求地址
    type: "POST",                       //请求方式
    data: { name: "super", age: 20 },        //请求参数
    dataType: "json",
    async: true,    //默认是同步
    success: function (response, xml) {
        // 此处放成功后执行的代码
    },
    error: function (status) {
        // 此处放失败后执行的代码
    }
});*/

function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    options.async = options.async  ?  true : false;
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    }

    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params,options.async);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace("."));
    return arr.join("&");
}

function getParams(){
    var obj_prm = null;
    var url = location.href;
    var index = url.lastIndexOf('?');
    if (index > -1) {
        obj_prm = {};

        var str_prms = url.substring(index + 1);
        if(str_prms.lastIndexOf("#") > 0){
            str_prms = str_prms.substring(0, str_prms.lastIndexOf("#")-1);
        }

        var strArr_prms = str_prms.split('&');
        for (var i = 0; i < strArr_prms.length; i++) {
            var str_prm = strArr_prms[i];
            var strArr_prm = str_prm.split('=');
            var str_key = strArr_prm[0];
            var str_value = strArr_prm[1];

            obj_prm[str_key] = decodeURIComponent(str_value).replace("+", " ");
        }
    }
    return obj_prm;
}

function showTime(time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
}