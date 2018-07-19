let icon = document.getElementById("icon");
let nav = document.getElementById("myTopNav");

icon.addEventListener("click",() =>{
  if (!nav.classList.contains("responsive")){
    nav.classList.add("responsive")
  } else{
    nav.classList.remove("responsive")
  }
});

let listBtn = document.getElementById("tracks");
let text = document.getElementById("list");
let exitBtn = document.getElementById("exit");

listBtn.addEventListener("click",()=>{
  text.style.display="block";
});

exitBtn.addEventListener("click",()=>{
  text.style.display="none";
});