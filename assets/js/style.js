


  $(document).ready(() => {
    $('#nav-toggle').click(() => {
      $(".nav-item").toggle(100);
      $(".nav-link").toggle(100);
    });
 });

 var owl = $('.owl-carousel');
 owl.owlCarousel({
  loop:true,
  nav:true,
  margin:10,
  autoplayTimeout: 2000,
  autoplay: true,

  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 6
    },
    500: {
      items: 6
    }
  }
});
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY>0) {
      owl.trigger('next.owl');
  } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});

function onClose() {
  document.getElementById('croses').style.display = "none";
}

let first = false;

function toggle() {
  if (!first) {
    first = true;
    document.getElementById('fdsd').style.display = "block";
  } else {
    first = false;
    document.getElementById('fdsd').style.display = "none";
  }
}

AOS.init({
  offset: 100,
  duration: 500,
  easing: 'liner',
});



const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 30;
    sectionId = current.getAttribute("id");
    

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}




$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() + 970;
    if ($(window).scrollTop() > navHeight) {
       $('#sdds').addClass('fixed');
       $('#sldfkn').removeClass('cdkjs')
    }
    else {
      $('#sdds').removeClass('fixed');
      $('#sldfkn').addClass('cdkjs')
    }
 });
});




jQuery(function($){
	var topMenuHeight = $("#desktop-nav").outerHeight();
	$("#desktop-nav").menuScroll(topMenuHeight);
});

jQuery.fn.extend({
    menuScroll: function(offset) {
        var topMenu = this;
		var topOffset = offset ? offset : 0;
        var menuItems = $(topMenu).find("a");
        var lastId;
	
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

        $(topMenu).on("click", "a", function(e){
            var href = $(this).attr("href");
            
            var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset;

            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();

        });
		
        $(window).scroll(function(){
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var fromTop = (nm > nw ? nm : nw)+topOffset;

			
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                return this;
            });
			
            current = current[current.length-1];
            var id = current && current.length ? current[0].id : "";
            if (lastId !== id) {
                lastId = id;
                $(menuItems)
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
            }      

        });
    }
});


