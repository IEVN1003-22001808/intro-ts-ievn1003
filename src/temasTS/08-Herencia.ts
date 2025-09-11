class Persona3{
    protected nombre:string;
    protected edad:number;
    private direccion:string;

    constructor(nombre:string, edad:number, direccion:string){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    mostrarPersona(){
        console.log(`Nombre: ${this.nombre},
            Edad: ${this.edad},
            Dirección: ${this.direccion}`);
    }
}

class Empleado3 extends Persona3{
    private salario:number;
    constructor(nombre:string, edad:number, direccion:string, salario:number){
        super(nombre, edad, direccion);
        this.salario = salario;
    }

    imprimir(){
        if(this.salario>1500){
            console.log(`Empleado: ${this.nombre}, Salario: ${this.salario}`);
        } else{
            console.log('No tiene Salario suficiente...');
        }
    }
}

const persona3 = new Persona3('Alfita', 23, 'Calle Pospucio');
persona3.mostrarPersona();
const empleado3 = new Empleado3('Papito', 25, 'Calle Pucio', 1600);
empleado3.imprimir();

