

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
      <button class="addtocart-css js-addto-cart data-product-name ="${product.name}">
      Add to cart</button>
    </div>
  `;
}); 
 
document.querySelector(".js-product-grid").innerHTML = productsHTML; 


document.querySelectorAll(".js-addto-cart").forEach((button)=> {
  button.addEventListener("click",()=>{
     
    console.log(button.dataset.productName);
  });
});
 



