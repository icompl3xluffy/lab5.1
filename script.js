const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let productInfo=[]
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);

}

 addButton.addEventListener('click', ()=>  {
    if( !productNameInput.value || !productPriceInput.value){
        // alert("please enter product")
    }
    let productName = productNameInput.value
    let priceInput= productPriceInput.value
    
    let newProduct= {
        name: productName,
        price:priceInput,
    }
    
        productInfo.push(newProduct)
    
        let item = document.createElement("li");
        item.textContent= `${newProduct.name} $${newProduct.price} `
       
        cart.appendChild(item)

        let deletebtn= document.createElement("button")
        deletebtn.textContent="Delete";

        item.appendChild(deletebtn)

    
 })
deletebtn.addEventListener('click', (event) {
     const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}



// Function to remove an item
// function removeItem(event) {
//   const item = event.target.closest('li');
//   const price = parseFloat(item.dataset.price);
//   updateTotalPrice(-price);
//   item.remove();
// }