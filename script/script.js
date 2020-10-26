$(function(){
	$(window).resize(function(){
					win_h = $(window).height();
					$('html').css({
						height:win_h,
						lineHeight:win_h+'px'
					});
				
				}).resize();
	//팝업창
	//$("#pop").show();
	$("#header h1").click(function(){
		$("#pop").show();
	});
	$("#pop span").click(function(){
		$("#pop").hide();
	});
	
	//상단바메뉴
	$("#gnb").mouseenter(function(){
		$(".sub").stop().slideDown(500);
		$(this).children(".gnbback").stop().slideDown(500);
	});
	$("#gnb").mouseleave(function(){
		$('.sub').stop().slideUp(500);
		$(this).children(".gnbback").stop().slideUp(500);
	});
	$('#gnb>li').mouseover(function(){
		$(this).children('a').css({color:'#f96d28'});
		$(this).children('.gnbline').stop().fadeIn(600);
	});
	$('#gnb>li').mouseout(function(){
		$(this).children('a').css({color:'#000'});
		$(this).children('.gnbline').stop().fadeOut(600);
	});

	//메뉴 효과  
	/* $("#wrapper").mousewheel(function(e,delta){
					if(delta < 0){
						$("#gnb").fadeOut();
					} else{
						
					}
				});
	 */
	
	//슬라이드
	/* $("#slide img").each(function(aa){
		$(this).css({left:1200*aa});
	});
	
	setInterval(function(){
		$("#slide img").each(function(){
			var nowTop = parseInt($(this).css("left"));
			var movePos = nowTop-1200;
			$(this).animate({left:movePos},3000,function(){
				if(movePos<=-1200){
					$(this).css("left",2400);
				}
			});
		});
	},4000); */
	$("#slide > img:gt(0)").hide();
	setInterval(function() { 
	  $('#slide > img:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slide');
	},  4000);
	
	/*Leisure 이미지 오버*/
	$(".leisure li").mouseenter(function(){
		$(this).children(".info").stop().fadeIn();
		$(this).find("img").addClass("on");
	});
	$(".leisure li").mouseleave(function(){
		$(this).children(".info").stop().fadeOut();
		$(this).find("img").removeClass("on");
	});
	

	
	/*주의사항 롤링*/
	$(".rolling li").each(function(bb){
		$(this).css({"top":22*bb});
	});
	
	setInterval(function(){
	$(".rolling li").each(function(){
			var now = parseInt($(this).css("top"));
			var move = now-22;
			$(this).animate({"top":move},1000,function(){
				if(move<=-22){
					$(this).css("top",44);
				}
			});
		});
	},4000);
});