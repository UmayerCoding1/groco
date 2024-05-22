const searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginCard.classList.remove("active");
    navBar.classList.remove("active");
}

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#card-btn").onclick = () =>{
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginCard.classList.remove("active");
    navBar.classList.remove("active");
}

const loginCard = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    loginCard.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navBar.classList.remove("active");
}

const navBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginCard.classList.remove("active");
}

window.onscroll= () =>{
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginCard.classList.remove("active");
    navBar.classList.remove("active");
}



//copy 


// var swiper = new Swiper(".products-slidrt", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
//   });
