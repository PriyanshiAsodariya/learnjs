let p = fetch("https://goweather.herokuapp.com/weather/Ny") //promise
p.then((response)=>{
    console.log(response.status);                // 200 - 299 status code
    console.log(response.ok);               //  true or false    // respose is proper or not
    // console.log(response.text());      // return text   // only one  body reading method 
    return response.json                // return js objcet
   
})                               // response (promise)

.then((value2)=>{
    console.log(value2);
})                            