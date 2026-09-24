
const links = document.querySelectorAll('a[href^="#"]');

const sections = document.querySelectorAll('#main, #about, #gallery, #contact');


function showPage(id) {
    
    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (id === 'main') {
        
        document.querySelector('#main').style.display = 'flex';
        document.querySelector('#about').style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}


showPage('main');


links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetID = link.getAttribute('href').replace('#', '');
        showPage(targetID);
    });
});