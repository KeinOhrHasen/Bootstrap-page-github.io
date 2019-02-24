;(function(){

var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', navbarResize);
window.addEventListener('scroll', navbarHide);
window.addEventListener('scroll', navbarShow);
window.addEventListener('scroll', shovHideUp_Button);

function navbarResize(){
  //  When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function navbarHide(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "-100px";
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").classList.replace("bg-success","bg-dark")
  }
}

function navbarShow(){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)  {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.replace("bg-dark","bg-success")
  }
}

function shovHideUp_Button(){
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 || window.pageYOffset  > 1000 )  {
    document.getElementById("up_button").classList.remove("d-none");
    document.getElementById("up_button").classList.add("d-flex");
  } else {
    document.getElementById("up_button").classList.remove("d-flex");
    document.getElementById("up_button").classList.add("d-none");
    }
}


// --------------jQuery mixin----------
// YouTube video manipulation
$(document).ready(function(){
  $("#playVideo").click(function(){
    $("#Youtube").attr("src", "https://www.youtube.com/embed/f5BBJ4ySgpo?autoplay=1&enablejsapi=1")
  })

  $("#pauseYoutube").click(function(){
    $("#Youtube").attr("src", "")
  })

  $("#stopYoutube").click(function(){
    $("#Youtube").attr("src", "")
  })


// achievement counter
  $('#counter-box').on("mouseover", function(){
      $('.numbers').each(function() {
        let $this = $(this),
            countTo = +$this.attr('data-count') + 1;
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {
          duration: 1500,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          }
        });  
      });
    })




// Carousel One
  $('#carouselOne').owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:25, //Отступ от элемента справа в 50px
      autoplay:true, //Автозапуск слайдера
      dots:true,
      center: true,
      dotsEach:true,
      lazyLoad:true,
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:3000, //Время смены слайда
      responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
          0:{
              items:1
          },
          500:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });



// Carousel Two
  $('#carouselTwo').owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:25, //Отступ от элемента справа в 50px
      autoplay:true, //Автозапуск слайдера
      dots:true,
      center: true,
      dotsEach:true,
      nav: true,
      lazyLoad:true,
      items:3,
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:3000 //Время смены слайда
  });


  // catch center element and change the content above
  var owl;
  let prevElem = $("#user_4");
  prevElem.show();
  owl = $("#carouselTwo");
  owl.on('changed.owl.carousel', function(e) {
    let curr_id = $(this).find(".owl-item.active.center>div").attr("id").replace("user_img_",  "" );
    $(".comment").hide();
    $("#user_"+(curr_id)).show();
  });
  

});



})();