function handlesubmit(){
    // event.preventDefault();
    // console.log("okk");

    let principal = document.getElementById("principal").value;
    console.log(principal);
    if(principal){
        if(principal>=1){
            document.getElementById('principalErr').innerHTML = ''
        }else{
            document.getElementById('principalErr').innerHTML = 'enter valid principal';
        }
    }else{
        document.getElementById('principalErr').innerHTML = 'please enter principal'
    }

    let rate = document.getElementById("rate").value;
    console.log(rate);
    if(rate){
        if(rate>0){
            document.getElementById('rateErr').innerHTML = '';
        }else{
            document.getElementById('rateErr').innerHTML = 'please enter valid rate';
        }
    }else{
        document.getElementById('rateErr').innerHTML = 'enter rate'
    }

    let time = document.getElementById("time").value;
    console.log(time);
    if(time){
        if(time>=1){
            document.getElementById('timeErr').innerHTML = '';
        }else{
            document.getElementById('timeErr').innerHTML = 'enter valid time';
        } 
    }else{
        document.getElementById('timeErr').innerHTML = 'please enter time';
    }

    let select = document.getElementById("select").value;
    console.log(select);

    // if(select === '0'){
    //     document.getElementById('selectErr').innerHTML = 'please select any time';
    
    // }else{
    //     document.getElementById('selectErr').innerHTML = '';
    // }


    let ans;
    if(select === 'year'){
        ans = ( principal * rate * time) /100;
        console.log(ans);
    }else if(select === 'month'){
        ans = (principal * rate * time) /1200;
        console.log(ans);
    }
    document.getElementById("result").innerHTML = ans;
}