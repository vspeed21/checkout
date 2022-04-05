// variables for form validation
const legend = document.querySelector('#legend');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const nombre = document.querySelector('#name');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postal-code');
const formulario = document.querySelector('#formulario');
const alertaDiv = document.querySelector('#alertadiv');

// variables for purchase input
const parrafoCompras = document.querySelector('#compra-error')
const formCompras = document.querySelector('.compras__formulario');
const precioTop = document.querySelector('#precio-top'); //input
const precioBottom = document.querySelector('#precio-bottom');//input

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(nombre.value  !== '' && phone.value !== '' && address.value !== '' && city.value !== '' 
  && country.value !== '' && postalCode.value !== ''){
    mostrarMensaje('Validacion correcta', 'formulario__alerta--correcto');
  }else{
    mostrarMensaje('Todos los campos son obligatorios', 'formulario__alerta--error');
  }
});

formCompras.addEventListener('click', () => {
  if(precioTop.value > 10){
   parrafoCompras.style.display = 'block'
  }else{
    parrafoCompras.style.display = 'none'
  }

});

function mostrarMensaje(mensaje, claseAlerta) {
  const parrafo = document.createElement('P');
  parrafo.classList.add('formulario__alerta', claseAlerta);
  parrafo.textContent = mensaje;
  parrafo.style.marginTop = '2rem'

  alertaDiv.appendChild(parrafo);

  setTimeout(() => {
    parrafo.remove()
  }, 3000);
}