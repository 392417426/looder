(function($){
    $.fn.fire = function(options) {
        var defaults = {
            childNode : 'img',
            duration:250
        };
        options = $.extend(defaults, options);
        if ($(this).size() == 0) return;
        var $this = $(this);
        var index = 0;
        var fire = $this.find(options.childNode);
        var len = fire.length;
        var timer = setInterval(doPlay,options.duration)
        function doPlay(){
            if(index > len){
                index = 0;
            }
            fire.eq(index).show().siblings(options.childNode).hide();
            index++;
        }
    }
})(jQuery)

$(".fire01").fire();
$(".fire02").fire();
$(".fire03").fire();
//火炬传递
var page2 = document.querySelector("#Page2");
var startX = 0;
var startY = 0;
var isTouch = false;
page2.addEventListener("touchstart",function(ev){
    var touch = ev.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    if(startX >= 0 && startX <= 360 && startY >= 60 && startY <= 500){
        isTouch = true;
    }

},false)
page2.addEventListener("touchmove",function(ev){
    var touch = ev.touches[0];
    var moveX = touch.pageX;
    var moveY = touch.pageY;
    if(isTouch){
        if(moveX >= 338 && moveX <= 600 && moveY >= 405 && moveY <= 730){
            $(".p2_Sydney").addClass("p2_Sydney_cur");
            $(".fire02").show();
        }else if(moveX >= 100 && moveX <= 400 && moveY >= 780 && moveY <= 920){
            $(".p2_Rio").addClass("p2_Rio_cur");
            $(".fire03").show();
            setTimeout(function(){
                swiper.slideTo(2,300,true)
            },1000)
        }
    }
},false)
page2.addEventListener("touchend",function(ev){
    isTouch = false;
},false);

//开始游戏倒数
var startIndex = 0;
var sartInter;
function startDaoshu() {
    startIndex++;
    $(".p4_daoshu").eq(startIndex).fadeIn(function () {
        if (startIndex == 2) {
            startIndex == 0;
            clearInterval(sartInter);
            $(".p4_circle").fadeOut();
            $(".p4_daoshu").fadeOut();
            setTimeout(function(){
                gameInter = setInterval(playDaoShu,1000)
            },1000)
        }
    }).siblings(".p4_daoshu").fadeOut();
}

//游戏进行时
var playTime = 30;
var gameInter;
var playInter ;
var imgAttr = [
    {"src": "images/p4_medal01.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal02.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal03.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal04.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal05.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal06.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal07.png", "width": "140","spacing_y":100},
    {"src": "images/p4_medal05.png", "width": "140","spacing_y":100},
    {"src": "images/p4_yin01.png", "width": "140","spacing_y":99},
    {"src": "images/p4_yin02.png", "width": "140","spacing_y":99},
    {"src": "images/p4_yin03.png", "width": "140","spacing_y":99},
    {"src": "images/p4_yin03.png", "width": "140","spacing_y":99},
    {"src": "images/p4_yin04.png", "width": "140","spacing_y":99},
    {"src": "images/p4_yin04.png", "width": "140","spacing_y":99}
]

var score = 0;
var gameHeight = $(window).height();
var gameWidth =$(window).width();
var canvas = oCanvas.create({
    canvas: "#canvas",
    fps: 60
});

function playDaoShu(){
    if(playTime == 30){
        playInter = setInterval(createImg,400)
    }
    playTime--;
    if(playTime >= 0){
        $(".p4_time_num span").text(playTime);
        $("#Page4 .p4_time_cur").animate({"width":(30-playTime)*444/30},1000);
    }else{
        clearInterval(playInter);
        clearInterval(gameInter);
        playTime = 30;
        canvas.reset();
        showResult();
    }
}

function createImg(){
    var x,y;
    var oneImg = imgAttr[Math.floor(Math.random() * imgAttr.length)];
    x = random(100,gameWidth - oneImg.width);
    y = random(-200, -400);
    var image = canvas.display.image({
        x: x,
        y: y,
        tile_spacing_x: 100,
        tile_spacing_y: oneImg.spacing_y,
        width:140,
        height:190,
        origin: { x: "center", y: "top" },
        image: oneImg.src
    });
    canvas.addChild(image);
    image.animate({
        y: 2000
    }, {
        duration: 2500,
        easing: "linear",
        callback:function(){
            this.remove();
        }

    });
    image.bind("touchstart", function handler(ev) {
        if(this.tile_spacing_y == 100){
            var posX = ev.x;
            var posY = ev.y;
            var icon = canvas.display.image({
                x: posX,
                y: posY-150,
                width:75,
                height:48,
                tile_spacing_x: 100,
                tile_spacing_y: 100,
                origin: { x: "center", y: "center" },
                image: "images/p4_num.png"
            });
            canvas.addChild(icon);
            icon.fadeOut(500);
            score = score + 1;
            this.stop();
            this.unbind("touchstart", handler);
            this.fadeOut(100, "linear",function(){
                this.remove();
            });

            $("#Page4 .jinpai_num span").text(score);
        }
    });
}

function random(min,max) {
    return Math.floor(min + Math.random() * (max - min));
}

