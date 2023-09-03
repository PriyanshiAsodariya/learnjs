
let x = parseInt(prompt("enter value in x:",0));
let y = parseInt(prompt("enter value in y:",0));

let op = (prompt("enter operator"));

console.log(x,y,op);

switch(op){
    case '+':
        x = x + y;
        console.log(x);
        break;
    case '-':
        x = x - y;
        console.log(x);
        break;
    case '*':
        x = x * y;
        console.log(x);
        break;
    case '/':
        x = x / y;
        console.log(x);
        break;
}
