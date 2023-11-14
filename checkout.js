import { getLocalStorage, printSimpleProductCart, clearLocalStorage, saveLocalStorage } from "./src/utils";

function printProductsCheckout(){
    const idsProductsCartAmount = getLocalStorage('cart') ?? {};
    console.log(idsProductsCartAmount);
    for (const idProduct in idsProductsCartAmount){
        printSimpleProductCart(idProduct, "container-products-checkout", idsProductsCartAmount[idProduct]);
    }
}

export function finalizePurchase(event){
    event.preventDefault();//uma ação padrão do navegador é cancelada

    const idsProductsCartAmount = getLocalStorage('cart') ?? {};
        if(Object.keys(idsProductsCartAmount).length === 0){
            return;
        }
    const currentDate = new Date();

    const purchaseCompleted = {
        orderDate: currentDate,
        order: idsProductsCartAmount,
    };
    const purchaseHistory = getLocalStorage('purchaseHistory') ?? [];
    const purchaseHistoryUpdated = [purchaseCompleted, ...purchaseHistory];

    saveLocalStorage('purchaseHistory', purchaseHistoryUpdated);

    clearLocalStorage('cart');

    window.location.href = window.location.origin + "/history.html";
}

printProductsCheckout();

document.addEventListener("submit",(evt) => finalizePurchase(evt));
