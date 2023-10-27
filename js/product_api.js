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

                data.map((v)=>{
                    print +=   `<div id="box">`
                    print +=   `<div id="image_box"><img src="${v.image}" alt=""></div>`
                    print +=   `<h2>${v.title}</h2>`
                    print +=   `<h3>${v.price}</h3>`

                    print += `</div>`

                })

                document.getElementById("main_box").innerHTML = print;
                
            })

            .catch((error)=> console.log(error.message));
        

    }catch(error){
        console.log(error);

    }
}

const handleSearch = () =>{
    // get the value from search box
    let searchBoxValue = document.querySelector("#search").value;
   

   

}





window.onload = displayData();