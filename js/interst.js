function handlesubmit(){
    event.preventDefault();
    // console.log("okk");

    let principal = document.getElementById("principal").value;
    console.log(principal);
    if(principal === ''){
        document.getElementById('principalErr').innerHTML = 'please enter principal';
    }else{
        if(principal>=1){
            document.getElementById('principalErr').innerHTML = ''
        }else{
            document.getElementById('principalErr').innerHTML = 'enter valid principal';
        }
    }

    let rate = document.getElementById("rate").value;
    console.log(rate);
    if(rate === ''){
        document.getElementById('rateErr').innerHTML = 'please enter rate';
    }else{
        if(rate>0){
            document.getElementById('rateErr').innerHTML = '';
        }else{
            document.getElementById('rateErr').innerHTML = 'please enter valid rate';
        }
    }

    let time = document.getElementById("time").value;
    console.log(time);
    if(time === ''){
        document.getElementById('timeErr').innerHTML = 'please enter time';
    }else{
        if(time>=1){
            document.getElementById('timeErr').innerHTML = '';
        }
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