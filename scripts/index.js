//store the products array in localstorage as "products"
function data(t,d,p,i){
    this.type = t,
    this.desc = d,
    this.price = p,
    this.image = i
}

let arr = JSON.parse(localStorage.getItem("products")) || [];

function adminPanel(event){
    event.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value; 

    let desc = form.desc.value;

    let price = form.price.value;

    let image = form.image.value;

    let P1 = new data(type,desc,price,image);

    arr.push(P1);

    localStorage.setItem("products",JSON.stringify(arr));
    alert("Data added");

    form.type.value=null;
    form.desc.value=null;
    form.price.value=null;
    form.image.value=null;

}
