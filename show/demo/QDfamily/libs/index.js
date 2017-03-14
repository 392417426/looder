document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        clearInterval(loadTimer);
        document.getElementById("loadding_num").innerHTML = 100 + "%";
        setTimeout(function () {
            document.getElementById("loading").style.display = "none";
            addHomeAni()
        }, 500)
    }
};

$("#submit_box01").citySelect({prov:"广东", city:"广州"});

$("#submit_box01 .submit_box_btnSure").on("click",function(){
    var name = $("#submit_box01 input[name='name']").val();
    var phone = $("#submit_box01 input[name='phone']").val();
    var prov = $("#submit_box01 .prov").val();
    var city = $("#submit_box01 .city").val();
    var dist =  $("#submit_box01 input[name='dist']").val();
    var address = "";
    if(!checkNameAndPhone(name,phone)){
        showError()
        return false;
    }
    if(prov == undefined || prov == "" || prov == " "){
        showError()
        return false;
    }
    if(city == undefined || city == "" || city == " "){
        showError()
        return false;
    }
    if(dist == "" || dist == " "){
        showError()
        return false;
    }

    address = prov + city + dist;
    postCommon(name,phone,address)

})

$("#submit_box02 .submit_box_btnSure").on("click",function(){
    var name = $("#submit_box02 input[name='name']").val();
    var phone = $("#submit_box02 input[name='phone']").val();
    if(!checkNameAndPhone(name,phone)){
        showError()
        return false;
    }
    postCommon(name,phone,"")
});

function postCommon(name,phone,address){
    $.ajax({
        async: false,
        url: 'server.php',
        data:{"act":"infomation","name":name,"phone":phone,"address":address},
        type: "post",
        dataType: 'json',
        success: function (result) {
            if(result.errcode == 200){
                $("#tips_alert01").fadeIn(fadeTime);
            }else{
                showError()
            }
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.readyState == '0') {
                alert("网络异常");
            }
        }
    });
}

function checkNameAndPhone(name,phone){
    var objReg;
    if (name == "" || name == " ") {
        return false;
    } else {
        objReg = /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{2,20}$/;
        if (!objReg.test(name)) {
            return false
        }
    }

    if (phone == "" || phone == " ") {
        return false
    } else {
        objReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/;
        if (!objReg.test(phone)) {
            return false;
        }

    }
    return true;
}

function showError(){
    $("#tips_alert02").fadeIn(fadeTime);
}

$("#tips_alert01 .tips_btnSure").on("click",hideAlertAndToHome)

$("#tips_alert02 .tips_btnSure").on("click",function(){
    $("#tips_alert02").fadeOut(fadeTime)
})

$("#tips_alert03 .tips_btnSure").on("click",function(){
    $("#tips_alert03").fadeOut(fadeTime)
})

$("#tips_alert04 .tips_btnSure").on("click",function(){
    $("#tips_alert04").fadeOut(fadeTime)
})

//点击翻牌
var cards = $(".lottery_card");
cards.each(function(i){
    cards.eq(i).on("click",function(){
        $.ajax({
            async: false,
            url: 'json.json',
            type: "post",
            data:{'act':'add'},
            dataType: 'json',
            success: function (result) {
                var priceId = 0;
                var src = "images/lottery_card_face04.png";
                if(result.errcode == 200){
                    priceId = result.prize_id;
                    if(priceId == 1){
                    	lottery = 1;
                        src = "images/lottery_card_face01.png";
                    }else if(priceId == 2){
                    	lottery = 1;
                        src = "images/lottery_card_face02.png";
                    }else if(priceId ==3 || priceId == 4 || priceId == 5 || priceId == 6 ){
                    	lottery = 1;
                        src = "images/lottery_card_face03.png";
                    }else if(priceId == 7){
                    	lottery = 1;
                        src = "images/lottery_card_face04.png";
                    }else if(priceId == 8){
                        src = "images/lottery_card_face05.png";
                    }
                    cards.eq(i).find(".lottery_card_back").addClass("back");
                    cards.eq(i).find(".lottery_card_face").empty().append("<img src='"+ src +"'/>").addClass("face");
                    setTimeout(function(){
                        showPrice(priceId)
                    },800)
                }else if(result.errcode == 103){
                    $("#tips_alert04").fadeIn(fadeTime);
                }else if(result.errcode == 104){
                    $("#tips_alert03").fadeIn(fadeTime);
                }else{
                    cards.eq(i).find(".lottery_card_back").addClass("back");
                    cards.eq(i).find(".lottery_card_face").empty().append("<img src='images/lottery_card_face05.png'/>").addClass("face");
                    setTimeout(function(){
                        showPrice(8)
                    },800)
                }
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.readyState == '0') {
                    alert("网络异常");
                }
            }
        });
    })
})

