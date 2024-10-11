type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },

    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]


// printing all
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Fruit No.${i + 1}: Name: ${fruits[i].fruitName}, Type: ${fruits[i].fruitType}, Stock: ${fruits[i].stock}`);
// }

// case 1
//   -------------------------------------------------------------------------
// number 1

let outputnumber1: string[] = [];

for (let i = 0; i < fruits.length; i++) {
    const fruitNameLower = fruits[i].fruitName.toLocaleLowerCase();
    // there is no in?? 
    if (outputnumber1.indexOf(fruitNameLower) === -1) {
        outputnumber1.push(fruitNameLower);
    }
}
console.log('----------------- Nomor 1 -----------------')
console.log('Buah yang dimiliki Andi',outputnumber1);



// let outputnumber2: string[] = [];
// let outputnumber2_2: string [] = [];
//   -------------------------------------------------------------------------
// number 2
let outputnumber2: { [key: string]: string[] } = {};

for (let i = 0; i < fruits.length; i++){
    const fruitTypeLower = fruits[i].fruitType.toLocaleLowerCase();
    const fruitName = fruits[i].fruitName;

  // Check if the container for this fruit type already exists, if not, create it
  if (!outputnumber2[fruitTypeLower]) {
    outputnumber2[fruitTypeLower] = [];
  }

  // Add the fruit name to the appropriate container
  outputnumber2[fruitTypeLower].push(fruitName);

}

// Determine the number of containers and list the fruits in each
const numberOfContainers = Object.keys(outputnumber2).length;
console.log('----------------- Nomor 2 -----------------')
console.log(`Number of containers needed: ${numberOfContainers}`);
// console.log(outputnumber2)

for (const type in outputnumber2) {
    if (outputnumber2.hasOwnProperty(type)) {
      const fruits = outputnumber2[type];
      console.log(`Fruits in the ${type} container: ${fruits.join(', ')}`);
    }
  }

//   -------------------------------------------------------------------------
// number 3
console.log("----------------- Nomor 3 -----------------'")
for (const type in outputnumber2) {
  if (outputnumber2.hasOwnProperty(type)) {
    const fruits = outputnumber2[type];
    console.log(`Number of fruits in the ${type} container: ${fruits.length}`);
  }
}
// number 4
// number 4
const a = "Banyak produk id yang sama sehingga seharusnya kalau nanti dimasukan ke database akan bisa error di primary id nya."
const b = "Selain itu ada Apel dan apel ini dikarenakan tidak ada pengecekan untuk mengabaikan kapitalisasi"
const c = ",sehingga jadi ada redudancy data, seperti stok Apel dan apel seharusnya di jumlahkan karena masih buah yang sama"

console.log("----------------- Nomor 4 -----------------'")
console.log(a,b,c)


// number 2
// ini lu nulis dictionary tp dlm dict ada string
// let outputnumber_custom:{ [key: string]: string } = {};

// for (let i = 0; i< fruits.length;i++){
//   const fruitstypelowered = fruits[i].fruitType;
//   const fruitslowered = fruits[i].fruitName;
//   if (!outputnumber_custom[fruitstypelowered]){
//     outputnumber_custom[fruitstypelowered] =''
//   }
//   outputnumber_custom[fruitstypelowered]= fruitslowered;
  
// }
// console.log(outputnumber_custom)




