//exception handling
let a = parseInt(prompt("enter value of a:"));
let b = parseInt(prompt("enter value of b:"));


try{
    if(b===0){
        throw new Error("Cannot divide by zero");
    }else{
        ans = a/b;
        console.log(ans);
        document.getElementById("res").innerHTML = ans;
    }
}catch(error){
    console.log(error.message);
    document.getElementById("res").innerHTML = error;

}finally{
    console.log("always run");

}