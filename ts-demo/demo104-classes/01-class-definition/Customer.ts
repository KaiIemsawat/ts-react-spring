class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Instance of class

let myCustomer = new Customer("Titann", "Hampton");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
