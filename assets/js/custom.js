
$(document).ready(function(){
  $("#sign-up-btn").click(function(){
    $(".login-container").addClass("sign-up-mode");
  });

  $("#sign-in-btn").click(function(){
    $(".login-container").removeClass("sign-up-mode");
    $(".btn.solid").removeClass("sign-up-mode");
  });

  $(".btn.solid").click(function(){
    $(".login-container").addClass("sign-up-mode");
  });

  $(".btn_sign_up").click(function(){
    $(".login-container").removeClass("sign-up-mode");
  });

  // Slider start
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay: true,
      autoplayTimeout: 5000,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      // animateOut: 'slideOutDown',
      animateOut: 'fadeOut',
      animateIn: 'flipInX',
      dots:false,
      nav:true,
      navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  // Slider end

  // navbar start
  $(function(){
    $("#myNavbar a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }  
    });
  })
  // navbar end
  // view more start
  $(function(){
    $("#viewMore").click(function(){
    $("#hide_block").slideToggle(300);  
    })
    $("#viewMore2").click(function(){
    $("#hide_block2").slideToggle(300);  
    })
  })
  // view more end

  // company-list slider start
  $('.company-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    loop:true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // company-list slider end

  $('.other-course').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    loop:true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // image uploader start
  var btnImageUpload = $("#upload_image"),
    btnImageOuter = $("#img_button_outer");
  btnImageUpload.on("change", function(e){
    var imageext = btnImageUpload.val().split('.').pop().toLowerCase();
    if($.inArray(imageext, ['gif','png','jpg','jpeg']) == -1) {
      $("#img_error_msg").text("Not an Image...");
    } else {
      $("#img_error_msg").text("");
      btnImageOuter.addClass("file_uploading");
      setTimeout(function(){
        btnImageOuter.addClass("file_uploaded");
      },3000);
      var uploadedImage = URL.createObjectURL(e.target.files[0]);
      setTimeout(function(){
        $("#uploaded_image_view").append('<img src="'+uploadedImage+'" />').addClass("show");
      },3500);
    }
  });
  $("#img_remove").on("click", function(e){
    $("#uploaded_image_view").removeClass("show");
    $("#uploaded_image_view").find("img").remove();
    btnImageOuter.removeClass("file_uploading");
    btnImageOuter.removeClass("file_uploaded");
  });
  // image uploader end

  // file uploader start
  var btnfileUpload = $("#upload_file"),
    btnFileOuter = $("#file_button_outer");
  btnfileUpload.on("change", function(e){
    var fileext = btnfileUpload.val().split('.').pop().toLowerCase();
    if($.inArray(fileext, ['pdf','doc','odt','rtf','tex','txt','wpd']) == -1) {
      $("#file_error_msg").text("Not an file...");
    } else {
      $("#file_error_msg").text("");
      btnFileOuter.addClass("file_uploading");
      setTimeout(function(){
        btnFileOuter.addClass("file_uploaded");
      },3000);
      var uploadedFile = URL.createObjectURL(e.target.files[0]);
      setTimeout(function(){
        $("#uploaded_file_view").append('<iframe src="'+uploadedFile+'" height="500" width="300"></iframe>').addClass("show");
      },3500);
    }
  });
  $("#file_remove").on("click", function(e){
    $("#uploaded_file_view").removeClass("show");
    $("#uploaded_file_view").find("img").remove();
    btnFileOuter.removeClass("file_uploading");
    btnFileOuter.removeClass("file_uploaded");
  });
  // file uploader end

  // sorting box open start
  $("#sorting").on("click", function(e){
    $("#uploaded_image_view").removeClass("show");
  });
  // sorting box open end

  // profile button start
  let menuToggle = document.querySelector('.menu-toggle');
  let navigation = document.querySelector('.navigation');

  menuToggle.onclick = function() {
    navigation.classList.toggle('active');
  }
  // profile button end

  // filter start
  $(document).on('click', '.tree label', function(e) {
    $(this).next('ul').fadeToggle();
    $(this).toggleClass('open');
    e.stopPropagation();
  });
  // filter end

  // Login panel open start
  $("#loginPanelBtn").on("click", function(e){
    $("#loginPanel").addClass("show");
  });
  $("#loginPanel").on("click", function(e){
    $(this).removeClass("show");
  });
  // Login panel open end

});

