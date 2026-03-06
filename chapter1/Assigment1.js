class Assigment1 {
    constructor(name, originalPrice, discount=0, category = "Expensive") {
        this.name = name;
        this.originalPrice = originalPrice;
        this.discount = discount;
        this.category = category;
    }

    getFinalPrice= ()=> {
       return this.originalPrice - (this.originalPrice * this.discount / 100);
    }

    display() {
        console.log(`
        Product Name : ${this.name}
        Original Price: $${this.originalPrice}
        Discount      : ${this.discount}%
        Final Price   : $${this.getFinalPrice()}
        Category     : ${this.category}`);
    }
}

const product1 = new Assigment1("Hp", 600, 10);

product1.display();