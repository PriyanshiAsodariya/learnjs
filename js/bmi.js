function handlesubmit(){
   // console.log("ok");
   event.preventDefault();

   let cm = parseFloat(document.getElementById("height").value);
   
   if(cm === ' '){
      document.getElementById('heightErr').innerHTML = 'please enter height';
      // console.log(heighterr);
   }else{
      if(height>60 && height<300){
         document.getElementById('heightErr').innerHTML = '';
      }else{
         document.getElementById('heightErr').innerHTML = 'please enter valid height';
      }
   }


   let kg = parseFloat(document.getElementById("weight").value);
   if(kg === ''){
      document.getElementById('weightErr').innerhtml = 'plaese enter weight';
   }else{
      document.getElementById('weightErr').innerHTML = '';
   }

   let bmi,m;
   m = cm/100;
   bmi = kg/(m * m);
   
   console.log(bmi);


   document.getElementById("result").innerHTML=bmi;
   
   let range;

   if(bmi<18.6){
      range = "under weight";
   }else if(bmi<=24.9){
      range = "you are healthy";
   }else if(bmi>24.9){
      range = "over weight";
   }
   console.log(range);

   document.getElementById("bmi").innerHTML=range;

   


   




}