function showResult(){
    $("#game_result").fadeIn(300);
    $(".game_result_num").text(score);
    if(score>=38){
        $(".game_result_text01").show();
        $(".game_result_btn01").show();
        $(".game_result_text02").hide();
        $(".game_result_btn02").hide();
        state = 1;
    }else{
        $(".game_result_text01").hide();
        $(".game_result_btn01").hide();
        $(".game_result_text02").show();
        $(".game_result_btn02").show();
        state = 0;
    }
   /* $.ajax({
        async: true,
        url: 'server.php',
        data:{"act":"state","state":state},
        type: "post",
        dataType: 'json',
        success: function (result) {
            if(result.errcode == 0){
            }
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.readyState == '0') {
                alert("网络异常");
            }
        }
    });*/
}

var points = [{x:-240,y:-80},{x:-81,y:-80},{x:78,y:-80},{x:78,y:78},{x:78,y:237},{x:-81,y:237},{x:-240,y:237},{x:-240,y:78}];
var rIndex = 0;
var time = 200;
var cycle = points.length * 5;
var count = 0;
var timer;
var position = 1;
var total = 0;
function roll(){
    $(".p5_lottery_cur").show().css({"margin-left":points[rIndex].x,"margin-top":points[rIndex].y});
    rIndex++;
    if(rIndex >= points.length){
        rIndex = 0;
    }
    if(time <= 60){
        time = 60;
    }
    count++;
    if(count + position >= cycle){
        time += 40;
    }else{
        time -= 10;
    }
    total = cycle + position;
    if( count  >= total){
        clearTimeout(timer);
        setTimeout(function(){
            if(position == 8){
                $("#lottery_result03").fadeIn(300);
            }else if(position == 6){
                $("#lottery_result02").fadeIn(300);
            }else if(position == 3){
                $("#lottery_result01").fadeIn(300);
            }
        },500)
    }else{
        timer = setTimeout(roll,time);
    }
}

$("#btnLottery").on("touchstart",function(){
    $.ajax({
        async: true,
        url: 'server.php',
        data:{"act":"draw"},
        type: "post",
        dataType: 'json',
        success: function (result) {
            if(result.errcode == 0){
                var pricceId = result.prize;
                if(pricceId == 1){
                    position = 8;
                }else if(pricceId == 2){
                    position = 6;
                }else if(pricceId == 3){
                    position = 3;
                }
                roll();
            }else if(result.errcode == 2004){
                $("#share").fadeIn(300);
            }else{
                alert(result.errmsg);
            }
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.readyState == '0') {
                alert("网络异常");
            }
        }
    });

})
var swiper;
window.onload = function(){
    $("#loading").hide();
    swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        noSwiping: true,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeStart: function (swiper) {
            swiperAnimate(swiper);
            $(".p2_Sydney").removeClass("p2_Sydney_cur");
            $(".p2_Rio").removeClass("p2_Rio_cur");
            $(".fire02").hide();
            $(".fire03").hide();
            if(swiper.activeIndex == 1 || swiper.activeIndex == 3){
                $(".move").addClass("moveAni");
                //禁用微信下拉
                document.querySelector('body').addEventListener('touchstart',handle,false)
            }else{
                document.querySelector('body').removeEventListener('touchstart',handle,false)
                $(".move").removeClass("moveAni");
            }

        }
    });
}

function handle(ev){
    ev.preventDefault();
}

$(".p1_btn").on("touchstart",nextPage)

function nextPage(){
    swiper.slideNext()
}

function hideMoudle(){
    $(".module_box").fadeOut(300);
}

$(".game_result_btn01").on("touchstart",function(){
    hideMoudle();
    nextPage();
})

$(".game_result_btn02").on("touchstart",function(){
    hideMoudle();
    $("#share").fadeIn(300);
})

$("#share").on("touchstart",function(){
    hideMoudle();
})

$("#Page3 .p3_btnRule").on("touchstart",function(){
    $("#rule").fadeIn(300);
})

$(".alert_close").on("touchstart",hideMoudle)

$("#Page3 .p3_btnJoin").on("touchstart",function(){
    nextPage();
    sartInter = setInterval(startDaoshu, 1000);
})

$("#Page5 #lottry_name").on("touchstart",function(){
    $("#lottery_list01").fadeIn(300);
})

$(".ued").on("touchstart",function(){
    if($(".ued_code").is(":hidden")){
        $(".ued_code_bg").show();
        $(".ued_code").show();
    }else{
        $(".ued_code_bg").hide();
        $(".ued_code").hide();
    }
})

var move = document.querySelector('.move');

move.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
    move.style.display = "none"

}, false);

function audioAutoPlay(id){
    var audio = document.getElementById(id),
        play = function(){
            audio.play();
            document.removeEventListener("touchstart",play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {//微信
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {//易信
        play();
    }, false);
    document.addEventListener("touchstart",play, false);
}
audioAutoPlay('play_audio');

$(".ms").on("click",function(){
    var audio = document.getElementById("play_audio");
    if(audio.paused){
        audio.play();
        $(this).addClass("suihua");
    }else{
        audio.pause();
        $(this).removeClass("suihua");
    }
})

