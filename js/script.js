let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Initialize ScrollReveal
ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '30px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form', { origin: 'bottom', distance: '30px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', distance: '30px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', distance: '30px', duration: 1000, delay: 200 });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer', 'Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendEmail() {
    fetch('send_email.php', {
        method: 'POST',
        body: new FormData(document.getElementById('contact-form'))
    })
    .then(response => {
        if (response.ok) {
            alert('Message Sent Successfully Yehey!!');
            clearForm();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => alert(error.message));
}




