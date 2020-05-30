$(window).load(function() {
        var opacityHover1 = new app.ui.OpacityHover('.img_board');
    });



$(window).load(function(){
	$(window).on('resize', $.throttle('1000 / 15',function(){
		var wWidth = $(this).outerWidth();

		$(window).scroll(function() {
		          var $targetWrap = $('.skill-banner'),
                        $target = $targetWrap.find('.container'),
		                targetTop = $targetWrap.offset().top,
                        targetHeight = $target.height();
                        wScroll = $(this).scrollTop(),
		                hWindow = $(this).height();

		//console.log(wScroll);
		//console.log(adTop);
        // adTop - hWindow : 배너가 화면 밑부터 나오기 시작하면..
        //-((wScroll-adTop)/hWindow)*100
        // 위 공식은 스크롤을 내릴수록 배너가 화면의 밑바닥에 도착하면
        // 0% .... 화면의 가운데쯤 도착하면 -50%로 중앙에 도달할수 있게끔.하는 공식.
		if(wScroll > targetTop - (hWindow) ){
			$target.css({
				//'backgroundPositionY' :-((wScroll-targetTop)/hWindow)*100 +'%'
                'top': ((targetHeight*2) + ((targetTop - wScroll)-hWindow))/6
			});
		}
		  //initialScrollEvent = false;
		});
		$(window).trigger('scroll');

	}));

	$(window).trigger('resize');
});
