function openCart() {
    document.getElementById("cart").classList.remove("right-[-360px]");
    document.getElementById("cart").classList.add("right-[0px]");
}
function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

export function initializeCart(){ //export para poder ser importado em outro arquivo
    const buttonCloseCart = document.getElementById("close-cart");
    const buttonOpenCart = document.getElementById("open-cart");

    buttonCloseCart.addEventListener("click", closeCart);
    buttonOpenCart.addEventListener("click", openCart);
}

export function addProductCart(){
    const containerCart = document.getElementById("cart-products");

    const cartProduct = `<div class="flex bg-slate-100 rounded-lg p-1">
      <button id="remove-product-cart" ><i class="fa-solid fa-trash p-1 text-slate-400 hover:text-slate-700"></i></button>
        <img class="h-24 rounded-lg" src="./assets/img/camisa-1.jpeg" alt="Carrinho: camisa arsenal">
      <div class="p-2">
          <p class="text-slate-900 text-sm">Camisa Arsenal</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-m">R$ 299</p>
      </div>
    </div>`;

    document.getElementById("cart-products").innerHTML += cartProduct;
}
    
