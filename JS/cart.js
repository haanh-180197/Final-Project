


window.addEventListener(`load`, function(e){
    checkCart();
})
let cartArray = [];

// checkCart
const totalItem = document.querySelector(`.cartIndex .cart .headerCart p`);
const totalAllItem = document.querySelector(`.cartIndex .cart .total .totalPrice`)
const checkCart = () =>{
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    totalItem.innerHTML = (`<span class="red">${cartArray.length}</span> Mon`);
    totalAllItem.innerHTML =(`${totalAll()}₫`);
    showItem(cartArray);
}

// showCart
const cartUl = document.querySelector(`.cartIndex .cart .cartUl ul`)
const showItem = (cart) =>{
    cartUl.innerHTML = ``;
    for(let i in cart){
        const newElement = document.createElement(`li`);
        newElement.innerHTML = `
            <div class="img">
                <img src="${cart[i][`src`]}" alt="">
            </div>
            <div class="name">
                <p>${cart[i][`name`]}</p>
                <span>
                    <i class="fa-solid fa-minus" onclick="btnMinus('${cart[i][`name`]}')"></i>
                    <p>${cart[i][`count`]}</p>
                    <i class="fa-solid fa-plus" onclick="btnPlus('${cart[i][`name`]}')"></i>
                </span>
            </div>
            <div class="price">
                <p class="priceOne">${cart[i][`price`]}₫</p>
                <p class="priceChange">${totalOneItem(`${cart[i][`name`]}`)}₫</p>
                <p class="delete" onclick="btnRemove('${cart[i][`name`]}')">Xoa</p>
            </div>
        `
        cartUl.appendChild(newElement);
    }
}
// Minus
const btnMinus = (name) =>{
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    for(let i in cartArray){
        if(cartArray[i][`name`] == name && cartArray[i][`count`] > 1){
            cartArray[i][`count`] --;
        }
    }
    saveCart();
    checkCart();
}
// Plus
const btnPlus = (name) =>{
    if(getCart()){
        cartArray =JSON.parse(getCart());
    }
    for(let i in cartArray){
        if(cartArray[i][`name`] == name){
            cartArray[i][`count`] ++;
        }
    }
    saveCart();
    checkCart();
}
// totalOneItem
const totalOneItem = (name) =>{
    let sum = 0;
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    for(let i in cartArray){
        if(cartArray[i][`name`] == name){
            sum += cartArray[i][`price`]*cartArray[i][`count`];
        }
    }
    return sum;
}
// remove
const btnRemove = (name) =>{
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    for(let i in cartArray){
        if(cartArray[i][`name`] == name){
            cartArray.splice(i, 1);
        }
    }
    saveCart();
    checkCart();
}

// totalAll
const totalAll = () =>{
    let sum = 0;
    if(getCart()){
        cartArray = JSON.parse(getCart()); 
    }
    for(let i in cartArray){
        sum += cartArray[i][`price`]*cartArray[i][`count`];
    }
    return sum;
}

// getCart
const getCart = () =>{
    const a = localStorage.getItem(`shoppingCart`);
    return a;
}
// saveCart
const saveCart = () =>{
    localStorage.setItem(`shoppingCart`, JSON.stringify(cartArray));
}


// location
// const checkLocation = () => {
//     let city = localStorage.getItem(`cityName`);
//     if(city){
//         locationCity.innerHTML = `${city}`;
//     }
// }
// shoppingCart
// let arrayCart = [];

// const checkCart = () =>{
//     if(getCart()){
//         arrayCart = JSON.parse(getCart());
//         imageCart.innerHTML = (`${arrayCart.length}`);
//         soLuong.innerHTML = (`${arrayCart.length} Mon`);
//         totalHeader.innerHTML = (`${totalPrice()}₫`);
//         totalFooter.innerHTML = (`${totalPrice()}₫`);
//     }
//     showItem(arrayCart);
// }

// const showItem = (cart) =>{
//     cartBody.innerHTML = ``;
//     for(const i in cart){
//         const newElement = document.createElement(`div`);
//         newElement.innerHTML = `
//             <article class="listOrder">
//                 <div class="listOrderName">
//                     <p>${cart[i][`name`]}</p>
//                     <i class="far fa-times-circle" onclick="btnRemove('${cart[i][`name`]}')"></i>
//                 </div>
//                 <hr class="locationHr">
//                 <div class="listOrderPrice">
//                     <div>
//                     <i class="fas fa-plus" onclick="btnPlus('${cart[i][`name`]}')"></i>
//                     <p>${cart[i][`count`]}</p>
//                     <i class="fas fa-minus" onclick="btnMinus('${cart[i][`name`]}', '${cart[i][`count`]}')"></i>
//                     </div>
//                     <div>
//                         <p>${checkPrice(`${cart[i][`name`]}`)}₫</p>
//                     </div>
//                 </div>
//             </article>
//         `
//         cartBody.appendChild(newElement);
//     }
// }

// remove
// const btnRemove = (nameItem) => {
//     if(getCart()){
//         arrayCart = JSON.parse(getCart());
//     }
//     for(let i in arrayCart){
//         if(arrayCart[i][`name`] == nameItem){
//             arrayCart.splice(i, 1);
//         }
//     }
//     saveCart();
//     checkCart();
//     showItem(arrayCart);
// }

// // getCart
// const getCart = () =>{
//     let a  = localStorage.getItem(`shoppingCart`);
//     return a;
// }

// // saveCart
// const saveCart = ()=>{
//     localStorage.setItem(`shoppingCart`, JSON.stringify(arrayCart));
// }

// // Plus Minus
// const btnPlus = (nameItem) =>{
//     if(getCart()){
//         arrayCart = JSON.parse(getCart());
//     }
//     for(let i in arrayCart){
//         if(arrayCart[i][`name`] == nameItem){
//             arrayCart[i][`count`] ++;
//         }
//     }
//     saveCart();
//     checkCart()
//     showItem(arrayCart);
// }

// const btnMinus = (nameItem, countItem) =>{
//     if(getCart()){
//         arrayCart = JSON.parse(getCart());
//     }
//     for(let i in arrayCart){
//         if(arrayCart[i][`name`] == nameItem && countItem > '1'){
//             arrayCart[i][`count`] --;
//         }
//     }
//     saveCart();
//     checkCart();
//     showItem(arrayCart);
// }

// // Price 
// const checkPrice = (nameItem) => {
//     if(getCart()){
//         arrayCart = JSON.parse(getCart())
//     }
//     for(let i in arrayCart){
//         if(arrayCart[i][`name`] == nameItem){
//             let priceItem = arrayCart[i][`price`] * arrayCart[i][`count`];
//             return priceItem;
//         }
//     }
// }

// // Total
// const totalPrice = () => {
//     let sum = 0;
//     if(getCart()){
//         arrayCart = JSON.parse(getCart());
//     }
//     for(let i in arrayCart){
//         sum += arrayCart[i][`price`] * arrayCart[i][`count`];
//     }
//     return sum;
// }

// ChangeCity
// changeCity.addEventListener(`click`, (e)=> {
//     localStorage.removeItem(`cityName`);
// })

