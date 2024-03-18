 // evento click para que cambien de color a negro
 function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

const divs = document.querySelectorAll('.color-div');
divs.forEach(div => {
    div.addEventListener('click', cambiarColor);
});


let colorKey = document.getElementById('key');

// evento para cambiar el color del div "key" segun la tecla presionada
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorKey.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        colorKey.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        colorKey.style.backgroundColor = 'lightblue';

    } else if (event.key === 'q') {
        crearNuevoDiv('purple');
    } else if (event.key === 'w') {
        crearNuevoDiv('gray');
    } else if (event.key === 'e') {
        crearNuevoDiv('brown');
    }
});

// crear nuevo div
function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-div';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);
}