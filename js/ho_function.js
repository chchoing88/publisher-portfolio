var app = app || {};

app.ui = app.ui || {};

//hover 시 opacity start
app.ui.OpacityHover = function(selector){
    this.$container = null;
    this.$imgItems = null;
    this.timeout = null;

    this.init(selector);
    this.initEvent();
}
app.ui.OpacityHover.prototype.init = function(selector){
    this.$container = $(selector);
    this.$imgItems = this.$container.find('.img-item');
}
app.ui.OpacityHover.prototype.initEvent = function(){
    var objThis = this;

    this.$imgItems.on('mouseenter', function(event){

            var $target	= $(this);
        	clearTimeout( this.timeout );
            objThis.timeout = setTimeout( function() {

                if( $target.hasClass('active') ) return false;

                objThis.$imgItems.not( $target.removeClass('blur').addClass('active') )
                         .removeClass('active')
                         .addClass('blur');
            }, 65 );
    });
    this.$container.on( 'mouseleave', function( event ) {

        clearTimeout( objThis.timeout );
        objThis.$imgItems.removeClass('active blur');

    });
}
//hover 시 opacity end

// flick slider start
app.ui.Slider = function(selector){
    this.$target = null;
    this.option = {};

    this.init(selector);
    //this.initEvent(this.option);
}
app.ui.Slider.prototype.init = function(selector){
    this.$target = $(selector);
}
app.ui.Slider.prototype.initEvent = function(option){
    this.$target.slick(option);
}
// flick slider end

// circle animation start
app.ui.CircleAni = function(selector){
    //this.$contents;
    this.$chart = null;
    this.$circleLeft = null;
    this.$circleRight = null;

    this.$percentNumber;
    this.percentData;

    this.init(selector);
    this.initAni();
}
app.ui.CircleAni.prototype.init = function(selector){
    //this.$contents = $(selector);
    //this.$chart = this.$contents.find('.chart');
    this.$chart = $(selector);
    this.$circleLeft = this.$chart.find('.left .circle-mask-inner');
    this.$circleRight = this.$chart.find('.right .circle-mask-inner');

    this.$circleLeft.css({
        trnasform: 'rotate(0)'
    });
    this.$circleRight.css({
        transform : 'rotate(0)'
    });
    this.$percentNumber = this.$chart.find('.percent-number');
    this.percentData = this.$percentNumber.text();

    this.$percentNumber.text(0);
}

app.ui.CircleAni.prototype.initAni = function(){
    var objThis = this;
    $({ percent: 0 }).delay(1000).animate({ percent: this.percentData }, {
               duration: 1500,
               progress: function () {
                   var now = this.percent,
                       deg = now * 360 / 100, // percent -> degree
                       degRight = Math.min(Math.max(deg, 0), 180),
                       degLeft  = Math.min(Math.max(deg - 180, 0), 180);
                   objThis.$circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
                   objThis.$circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
                   objThis.$percentNumber.text(Math.floor(now));
               }
           });
}
// circle animation end

// mobile gnb animation start
app.ui.MobileGnb = function(selector , effect){
    this.$targetBtn = null;
    this.$targetGnb = null;
    this.$gnbBg = null;
    this.$body = null;
    this.$html = null;

    this.init(selector);
    this.initEvent(effect);
}
app.ui.MobileGnb.prototype.init = function(selector){
    this.$targetBtn = $(selector);
    this.$targetGnb = this.$targetBtn.parent('.m-gnb');
    this.$gnbBg = $('.m-gnb-bg');
    this.$body = $('body');
    this.$html = $('html');
}
app.ui.MobileGnb.prototype.initEvent = function(effect){
    var objThis = this;
    this.$targetBtn.on('click', function(e){

        if( $(this).hasClass('is-active') ){
            $(this).removeClass('is-active');
            objThis.$targetBtn.removeClass('is-active');
            objThis.$gnbBg.removeClass('is-open');
            objThis.$body.removeClass('is-gnb-open');
            objThis.$html.removeClass('is-gnb-open');
            effect.hide(objThis.$targetGnb);
        }else{
            $(this).addClass('is-active');
            objThis.$targetBtn.addClass('is-active');
            objThis.$gnbBg.addClass('is-open');
            objThis.$body.addClass('is-gnb-open');
            objThis.$html.addClass('is-gnb-open');
            effect.show(objThis.$targetGnb);
        }
        e.preventDefault();
    })
}

RightToLeft = {
    show : function(target){
        var wHeight = $(window).height();
        target.children('#m-gnb-scroll').height(wHeight);
        var myScroll = new IScroll('#m-gnb-scroll', {
            scrollY: true,
            click:true,
            mouseWheel: true
        });
        target.addClass('is-open');
    },
    hide : function(target){
        target.removeClass('is-open');
    }

}

// mobile gnb animation edn

// iscroll start

// iscroll end
