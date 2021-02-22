const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

function filterProductByQuantity(listProduct){
    return listProduct.filter(value => value.quantity > 5 && !value.isDelete)
}

function filterProductByQuantity2(listProduct){
    let list = []; let j = 0;
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete&&listProduct[i].quantity > 0){
            list[j++] = listProduct[i];
        }
    }

    return list;
}
console.log(filterProductByQuantity(listProduct));
console.log('\n');
console.log(filterProductByQuantity2(listProduct));