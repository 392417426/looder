var name="";
var phone = "";
var address ="";
$("#submit_box .btnSubmit").on("click",function(){
    name = $("input[name='name']").val()
    phone = $("input[name='phone']").val()
    address = $("input[name='address']").val()
    var objReg;
    if (name == "" || name == " ") {
        submitError()
        return false;
    } else {
        objReg = /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{2,20}$/;
        if (!objReg.test(name)) {
            submitError()
            return false
        }
    }

    if (phone == "" || phone == " ") {
        submitError()
        return false
    } else {
        objReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/;
        if (!objReg.test(phone)) {
            submitError()
            return false;
        }
    }

    if (address == "" || address == " ") {
        submitError()
        return false
    } else {
        objReg = /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{2,100}$/;
        if (!objReg.test(address)) {
            submitError()
            return false;
        }
    }
    $("#submit_tips_box02").fadeIn()
})

//点击抽奖
$(".p10_img03").on("click",function(){
    $.ajax({
        async: false,
        url: '../server.php',
        data: {act:'h5_add',name: name,tel:phone,address:address},
        type: "post",
        dataType: 'json',
        success: function (result) {
            var priceId = 0;
            var deg = 0;
            if(result.errcode == 200){
                if(result.prize_id == 1){
                    priceId = 1;
                    deg = 60;
                }else if(result.prize_id == 2){
                    priceId = 2;
                    deg = 180;
                }else if(result.prize_id == 3){
                    priceId = 3;
                    deg = 300;
                }else if(result.prize_id == 4){
                    priceId = 4;
                    deg = [120,240,360][Math.floor(Math.random() * 3)];
                }
                turn(deg,priceId)
            }else if(result.errcode == 104){
                $("#lottery_tips06").fadeIn()
            }else if(result.errcode == 105){
                $("#lottery_tips01").fadeIn()
            }else if(result.errcode == 106){
                priceId = 4;
                deg = [120,240,360][Math.floor(Math.random() * 3)]
                turn(deg,priceId)
            }else{
                alert(result.errmsg)
            }
        },
        error: function (XMLHttpRequest) {
        	console.log(XMLHttpRequest);
            if (XMLHttpRequest.readyState == '0') {
                alert("网络异常");
            }
        }
    });

})

//转盘
function turn(deg,priceId){
    $(".p10_img06").stopRotate();
    $(".p10_img06").rotate({
        duration: 5000, //转动时间
        angle: 0, //默认角度
        animateTo: 360 * 6 + deg - 5, //转动角度
        easing: $.easing.easeOutSine,
        callback: function () {
            if(priceId == 1){
                $("#lottery_tips03").fadeIn();
            }else if(priceId == 2){
                $("#lottery_tips04").fadeIn();
            }else if(priceId == 3){
                $("#lottery_tips05").fadeIn();
            }else if(priceId == 4){
                $("#lottery_tips02").fadeIn();
            }
        }
    });
}


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        $("#loading").hide();
        fanshu()
    }
};

//翻书动画
function fanshu(){
    $(".book_cover").addClass("book_cover_ani");
    $(".book_cover_back").addClass("book_cover_back_ani");
}

//去除翻书动画
function removeFanshu(){
    $(".book_cover").removeClass("book_cover_ani");
    $(".book_cover_back").removeClass("book_cover_back_ani");
}

var book_cover_back = document.querySelector('.book_cover_back');
book_cover_back.addEventListener("webkitAnimationEnd",nextPage , false);

//夺取嘴唇
touch.on("#Page5","tap",".p5_img03",function(){
    $("#Page5 .p5_img03").hide();
    $("#Page5 .p5_img05").show().addClass("kiss");
})

var kiss = document.querySelector('.p5_img05');
kiss.addEventListener("webkitAnimationEnd",function(){
    setTimeout(function(){
        $("#scene_tips01").fadeIn();
    },500)
} , false);

//拿取苹果
$("#Page6 .apple").on("click",function(){
    $("#Page6 .p6_img02").hide();
    $("#Page6 .p6_img03").show();
    $("#Page6 .p6_img04").show().addClass("getapple");
})

var apple = document.querySelector('.p6_img04');
apple.addEventListener("webkitAnimationEnd",function(){
    $("#scene_tips02").fadeIn();
} , false);

//穿鞋子
$("#Page7 .p7_img04").on("click",function(){
    $(this).addClass("getshoes")
})

