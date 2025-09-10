function sumar(a: number, b: number): number{
    return a + b
}

console.log(sumar(23, 45))

const sumarFlecha = (a: number, b: number): number => a + b
console.log(sumarFlecha(34, 56))

function multiplicar(n1:number, n2?:number, base:number=2):number{
    return n1*base
}

console.log(multiplicar(5, 10))
console.log(multiplicar(5, undefined,10))
console.log(multiplicar(5))

interface Mascota{
    nombre:string,
    edad:number,
    tipo:string,
    mostrarEdad:()=>void
}

function crearMascota(mascotas:Mascota,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}

const mascota1:Mascota={
    nombre:'Lucrecia',
    edad:3,
    tipo:'perro',
    mostrarEdad(){
        return `La edad de ${this.nombre} es ${this.edad} años`
    }
}

crearMascota(mascota1,2)