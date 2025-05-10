 /*
 let ingresos=[1200,111,123,124,125];

console.log(ingresos);


let newIngresos=ingresos.map((element)=> element*2);

console.log(newIngresos);


let cel=[0,10,20,30,40,50,60,70,80,90];


let far=cel.map((e)=>(e*9/5)+32);
console.log(far);



let edades=[15,18,20,25,30,17,16,19,22,14];

let mayorEdad=edades.map((e)=>{
    if(e>=18){
        return "mayor";
    }else{
        return "menor";
    }

})

console.log(mayorEdad);


let edadFiltrada=edades.filter((e)=>e>=18);

console.log(edadFiltrada);




let ropaPrecio=[50,100,150,200,250,300,400,500];
let newPrecio=ropaPrecio.map((e)=>{
    if(e>150){
        return e*0.85;
    }else{
        return e;
    }
})

let preciosFiltrados=newPrecio.filter((e)=>e>=200);

console.log(preciosFiltrados);
console.log(preciosFiltrados.length);




//reduce


const precios=[100,50,200,300,400];


const total=precios.reduce((acc,e)=>acc+e,0);
console.log(total);


let notas=[15,20,10,5,18,12,8,14,16,17,16,2,3,8];

let aprobados=notas.filter((e)=>e>=11);
let desaprobados=notas.filter((e)=>e<11);

let promedio=notas.reduce((acc,e)=>acc+e,0)/notas.length;
let promedioReprobados=desaprobados.reduce((acc,e)=>acc+e,0)/desaprobados.length;

console.log(aprobados);
console.log(desaprobados);
console.log(promedio);
console.log(promedioReprobados);
*/




alert('Bienvenido al banco Ripley');

let name=prompt("Ingrese su nombre :");


let optCliente=prompt("Opciones : \n1. Ingresar dinero\n0. Salir");

let ingresos=[];

while(optCliente !=="0"){
    if(optCliente ==="1"){
        let montoIngresado=Number(prompt("Ingresa un monto de dinero"));
        if(montoIngresado>=0){
            ingresos.push(montoIngresado);

        }else{
            alert("No puede ser negativo");
        }
    }

    optCliente=prompt("Opciones : \n1. Ingresar dinero\n0. Salir")
}

const totalIngresos=ingresos.reduce((acc,e)=>acc+e,0);
const ingresosMenores=ingresos.filter((e)=>e<1000);

alert("gracias por su visita");
alert(`Sus ingresos son: ${ingresos}
    \nEl Total de ingresos es : ${totalIngresos}
    \nLos ingresos a menores a 1000 son : ${ingresosMenores}`);