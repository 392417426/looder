function getStyle(obj, name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}

//startMove(oDiv, {width: 400, height: 400})

function startMove(obj, json, fnEnd)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var bStop=true;		//假设：所有值都已经到了

        for(var attr in json)
        {
            var cur=0;

            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj, attr));
            }

            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr])
                bStop=false;

            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }
        }

        if(bStop)
        {
            clearInterval(obj.timer);

            if(fnEnd)fnEnd();
        }
    }, 30);
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