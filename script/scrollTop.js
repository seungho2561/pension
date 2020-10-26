$(window).on('scroll', function(){//window는 최상위 객체이므로 ''나 ""으로 묶지 않는다.
	var nowScroll=$(window).scrollTop();
	console.log(nowScroll); //콘솔에 현재 스크롤하는 값을 찍어 확인한다.
	$('h1.scrollTop span').text(nowScroll + 'px');  // 스크롤바가 색상경계면을 지나면이 아니라 화면상에서 색상경계면이 없어져야 제대로 스크롤 px값이 나온다.
	var index;
	if(nowScroll>0 && nowScroll<=500){ index=0; }
	if(nowScroll>501 && nowScroll<=1000){ index=1; }
	if(nowScroll>1001 && nowScroll<=1500){ index=2; }
	if(nowScroll>1501 && nowScroll<=2000){ index=3; }
	if(nowScroll>2001 && nowScroll<=2500){ index=4; }
	$('h2.index').text(index);
	$('.gnb li').eq(index).children('a').addClass('scrollText');
	$('.gnb li').eq(index).siblings().children('a').removeClass('scrollText');
})