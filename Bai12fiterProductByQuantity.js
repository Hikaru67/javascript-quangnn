const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();



let filterProductByQuantity = (listProduct) => listProduct.filter(value => !value.isDelete && value.quantity > 0);
// use es6
// return array product have quantity>0 and isn't deleted

function filterProductByQuantity2(listProduct){
    let list = []; let j = 0;
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete&&listProduct[i].quantity > 0){
            list[j++] = listProduct[i];
        }
    }

    return list;
}

// use for
// return array product have quantity>0 and isn't deleted

console.log(filterProductByQuantity(listProduct));
console.log('\n');
console.log(filterProductByQuantity2(listProduct));