win =  ScrollReveal()

win.reveal('header',{
    duration: 2000,
    origin: 'top',
    distance: '20rem',
    opacity: 0.1,
})

win.reveal('.servicios',{
    duration: 4000,
    origin: 'left',
    distance: '30rem',
    opacity: 0.1,
});

win.reveal('.serviciosdos',{
    duration: 6000,
    origin: 'left',
    distance: '30rem',
    opacity: 0.1,
});


//TEXTO ANIMADO

//Primero capturamos el elemento del DOM con el id que definimos en el html
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

//Declaramos una varible en la que asignaremos un valor para que sea el tiempo en ms que durará la función setTimeout
const speed = 120;
let i = 0;

//Esta función recorre todos los caracteres nuestro texto
const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

//Acá ejecutamos la función
setTimeout(typeWriter, speed);