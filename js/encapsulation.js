//(encapslulation)
class bankAc{
    customerName;
    accountNum;
    #balance;

    constructor(c , n, b){
        this.customerName = c ;
        this.accountNum = n;
        this.#balance = b;
    }

    desposite = () =>{
        console.log(this.customerName , this.accountNum , this.#balance);
    }
    set balance(amount){
        if(isNaN(amount)){
            throw new console.error('amount is not valid input');
        }
        this.#balance = amount;
    }
    get balance(){
        return this.#balance
    }
}

class currentAc extends bankAc{
    constructor(c , n ,b,l){
        super(c,n,b)
        this.loan = l;
        console.log( "loan is: ",this.loan);

    }
}

let ac = new currentAc('priyanshi', 1234567, 120000, 2000);
// ac.balance = 500;                 // value can change outside of class;

// ac.#balance = 500;                    // vs code can genreated error (first method)

//(set value of outside class)
ac.balance = 400;                  // value can change with help of access function
// ac.setbalance('hello')                //if check and creat error

//(get value of outside class)

// console.log(ac.#balance);                  //vs code genreated error
ac.balance;                       //getter call

ac.desposite(50000);
