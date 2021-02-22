const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

let totalProduct = (listProduct) => {
    let total = 0;
    return listProduct.reduce(function (total, value) {
        if(!value.isDelete){
            return total + value.quantity;
        }
            return total;
    }, total)
}
// use es6 (reduce)
// return sum quantity of product which isn't deleted

function totalProduct2(listProduct){
    let total = 0;
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete){
            total += listProduct[i].quantity;
        }
    }

    return total;
}
// use for
// return sum quantity of product which isn't deleted

console.log(totalProduct(listProduct));
console.log('\n');
console.log(totalProduct2(listProduct));
