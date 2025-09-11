export interface Producto{
    nombre:string
    precio:number
}

const telefono:Producto={
    nombre:'SAMSUNG GALAXY S24 ULTRA',
    precio:16999
}

const tarjetaGrafica:Producto={
    nombre:'ASUS ROG Astral GeForce RTX 5090',
    precio:66961
}

function calcularISV(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total += producto.precio
    }
    return total*0.15
}

const articulos=[telefono,tarjetaGrafica]
const isv = calcularISV(articulos)
console.log('ISV', isv);

//Desestructuracion en funciones
export function calcularISV2(productos:Producto[]):[number,number]{
    let total=0;
    for(let producto of productos){
        total += producto.precio
    }
    return [total, total*0.15]
}

const [total, isv2]=calcularISV2(articulos)
console.log('Total:', total);
console.log('ISV 2:', isv2);

