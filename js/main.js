let imgArr=document.querySelectorAll(".slider__item");
let fItem=document.getElementById("first");
let sItem=document.getElementById("second");
let prevBtn=document.getElementById("prevBtn");
let nextBtn=document.getElementById("nextBtn");
let navbtn=document.getElementById("navBtn");
let navList=document.getElementById("navList");
// console.log(imgArr);

prevBtn.addEventListener("click",function(){
// let item=e.target
// console.log(item);
fItem.style.display="none";
sItem.style.display="block";
})

nextBtn.addEventListener("click",function(){
    // let item=e.target
    // console.log(item);
    sItem.style.display="none";
    fItem.style.display="block";
    })

// navbtn.addEventListener("click",function(){
// navList.style.display="block";
// navList.style.flexDirection="column";
// $("navList").show();
// })