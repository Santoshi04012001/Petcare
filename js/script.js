/* nav */
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
   nav.classList.toggle("active");
   navToggler.classList.toggle("active");
}

navToggler.addEventListener("click",navToggle);

document.addEventListener("click",(event) =>{
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideNavToggler = navToggler.contains(event.target);
    if(!(isClickInsideNav || isClickInsideNavToggler) && nav.classList.contains("active")){
        navToggle();
    }
})