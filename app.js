


// Lista de movimientos registrados
const movimientos = [
  { nombre: 'Cena', tipo: 'Egreso', monto: 45.50 },
  { nombre: 'Consultoría', tipo: 'Ingreso', monto: 300.00 },
  { nombre: 'Supermercado', tipo: 'Egreso', monto: 150.00 },
  { nombre: 'Libro JavaScript', tipo: 'Egreso', monto: 80.00 },
  { nombre: 'Compra online', tipo: 'Egreso', monto: 120.00 }
];

//1. 


// 1. Nombres de todos los movimientos
const nombres = movimientos.map(mov => mov.nombre);
console.log("Nombres de movimientos registrados:");
console.log(nombres);

// 2. Egresos mayores a $100
const egresosMayoresA100 = movimientos.filter(mov => 
  mov.tipo === 'Egreso' && mov.monto > 100
);
console.log("\nEgresos mayores a $100:");
console.log(egresosMayoresA100);

// 3. Buscar movimiento por nombre: 'Cena'
const buscado = movimientos.find(mov => mov.nombre === 'Cena');
console.log(`Buscar movimiento de nombre Cena`);
if (buscado) {
  console.log("Resultado encontrado:");
  console.log(buscado);
} else {
  console.log("No se encontró el movimiento.");
}