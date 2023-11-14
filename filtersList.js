const productList = document.getElementById("container-product");

function showAll(){
    const hiddenProducts =
        Array.from(productList.getElementsByClassName("hidden"));

        for (const product of hiddenProducts){
            product.classList.remove("hidden");
        }
}

function hideNational(){
    showAll();
    const nationalProducts = 
        Array.from(productList.getElementsByClassName("NATIONAL")
    );

    for (const product of nationalProducts){
        product.classList.add("hidden");
    }
}

function hideInternational(){
    showAll();
    const nationalProducts = 
        Array.from(productList.getElementsByClassName("INTERNATIONAL")
    );

    for (const product of nationalProducts){
        product.classList.add("hidden");
    }
}

export function initFilter(){
    document.getElementById("show-international").addEventListener("click", () => {
        hideNational();
    });
    document.getElementById("show-national").addEventListener("click", () => {
        hideInternational();
    });
    document.getElementById("show-all").addEventListener("click", () => {
        showAll();
    });
}