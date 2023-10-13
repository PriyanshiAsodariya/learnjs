// class hello{                                       //class
//     message(){                                     // method
//         console.log("hello everyone");
//     }
//     student(){                                     //method
//         console.log("hello student");
//     }
// }

// let a = new hello();                     //creat an object than function call
// a.message();
// a.student();

//==========================================

//(type of method)
//(constructor method)


// class student{                               // without object than this method can not call function
//     constructor(){                            // this method is automatically call when creat a object
//         let name;
//         console.log("constructor function");
//     }
//     hello(){
//         console.log("hello  "+ this.name);     // hello priyanshi       
//     }                                            
// }

// let a = new student();                      // ans constructor function                                 
// // let b = new student();                       // ans constructor function

// a.name = 'priyanshi'
// a.hello();

//===========================================


// class student{
//     constructor(name,age){
//         this.fullname = name;
//         this.age = age;
//         console.log("constructor function");
//     }
//     hello(){
//         console.log("hello  "+ this.fullname  + "your age is: ",+ this.age);
//     }
// }

// let a = new student('asodariya ',20);
// let b = new student('pritanshi',22)

// a.hello();                                      //ans  // hello asodariya your age is 20;
// b.hello();                                       // ans // hello priyanshi your age is 22

//=================================================


//(protoptyoe method)

// class hello{                                       //class
//     message(){                                     // method
//         console.log("hello everyone");
//     }
//     student(){                                     //method
//         console.log("hello student");
//     }
// }

// let a = new hello();                     //creat an object than function call
// a.message();
// a.student();

//=======================================

// //(static method)

// class student{
//     static hello(){
//         console.log("static method");
//     }
// }

// student.hello();                                // ans static method

//===========================================

//(inheritrance............)

// class employee{
//     constructor(name){
//         console.log("hello employee: "+name);
//     }
// }

// class manager extends employee{
//     constructor(name){
//         super();
//         console.log("hello manager: "+name);
//     }

// }
// // let a = new employee();

// let a = new manager('priyanshi');

//=======================================

// class employee{
//     constructor(name){
//         this.empname = name
//         console.log("constructor function")
//     }
//     info(){
//         console.log("good morning"+this.empname );
//     }
// }

// class manger extends employee{
//     info(){
//         super.info();                                  // ans good morning priyanshi
//         console.log("good morningggggg"+this.empname);              // ans good morningggggg priyanshii
//     }
// }
// let a = new manger("priyanshi")

// a.info();                                        // good morning
//====================================================

// class employee {
//     constructor(name,age , salary){
//         this.name = name;
//         this.age = age;
//         this.slary = salary;
//         console.log("construcor function");
//     }
//     info(){
//         console.log("your name:"+this.name + "your age " + this.age + "your salary"+ this.salary) ;
//     }
// }
//     class manager extends employee{
//         info(){
//             let ta = 1000;
//             let pa = 300;
//             let total_salary = this.salary + ta + pa;
//             console.log("your name:"+this.name + "your age " + this.age + "your salary"+ total_salary) ;
            
//         }
//     }

//     let a = new manager('priyanshi', 20 , 50000);
//     a.info();

//==========================================
//==========================================

//(class / object)
// class employee{
//     id;
//     name;
//     salary;

//     constructor(i,n,s){
//         this.id = i;
//         this.name = n;
//         this.salary = s;
//     }
//     getallinfo = () =>{
//         console.log(this.id, this.name, this.salary);
//     }
// }

// let e1 = new employee(101, 'priyanshi' , 10000);

// e1.getallinfo();


//==========================================

// class employee{
//         id;
//         name;
//         salary;
    
//         constructor(i,n,s){
//             this.id = i;
//             this.name = n;
//             this.salary = s;
//         }
//         getallinfo = () =>{
//             console.log(this.id, this.name, this.salary);
//         }
//     }
// class bonus extends employee{
//     bonusAmt;
//     per;

//     constructor(id, name , salary , per){
//         super(id,name,salary)
//         this.per = per;
//     }

//     calaculatebonus = () =>{
//         let b = this.salary * this.per;
//     console.log("your bonus is : ", b);
//     } 
// }

// let b1 = new bonus(102 , 'priyanshi' , 15000 , 0.10)

// b1.getallinfo();
// b1.calaculatebonus();

//======================================


// class computer{
//     name;
//     company;

//     constructor(n , c){
//         this.name= n ;
//         this.company =c;

//         console.log(this.name , this.company);
//     }
//     configration = (p) => {
//         this.price = p;
//         console.log(this.price);
//     }
//     basic_detail = () => {
//         console.log(this.name , this.company , this.price);
//     }

// }


// class processer extends computer{
//     pro_name;
//     version;

//     constructor(n , c , pro , ver){
//         super(n , c );
//         this.pro_name = pro;
//         this.version = ver;
//     }
       

//         allDeatail = () => {
//             this.basic_detail;
//             console.log(this.pro_name , this.version);
//         }
//     }



// let c1 = new processer('pavillon' ,'hp','intel core i5' ,'gen-11');
// c1.configration(700000)
// c1.basic_detail();
// c1.allDeatail();
//=======================================

class car{
    model_name;
    company;

    constructor(m , c){
        this.model_name = m;
        this.company = c;
    }

    deatilofCar =(year, price) => {
        this.year = year;
        this.price = price

    }
    display =() =>{
        console.log("model name is:",this.model_name ,'\t',"company is:", this.company,'\t', "manufacturing year is:",this.year,'\t' ,"price is:", this.price,'\t');
    }

}

class deatilofCar extends car{
    seat;
    color;
    constructor(m ,c ,seat,color){
        super(m,c)
        this.seat = seat;
        this.color = color;
    }
    alldetail = () => {
        this.dispaly();
        console.log("seat is ",this.seat,'\t' , "color is",this .color,'\t');

    }
}

let c1 = new deatilofCar('sonet' , 'kia' ,'5 seater', 'white' )
c1.deatilofCar(2016 , 1300000);
c1.alldetail();

//===============================================

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
    setbalance(amount){
        if(isNaN(amount)){
            throw new console.error('amount is not valid input');
        }
        this.#balance = amount;
    }
    getbalance(){
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
// ac.setbalance(400);                  // value can change with help of access function
// ac.setbalance('hello')                //if check and creat error

//(get value of outside class)

// console.log(ac.#balance);                  //vs code genreated error
console.log(ac.getbalance());                 //balance get

ac.desposite(50000);

//=================================

//(polmorohism)

class animal{
    constructor(name){
        this.name = name;
    }
    
    speak = () =>{
        console.log(this.name,+"specify animal name");
    }
}
class dog extends animal{
    speak = () =>{
        console.log("woof! woof!");
    }
}

let a = new animal('tommy')
let b = new dog('tom')
a.speak();
b.speak();

//====================================

//(abstraction)

class worker{
    name; 
    salary;
    age;

    constructor(n,s,a){
        this.name = n;
        this.salary = s;
        this.age = a;

        this.getuserdetail = () =>{
            console.log(this.name, this.age);
            finalsalary();
        }
        let bonus = 500;
        let finalsalary = () =>{
            let final = salary + bonus;
            console.log("final slary is :", final);

        }
    }
}
let e1 = new employee("priyanshi" , 20 , 100000);

console.log(e1);

//============================================




