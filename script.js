const burger = document.getElementById("burger");
const mobileNav = document.querySelector("nav")


burger.addEventListener('click', openMenu => {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
});