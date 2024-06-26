// toggle icon navbar
let menuIcon=document.querySelector("#menu-icon")
let navbar=document.querySelector(".navbar")

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


// scroll section
let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');



window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })


    //sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('acive');
    
}


// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.portfolio-box, .contact form, .btn-box', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,#education-scroll', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, #experience-scroll', { origin: 'left' });


// Typed js
const typed=new Typed('.multiple-text',{
    strings:['Full Stack Developer',"Game Developer",'Esport Player'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});

