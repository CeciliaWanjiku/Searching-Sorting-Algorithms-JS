//open-closed principle

// //BAD
// let designerShoes = ['adidas', 'nikey', 'vans']


// newShoe = (shoe) => {
//     if (designerShoes.indexOf(shoe) >= 0) {
//         console.log("Yaay you have a new shoe");
//     } else {
//         console.log("No shoes for you");
//     }   
// }

// newShoe('nikey')
// newShoe('nay')


//GOOD
let designerShoes = ['adidas', 'nikey', 'vans', "jjj"];
const designer = (shoe) => {
  addShoeDesign = (shoe) => {
    designerShoes.push(shoe);
    console.log(designerShoes)
  }
  newShoe = (shoe) => {
    if (designerShoes.indexOf(shoe) >= 0) {
      console.log("Yaay you have a new shoe");
    } else {
      console.log("No shoes for you");
    }
  }
  addShoeDesign(shoe);
  newShoe(shoe);
  console.log(designerShoes);
}

console.log(designer("meh"));

