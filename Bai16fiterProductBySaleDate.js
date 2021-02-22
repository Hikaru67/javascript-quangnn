const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
const now = Date.now()/1000;

listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

let filterProductBySaleDate = (listProduct) => listProduct.filter(value => !value.isDelete && value.saleDate > now && value.quantity>0)
        .map( value => {
            return {
                id: value.id,
                name: value.name
            }
        })
// use es6 (filter + map)
// return array product(id, name) which have saleDate>Date.now(), isn't deleted and quantity > 0


function filterProductBySaleDate2(listProduct){
    let list = [], j = 0;
    for (let i=0; i<listProduct.length; i++){
        if(!listProduct[i].isDelete && listProduct[i].saleDate > now && listProduct[i].quantity>0){
            list[j++] = {
                id : listProduct[i].id,
                name : listProduct[i].name
            };
        }
    }

    return list;
}
// use for
// return array product(id, name) which have saleDate>Date.now(), isn't deleted and quantity > 0

console.log(filterProductBySaleDate(listProduct));
console.log('\n');
console.log(filterProductBySaleDate2(listProduct));