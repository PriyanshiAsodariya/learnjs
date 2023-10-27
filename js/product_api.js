const displayData = () =>{
    try{
        fetch("https://fakestoreapi.com/products")
            .then((response)=>{
                if(response.ok){
                   return response.json(); 
                }
                throw new Error ("something wetn wrong")
            })
            .then((data) => {
                console.log(data);

                let print  = '';
                print += `<div class ="containor">`

                data.map((v)=>{
                    print +=   `<div id="box">`
                    print +=   `<div id="image_box"><img src="${v.image}" alt=""></div>`
                    print +=   `<div><h2>${v.title}</h2></div>`
                    print +=   `<div><h3>${v.price}</h3></div>`
                    print +=   `</div>`

                })
                print += `</div>`

                document.getElementById("main_box").innerHTML = print;
                
            })

            .catch((error)=> console.log(error.message));
        

    }catch(error){
        console.log(error);

    }
}

const handleSearch = () =>{
    // get the value from search box
   try{
    fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            if(res.ok){
                return res.json()
            }
            throw new Error ("something went wrong")
        })
        .then((data)=>{
            let searchvalue = document.getElementById("search").ariaValueMax.toLowerCase();
            let print = '';
            data.filter((v)=>{
                if(v.title.toLowerCase().includes(searchvalue)){
                print +=   `<div id="box">`
                print +=   `<div id="image_box"><img src="${v.image}" alt=""></div>`
                print +=   `<h2>${v.title}</h2>`
                print +=   `<h3>${v.price}</h3>`

                print += `</div>`
                }

            })
            document.getElementById("result").innerHTML = print;
        })

   }catch(error){
    console.log(error);

   }

   

   

}





window.onload = displayData();