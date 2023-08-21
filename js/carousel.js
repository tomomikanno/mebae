$(document).ready(function() {
    $('.carousel-event').slick({
        autoplay: true, // 自動再生
        arrows: true, // 左右のナビゲーションを無効にする
        dots: false, // スライド下にドットを表示する
        fade: true, // スライドの切り替えをフェードにする        
    });
    $('.carousel-cover').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        cssEase: "linear", //スライドの流れ方を等速に設定
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 左右のナビゲーションを無効にする
        dots: false, // スライド下にドットを表示する
        fade: true, // スライドの切り替えをフェードにする 
        pauseOnHover: false, //再生時マウスオーバーで一時停止させない
        pauseOnFocus: false, //再生時フォーカスで一時停止させない
        pauseOnDotsHover: false //マウスオーバーでドットを一時停止させない 
    });
});
