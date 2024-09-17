//objetos literales
const frutas = ["pera" , "manzana"]
console.log(frutas[0])


// objetos literales no indexados


const animal = {
  color : "naranja",
  nombre : "simba",
  rigiendo : true,
  favoritos :{
    dia:{
      ok: true
    },
    noche :{
      ok : false
    }
  }
}

console.log(animal.favoritos.dia.ok);


//destructuring
const animals = {
  color : "naranja",
  nombre : "simba",
  rigiendo : true,
  favoritos :{
    dia:{
      ok: true
    },
    noche :{
      ok : false
    }
  }
}

var color = animals.color;
console.log(color);



const ave = {
  color : "azul",
  nombre : "Torogoz",
  volando : true
}

//destrucuturing
var {color, nombre, volando} = ave;
console.log(color,"",volando)