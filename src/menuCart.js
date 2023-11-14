import { list } from "./productList"
import { getLocalStorage, saveLocalStorage } from "./utils";

const idsProductsCartAmount = getLocalStorage('cart') ?? {};

function openCart() {
    document.getElementById("cart").classList.remove("right-[-360px]");
    document.getElementById("cart").classList.add("right-[0px]");
}
function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

function goToCheckout(){
  if(Object.keys(idsProductsCartAmount).length === 0){
      alert("Adicione produtos ao carrinho!");
    return;
  }
  window.location.href = window.location.origin + "/checkout.html";
}

export function initializeCart(){ //export para poder ser importado em outro arquivo
    const buttonCloseCart = document.getElementById("close-cart");
    const buttonOpenCart = document.getElementById("open-cart");
    const buttonGoToCheckout = document.getElementById("finalize-purchase");

    buttonOpenCart.addEventListener("click", openCart);
    buttonCloseCart.addEventListener("click", closeCart);
    buttonGoToCheckout.addEventListener("click", goToCheckout);

}

function printProductCart(idProduct){
  const product = list.find((p) => p.id === idProduct);

    const containerCart = document.getElementById("cart-products");

    const elementArticle = document.createElement("article");
      const articleClasses = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative"];     
      // elementArticle.classList.add(...articleClass);

      for(const classArticle of articleClasses){
          elementArticle.classList.add(classArticle);
      }
    
    const cartProduct = `
      <button id="remove-product-${product.id}" class="absolute top-0 right-2" >
        <i class="fa-solid fa-trash p-1 text-slate-400 hover:text-slate-700"></i>
      </button>
      
      <img class="h-24 rounded-lg" src="./assets/img/${product.fileName}" alt="Carrinho: ${product.name}">
      
      <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-900 text-sm">${product.name}</p>
          <p class="text-slate-400 text-xs">${product.team}</p>
          <p class="text-green-700 text-m">R$ ${product.price}</p>
      </div>
      <div class="flex absolute bottom-0 right-2 text-slate-950 items-end bottom-0 right-2 text-lg">
        <button id="decrementProduct-${product.id}" class="m1-2">
          -
        </button>
        <p id="amount-${product.id}" class="m1-2"> ${idsProductsCartAmount[idProduct]} </p>
        <button id="increaseProduct-${product.id}" class="m1-2">
          +
        </button>
        
      </div>
    `;
    elementArticle.innerHTML = cartProduct;
    containerCart.appendChild(elementArticle);

    document.getElementById(`decrementProduct-${product.id}`).addEventListener("click", () => {
        
      removeProductAmount(product.id);

    });
    document.getElementById(`increaseProduct-${product.id}`).addEventListener("click", () => {
        addProductAmount(product.id);
    });

    document.getElementById(`remove-product-${product.id}`).addEventListener("click", () => {
        removeProductCart(product.id);
    });

}

function removeProductCart(idProduct){
    delete idsProductsCartAmount[idProduct];
    saveLocalStorage("cart", idsProductsCartAmount);
    updateTotalPrice(idsProductsCartAmount);    
    renderCart();
}

function addProductAmount(idProduct){
    idsProductsCartAmount[idProduct] += 1;
    document.getElementById(`amount-${idProduct}`).innerHTML= idsProductsCartAmount[idProduct];
    saveLocalStorage("cart", idsProductsCartAmount);
    updateTotalPrice(idsProductsCartAmount);
}
function removeProductAmount(idProduct){
    if(idsProductsCartAmount[idProduct] === 1){
      removeProductCart(idProduct);
      return;
    }

    idsProductsCartAmount[idProduct]--;
    saveLocalStorage("cart", idsProductsCartAmount);
    document.getElementById(`amount-${idProduct}`).innerHTML= idsProductsCartAmount[idProduct];
    updateTotalPrice(idsProductsCartAmount);
}

export function renderCart(){
  const containerCart = document.getElementById("cart-products");
  containerCart.innerHTML = "";  

  for(const idProduct in idsProductsCartAmount){
    printProductCart(idProduct);
  }
}

export function addProductCart(idProduct){    

    if(idsProductsCartAmount[idProduct]){
        idsProductsCartAmount[idProduct] += 1;
        document.getElementById(`amount-${idProduct}`).innerHTML= idsProductsCartAmount[idProduct];
        return;
    }

    idsProductsCartAmount[idProduct] = 1; //inicializar o produtocom quantidade 1
    saveLocalStorage("cart", idsProductsCartAmount);
    updateTotalPrice(idsProductsCartAmount);
    printProductCart(idProduct);
}
    
export function updateTotalPrice(idsProductsCartAmount){
  let totalPrice = 0;

  for(const idProduct in idsProductsCartAmount){
    const product = list.find((p) => p.id === idProduct);
    totalPrice += product.price * idsProductsCartAmount[idProduct];
  }
  printTotalPrice(totalPrice);
}

function printTotalPrice(totalPrice){
  document.getElementById("total-price").innerHTML = "Total: R$ " + totalPrice.toFixed(2);
}