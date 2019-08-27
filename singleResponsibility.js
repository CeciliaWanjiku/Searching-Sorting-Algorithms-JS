// BAD
// this violates SRP since this class has more than one responsibility
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   getAnimalName() {
//     console.log("Animal has been named " + this.name);
//   }
//   saveAnimal() {
//     console.log("Animal has been saved");
//   }
// }
// const cat = new Animal('meow');
// console.log(cat.getAnimalName());
// console.log(cat.saveAnimal());


//Good
// liskov + SRP
class Animal {
  constructor(name) {
    this.name = name;
  }

  //polymorphism
  getName() {
    console.log("Animal has been named " + this.name);
  }
}

class Fish extends Animal {
  // swim () {
  //   console.log( this.name + " can swim");
  // }
}
//Interface segregation
class Eagle extends Animal {
  fly() {
    console.log( this.name + " can fly")
  }

}

const cat = new Animal('meow').getName();
const dolfin = new Fish('mammaa').swim();
