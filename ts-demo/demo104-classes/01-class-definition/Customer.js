var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Instance of class
var myCustomer = new Customer("Titann", "Hampton");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
