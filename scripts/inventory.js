let adminDetails = JSON.parse(localStorage.getItem("products"));

adminDetails.map(function(elem,index){

    let box = document.createElement("div");
    box.setAttribute("class","box");

    let type = document.createElement("h1");
    type.innerText = elem.type;

    let desc = document.createElement("h2");
    desc.innerText = elem.desc;

    let price = document.createElement("h3");
    price.innerText = `₹ ${elem.price}`;

    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("id","image");

    let removebtn = document.createElement("button");
    removebtn.innerText = "Remove";
    removebtn.setAttribute("id","remove_product");
    removebtn.addEventListener("click",function(){
        removeData(elem,index);
    })

    box.append(image,type,desc,price,removebtn);

    document.getElementById("all_products").append(box);
})

let removeditem = JSON.parse(localStorage.getItem("recycle")) || []; 

function removeData(elem,index){

   removeditem.push(adminDetails.splice(index,1));

   alert("Item removed");

   localStorage.setItem("recycle",JSON.stringify( removeditem));

   localStorage.setItem("products",JSON.stringify(adminDetails));

   window.location.reload();
}