function showPrice(priceId){
    var shareTitle = "QD瓷砖邀您一起游上海迪士尼";
    switch(priceId)
    {
        case 1:
            $("#price_alert01").fadeIn(fadeTime);//门票
            shareTitle = "我在幸福翻一翻里抽中上海迪士尼双人门票，满满的幸福感啊";
            break;
        case 2:
            $("#price_alert02").fadeIn(fadeTime); //画
            shareTitle = "我在幸福翻一翻里抽中装饰画，真漂亮";
            break;
        case 3:
            $("#price_alert04_04").fadeIn(fadeTime); //100元话费
            shareTitle = "我在幸福翻一翻里抽中100元话费噢，一起来更精彩";
            break;
        case 4:
            $("#price_alert04_03").fadeIn(fadeTime);//30元话费
            shareTitle = "我在幸福翻一翻里抽中30元话费噢，一起来更精彩";
            break;
        case 5:
            $("#price_alert04_02").fadeIn(fadeTime);//10元话费
            shareTitle = "我在幸福翻一翻里抽中10元话费噢，一起来更精彩";
            break;
        case 6:
            $("#price_alert04_01").fadeIn(fadeTime);//5元话费
            shareTitle = "我在幸福翻一翻里抽中5元话费噢，一起来更精彩";
            break;
        case 7:
            $("#price_alert03").fadeIn(fadeTime);//200元优惠券
            shareTitle = "我在幸福翻一翻里抽中现金券，又可以买买买了";
            break;
        case 8:
            $("#price_alert05").fadeIn(fadeTime);//谢谢参与
            shareTitle = "我跟迪士尼双人旅游就差一张牌的距离，要不咱来一起试试手气";
            break;
        default:
            $("#price_alert05").fadeIn(fadeTime);
            shareTitle = "我跟迪士尼双人旅游就差一张牌的距离，要不咱来一起试试手气";
    }
    changeShare(shareTitle)
}

//改变分享标题
function changeShare(shareTitle){
    var info = {
        title: shareTitle,
        link: defaultLink,
        imgUrl: defaultImage,
        success: shareSuccess
    };
    wx.onMenuShareTimeline(info);
}

//弹出填写信息窗口
var btnPriceAlert = $(".price_alert_btn");
btnPriceAlert.each(function(i){
    btnPriceAlert.eq(i).on("click",function(){
        var alertId = btnPriceAlert.eq(i).attr("data-alert")
        if(alertId){
            $("#" + alertId).fadeIn(fadeTime)
        }
    })
})

//添加首页动画
function addHomeAni(){
    $(".home_img01").addClass("bounceInLeft");
    $(".home_img02").addClass("zoomInRight");
}

//删除首页动画
function removeHomeAni(){
    $(".home_img01").removeClass("bounceInLeft");
    $(".home_img02").removeClass("zoomInRight");
}

$("#share_alert").on("click",hideAlertAndToHome);
$(".price_alert_btnCode").on("click",hideAlertAndToHome);

$("#tips_alert01 .tips_btnShare").on("click",function(){
    $("#share_alert").fadeIn(fadeTime)
})

function hideAlertAndToHome(){
    $(".module_box").fadeOut(fadeTime);
    mySwiper.slideTo(0,500,true);
}

var mySwiper = new Swiper('#swiper-container01',{
    effect : 'fade',
    onlyExternal : true,
    fade: {
        crossFade: false
    },
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
        if(swiper.activeIndex != 0){
            removeHomeAni();
            var index = swiper.activeIndex - 1
            btnOptions.eq(index).addClass("btnOptions_on").siblings(".btnOptions").removeClass("btnOptions_on");
        }else{
            addHomeAni();
            btnOptions.removeClass("btnOptions_on")
        }
        if(swiper.activeIndex != 1){
            cards.find(".lottery_card_back").removeClass("back");
            cards.find(".lottery_card_face").removeClass("face").empty();
        }
    }

})

//下排按钮
var btnOptions = $(".btnBar .btnOptions");
btnOptions.on("click",function(){
    var index = $(this).index() + 1;
    mySwiper.slideTo(index,500,true);
})

//翻一翻优惠弹出框
var fadeTime = 300;
var btnDiscount = $("#Discount .discount_btn,#Discount .discount_text02");
var discountAlert = $("#discount_swiper");
btnDiscount.on("click",function(){
    discountAlert.fadeIn(fadeTime);
    var discount_swiper = new Swiper('#swiper-container02');
})

$(".discount_alert_btnClose").on("click",function(){
    discountAlert.fadeOut(fadeTime);
})