// custom range slider start
  function rate(e, r) {
    $(e).addClass('active');
    $('.progress-bar', e).css('width', r + '%').attr('aria-valuenow', r).html(r + '%');
  }
  $('.skill-progress').mousemove(function(e) {
      //var x = e['offsetX'];
      //var x = $()
      //var parentOffset = $(this).parent().offset(); 
      var elementOffset = $(this).offset(); // if you really just want the current element's offset
      var x = e.pageX - elementOffset.left;
      var mw = $(this).width();

      var width = (x / mw) * 100;
      if (width > 50) {
          width += (width - 50) * 5 / 100;
      } else if (width < 50) {
          width -= (50 - width) * 5 / 100;
      }
      if (width > 100) width = 100;
      if (width < 0) width = 0;
      width = Math.round(width);
      rate(this, width);

  });
  $('.skill-progress').mouseout(function(ev) {
      var e = ev.toElement || ev.relatedTarget;
      if (e.parentNode == this || e == this) {
          return;
      }
      rate(this, $(this).attr('data-value'));
      if ($(this).attr('data-value') == $(this).attr('data-oldvalue'))
          $(this).removeClass('active');
  });
  $('.skill-progress').click(function(e) {
      var elementOffset = $(this).offset(); // if you really just want the current element's offset
      var x = e.pageX - elementOffset.left;
      var mw = $(this).width();

      var width = (x / mw) * 100;
      if (width > 50) {
          width += (width - 50) * 5 / 100;
      } else if (width < 50) {
          width -= (50 - width) * 5 / 100;
      }
      if (width > 100) width = 100;
      if (width < 0) width = 0;
      width = Math.round(width);

      $(this).attr('data-value', width);
      rate(this, width);
  });
  $('#save_rating_btn').click(function() {
      var ratings = [];
      $('.skill-progress').each(function() {
          var have_value = true;
          if ($(this).attr('data-value') == 0 && $(this).attr('data-oldvalue') == 0) have_value = false;
          if ($(this).attr('data-value') == $(this).attr('data-oldvalue')) have_value = false;

          if (have_value) {
              ratings.push($(this).attr('data-id') + ',' + $(this).attr('data-value'));
          }
      });
      $('.skill-show-on-process').show(0);
      $('.skill-hide-on-process').hide(0);
      // $.ajax({
      //     'url': '/programmer/my-account/save_ratings',
      //     'method': 'post',
      //     'processData':true,
      //     'cache': false,
      //     'dataType':'json',
      //     'data': {
      //         'ratings': ratings
      //     },
      //     success: function(data) {
      //         $('html, body').animate({
      //             scrollTop: 0
      //         }, 800);
      //         $("#topcontrol").click();
      //         $('.skill-notification').addClass('alert alert-success').html('You have successfully saved your skill!');
      //         $('.skill-show-on-process').hide(0);
      //         $('.skill-hide-on-process').show(0);
      //         $('.skill-progress').each(function() {
      //             $(this).attr('data-oldvalue', $(this).attr('data-value'));
      //             $(this).removeClass('active');
      //         });
      //         $("#updateStep3").css('color', 'green');
      //     },
      //     error: function() {
      //         console.log("Programmer Login Ajax Error!")
      //     }
      // });
  });
// custom range slider end

// Salary range slider start
(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);
      
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

// Salary range slider end

// chart start
$('.circlechart').circlechart();
// chart end
// filter nav start
function openNav() {
  document.getElementById("mySidenav").style.width = "340px";
  $("#sideOverlay").addClass("active");
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $("#sideOverlay").removeClass("active");
  document.body.style.backgroundColor = "white";
}
// filter nav end

