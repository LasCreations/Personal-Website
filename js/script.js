let icon = document.querySelector('#icon');
let links = document.querySelector('.links');
const header = document.querySelector('.header'); 
const anim = document.querySelector('.animated-title'); 


window.addEventListener('scroll',fixNav);

function fixNav(){
    if(window.scrollY > header.offsetHeight + 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
};


icon.addEventListener('click',()=>{
    icon.classList.toggle('active');
    links.classList.toggle('active');

  if (anim.style.display === "none") {
    anim.style.display = "block";
  } else {
    anim.style.display = "none";
  }
});

//click anyware outside  menu and toggle button
document.addEventListener("click", (e) => {
  if (e.target !== icon) {
      if (icon.classList.contains("active") && links.classList.contains("active")) {
        icon.classList.remove("active");
        links.classList.remove("active");
      }
  }
});


document.querySelector('.header-changer').onclick = function(){
	document.querySelector('body').classList.toggle('is-black');
};

