const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

let isHaveProductInCategory = (listProduct, categoryId) => !!listProduct.find(value => !value.isDelete && value.categoryId === categoryId);
// use es6
// return result if check product in category (true/false)

function isHaveProductInCategory2(listProduct, categoryId){
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete && listProduct[i].categoryId === categoryId){
            return true;
        }
    }

    return false;
}
// use for
// return result if check product in category (true/false)

console.log(isHaveProductInCategory(listProduct, 3));
console.log('\n');
console.log(isHaveProductInCategory2(listProduct, 3));