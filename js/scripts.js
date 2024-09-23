/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('contactForm').addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent the default form submission
            console.log('Form submission started'); // Debugging line
            
            const form = event.target;
            const formData = new FormData(form);
    
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
    
                if (response.ok) {
                    console.log('Form submission successful'); // Debugging line
                    document.getElementById('submitSuccessMessage').classList.remove('d-none');
                    document.getElementById('submitErrorMessage').classList.add('d-none');
                    form.reset(); // Reset the form after successful submission
                } else {
                    console.log('Form submission failed'); // Debugging line
                    document.getElementById('submitErrorMessage').classList.remove('d-none');
                }
            } catch (error) {
                console.error('Error:', error); // Log the error
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            }
        });
    });
    

    $(document).ready(function(){
        $('.portfolio-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true, // Enable arrows
            autoplay: true,
            autoplaySpeed: 2000,
            fade: false
        });
    });

    $(document).ready(function(){
        $('.portfolio-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true, // Enable arrows
            autoplay: true,
            autoplaySpeed: 2000,
            fade: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        });
    });
    
// Select the wrapper element
const techStackWrapper = document.querySelector('.tech-stack-wrapper');

// Duplicate the entire set of items
techStackWrapper.innerHTML += techStackWrapper.innerHTML;



});
