const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
});
