console.time();

const nombre = prompt('Cual es tu nombre?');

document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript moderno`;

console.error('Error');
console.warn('Warning');

const obj = {
    nombre: 'Oscar'
};

console.log(obj);


console.timeEnd();