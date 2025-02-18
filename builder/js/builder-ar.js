
// =======================================================================================================================================================
// builder

// sideBar Left
function sideBarLeft() {
  let sidbarStat = "right";

  let colorBoxWidth = $("#colorBox").outerWidth();
  // $(".sideBarLeftCssClass").css("left", "-100%");

  $("#sideBar").addClass("sideBarLeftCssClass");
  $("#sideBar").removeClass("sideBarRightCssClass");
  $("#colorBox").css("order", "1");
  $(".btn-arrow-left").css("transform", "rotate(180deg)");
  $(".btn-arrow-left").css("order", "1");


  // $(".btn-left-right i").css("transform", "rotateY(0deg)");

  $("#sideBarToggle").css("transform", "rotateY(180deg)");

  $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 0);

  $("#sideBarToggle,.btn-arrow-left").click(function () {
    if ($(".sideBarLeftCssClass").css("right") == "0px") {
      $(".sideBarLeftCssClass").animate({ right: `-${colorBoxWidth}` }, 1000,
      function () {
        $("#sideBarToggle").fadeIn(100);
      }
      );
 



    } else {
      $(".sideBarLeftCssClass").animate({ right: `0px` }, 1000);
      $("#sideBarToggle").fadeOut(0);


    }
  });
  console.log("sideBarLeft");

}
// sideBarLeft();

// --------------------------------
// sideBar Right
function sideBarRight() {
  // $(".sideBarRightCssClass").css("left", "auto");
  let sidbarStat = "left";

  let colorBoxWidth = $("#colorBox").outerWidth();

  // $("#sideBar").css("right", "0px" )
  // $(".sideBarRightCssClass").css("right", "-100%");

  

  $(".sideBarRightCssClass").css("right", "100px");


  $("#colorBox").css("order", "0");
  $(".btn-arrow-left").css("transform", "rotate(0deg)");
  $(".btn-arrow-left").css("order", "0");

  $("#sideBarToggle").css("transform", "rotateY(0deg)");

  // $(".btn-left-right i").css("transform", "rotateY(180deg)");


  $("#sideBar").addClass("sideBarRightCssClass");
  $("#sideBar").removeClass("sideBarLeftCssClass");

  $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 0);

  $("#sideBarToggle,.btn-arrow-left").click(function () {
    if ($(".sideBarRightCssClass").css("left") == "0px") {
      $(".sideBarRightCssClass").animate({ left: `-${colorBoxWidth}` }, 1000,
        function () {
          $("#sideBarToggle").fadeIn(100);
        }
      );
     

    } else {
      $(".sideBarRightCssClass").animate({ left: `0px` }, 1000);
      $("#sideBarToggle").fadeOut(0);

    }
  });
  console.log("sideBarRight");
}
// sideBarRight();
sideBarLeft();

// --------------------------------

let sidebarStat = "right";

function toggleSidebar() {
  if (sidebarStat === "right") {
    sideBarRight();
    console.log("Opened right sidebar");
  $(".sideBarRightCssClass").css("right", "auto");
  $(".sideBarRightCssClass").css("left", "0px");


  } else {
    sideBarLeft();
    console.log("Opened left sidebar");
  $(".sideBarLeftCssClass").css("left", "auto");
  $(".sideBarLeftCssClass").css("right", "0px");

  }

  sidebarStat = (sidebarStat === "right") ? "left" : "right";
}

$(".btn-left-right").click(toggleSidebar);

// -----------------------------------------------------------------------
// device looks (smartphone / laptop)

$("#laptopdevice").click(function () {
  $(".iframeLaptop").show(500);
  $(".iframeMobile").hide(500);
});

$("#mobiledevice").click(function () {
  $(".iframeMobile").show(500);
  $(".iframeLaptop").hide(500);
});

// -----------------------------------------------------------------------
// En Ar sideBar

$(".btn-En").hide(0);

$(".btn-Ar").click(function () {
  $(".btn-Ar").hide(0);
  $(".btn-En").show(0);
});

$(".btn-En").click(function () {
  $(".btn-Ar").show(0);
  $(".btn-En").hide(0);
});

// -----------------------------------------------------------------------
// En Ar sideBar iframe
// $(".iframe-Ar").hide(0);
$(".btn-Ar").click(function () {
  $(".iframe-En").hide(0);
  $(".iframe-Ar").show(0);
});

$(".btn-En").click(function () {
  $(".iframe-En").show(0);
  $(".iframe-Ar").hide(0);
});

// =======================================================================================================================================================


$(".btn-Arrange").click(function () {
  $(".box-body-Arrange").show(0);
  $(".box-body-Content").hide(0);

  $(".box-btn-Arrange").hide(0);
  // $(".box-btn-Content").show(0);
  $(".box-btn-Content").css("display","flex");	
});


$(".btn-Content").click(function () {
  $(".box-body-Arrange").hide(0);
  $(".box-body-Content").show(0);

  $(".box-btn-Content").hide(0);
  $(".box-btn-Arrange").show(0);

});


document.getElementById('buttons-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-eye')) {
    event.target.classList.toggle('active-eye-slash');
  }
});