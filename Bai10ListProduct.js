const Product = require('./Product');

function createListProduct(){
    this.listProduct = [];

    for(let i=0; i<9; i++){
        this.listProduct[i] = new Product(i, 'Product'+(i+1), i, new Date(2021, i, i+10).getTime()/1000, i*10+1);
    }
    this.listProduct[9] = new Product(9, 'Product'+9, 9, null, null);


    return this.listProduct;
}


module.exports = createListProduct;