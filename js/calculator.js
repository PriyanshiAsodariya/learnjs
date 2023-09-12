function insert(val){
    // console.log(val);

    document.form1.textview.value = document.form1.textview.value + val;
    // console.log(val);
}

function equal(){
    let exp = document.form1.textview.value;

    console.log(exp);

    let ans = eval(exp);

    console.log(ans);

    document.form1.textview.value = ans;

}

function cleardata(){
    document.form1.textview.value = '';
}
function backspace(){
    let exp = document.form1.textview.value;

    document.form1.textview.value = exp.substring(0,exp.length - 1);
}