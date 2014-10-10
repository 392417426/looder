(function() {
	$.fn.dialog = function(options) {
		var defaults = {
			hasBg : false,
			isCenter : true,
			hasTimeLimit : false,
			showTime : '2000',
			position : 'fixed',
			left : '0',
			top : '0',
			btnClose : 'close',
			btnCancel : 'btnCancel',
			btnSubmit : 'btnSubmit',
			btnOther : 'btnShare',
			content : function(){},
			subCallback : function(){},
			othCallback : function(){}
		};
		options = $.extend(defaults, options);
		if($(this).size() == 0) return;
		var $this = $(this);
		
		if(options.hasTimeLimit){
			showDialog();
			setTimeout(closeDialog,options.showTime);
		}
		
		if(options.hasBg){
			var bgHeight = $(document).height()+'px';
			var bgOpt = {
					display : 'block',
					position : 'absolute',
					left : '0',
					top : '0',
					background : '#333',
					opacity : '0.2',
					filter : 'alpha(opacity=20)',
					width : '100%',
					height : bgHeight
			};
			$('<div></div>').appendTo('body').css(bgOpt).addClass('jp_bg');
			
			showDialog();
		}else{
			showDialog();
		};

		$this.find(options.btnClose).on('click',closeDialog);
		
		$this.find(options.btnCancel).on('click',closeDialog);
			
		$this.find(options.btnSubmit).on('click',function(){
			if(options.subCallback) options.subCallback.call();
		});
		
		$this.find(options.btnOther).on('click',function(){
			if(options.othCallback) options.othCallback.call();
		});
		
		if(options.content) options.content.call($(this));
		
		function showDialog(){
            $this.css({
                display : 'block',
                zIndex : '100'
            });
			var dLeft,dTop;
			if(options.isCenter){

				dLeft = ($(window).width() - $this.width())/2+'px';
				dTop = ($(window).height() - $this.height())/2+'px';
			}else{
				dLeft = options.left+'px';
				dTop = options.top+'px';
			}
			$this.css({
				position : options.position,
				left : dLeft,
				top : dTop
			});
		}
		
		function closeDialog(){
			if(options.hasBg){
				$('.jp_bg').css('display','none');
			}
			$this.css('display','none');
		}
	};
})(Zepto);