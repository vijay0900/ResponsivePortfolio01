let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
      });

      let header = documents.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');

    };

ScrollReveal({
        distance:'80px',
        duration: 2000,
        delay: 200,
      });


ScrollReveal().reveal('.home-content, heading', {orgin: 'top'  });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});  
ScrollReveal().reveal('.home-contact p, .about-content', { orgin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend developer','Web Designer','Data Analyst','ML Engineer'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Get the form element
const form = document.getElementById('myForm');
const fullName = document.getElementById('fullName');
  const emailAddress = document.getElementById('emailAddress');
  const mobileNumber = document.getElementById('mobileNumber');
  const emailSubject = document.getElementById('emailSubject');
  const message = document.getElementById('message');


// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validation flags
  let valid = true;
  let errorMessage = '';

  // Validate Full Name
  if (fullName.value.length < 10 || fullName.value.length > 30) {
    valid = false;
    errorMessage += "Full Name must be between 10 and 30 characters.\n";
  }

  // Validate Email Address
  if (!emailAddress.value.endsWith('@gmail.com')) {
    valid = false;
    errorMessage += "Email Address must end with '@gmail.com'.\n";
  }

  // Validate Mobile Number
  if (!/^\d{10}$/.test(mobileNumber.value)) {
    valid = false;
    errorMessage += "Mobile Number must be exactly 10 digits.\n";
  }

  // Show error message if validation fails
  if (!valid) {
    alert(errorMessage);
    return;
  }

  // Display a pop-up message for successful submission
  alert("Thank you for sending a message! We will get back to you soon.");

  // Clear the form fields
  fullName.value = '';
  emailAddress.value = '';
  mobileNumber.value = '';
  emailSubject.value = '';
  message.value = '';
});