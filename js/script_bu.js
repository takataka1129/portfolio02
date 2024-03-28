// JavaScript Document


window.onload = function () {
  fade_effect();

  $(window).scroll(function () {
    fade_effect();
  });

  function fade_effect() {
    $('.fade').each(function () {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight) {
        $(this).addClass('view');
      }
    });
  }
};


/*-----------------------scroll-fade---------------------------------*/

$(function(){
    var effect_pos = 600; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 1800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

/*------------------------//scroll-fade--------------------------------*/


/*-----------------------scroll-fade1---------------------------------*/

$(function(){
    var effect_pos = 600; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 3000; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade1').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade1').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

/*------------------------//scroll-fade--------------------------------*/


/*-----------------------scroll-fade2---------------------------------*/

$(function(){
    var effect_pos = 1200; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 3000; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade2').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade2').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

/*------------------------//scroll-fade--------------------------------*/

/*-----------------------scroll-fade3---------------------------------*/

$(function(){
    var effect_pos = 1200; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 3600; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade3').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade3').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

/*------------------------//scroll-fade--------------------------------*/
