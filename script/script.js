const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('#main, #gallery, #contact');
const aboutSection = document.querySelector('#about');


sections.forEach(section => {
    section.style.display = 'none';
});


document.querySelector('#main').style.display = 'flex';
aboutSection.style.display = 'block';

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetID = link.getAttribute('href').replace('#', '');

      
        sections.forEach(section => {
            section.style.display = 'none';
        });
        aboutSection.style.display = 'none';

        
        const targetSection = document.getElementById(targetID);

        if (targetID === 'main') {
            targetSection.style.display = 'flex';
            aboutSection.style.display = 'block'; 
        } else if (targetID === 'about') {
            targetSection.style.display = 'block';
        } else {
            targetSection.style.display = 'block';
        }
    });
});