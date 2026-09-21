const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let productInfo=[]
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

 addProductButton.addEventListener('click', ()=>  {
    if( !productNameInput.value || !productPriceInput.value){
        alert("please enter product")
    }
    let productName = productNameInput.value
    let priceInput= productPriceInput.value
    let newProduct= {
        name: productName,
        price:priceInput,
    }
        productInfo.push(newProduct)
        console.log(productInfo);

        for (let i=0; i<productInfo.length; i++){
            let item=document.createElement("li")
                item.innerText= productInfo[i].name+ productInfo[i].price
            console.log(productInfo[i])
            console.log(`${productInfo[i].name}  ${productInfo[i].price}`)
        }

        


 })




// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}