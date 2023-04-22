const containerAll = document.querySelector('#containerAll')
import datosProductosSupermami from './nodeApp.js';
for (const dato of datosProductosSupermami) {
    containerAll.innerHTML+=`
    <li><span>dato.nombre </span> <span>dato.precio</span></li>
    `    
}