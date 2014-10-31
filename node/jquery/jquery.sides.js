(function($){
    $.fn.sides = function(options) {
        var defaults = {
            childNode : '>ul>li',
            autoPlay : true,
            btnLeft : 'btn-left',
            btnRight : 'btn-right',
            direction : "leftToRight",
            smallpic : 'smallpic'
        };
        options = $.extend(defaults, options);
        if ($(this).size() == 0) return;
        var $this = $(this);
        var index = 0;

        var ulWidth,liWidth,liHeight;

        if( $this.find(options.childNode).length >= 2){
            if(options.direction == 'leftToRight'){
                $this.find(options.childNode).parent('ul').append($this.find(options.childNode).parent('ul').html())
            }

            liWidth = $this.find(options.childNode).width();
            liHeight = $this.find(options.childNode).height();
            ulWidth = liWidth  *  $this.find(options.childNode).length;
            $this.css({
                width : liWidth,
                height : liHeight
            });
            $this.find(options.childNode).parent('ul').css('width',ulWidth);

        }else{
            return;
        }

        $this.find(options.btnLeft).on('click',function(){
            clearInterval(timer);
            $this.find(options.childNode).parent('ul').stop(true,false);
            index++;
            if(index ==  $this.find(options.childNode).length/2){
                index = 0;
            }
            $this.find(options.childNode).parent('ul').css('left',-liWidth*index);
            timer = setInterval(doPlay,4000);
        });

        $this.find(options.btnRight).on('click',function(){
            clearInterval(timer);
            $this.find(options.childNode).parent('ul').stop(true,false);
            index--;
            if(index < 0){
                index =  $this.find(options.childNode).length/2 - 1;
            }
            $this.find(options.childNode).parent('ul').css('left',-liWidth*index);
            timer = setInterval(doPlay,4000);
        });
        $this.find(options.smallpic).append('<ul>')
        for(var i = 0;i < $this.find(options.childNode).length/2;i++){
            $this.find(options.smallpic).find('ul').append('<li><a href="javascript:;"> ' + i + '</li>')
        }
        $this.find(options.smallpic).find(options.childNode).each(function(i){
            $this.find(options.smallpic).find(options.childNode).eq(i).attr('index',i);
            $this.find(options.smallpic).find(options.childNode).eq(i).on('click',function(){
                index = i;
                clearInterval(timer);
                $this.find(options.childNode).parent('ul').stop(true,false);
                $this.find(options.childNode).parent('ul').css('left',-liWidth*index);
                timer = setInterval(doPlay,4000);
            });
        });

        var timer = setInterval(doPlay,4000);

        function doPlay(){
            index++ ;
            $this.find(options.childNode).parent('ul').animate({left:-liWidth*index},1000,function(){
                if(index >= $this.find(options.childNode).length/2 ){
                    index = 0;
                    $this.find(options.childNode).parent('ul').stop(true,false);
                    $this.find(options.childNode).parent('ul').css('left',0);
                }
            });
        }
    }
})(jQuery)
