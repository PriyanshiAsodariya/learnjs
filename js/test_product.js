let wishlist = [];
console.log(wishlist);


let data = [
    {
        id : 101,
        name : "clothes",
        price : 2000,
    },
    {
        id : 102,
        name : "shooes",
        price : 1500,
    },
    {
        id : 103,
        name : "bag",
        price : 2200,
    }
]

console.log(data);


handleclick = (iconelem, id) =>{
    console.log();

    if(iconelem.classList.contains("fa-regular")){
        iconelem.classList.add("fa-solid");
        iconelem.classList.remove("fa-regular");
        addData(id)
        
    }else{
        iconelem.classList.add("fa-regular");
        iconelem.classList.remove("fa-solid");
        removeData(id)
       
    }
    displayData();
}

addData = (id)=>{
    let product = data.find((v)=> v.id === id);
    console.log(product);

    if(product){
        wishlist.push(product)
        console.log(wishlist)
    }
    displayData();
}

removeData = (id) =>{
    let index = wishlist.findIndex((v)=> v.id === id);
    console.log(index);

    wishlist.splice(index , 1)
    console.log(wishlist);

    displayData();
    
}

data.map((v)=>{

    let divref = document.getElementById("parent_div")
    
    let divelem = document.createElement("div")
    divelem.setAttribute("class" ,"box")

    let iconelem = document.createElement("i");
    iconelem.setAttribute("class" , "fa-regular fa-heart")
    iconelem.setAttribute("id" , "icon")
    iconelem.addEventListener("click" , ()=>handleclick(iconelem , v.id))
    parent_div.appendChild(iconelem)

    let id = document.createElement("h3")
    let idtxt = document.createTextNode(v.id)
    id.appendChild(idtxt)

    let name = document.createElement("h3")
    let nametxt = document.createTextNode(v.name)
    name.appendChild(nametxt)

    let price = document.createElement("h3")
    let pricetxt = document.createTextNode(v.price)
    price.appendChild(pricetxt)

    divelem.appendChild(iconelem)
    divelem.appendChild(id)
    divelem.appendChild(name)
    divelem.appendChild(price)

    divref.appendChild(divelem)


})

displayData = () =>{

    let divref = document.getElementById("display_product");

    divref.innerHTML = '';

    wishlist.map((v)=>{

        document.getElementById("display_product").style.display = 'block'
        
        // let li = document.createElement("li")
        // li.setAttribute("class" , "li")

        let h3Id = document.createElement("h3");
        let h3Idtxt = document.createTextNode(v.id);
        h3Id.appendChild(h3Idtxt)

        let h3name = document.createElement("h3");
        let h3nametxt = document.createTextNode(v.name);
        h3name.appendChild(h3nametxt)

        let h3price = document.createElement("h3");
        let h3pricetxt = document.createTextNode(v.price);
        h3price.appendChild(h3pricetxt)


        divref.appendChild(h3Id)
        divref.appendChild(h3name)
        divref.appendChild(h3price)

    })
    
}

