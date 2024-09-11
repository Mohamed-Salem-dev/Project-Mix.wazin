// =================================================================================================================
// Navbar
document.addEventListener("DOMContentLoaded", () => {
  // إنشاء العنصر div وإضافته إلى DOM
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = ""; // يمكنك وضع النص الذي تريده هنا

  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);

  // العناصر الأخرى في DOM
  let btnToggle = document.querySelector(".btn-toggle-collapse");
  let listNav = document.querySelector(".box-collapse-nav");
  let btnXmark = document.querySelector(".btn-xmark");

  let navbarComprehensive = document.querySelector(".box-navbar-comprehensive");

  // إزالة العنصر بعد إضافته للتأكد من أنه سيضاف فقط عند النقر
  layerScreen.remove();

  btnToggle.onclick = () => {
    listNav.classList.toggle("toggleSidbar");

    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    }
  };

  btnXmark.onclick = () => {
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");
      setTimeout(() => {
        layerScreen.remove();
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  layerScreen.onclick = () => {
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");
      console.log("lllll");
      setTimeout(() => {
        layerScreen.remove();
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
    console.log("cccc");

    if ($(window).width() >= 992) {
      $(".box-collapse-items").css("transform", "translateX(0%)");
      $(".sub-menu-dropdown-Categories38").css("transform", "translateX(0%)");
      $(".ul-items-Categories").css("transform", "translateX(0%)");
      return;
    }

    $(".box-collapse-items").css("transform", "translateX(100%)");
    $(".sub-menu-dropdown-Categories38").css("transform", "translateX(100%)");
    $(".ul-items-Categories").css("transform", "translateX(100%)");
  };

  // ========================================================
  // let btnXmark2 = document.querySelector(".btn-xmark-2");

  $(".btn-xmark-2").on("click", function () {
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
        $(".box-collapse-items").css("transform", "translateX(100%)");
        $(".sub-menu-dropdown-Categories38").css(
          "transform",
          "translateX(100%)"
        );
        $(".ul-items-Categories").css("transform", "translateX(100%)");
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  });

  // ========================================================
  // let btnXmark3 = document.querySelector(".btn-xmark-3");

  $(".btn-xmark-3").on("click", function (event) {
    event.stopPropagation(); // منع انتشار الحدث

    console.log("vcdvdvdvdvdv");
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
        $(".box-collapse-items").css("transform", "translateX(100%)");
        $(".sub-menu-dropdown-Categories38").css(
          "transform",
          "translateX(100%)"
        );
        $(".ul-items-Categories").css("transform", "translateX(100%)");
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  });
});

// --------------------------------------
// $(".box-Categories-nav").click(function () {
//   $(".box-collapse-items").css("transform", "translateX(0)");
//   console.log("0");
// });

$(".btn-chevron").click(function (event) {
  $(".box-collapse-items").css("transform", "translateX(100%)");
  event.stopPropagation(); // منع انتشار الحدث
  console.log("1000");
});

// --------------------------------------
// $(".menu-item-li").click(function() {
//   $(".sub-menu-dropdown-Categories38").css("transform", "translateX(0)");
//   console.log("5");
// });

// ---------------------------------------------------------------------
// $(document).ready(function () {
//   $(".menu-item-li").click(function () {
//     $(".sub-menu-dropdown-Categories38").slideUp();

//     $(this).find(".sub-menu-dropdown-Categories38").slideDown();
//   });
// });

document.querySelectorAll(".box-Categories-nav").forEach((item) => {
  item.addEventListener("click", () => {
    // إخفاء كافة القوائم المنسدلة
    document.querySelectorAll(".box-collapse-items").forEach((subMenu) => {
      // subMenu.style.display = 'none';
      subMenu.style.transform = "translateX(100%)";
    });
    // إظهار القائمة المنسدلة الخاصة بالعنصر المحدد
    // item.querySelector('.sub-menu-dropdown-Categories38').style.display = 'block';
    item.querySelector(".box-collapse-items").style.transform = "translateX(0)";
  });
});

// ------------------------
// mm
if ($(window).width() <= 992) {
  document.querySelectorAll(".item-titel").forEach((item) => {
    item.addEventListener("click", () => {
      // إخفاء كافة القوائم المنسدلة
      document.querySelectorAll(".ul-items-Categories").forEach((subMenu) => {
        // subMenu.style.display = 'none';
        subMenu.style.transform = "translateX(100%)";
        console.log("5555555555555555");
      });
      // إظهار القائمة المنسدلة الخاصة بالعنصر المحدد
      // item.querySelector('.sub-menu-dropdown-Categories38').style.display = 'block';

      item.querySelector(".ul-items-Categories").style.transform =
        "translateX(0)";

      console.log("666666666666");
    });
  });

  $(".btn-chevron-3").click(function (event) {
    $(".sub-menu-dropdown-Categories38").css("transform", "translateX(100%)");
    event.stopPropagation(); // منع انتشار الحدث
    console.log("1000");
  });

  $(".btn-chevron-items").click(function (event) {
    $(".ul-items-Categories").css("transform", "translateX(100%)");
    event.stopPropagation(); // منع انتشار الحدث
    console.log("1000");
  });
}

// =================================================================================================================

$(window).scroll(function () {
  // console.log("Hello");
  let wScroll = $(window).scrollTop();

  if (wScroll > 50) {
    $(".box-navbar-comprehensive").addClass("nav-sticky");

    $(".box-navbar-comprehensive").css({ top: "0" });
    $(".box-navbar-comprehensive").css({ position: "fixed" });

    $(".box-collapse-items").css({ top: "3rem" });
  } else {
    $(".box-navbar-comprehensive").removeClass("nav-sticky");

    $(".box-navbar-comprehensive").css({ top: "-300px" });
    $(".box-navbar-comprehensive").css({ position: "static" });

    $(".box-collapse-items").css({ top: "6rem" });
  }
});

// =====================================
$(document).ready(function () {
  $(".box-Categories-nav").click(function (e) {
    e.stopPropagation();
    if ($(window).width() <= 992) {
      // e.preventDefault();
    }

    if ($(window).width() >= 992) {
      $(".box-collapse-items").css("transform", "translateX(0%)");
      return;
    }
  });

  $(".item-titel h3").click(function (e) {
    // e.stopPropagation();
    if ($(window).width() <= 992) {
      e.preventDefault();
    }
  });
});
// ===============================================
// login
$(document).ready(function () {
  $("#phone").hide();
  $("#email").hide();
  $("#code").hide();

  $(".btnPhone").click(function () {
    $("#phone").show();

    $("#login").hide();
    $("#email").hide();
    $("#code").hide();
  });

  $(".btnEmail").click(function () {
    $("#email").show();

    $("#login").hide();
    $("#phone").hide();
    $("#code").hide();
  });

  $(".btnSubmitPhoneEmail").click(function () {
    // $("#login").show();
    $("#code").show();

    $("#phone").hide();
    $("#email").hide();
    $("#login").hide();
  });
});
