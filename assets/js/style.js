


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
