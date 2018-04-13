$(function(){
	 
	//回到顶部
	var topcontrol = $('#topcontrol');
	
	//导航栏对象
	var nav = $('#nav_wrap')
	
	//导航栏相对于网页原点的位置
	var navPos = nav.offset().top;
	
	//导航栏的实际高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function(){
		
		//获得滚动条位置
		var sTop = $(window).scrollTop();
		
		//超过200px显示回到顶部按钮
		if(sTop >= 200){
			
			topcontrol.fadeIn(300);
		} else{
			topcontrol.fadeOut(300);
		}
		
		//自动给导航栏添加fixed样式
		if(sTop >= navPos){
			
			if(!nav.hasClass('fix')){
				nav.addClass('fix');
				//banner下添加空白占位保留原来导航栏的位置
				$('#banner').css('margin-bottom',navHeight);
			}
		} else{
			
			if(nav.hasClass('fix')){
				nav.removeClass('fix');
				$('#banner').css('margin-bottom',0);
			}
		}
		
		/*//滚动监听导航自动高亮函数
		var navActive = function(target){
			
			//如果没有active高亮样式
			if( !$(target).hasClass('active') ){
				
				//删除所有高亮
				$('#nav li').removeClass('active');
				//单独添加高亮
				$(target).addClass('active');
			}
		}*/
		
		//进入海量正版免费下区域自动高亮
		var introStart = $('#post_intro').offset().top - navHeight;//获得板块顶点距离网页顶点的距离
		var introEnd = $('#post_intro').offset().top + $('#post_intro').outerHeight() - navHeight;
		
		if(sTop >= introStart && sTop <= introEnd){
			
			if( !$('.intro').hasClass('active')){
				
				$('.intro').addClass('active');
			}
		} else{
			
			if($('.intro').hasClass('active')){
				
				$('.intro').removeClass('active');
			}
		}
		
		//进入无需账号密码区域自动高亮
		var usageStart = $('#post_usage').offset().top - navHeight;
		var usageEnd = $('#post_usage').offset().top + $('#post_usage').outerHeight() - navHeight;
		
		if(sTop >= usageStart && sTop <= usageEnd){
			
			if( !$('.usage').hasClass('active') ){
				
				$('.usage').addClass('active');
			}
		} else{
			
			if( $('.usage').hasClass('active')){
				
				$('.usage').removeClass('active');
			}
		}
		
		//进入手机瘦身区域自动高亮
		var choiceStart = $('#choiceness').offset().top - navHeight;
		var choiceEnd = $('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight;
		
		if( sTop >= choiceStart && sTop <= choiceEnd ){
			
			if( !$('.choice').hasClass('active')){
				
				$('.choice').addClass('active');
			}
		} else{
			
			if($('.choice').hasClass('active')){
				
				$('.choice').removeClass('active');
			}
		}
		
	});
	
	//点击top回到顶部
	$('#topcontrol').on('click',function(){
		
		$('html,body').animate({scrollTop:0},800);
	});
	
	//网页锚点链接切换过渡
	$('#nav_wrap a').on('click',function(){
		
		//获得板块相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
		
		$('html,body').animate({scrollTop:top},800);
		
		return false;
	});
	
	
});
