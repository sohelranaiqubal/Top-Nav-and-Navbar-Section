let navba = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");
//<i class="fas fa-times"></i> 
searchBox.addEventListener("click", ()=>{
    navba.classList.toggle("showInput");
    if (navba.classList.contains("showInput")) {
        searchBox.classList.replace("fa-search" ,"fa-times")
    }else{
        searchBox.classList.replace("fa-times" ,"fa-search")
    }
})

//sidebar open close js code
let menuopenBtn = document.querySelector(".navbar .fa-bars");
let closeopenBtn = document.querySelector(".nav-links .fa-times");
let navlink = document.querySelector(".nav-links");

menuopenBtn.addEventListener("click", ()=>{
    navlink.style.left="0";
})
closeopenBtn.addEventListener("click", ()=>{
    navlink.style.left="-100%";
});

//sidebar open clese js code

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click",()=>{
     navlink.classList.toggle("show1");
});



let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click",()=>{
     navlink.classList.toggle("show2");
});

let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click",()=>{
     navlink.classList.toggle("show3");
});

