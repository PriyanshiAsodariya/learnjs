function handlesubmit(){
   // console.log("ok");
   event.preventDefault();
    
   let h1,w1;

   let cm = parseFloat(document.getElementById("height").innerHTML=h1);
   let kg = parseFloat(document.getElementById("weight").innerHTML=w1);

   let bmi,m;
   m = cm/100;
   bmi = kg/(m * m);


   let = bmi = parseFloat(document.getElementById("result").innerHTML=bmi);
    
   // if(bmi>18.6){
   //    document.write("under weight");
   // }else if(bmi>=18.6 && bmi<=24.9){
   //    document.write("you are health");
   // }else if(bmi>=24.9){
   //    document.write("you are health");
   // }






}