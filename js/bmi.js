function handlesubmit(){
   // console.log("ok");
   event.preventDefault();
    
   let h1,w1;

   let cm = parseFloat(document.getElementById("height").value);
   let kg = parseFloat(document.getElementById("weight").value);

   let bmi,m;
   m = cm/100;
   bmi = kg/(m * m);

   console.log(bmi);


   let  result = parseFloat(document.getElementById("result").innerHTML=bmi);
   
   let range;

   if(bmi<18.6){
      range = "under weight";
   }else if(bmi<=24.9){
      range = "you are healthy";
   }else if(bmi>24.9){
      range = "over weight";
   }
   console.log(range);

   document.getElementById("bmi").innerhtml=range;


   




}