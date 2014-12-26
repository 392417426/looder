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

function ajax(url, fnSucc, fnFaild)
{
    //1.创建Ajax对象
    if(window.XMLHttpRequest)
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器
    //open(方法, 文件名, 异步传输)
    oAjax.open('GET', url, true);

    //3.发送请求
    oAjax.send();

    //4.接收返回
    oAjax.onreadystatechange=function ()
    {
        //oAjax.readyState	//浏览器和服务器，进行到哪一步了
        if(oAjax.readyState==4)	//读取完成
        {
            if(oAjax.status==200)	//成功
            {
                fnSucc(oAjax.responseText);
            }
            else
            {
                if(fnFaild)
                {
                    fnFaild(oAjax.status);
                }
            }
        }
    };
}