const Product = require('./Product');
const createListProduct = require('./Bai10ListProduct');

listProduct = createListProduct();


function filterProductById(listProduct, idProduct){
    return listProduct.find(value => value.id === idProduct).name
}

console.log(filterProductById(listProduct, 5));

function filterProductById2(listProduct, idProduct){
    for (let i=0; i<listProduct.length; i++){
        if(listProduct[i].id === idProduct){
            return listProduct[i].name;
        }
    }
}
console.log(filterProductById2(listProduct, 5));



