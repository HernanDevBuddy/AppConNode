const containerAll = document.querySelector('#containerAll')
const puppeteer = require('puppeteer');
const datosProductosSupermami = [];
const enlacesSupermami = [
    'https://www.dinoonline.com.ar/super/producto/arroz-mandisovi-largo-fino-x-500-gr/_/A-2290010-2290010-s',
    'https://www.dinoonline.com.ar/super/producto/choclo-inalpa-cremoso-amarillo-x-300-gr/_/A-2370077-2370077-s'
];
// (async () =>{
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();

//     await page.goto('https://www.carrefour.com.ar/fideos-tirabuzones-lucchetti-500-g/p');
//     await page.waitForTimeout(15000)
//     await page.screenshot({ path: 'carre1.jpg'});


//     const producto = await page.evaluate(() =>{
//         const tmp = {};
//         tmp.nombre = document.querySelector('h1').innerText;
//         tmp.precio = document.querySelector('.lyracons-carrefourarg-product-price-1-x-currencyInteger').innerText;
//         return tmp;
//     });
//     datosProductosCarrefour.push(producto)

//     await browser.close();

//     console.log(datosProductosCarrefour);
// })();

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    for (const enlace of enlacesSupermami) {
        await page.goto(`${enlace}`);
        await page.screenshot({ path: 'dino1.jpg' });

        const producto = await page.evaluate(() => {
            const tmp = {};
            tmp.nombre = document.querySelector('h1').innerText;
            tmp.precio = document.querySelector('.atg_store_productSummary .precio-unidad span').innerText;
            return tmp;
        });
        datosProductosSupermami.push(producto);
    }

    await browser.close();
    console.log(datosProductosSupermami);
    for (const dato of datosProductosSupermami) {
        containerAll.innerHTML+=`
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">${dato.nombre}</li>
        <li class="list-group-item">${dato.precio}</li>
        </ul>
        `
        
    }
})();
