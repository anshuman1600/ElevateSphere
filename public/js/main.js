(function (g) {
  new WOW().init();
  var f = g("#main-nav");
  var c = g(".toggle");
  var b = {
    disableAt: false,
    customToggle: c,
    levelSpacing: 10,
    navTitle: "MENU",
    levelTitles: true,
    levelTitles: true,
    labelClose: false,
    levelTitleAsBack: true,
    levelOpen: "expand",
    closeOnClick: true,
    insertClose: true,
    closeActiveLevel: true,
    insertBack: true,
  };
  var e = f.hcOffcanvasNav(b);
  function h() {
    if (g(window).scrollTop() >= 80) {
      g(".navfix").addClass("sticky");
    } else {
      g(".navfix").removeClass("sticky");
    }
  }
  g(function () {
    g(window).scroll(h);
    h();
  });
  var a = g("li.sbmenu");
  a.hover(
    function () {
      g(this).addClass("hover");
    },
    function () {
      g(this).removeClass("hover");
    }
  );
  g(".video-link").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
  });
  var d = g(".service-card-prb");
  d.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1 },
      520: { items: 2 },
      768: { items: 3 },
      1200: { items: 3 },
      1400: { items: 3 },
      1600: { items: 3 },
    },
  });
  var d = g(".testimonial-card-a");
  d.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1400: { items: 1 },
    },
  });
  var d = g(".video-testimonials");
  d.owlCarousel({
    items: 2,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3500,
    smartSpeed: 1500,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1400: { items: 2 },
    },
  });
  var d = g(".project-screens");
  d.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1 },
      520: { items: 2 },
      768: { items: 3 },
      1200: { items: 3 },
      1400: { items: 3 },
      1600: { items: 3 },
    },
  });
  var d = g(".porto-slide");
  d.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 50,
    autoplayTimeout: 350000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      520: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 0 },
      1200: { items: 1 },
      1400: { items: 1 },
      1600: { items: 1 },
    },
  });
  var d = g(".single-slide");
  d.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 100,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1, stagePadding: 0 },
      520: { items: 1, stagePadding: 0 },
      768: { items: 1, stagePadding: 0 },
      1200: { items: 1 },
      1400: { items: 1 },
      1600: { items: 1 },
    },
  });
  var d = g(".bages-slider");
  d.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    centre: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: { items: 2 },
      520: { items: 3 },
      768: { items: 3 },
      1200: { items: 3 },
      1400: { items: 4 },
      1600: { items: 4 },
    },
  });
  var d = g(".logo-weworkfor");
  d.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplayTimeout: 1800,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
      0: { items: 3 },
      520: { items: 3 },
      768: { items: 4 },
      1200: { items: 4 },
      1400: { items: 5 },
      1600: { items: 6 },
    },
  });
  var d = g(".testimonial-card-b");
  d.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: "#testimonials-avatar",
    smartSpeed: 500,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1400: { items: 1 },
    },
  });
  var d = g(".zoomowl");
  d.owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    responsive: {
      0: { items: 1, stagePadding: 60 },
      600: { items: 1, stagePadding: 100 },
      1000: { items: 1, stagePadding: 200 },
      1200: { items: 1, stagePadding: 250 },
      1400: { items: 1, stagePadding: 300 },
      1600: { items: 1, stagePadding: 350 },
      1800: { items: 1, stagePadding: 400 },
    },
  });
  g(".counter").counterUp({ delay: 10, time: 2500 });
  g.scrollUp({
    animation: "fade",
    scrollImg: { active: true, type: "background" },
  });
  g(".card-list").imagesLoaded(function () {
    var i = g(".card-list").isotope({
      itemSelector: ".single-card-item",
      percentPosition: true,
      masonry: { columnWidth: ".grid-sizer" },
    });
    g(".filter-menu").on("click", "li", function () {
      var j = g(this).attr("data-filter");
      i.isotope({ filter: j });
    });
  });
  g(".filter-menu li").on("click", function (i) {
    g(this).siblings(".is-checked").removeClass("is-checked");
    g(this).addClass("is-checked");
    i.preventDefault();
  });
  g("[data-background]").each(function () {
    g(this).css(
      "background-image",
      "url(" + g(this).attr("data-background") + ")"
    );
  });
})(jQuery);
