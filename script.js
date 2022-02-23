
let toggleNav = document.querySelector("#navbar-toggle");

toggleNav.addEventListener('click', function() {
    toggleNav.classList.toggle("exit");
    console.log('click');
})