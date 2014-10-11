(function($){
    $.fn.page = function(options) {
        var defaults = {
            pageSize : 10,
            totalPage : 10,
            homePage : '.home-page',
            endPage : '.end-page',
            prePage : 'pre-page',
            nextPage : 'next-page',
            inputPage : '.input-page',
            btnGoPage : '.btn-go',
            goPage : function(){},
            loadData : function(){}
        };
        options = $.extend(defaults, options);
        if($(this).size() == 0) return;
        var $this = $(this);

        var pageNum = 1;

        $this.find(options.btnGoPage).on('click',function(){
            var  val = $this.find(options.inputPage).val();
            if(val <= options.totalPage &&  val > 0 && !isNaN(val)){
                pageNum = val;
            }else{
                console.log('你输入的页码大于总页数或者输入出错！');
            }
        });

        $this.find(options.homePage).on('click',function(){
            pageNum = 1;
        });

        $this.find(options.endPage).on('click',function(){
            pageNum = options.totalPage;
        });

        $this.find(options.prePage).on('click',function(){
            pageNum = pageNum - 1;
        });

        $this.find(options.nextPage).on('click',function(){
            pageNum = pageNum + 1;
        });

        var str='ul';
        str += '<li><a href="javascript:;"  class="home-page">首页</a></li>';
        str += '<li><a href="javascript:;"  class="pre-page">上一页</a></li>';

        for(var i = 1;i <= options.totalPage;i++ ){
            str += '<li><a href="javascript:;"  onclic="setPage(' + i + ')">'+ i + '</a></li>'
        }
        str += '<li><a href="javascript:;"  class="next-page">下一页</a></li>';
        str += '<li><a href="javascript:;"  class="end-page">尾页</a></li>';
        str += '<li><input type="text"  class="input-page"  /></li>';
        str += '<li><input type="button" value="GO" class="btn-go"/></li>';
        str += 'ul';
        $this.html(str);

        function setPage(i){
            pageNum = i;
        }
    }
})(jQuery)