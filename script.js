const burger = document.getElementById("burger");
const mobileNav = document.querySelector("nav")


burger.addEventListener('click', openMenu => {

    let compStyle = window.getComputedStyle(mobileNav);
    let displayStyle = compStyle.getPropertyValue('display');

    if (displayStyle === 'none') {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
});