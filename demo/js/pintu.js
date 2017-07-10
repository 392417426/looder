(function (window, document) {
    var PinTu = function (targetEl, options) {
        if (!(this instanceof PinTu)) return new PinTu(targetEl, options);
        this.options = this.extend({
            positions: [[0, 0], [126, 0], [252, 0], [0, 126], [126, 126], [252, 126], [0, 252], [126, 252], [252, 252]],
            imgSrcs:[
                ['images/pintu/img1-1.png',0],
                ['images/pintu/img1-2.png',1],
                ['images/pintu/img1-3.png',2],
                ['images/pintu/img1-4.png',3],
                ['images/pintu/img1-5.png',4],
                ['images/pintu/img1-6.png',5]

            ],
            success: function () {
            }
        }, options);

        if ((typeof targetEl) == 'string') {
            this.targetEl = document.querySelector(targetEl);
        } else {
            this.targetEl = targetEl;
        }

        if (this.options.positions.length != this.options.imgSrcs.length) return console.log("positions and imgs's length is not the same!")
    };
    PinTu.prototype = {
        targetPos : {},
        selectedId : 0,
        extend:function(obj,obj2){
            for(var k in obj2){
                obj[k] = obj2[k];
            }
            return obj;
        },
        init:function(){
            this.targetPos = {};
            this.selectedId = 0 ;
            this.createImg();
        },
        createImg: function () {
            this.targetEl.innerHTML = '';
            for (var i = 0; i < this.options.imgSrcs.length; i++) {
                var img = document.createElement('img');
                img.src = this.options.imgSrcs[i][0];
                img.style.left = this.options.positions[i][0] + 'px';
                img.style.top = this.options.positions[i][1] + 'px';
                img.name = i;
                img.setAttribute('data-num',this.options.imgSrcs[i][1]);
                this.targetEl.appendChild(img);
            }
        },
        randomPos: function () {
            this.options.imgSrcs.sort(function () {
                return 0.5 - Math.random();
            });
            this.targetPos ={x : this.targetEl.offsetLeft,y : this.targetEl.offsetTop};
            this.createImg();
            var _this = this;
            var imgs = this.targetEl.querySelectorAll('img');
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].addEventListener('touchstart',
                    function(event){
                        var evt = event || window.event;
                        _this.touch(_this,evt)
                    }
                );
                imgs[i].addEventListener('touchmove',  function(event){
                    var evt = event || window.event;
                    _this.touch(_this,evt)
                });
                imgs[i].addEventListener('touchend', function(event){
                    var evt = event || window.event;
                    _this.touch(_this,evt)
                });
            }
        },
        touch: function (_this,event) {
            var evt = event;
            var target = evt.target;
            switch (evt.type) {
                case "touchstart":
                    _this.selectedId = target.name
                    break;
                case "touchend":
                    _this.checkPoint(evt.changedTouches[0].clientX, evt.changedTouches[0].clientY, target);
                    break;
                case "touchmove":
                    evt.preventDefault();
                    _this.move(evt.touches[0].clientX, evt.touches[0].clientY, target);
                    break;
            }
        },
        move: function (x, y, target) {
            target.style.zIndex = 2;
            var left = x - this.targetPos.x - target.offsetWidth / 2;
            var top = y - this.targetPos.y - target.offsetHeight / 2;
            /*   if(left < 0 || left > this.targetEl.offsetWidth - target.offsetWidth){
             return false
             }
             if(top < 0 || top > this.targetEl.offsetHeight - target.offsetHeight){
             return false
             }*/
            target.style.left = left + "px";
            target.style.top = top + "px";
        },
        checkPoint: function (x, y,target ) {
            var r_x = x - this.targetPos.x;
            var r_y = y - this.targetPos.y;
            checkCor = 0;
            target.style.zIndex = 1;
            //判断拼图移动到哪个位置，并交换拼图
            for (var i = 0; i < this.options.imgSrcs.length; i++) {
                if (r_x > this.options.positions[i][0] && r_x < (this.options.positions[i][0] + target.offsetWidth) && r_y > this.options.positions[i][1] && r_y < (this.options.positions[i][1] + target.offsetHeight)) {
                    //将选择拼图坐标设置为移动到的位置坐标
                    target.style.left = this.options.positions[i][0] + "px";
                    target.style.top = this.options.positions[i][1] + "px";
                    //将原来的拼图跟选择的拼图位置交换
                    var changePic = document.querySelector('img[name="' + i + '"]');

                    changePic.style.left = this.options.positions[this.selectedId][0] + "px";
                    changePic.style.top = this.options.positions[this.selectedId][1] + "px";
                    //交换拼图name
                    changePic.name = this.selectedId;
                    target.name = i;
                    //将拼图移动正确标识设置为1
                    checkCor = 1;
                }
            }
            //如果拼图没有移动到正确位置，则返回原处
            if (checkCor == 0) {
                target.style.left = this.options.positions[this.selectedId][0] + "px";
                target.style.top = this.options.positions[this.selectedId][1] + "px";
            }
            //检查是否已拼图完成
            var _this = this;
            setTimeout(function(){
                if (_this.checkPic()) {
                    _this.options.success.call(_this)
                }
            },200)
        },
        checkPic : function () {
            var len = this.options.positions.length;
            var imgs = this.targetEl.querySelectorAll("img");
            for (var i = 0; i < len; i++) {
                if (imgs[i].name != imgs[i].getAttribute('data-num')) {
                    return false;
                }
            }
            for(var i = 0 ; i < len; i++){
                imgs[i].removeEventListener("touchstart",this.touch)
                imgs[i].removeEventListener("touchmove",this.touch)
                imgs[i].removeEventListener("touchend",this.touch)
            }
            return true;
        }
    }
    window.PinTu = PinTu;
}(window, document));