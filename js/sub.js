$(window).load(function() {
        var slider1 = new app.ui.Slider('.port-slide');
        slider1.options = {
            dots: true,
            infinite: true,
            adaptiveHeight: true
        }
        slider1.initEvent(slider1.options);
        //$('.port-slide').slick()

        var circleAni1 = new app.ui.CircleAni('#html');
        var circleAni2 = new app.ui.CircleAni('#css');
        var circleAni3 = new app.ui.CircleAni('#jquery');
        var circleAni4 = new app.ui.CircleAni('#javascript');
});
