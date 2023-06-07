const products =[{
 image:"/amazon images/laptop.jpg",
 name:"hp 6th generation 850g",
 rating: 4.5,
 priceCents: 1032          
},{
  image:"/amazon images/basketballs.jpg",
  name:"high quality basketball",
  rating:4.0,
  priceCents:4032
},{
  image:"/amazon images/canvas shoes.jpg",
  name:"Black and white canvas shoes",
  rating:4.5,
  priceCents:620
},{
  image:"/amazon images/food.jpg",
  name:"baked meat balls",
  rating:5.0,
  priceCents:5445
}];

let productsHTML="";

products.forEach((product)=> {

  productsHTML+=`
    <div class="product-container">
      <img src="${product.image}"; style="width:300px">
      <div style="font-family: Verdana, ;" class="product-description">
        ${product.name}
      </div>
     <div> 
        <img class="star-rating" src="/amazonicons/rating-${product.rating *10 }.png">            
     </div>

     <div class="product-price">${product.priceCents /100}</div>  

      <div> 
        <select class="cart-quantity" >
          <option selected="" value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button class="addtocart-css">Add to cart</button>
    </div>
  `;
}); 

console.log(productsHTML);
 
document.querySelector(".js-product-grid").innerHTML = productsHTML; 