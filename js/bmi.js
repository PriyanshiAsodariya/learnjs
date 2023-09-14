function handlesubmit(){
   // console.log("ok");
   event.preventDefault();

   let cm = parseFloat(document.getElementById("height").value);
   // let height = document.form.height.value;
   console.log(cm);
   
   if(cm === ''){
      document.getElementById('heightErr').innerHTML = 'please enter height';
      // console.log(heighterr);
   }else{
      if(cm>60 && cm<300){
         document.getElementById('heightErr').innerHTML = '';
      }else{
         document.getElementById('heightErr').innerHTML = 'please enter valid height';
      }
   }


   let kg = parseFloat(document.getElementById("weight").value);
   console.log(kg);
   if(kg === ''){
      document.getElementById('weightErr').innerHTML = 'plaese enter weight';
   }else{
      if(kg>20 && kg<250){
         document.getElementById('weightErr').innerHTML = '';
      }else{
         document.getElementById('weightErr').innerHTML = 'please enter valid weight';
      }
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