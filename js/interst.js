function handlesubmit(){
    event.preventDefault();
    // console.log("okk");

    let principal = document.getElementById("principal").value;
    console.log(principal);
    let rate = document.getElementById("rate").value;
    console.log(rate);
    let time = document.getElementById("time").value;
    console.log(time);
    let select = document.getElementById("select").value;
    console.log(select);


    // document.getElementById("principal").innerHTML = principal;
    // document.getElementById("rate").innerHTML = rate;
    // document.getElementById("time").innerHTML = time;


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