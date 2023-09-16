function handlesubmit(){
    // console.log("okkk");

    let x = document.getElementById("textview").value;
    console.log(x);
    let select = document.getElementById('select').value;
    let select1 = document.getElementById('select1').value;

    let selectE = true;

    if(x){ 
        if(x>=1){
            document.getElementById('valueErr').innerHTML = '';
            selectE = false;
        }else{
            document.getElementById('valueErr').innerHTML = 'enter valid value';
        }
    }else{
        document.getElementById('valueErr').innerHTML = 'enter value';
    }

    if(select === 'cm' && select1 ==='m'){
        ans = x /100;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'cm' && select1 === 'km'){
        ans = x / 100000;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'm' &&  select1 === 'cm'){
        ans = x /100;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'm' &&  select1 === 'km'){
        ans = x /1000;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'km' &&  select1 === 'cm'){
        ans = x * 100000;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'km' &&  select1 === 'm'){
        ans = x * 1000;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'cm' && select1 === 'cm') {
        ans = x;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'm' && select1 === 'm') {
        ans = x;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }else if(select === 'km' && select1 === 'km') {
        ans = x;
        // console.log(ans);
        document.getElementById('ans').innerHTML = ans;
    }
   

    

    

    
    return false;
}