var shoes = document.querySelector('.p7_img04');
shoes.addEventListener("webkitAnimationEnd",function(){
    $("#Page7 .p7_img02").hide();
    $("#Page7 .p7_img03").show();
    setTimeout(function(){
        $("#scene_tips03").fadeIn();
    },500)
} , false);

//清楚场景动画
function clearScenseAni(){
    $("#Page5 .p5_img03").show();
    $("#Page5 .p5_img05").hide().removeClass("kiss");
    $("#Page6 .p6_img02").show();
    $("#Page6 .p6_img03").hide();
    $("#Page6 .p6_img04").hide().removeClass("getapple");
    $("#Page7 .p7_img02").show();
    $("#Page7 .p7_img03").hide();
    $("#Page7 .p7_img04").removeClass("getshoes");
}

//显示分享页面
touch.on("#Page8","tap",".p8_img02",function(){
    $("#share_tips").fadeIn();
})

//关闭分享页面
touch.on("#share_tips","tap",".share_img02",function(){
    $("#share_tips").fadeOut();
})

//显示惊喜信息
$("#Page9").on("click",".p9_btn",function(){
    var alertId = $(this).attr("data-alert");
    $("#" + alertId).fadeIn();

})

//关闭惊喜信息
$(".surprised_btnBack").on("click",closeMoudle)

//显示错误信息窗口
function submitError(){
    $("#submit_tips_box01").fadeIn();
}

//关闭信息错误框
$("#submit_tips_box01 .submit_tips_btnBack").on("click",function(){
    $("#submit_tips_box01").fadeOut();
})

//关闭抽奖提示窗
$(".lottery_tips_btnSure").on("click",function(){
    closeMoudle();
    if(lottery == 0 && involved == 0){
        pageSlideTo(0);
    }

})

function closeMoudle(){
    $(".module_box").fadeOut()
}

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
        if(swiper.activeIndex == 0){
            fanshu()
        }else{
            removeFanshu()
            clearScenseAni()
        }
    }
})

touch.on("#Page3","swipedown",prePage) //第三页返回第二页
touch.on("#Page3","tap",".p3_img04",nextPage)//第三页进入第四页
touch.on("#Page4","swipedown",prePage)//第四页返回第三页
touch.on("#Page4","tap",".p4_img02",function(){//第四页进入第五页
    pageSlideTo(4)
})
touch.on("#Page4","tap",".p4_img03",function(){//第四页进入第六页
    pageSlideTo(5)
})
touch.on("#Page4","tap",".p4_img04",function(){//第四页进入第七页
    pageSlideTo(6)
})
touch.on("#Page8","swipedown",function(){//第七页返回第四页
    pageSlideTo(3)
})
$("#Page8").on("click",".p8_img04",nextPage)//第八页进入第九页
//touch.on("#Page8","tap",".p8_img04",nextPage) //第八页进入第九页
touch.on("#Page9","tap",".p9_img03",function(){ //第九页返回第四页
    pageSlideTo(3)
})

touch.on("#scene_tips01","tap",".scene_tips_btnBack",function(){
    pageSlideTo(3);
    closeMoudle()
})

touch.on("#scene_tips01","tap",".scene_tips_btnStay",function(){
    closeMoudle()
    pageSlideTo(7);
})

touch.on("#scene_tips02","tap",".scene_tips_btnBack",function(){
    pageSlideTo(3);
    closeMoudle()
})

touch.on("#scene_tips02","tap",".scene_tips_btnStay",function(){
    closeMoudle()
    pageSlideTo(7);
})

touch.on("#scene_tips03","tap",".scene_tips_btnBack",function(){
    pageSlideTo(3);
    closeMoudle()
})

touch.on("#scene_tips03","tap",".scene_tips_btnStay",function(){
    closeMoudle()
    pageSlideTo(7);
})

touch.on("#submit_tips_box02","tap",".submit_tips_btnSure",function(){//填写正确后进入抽奖页面
    closeMoudle()
    pageSlideTo(9);
})

function pageSlideTo(i){
    mySwiper.slideTo(i,500,true);
}

function nextPage(){
    mySwiper.slideNext();
}

function prePage(){
    mySwiper.slidePrev();
}

var myAudio = document.getElementById("play_audio");
$(".ms").on("click",function(){
    playPause()
})

function playPause()
{
    if (myAudio.paused){
        myAudio.play();
        $(".ms").addClass("suihua");
    }else{
        myAudio.pause();
        $(".ms").removeClass("suihua");
    }
}


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


