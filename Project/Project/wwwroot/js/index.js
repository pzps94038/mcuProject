// 當文本讀取完 menu被點擊加上class
$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
    });    
//    當windows滾動時抓到滾動的值
   $(window).scroll(function () { 
    //    當前高度
    var scrollPos = $(window).scrollTop();
    //    視窗高度
    var windowHeight = $(window).height();
    // 讀每個 animated
    $('.animatedY').each(function(){
    // 當前animated的高度
      var thisPos = $(this).offset().top;
    //   console.log(scrollPos,windowHeight);
    // 如果視窗跟當前高度+起來大於當前animated的高度+上class
      if((windowHeight + scrollPos) >= thisPos) {
         $(this).addClass('fadein');         
      }
    });
    $('.animatedtwoY').each(function(){
        // 當前animated的高度
          var thisPos = $(this).offset().top;
        //   console.log(scrollPos,windowHeight);
        // 如果視窗跟當前高度+起來大於當前animated的高度+上class
          if((windowHeight + scrollPos) >= thisPos) {
             $(this).addClass('fadein');         
          }
        });
    $('.animatedX').each(function(){
        // 當前animated的高度
          var thisPos = $(this).offset().top;
        //   console.log(scrollPos,windowHeight);
        // 如果視窗跟當前高度+起來大於當前animated的高度+上class
          if((windowHeight + scrollPos) >= thisPos) {
             $(this).addClass('fadein');         
          }
        });
        $('.animatedtwoX').each(function(){
            // 當前animated的高度
              var thisPos = $(this).offset().top;
            //   console.log(scrollPos,windowHeight);
            // 如果視窗跟當前高度+起來大於當前animated的高度+上class
              if((windowHeight + scrollPos) >= thisPos) {
                 $(this).addClass('fadein');         
              }
            });
   });
   
 });