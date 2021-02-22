const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();
const now = Date.now()/1000;

listProduct[5].delete();
listProduct[7].delete();
listProduct[6].delete();

function filterProductBySaleDate(listProduct, categoryId){
    /*let list = [], j = 0;
    return listProduct.map(function (value, array) {
        if(!value.isDelete && value.saleDate > now){
            return {
                id : value.id,
                name: value.name
            }
        }
    })*/
    return listProduct.filter(value => !value.isDelete && value.saleDate > now && value.quantity>0)
                    .map( value => {
                        return {
                            id: value.id,
                            name: value.name
                        }
                    })
}

function filterProductBySaleDate2(listProduct, categoryId){
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

console.log(filterProductBySaleDate(listProduct, 3));
console.log('\n');
console.log(filterProductBySaleDate2(listProduct, 3));