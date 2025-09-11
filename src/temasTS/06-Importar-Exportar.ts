import { type Producto, calcularISV2 } from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
    { nombre:'SAMSUNG GALAXY S24 ULTRA', precio:16999 },
    { nombre:'ASUS ROG Astral GeForce RTX 5090', precio:66961 },
    { nombre:'MSI Laptop Gaming Katana A17', precio:43999 }
];

const [total, isv] = calcularISV2(carrito);
console.log('Total:',total);
console.log('ISV',isv);

