(function($){
    $.fn.tabs = function(options) {
        var defaults = {
            tabsBar : new Array(),
            tabsContent : new Array(),
            cssName : "curren",
            onTabsNum : 0,
            eventType : "click",
            request : new Array(),//{"url":"*****" , "data" : {"***" : "***"}}
            tabsCallback : function(){}
        };
        options = $.extend(defaults, options);
        if ($(this).size() == 0) return;

        if(options.tabsBar != "" && options.tabsContent != "" && options.tabsBar.length == options.tabsContent.length){
            options.tabsBar.each(function(i){
                options.tabsBar.eq(i).on(options.eventType,function(){
                    options.tabsBar.eq(i).addClass(options.cssName).siblings().removeClass(options.cssName);
                    options.tabsContent.eq(i).css("display","block").siblings().css("display","none");
                })
            });
        }else{
            console.log("tabsBar和tabsContent不能为空而且长度必须一致！");
           return;
        }

        if(options.onTabsNum >= 0 && options.onTabsNum <= options.tabsBar.length - 1){
            options.tabsBar.eq(options.onTabsNum).trigger(options.eventType);
        }else {
            console.log("onTabsNum 输入错误!");
        }

        if(options.urls != ""  && options.urls == options.tabsContent.length){
            options.tabsContent.each(function(i){
                options.tabsContent.eq(i).load(options.request[i].url , options.request[i].data , function(){
                    if (status == "error") {
                        console.log("第" + (i+1) +"个tabsContent内容加载失败！" )
                    }
                })
            });
        }
        if(options.tabsCallback != "") options.tabsCallback.call();
    }
})(jQuery)
