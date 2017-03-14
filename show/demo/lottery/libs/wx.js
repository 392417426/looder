var __WeiXinAuth = function(name) {
    this.AppName = name;

    this.prefix = "__login_pop_";
    this.server = 'http://auth.jia360.com/weixin/authorize.php';

    this.timestamp = (new Date()).getTime();
	
	this.auto = true;   //自动跳转到授权页面
    this.status = true;

    this.scope = 'snsapi_base';  //snsapi_base ：静默授权   snsapi_userinfo：获取用户信息
    
    this.backurl = encodeURIComponent(location.href);

    this.beforSend = function() {};

    this.afterSend = function(result) {};

    this.callback = function(result) {
        if(parseInt(result.errNum) == 0 && this.auto) {
            var go_url = this.server + "?type=wxlogin_jump&scope=" + this.scope + "&backurl=" + this.backurl;
            location.href = go_url;
        }
        this.afterSend(result);

        var id = this.prefix + this.timestamp;
        var div = document.getElementById(id);
        document.body.removeChild(div);
        this.status = true;
    }

    this.send = function() {
        if (this.status == true) {
            this.timestamp = (new Date()).getTime();
            this.status = false;

            var protocol = window.location.protocol;
            var domain = window.location.hostname;
            var id = this.prefix + this.timestamp;
            var url = this.server + "?type=wxlogin_cookie&scope=" + this.scope + "&callback=parent." + this.AppName + ".callback&p=" + protocol + "&u=" + domain + "&t=" + this.timestamp;

            var div = document.createElement("iframe");
            div.setAttribute("id", id);
            div.setAttribute("style", "display:none");
            document.body.appendChild(div);
            this.beforSend();
            document.getElementById(id).src = url;
        }
    }
}