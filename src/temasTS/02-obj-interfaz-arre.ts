interface Alumno{
    nombre:string,
    edad:number,
    activo:boolean,
    email?:string, // el "?" indica que es opcional
    nota:number | string // el "|" indica que puede ser número o string
}

const alumno:Alumno = {
    nombre: "Jorge",
    edad: 21,
    activo: true,
    email: "papupapu@gmail.com",
    nota: 9.5
}

console.table(alumno)

let mascotas:string[]=['perro', 'gato', 'pez']
mascotas.push('tortuga')
console.log(mascotas)
mascotas[1] = 'pez'
console.log(mascotas)

let idades:(number|string)[] = [23, 45, 67, '89']
idades.push(90)
idades.push('100')
console.log(idades)
