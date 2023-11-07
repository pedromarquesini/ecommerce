import { addProductCart } from "./menuCart";
import { list } from "./productList";

export function startCatalog(){
    for(const productList of list){
        //adiciona o estilo de card para cada produto
        const productCard = `<div class="border-solid w-70 m-3 rounded-lg flex flex-col p-2 shadow-xl shadow-slate-400 justify-between group" id="card-product-${productList.id}">
    <img 
        src="./assets/img/${productList.fileName}" 
        alt="${productList.name}"
        style="height: 300px;"
        class="rounded-lg group-hover:scale-110 transition-opacity duration-500 my-3"
    />

    <p class=' text-sm'>${productList.team}</p>
    <p class='text-sm'>${productList.name}</p>
    <p class='text-sm'>R$${productList.price}</p>

    <button id='add-${productList.id}' class='bg-slate-950 text-slate-100 rounded-lg '>
        <i class="fa-solid fa-cart-plus text-slate-200 hover:text-slate-500"></i>
    </button>                
    </div>`;
        //insere o codigo html dentro da div com id container-product
    document.getElementById("container-product").innerHTML += productCard;
    }

    for (const productList of list){
        document.getElementById('add-${productList.id}').addEventListener('click', addProductCart(productList));
    }
}