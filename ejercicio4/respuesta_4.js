
const tasks = [
    {
        name: 'Write for Envato Tuts+',
        duration: 120,
    },

    {
        name: 'Work out',
        duration: 60,
    },

    {
        name: 'Procrastinate on Duolingo',
        duration: 240,
    }
];

// Enunciado A

const soloNombres = tasks.map((task) => task.name);
console.log(soloNombres);


// Enunciado B

const totalDuracion = tasks.map((task) => {
    const duraciontotal = (task.duration) ;
    return {
     
        duraciontotal
    };
});
console.log(totalDuracion);

// Enunciado C que tenga la menor duracion;

const newArray = tasks.map((task)=>{
    menorDuracion = (task.duration) =60;
    return{
        menorDuracion
    };
});
console.log(newArray);

// Enunciado D => que tenga la mayor duracion;
const newArray1 = tasks.find((task)=>{
    mayorDuracion = (task.duration) >=240;
    return{
        mayorDuracion
    };
});
console.log(newArray1);

// Enunciado E

const newArray2 = tasks.filter((task) => (task.duration) <= 140);
console.log(newArray2);


// Enunciado F

const newArray3 = tasks.forEach((task) => (task.duration) > 240);
 
console.log(`Alguna tarea que tenga una duracion mayor a 240 es:${newArray3}`);













