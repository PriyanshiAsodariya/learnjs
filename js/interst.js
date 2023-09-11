function handlesubmit(){
    event.preventDefault();
    // console.log("okk");

    let principal = document.getElementById("principal").value;
    console.log(principal);
    let rate = document.getElementById("rate").value;
    console.log(rate);
    let time = document.getElementById("time").value;
    console.log(time);
    let select = documet.getElementById("time").value;
    console.log(hjkk);


    document.getElementById("principal").innerhtml = principal;
    document.getElementById("rate").innerhtml = rate;
    document.getElementById("time").innerhtml = time;


    let  ans;
    if(select === 'year'){
        ans = ( principal * rate * time) /100;
        console.log(ans);
    }else if(select === 'month'){
        ans = (principal * rate * time) /1200;
        console.log(ans);
    }
}