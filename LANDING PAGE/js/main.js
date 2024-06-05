// NAVBAR

// Toggle active class
const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#product').onclick = () => {
   navbarNav.classList.toggle('active');
   
}

//  Klik diluar side bar

const heat = document.querySelector('#product');

document.addEventListener('click', function(e) {
    if(!heat.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
})

// NAVBAR
