import { list } from "./productList";

export function saveLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function clearLocalStorage(key){
    localStorage.removeItem(key);
}

export function printSimpleProductCart(idProduct, idContainerHtml, amountProduct){
    const product = list.find((p) => p.id === idProduct);
  
      const containerCart = document.getElementById(idContainerHtml);
  
      const elementArticle = document.createElement("article");
        const articleClasses = [
          "flex", 
          "bg-stone-200", 
          "rounded-lg", 
          "p-1", 
          "relative",
          "mb-2",
          "w-96",
        ];     
        // elementArticle.classList.add(...articleClass);
  
        for(const classArticle of articleClasses){
            elementArticle.classList.add(classArticle);
        }
      
      const cartProduct = `       
        
        <img class="h-24 rounded-lg" src="./assets/img/${product.fileName}" alt="Carrinho: ${product.name}">
        
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${product.name}</p>
            <p class="text-slate-400 text-xs">${product.team}</p>
            <p class="text-green-700 text-m">R$ ${product.price}</p>
        </div>
        <div class="flex absolute bottom-0 right-2 text-slate-950 items-end bottom-0 right-2 text-lg">          
          <p id="amount-${product.id}" class="m1-2"> ${amountProduct} </p>          
        </div>
      `;
      elementArticle.innerHTML = cartProduct;
      containerCart.appendChild(elementArticle);
  
  }