import { getLocalStorage, printSimpleProductCart } from "./src/utils";

function printHistory(orderWithDate){
    const elementOrder = `
        <p class='text-xl text-bold my-4 '>${new Date(orderWithDate.orderDate)
            .toLocaleDateString('pt-BR',{
                hour: "2-digit",
                minute: "2-digit",
        })}</p>
        <section id="container-order-${orderWithDate.orderDate}" class="bg-slate-300 p-3 rounded-md"></section> 
    `;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementOrder;

    for( const idProduct in orderWithDate.order){
        printSimpleProductCart(idProduct, `container-order-${orderWithDate.orderDate}`, orderWithDate.order[idProduct]);
    }
}

function printHistoryList(){
    const purchaseHistory = getLocalStorage('purchaseHistory') ?? [];
    for(const orderWithDate of purchaseHistory){
        printHistory(orderWithDate);
    }
}

printHistoryList();