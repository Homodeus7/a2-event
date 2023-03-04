function scrollToSection(selector) {
    console.log(window.screen.width);
    let yOffset
    if (window.screen.width < 780) {
        yOffset = -39
    } else {
        yOffset = -58.5
    }
    const element = document.querySelector(selector);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}


const file = document.querySelector('input[name="user-file"]');
const fileName = document.querySelector('.file_name')

function clearForm() {
    fileName.innerText = ''
    file.value = ''
}

file.onchange = e => {
    const [file] = e.target.files
    fileName.innerText = file.name
}

function hideMenu() {
    document.getElementById("menu__toggle").checked = false
}

const element = document.getElementById('phone');
const maskOptions = {
    mask: '+{7} (000) 000-00-00'
};
const mask = IMask(element, maskOptions);

// setTimeout(() => {
//     document.getElementById('loader').remove()
// }, 5100);

function openPopup(id) {
    document.body.style.overflow = 'hidden'
    document.querySelector(`#${id}`).classList.remove('hidden')
}

const servicesItems = document.querySelectorAll('.popup2_content .popup_card')

servicesItems.forEach(item => item.addEventListener('click', () => {
    closePopup(true);
    scrollToSection('.section6')
}))


function closePopup(force) {
    if (event.target.classList[0] !== 'popup_body' && event.target.tagName.toLowerCase() !== 'button' && !force) {
        return
    }
    document.body.style.overflow = ''
    document.querySelectorAll('.popup').forEach(elem => elem.classList.add('hidden'))
}

const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    mousewheel: {
        forceToAxis: true
    },
    slidesPerView: 4.4,
    spaceBetween: 14,
    clickable: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2.2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2.4,
            spaceBetween: 10
        },
        800: {
            slidesPerView: 3.3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4.2,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 40
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    mousewheel: {
        forceToAxis: true
    },
    slidesPerView: 1,
    clickable: true,
    pagination: {
        el: '.swiper-pagination2',
    },

});