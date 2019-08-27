//BAD
// const baby = {
//     //depends on all the other mom,dad,dog modules
//     canCry () {
//       mom.canSing();
//       dad.canPlay();
//       dog.canBark();  
//     }
// }

// // const mom = {
// //     canSing () {

// //     }
// // }

// const dad = {
//     canPlay () {

//     }
// }
// const dog = {
//     canBark () {

//     }
// }

// baby.canCry()

const baby = {
    //depends on all the other mom,dad,dog modules
    canCry() {
        this.whenICry.forEach(function(action) {
            action()
        });
    },
    whenICry: [],

    onCrying (fn) {
        this.whenICry.push(fn);
    } 
}

const mom = {
    canSing() {
        console.log("I am singing");
    }
}
 baby.onCrying(mom.canSing)

 const dad = {
        canPlay () {
            console.log("I can play");
        }
    }

baby.onCrying(dad.canPlay)
baby.canCry()