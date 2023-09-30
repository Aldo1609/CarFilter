
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max- 13;

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); 

    llenarSelect();
})

marca.addEventListener('change', event =>{
    datosBusqueda.marca = event.target.value;

    filtrarAuto();
})

year.addEventListener('change', event =>{
    datosBusqueda.year = event.target.value;

    filtrarAuto();
})

minimo.addEventListener('change', event =>{
    datosBusqueda.minimo = event.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', event =>{
    datosBusqueda.maximo = event.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', event =>{
    datosBusqueda.puertas = event.target.value;

    filtrarAuto();
})

transmision.addEventListener('change', event =>{
    datosBusqueda.transmision = event.target.value;

    filtrarAuto();
})

color.addEventListener('change', event =>{
    datosBusqueda.color = event.target.value;

    filtrarAuto();
})


function mostrarAutos(autos){
    LimpiarHtml();

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} =  auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision}- Precio: ${precio} - Color: ${color}
        
        `
        resultado.appendChild(autoHTML);
    });
}

function LimpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){

    for (let i = max; i > min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    if ( resultado.length ) {
        mostrarAutos(resultado);
    }else{
        sinResultado();
    }
}

function sinResultado() {

    LimpiarHtml();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('alerta','error');
    sinResultado.textContent = 'No hay resultado de carros, intenta otras opciones';
    resultado.appendChild(sinResultado);
}

function filtrarMarca(auto) {
    if ( datosBusqueda.marca ){
        return auto.marca === datosBusqueda.marca; 
    }
    return auto; 
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if ( datosBusqueda.year ){
        return auto.year === parseInt(year); 
    }
    return auto; 
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if ( minimo ){
        return auto.precio >= minimo; 
    }
    return auto; 
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if ( maximo ){
        return auto.precio <= maximo; 
    }
    return auto; 
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if ( puertas ){
        return auto.puertas === parseInt(puertas); 
    }
    return auto; 
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if ( transmision ){
        return auto.transmision === transmision; 
    }
    return auto; 
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if ( color ){
        return auto.color === color; 
    }
    return auto; 
}