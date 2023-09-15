function handlesubmit() {
   // console.log("ok");
   

   let cm = parseInt(document.getElementById("height").value);
   // console.log(cm);
   let kg = parseInt(document.getElementById("weight").value);
   // console.log(kg);
   let cmE = true, kgE = true;

   if (cm) {
      if (cm > 60 && cm < 300) {
         document.getElementById("heightErr").innerHTML = '';
         cmE = false;
      } else {
         document.getElementById("heightErr").innerHTML = 'please enter valid height';
      }
   } else {
      document.getElementById("heightErr").innerHTML = 'please enter height';
   }


   // console.log(kg);
   if (kg) {
      if (kg > 20 && kg < 250) {
         document.getElementById('weightErr').innerHTML = '';
         kgE = false;
      } else {
         document.getElementById('weightErr').innerHTML = 'please enter valid weight';
      }
   } else {
      document.getElementById('weightErr').innerHTML = 'please enter weight'
   }

   if (cmE || kgE) {
      return false;
   } else {
      let bmi, m;
      m = cm / 100;
      console.log(m);
      bmi = kg / (m * m);
      console.log(bmi);
      
      document.getElementById("result").innerHTML = bmi;

      let range;

      if (bmi < 18.6) {
         range = "under weight";
      } else if (bmi <= 24.9) {
         range = "you are healthy";
      } else if (bmi > 24.9) {
         range = "over weight";
      }
      console.log(range);

      document.getElementById("bmi").innerHTML = range;
      return false;
   }
}