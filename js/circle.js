function handlesubmit(){
    console.log("ok");

    let r = parsefloat(document.getElementById("radius").value);

    let area;

    area = 3.14 * r * r;
    
    console.log(area);
}