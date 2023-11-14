// Autor: Pedro Marquesini
import {startCatalog} from "./src/productCard.js"; //importando a função startCatalog do arquivo productCard.js
import {initializeCart, renderCart, updateTotalPrice} from "./src/menuCart.js"; //importando a função initializeCart do arquivo menuCart.js
import { initFilter } from "./filtersList.js";


startCatalog();
initializeCart();
updateTotalPrice();
renderCart();
initFilter();




