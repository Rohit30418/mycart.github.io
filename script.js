let cosmetics=document.querySelector(".cosmetics-itm-cont");
let household=document.querySelector(".household-cont");
//array to store items
let cart=[];

//fetch method for get json data
fetch("data.json").then(function(params) {
    return params.json();
}).then(function(item) {

//creating html code dynamically
   let firstdata=item.data[0].productList.map(function(temp) {
       return `  <div class="cosmetics-itm">
    <p>name:${temp.name}</p>
    <p>price:${temp.price}</p>
    <button class="add">Add to the cart</button>
    <button class="remove">Remove from cart</button>
    </div>`
   }).join("");
   cosmetics.innerHTML=firstdata;

   //creating html code for household part
   let seconddata=item.data[1].productList.map(function(temp) {
     return `<div class="cosmetics-itm">
    <p>name:${temp.name}</p>
    <p>price:${temp.price}</p>
    <button class="add">Add to the cart</button>
    <button class="remove">Remove from cart</button>
    </div>`
   }).join("");
   household.innerHTML=seconddata;
   
   //gets all buttons from dom and add click event
   let buttons=document.querySelectorAll("button");
   buttons.forEach(function(params) {
    params.addEventListener("click",function(e) {

        //logic for push item in cart array
           if ( e.currentTarget.className=="add"&&e.currentTarget.innerText=="Add to the cart") {
           cart.push(e.currentTarget.parentElement.children[0].innerText);
           console.log("Product Added to the cart");
           console.log(cart);
           e.currentTarget.innerText="Added";
       }

       //logic for remove item from array
           if (e.currentTarget.className=="remove" && cart!="") {
           let indexno=cart.indexOf(e.currentTarget.parentElement.children[0].innerText);
           if (indexno!=-1) {
           cart.splice(indexno,1);
           console.log("Product removed from the cart");
           console.log(cart);
           e.currentTarget.previousElementSibling.innerText="Add to the cart";
           }    
        }
    })
})

});
