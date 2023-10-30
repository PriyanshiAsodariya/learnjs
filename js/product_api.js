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
    console.log("okkk");
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
            let searchvalue = document.getElementById("search").value.toLowerCase();
            console.log(searchvalue);
            let print = '';
            print += `<div class ="containor">`
            data.map((v)=>{
                if (v.title.toLowerCase().includes(searchvalue)){
                    print +=   `<div id="box">`
                    print +=   `<div id="image_box"><img src="${v.image}" alt=""></div>`
                    print +=   `<div><h2>${v.title}</h2></div>`
                    print +=   `<div><h3>${v.price}</h3></div>`
                    print +=   `</div>`
    
                }  
            });
            print += `</div>`
            document.getElementById("main_box").innerHTML = print;
          
            
        })
   }catch(error){
    console.log(error);
   }
}

const handlekey = () =>{
    console.log("jikk");
    try{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            if(res.ok){
                return res.json()
            }
            throw new Error("something went wrong")
        })
        .then((data)=>{
            let select = document.getElementById("select").value;
            console.log(select);

            console.log(data);
            let display = [];

            if(select === 'high'){
                display = data.sort((a,b)=>b.price - a.price);
                console.log(display);
            }else if(select === 'low'){
                display = data.sort((a,b)=>a.price - b.price);
                console.log(display);
            }else if(select === 'a'){
                display = data.sort((a,b)=>a.title.localeCompare(b.title))
                console.log(display);
            }else if(select === 'z'){
                display = data.sort((a,b)=>b.title.localeCompare(a.title))
                console.log(display);
            }

            let print  = '';
            print += `<div class ="containor">`

            display.map((v)=>{
                print +=   `<div id="box">`
                print +=   `<div id="image_box"><img src="${v.image}" alt=""></div>`
                print +=   `<div><h2>${v.title}</h2></div>`
                print +=   `<div><h3>${v.price}</h3></div>`
                print +=   `</div>`

            })
            print += `</div>`

            document.getElementById("main_box").innerHTML = print;


        })

    }catch(error){
        console.log(error);

    }


}

let selectref = document.getElementById("select")
selectref.addEventListener('change', handlekey)






window.onload = displayData();