$(window).on("load", function () {
  $("#loading-screen").fadeOut(6000, function () {
    $("body").removeClass("overflow-hidden");

    // * show nav as fixed after scroll the home sec
    const serviceOffsetTp = $("#services").offset().top;
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > serviceOffsetTp) {
        $(".nav").addClass("fixed rounded-br-full rounded-bl-full ");
        $(".scroll-to-top").fadeIn(500);
      } else {
        $(".nav").removeClass(" fixed rounded-br-full rounded-bl-full");
        $(".scroll-to-top").fadeOut(500);
      }
    });

    // * controll the dropDown menu
    $(".dropDownMenu").addClass("hidden");

    $(".menuIcon").on("click", function () {
      $(".dropDownMenu").toggleClass("hidden");
      $(".menuIcon i").toggleClass("fa-bars fa-x");
    });

    $(".dropDownMenu a").on("click", function () {
      $(".dropDownMenu").addClass("hidden");
      $(".menuIcon i").removeClass("fa-x").addClass("fa-bars");
    });


    // * scroll to specific sec with animate
    $(".nav a").on("click", function (e) {
      e.preventDefault();
      const secRef = $(this).attr("href");
      console.log($(this).attr("href"));
      const secOffsetToTop = $(secRef).offset().top;
      $("html , body").animate({ scrollTop: secOffsetToTop }, 2000);
      $(".nav a").removeClass("active");
      $(this).addClass("active");

    });

    // * scroll to top icon with animate
    $(".scroll-to-top").on("click", () => {
      $("html , body").animate({ scrollTop: 0 }, 2000);
    });


    // * home indicators images

    $(".home .img .fa-chevron-right").on("click", function () {
      let currentVisibleImg = $(".img:visible");
      let nextImg = currentVisibleImg.nextAll(".img:first");

      if (nextImg.length === 0) {
        nextImg = $(".home .img").first();
      }

      currentVisibleImg.fadeOut(600);
      nextImg.fadeIn(600);
    });

    $(".home  .img .fa-chevron-left").on("click", function () {
      let currentVisibleImg = $(".img:visible");
      let prevImg = currentVisibleImg.prevAll(".img:first");

      if (prevImg.length === 0) {
        prevImg = $(".home  .img").first();
      }

      currentVisibleImg.fadeOut(600);
      prevImg.fadeIn(600);
    });

    // * about section (purpule section) view eq

    $(".about span").on("click", function () {
      // * hide all content
      $(".about .content").slideUp(400);
      $(".about span i").removeClass("fa-minus").addClass("fa-plus");

      const content = $(this).parent().next().find(".content");

      if (content.is(":hidden")) {
        // * hide all content
        $(".about .content").slideUp(400);
        // * show the target content
        content.slideDown(400);
        content
          .parent()
          .prev()
          .find("span i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
      }
    });


    // * couses show related to clicked btn from the list
    $(".filterBtns ul li").on("click", function () {
      const dataFilter = $(this).attr("data-filter");

      $(".filterBtns ul li").removeClass("text-main");

      $(this).addClass("text-main");

      $(".courseItem").stop(true, true);

      if (dataFilter === "All") {
        // * show all courses
        $(".courseItem").show(600);
      } else {
        // * when click on any buts not all show the courses related to clicked btn and hide the appeared courses
        $(".courseItem").hide(600).promise().done(function () {
            $(".courseItem." + dataFilter).show(600);
          });
      }
    });
  });

  // testmonial
  // * large screen cards indictor right arrow
  $(".testmon .largeScr .card .fa-chevron-right").on("click", function () {
    let currentVisibleCard = $(".card:visible");
    let nextCard = currentVisibleCard.nextAll(".card:first");

    if (nextCard.length === 0) {
      nextCard = $(".testmon .largeScr .card").first();
    }

    currentVisibleCard.fadeOut(600);
    nextCard.fadeIn(600);
  });

  // * small & medium screen cards indiactor right arrow

  $(".testmon .smallScr .card .fa-chevron-right").on("click", function () {
    let currentVisibleCard = $(".card:visible");
    let nextCard = currentVisibleCard.nextAll(".card:first");

    if (nextCard.length === 0) {
      nextCard = $(".testmon .smallScr .card").first();
    }

    currentVisibleCard.fadeOut(600);
    nextCard.fadeIn(600);
  });

  // * large screen cards indictor left arrow
  $(".testmon .largeScr .card .fa-chevron-left").on("click", function () {
    let currentVisibleCard = $(".card:visible");
    let prevCard = currentVisibleCard.prevAll(".card:first");

    if (prevCard.length === 0) {
      prevCard = $(".testmon .largeScr .card").first();
    }

    currentVisibleCard.fadeOut(600);
    prevCard.fadeIn(600);
  });

  // * small & medium screen cards indiactor left arrow

  $(".testmon .smallScr .card .fa-chevron-left").on("click", function () {
    let currentVisibleCard = $(".card:visible");
    let prevCard = currentVisibleCard.prevAll(".card:first");

    if (prevCard.length === 0) {
      prevCard = $(".testmon .smallScr .card").first();
    }

    currentVisibleCard.fadeOut(600);
    prevCard.fadeIn(600);
  });
});
