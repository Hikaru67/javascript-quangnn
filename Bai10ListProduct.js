const Product = require('./Product');

function createListProduct(){
    this.listProduct = [];

    for(let i=0; i<10; i++){
        this.listProduct[i] = new Product(i, 'Product'+(i+1), i, new Date(2021, i, i+10).getTime()/1000, i*10+1);
    }

    return this.listProduct;
}


module.exports = createListProduct;