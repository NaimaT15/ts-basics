class Account{
    id :number;
    owner:string;
    balance: number;

    constructor(id:number,owner:string,balance:number){
    this.id=id;
    this.owner=owner;
    this.balance=balance;
    }
    deposit(amount:number):void{
        if(amount<=0)
          throw new Error('Invalid amount');
        this.balance+=amount;
    }

}
let accoun=new Account(1,'mosh',0)
accoun.deposit(100);
console.log(accoun.balance);