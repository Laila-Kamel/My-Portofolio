let imgArr=document.querySelectorAll(".slider__item");
// let fItem=document.getElementById("first");
// let sItem=document.getElementById("second");
// let prevBtn=document.getElementById("prevBtn");
// let nextBtn=document.getElementById("nextBtn");
let navbtn=document.getElementById("navBtn");
let navList=document.getElementById("navList");
let nav=document.querySelector(".nav");
// console.log(imgArr);

// prevBtn.addEventListener("click",function(){
// // let item=e.target
// // console.log(item);
// fItem.style.display="none";
// sItem.style.display="block";
// })

// nextBtn.addEventListener("click",function(){
//     // let item=e.target
//     // console.log(item);
//     sItem.style.display="none";
//     fItem.style.display="block";
//     })

navbtn.addEventListener("click",function(){
    if(navList.style.display=="block"){
        navList.style.display="none";
    }
    else{
        navList.style.display="block";

navList.style.backgroundColor="aqua";
nav.style.display="flex";
nav.style.flexDirection="column";
    }

})
