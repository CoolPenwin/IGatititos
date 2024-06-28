// cambio entre fuentes 

document.getElementById('switch-font').addEventListener('click', function() {
    const body = document.querySelector('body');

    if (body.classList.contains('roboto')) {
        body.classList.remove('roboto');
        body.classList.add('mi-fuente');
    } else {
        body.classList.remove('mi-fuente');
        body.classList.add('roboto');
    }
});

//cambio iconos LIKE

// Selecciona todos los botones de "like"
const likeButtons = document.querySelectorAll('.like-button');

// Itera sobre cada botón y agrega un evento de clic
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Selecciona los íconos dentro del botón que fue clicado
        const noLikeIcon = this.querySelector('.no-like');
        const likeIcon = this.querySelector('.like');
        
        // Cambia el estado de los íconos
        if (noLikeIcon.style.display === 'none') {
            noLikeIcon.style.display = 'inline';
            likeIcon.style.display = 'none';
        } else {
            noLikeIcon.style.display = 'none';
            likeIcon.style.display = 'inline';
        }
    });
});

//cambio iconos save

// Selecciona todos los botones de "save"
const savebutton = document.querySelectorAll('.save-button');

// Itera sobre cada botón y agrega un evento de clic
savebutton.forEach(button => {
    button.addEventListener('click', function() {
        // Selecciona los íconos dentro del botón que fue clicado
        const nosavedIcon = this.querySelector('.no-saved');
        const savedIcon = this.querySelector('.saved');
        
        // Cambia el estado de los íconos
        if (nosavedIcon.style.display === 'none') {
            nosavedIcon.style.display = 'inline';
            savedIcon.style.display = 'none';
        } else {
            nosavedIcon.style.display = 'none';
            savedIcon.style.display = 'inline';
        }
    });
});


//MENU

const menubutton = document.querySelectorAll('.menu-button');

// Itera sobre cada botón y agrega un evento de clic
menubutton.forEach(button => {})