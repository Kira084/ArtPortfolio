// Все ссылки, которые ведут на якорь (#main, #about, #gallery, #contact).
// Сюда входят и меню, и кнопка COMMISSION ME.
const links = document.querySelectorAll('a[href^="#"]');

const sections = document.querySelectorAll('#main, #about, #gallery, #contact');

// Показывает нужную «страницу» и прячет остальные
function showPage(id) {
    // 1. Прячем всё
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Показываем нужное
    if (id === 'main') {
        // Главная = заголовок + блок About
        document.querySelector('#main').style.display = 'flex';
        document.querySelector('#about').style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}

// При загрузке страницы открываем главную
showPage('main');

// При клике на ссылку открываем нужную страницу
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // отменяем стандартный прыжок по якорю
        const targetID = link.getAttribute('href').replace('#', '');
        showPage(targetID);
    });
});