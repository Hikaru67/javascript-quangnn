const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');
const now = Date.now()/1000;

listProduct = createListProduct();
listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

function filterProductBySaleDate(listProduct){
    return listProduct.filter(value => value.saleDate > now && !value.isDelete)
}

function filterProductBySaleDate2(listProduct){
    let list = []; let j = 0;
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete && listProduct[i].saleDate > now){
                list[j++] = listProduct[i];
        }
    }

    return list;
}

console.log(filterProductBySaleDate(listProduct));
console.log('\n');
console.log(filterProductBySaleDate2(listProduct));
