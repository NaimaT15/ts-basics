"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let accoun = new Account(1, 'mosh', 0);
accoun.deposit(100);
console.log(accoun.balance);
//# sourceMappingURL=index.js.map