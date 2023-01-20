// header scroll
let header = document.querySelector(".section_1_head");

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-80px";
        header.style.background = "#a9a9a9b4";
    }
    prevScrollpos = currentScrollPos;
}


// --------------------------------------------------

sec1Head = document.querySelector(".section_1_head");
sec1HeadMenu = document.querySelector(".section_1_head_left-ins");
sec1Headscrollbar = document.querySelector(".section_1_scrollbar");
sec1HeadscrollbarBcc = document.querySelector(".scrollbar_on_bcc");

sec1HeadMenu.addEventListener("click", function(){
    sec1Head.style.transition = "1s";

    setTimeout(function(){
        sec1HeadscrollbarBcc.style.background = "rgb(13 11 9 / 90%)";
        sec1Headscrollbar.style.margin = "0 0vw 0 0";
        sec1Headscrollbar.style.transition = "all 1.2s ease"
        sec1Head.style.margin = "-80px 0 0 0";
    }, 300)
})

document.body.addEventListener("click", function(){
    sec1Headscrollbar.style.margin = "0 0vw 0 -80vw"
    sec1Head.style.margin = "0 0 0 0";
    sec1HeadscrollbarBcc.style.background = "transparent";
    sec1HeadscrollbarBcc.style.background = "transparent";
    sec1SelectYours.style.marginRight = "-80vw";
})

let scrollbarCancel = document.querySelector(".fa-xmark");

scrollbarCancel.addEventListener("click", function(){
    sec1Headscrollbar.style.margin = "0 0vw 0 -70vw";
    sec1Head.style.margin = "0 0 0 0";
    sec1HeadscrollbarBcc.style.background = "transparent";
})

// section_1_head_right_btn1

let sec1HeadSelectClick = document.querySelector(".section_1_head_right_btn1");
let sec1HeadSelect = document.querySelector(".section_1_select_click");

sec1HeadSelectClick.addEventListener("click", function(){
    sec1HeadSelect.style.transition = "all 1s ease";
    sec1HeadSelect.style.margin = "0px 0px 0px 0px";
    sec1HeadscrollbarBcc.style.background = "rgba(0, 0, 0, 0.5)";
})

let sec1HeadSelectCancel = document.querySelector(".section_1_select_click_cancel");

sec1HeadSelectCancel.addEventListener("click", function(){
    sec1HeadSelect.style.margin = "-100vh 0px 0px 0px";
    sec1HeadscrollbarBcc.style.background = "rgba(0, 0, 0, 0.5)";
})


// section_1_selectYours_click

let sec1SelectYours = document.querySelector(".section_1_selectYours_click");
let sec1SelectYoursClick = document.querySelector(".section_1_head_right_btn2");

sec1SelectYoursClick.addEventListener("click", function(){
    sec1Head.style.transition = "1s";
    sec1Head.style.marginTop = "-80px";

    setTimeout(function(){
        sec1HeadscrollbarBcc.style.background = "rgb(13 11 9 / 75%)"
        sec1SelectYours.style.margin = "0 0 0 0";
        sec1Head.style.margin = "-80px 0 0 0";
        sec1SelectYours.style.transition = "all 0.6s ease 0s";
    }, 600)
})