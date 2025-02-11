class Product{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`product name is ${this.name} and price ${this.price}`);
    }
}

class Book extends Product {
    constructor(name, price, author) {
        super(name,price);
        this.author = author;
    }

    display(){
        super.display();
        console.log(`author is ${this.author}`);
    };
}

class pen extends Product {
    constructor(name, price, color) {
        super(name,price);
        this.color = color;
    }

    display(){
        super.display();
        console.log(`color is ${this.color}`);
    };
}

b1 = new Book('python', 200, 'rody');
b1.display();

p1 = new pen('python', 200, 'black');
p1.display();