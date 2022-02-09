// load
const locationCity = document.querySelector(`.location .city`);
const imageCart = document.querySelector(`header .cart .circle`)
const cartBody = document.querySelector(`.pay .getOrder`);
const soLuong = document.querySelector(`.pay .total .soLuong`);
const totalHeader = document.querySelector(`.totalHeader`);
const totalFooter = document.querySelector(`.totalFooter`);
const changeCity = document.querySelector(`.location .change .changeCity`)

window.addEventListener(`load`, function(e){
    checkLocation();
    checkCart();
})
// location
const checkLocation = () => {
    let city = localStorage.getItem(`cityName`);
    if(city){
        locationCity.innerHTML = `${city}`;
    }
}
// shoppingCart
let arrayCart = [];

const checkCart = () =>{
    if(getCart()){
        arrayCart = JSON.parse(getCart());
        imageCart.innerHTML = (`${arrayCart.length}`);
        soLuong.innerHTML = (`${arrayCart.length} Mon`);
        totalHeader.innerHTML = (`${totalPrice()}₫`);
        totalFooter.innerHTML = (`${totalPrice()}₫`);
    }
    showItem(arrayCart);
}

const showItem = (cart) =>{
    cartBody.innerHTML = ``;
    for(const i in cart){
        const newElement = document.createElement(`div`);
        newElement.innerHTML = `
            <article class="listOrder">
                <div class="listOrderName">
                    <p>${cart[i][`name`]}</p>
                    <i class="far fa-times-circle" onclick="btnRemove('${cart[i][`name`]}')"></i>
                </div>
                <hr class="locationHr">
                <div class="listOrderPrice">
                    <div>
                    <i class="fas fa-plus" onclick="btnPlus('${cart[i][`name`]}')"></i>
                    <p>${cart[i][`count`]}</p>
                    <i class="fas fa-minus" onclick="btnMinus('${cart[i][`name`]}', '${cart[i][`count`]}')"></i>
                    </div>
                    <div>
                        <p>${checkPrice(`${cart[i][`name`]}`)}₫</p>
                    </div>
                </div>
            </article>
        `
        cartBody.appendChild(newElement);
    }
}

// remove
const btnRemove = (nameItem) => {
    if(getCart()){
        arrayCart = JSON.parse(getCart());
    }
    for(let i in arrayCart){
        if(arrayCart[i][`name`] == nameItem){
            arrayCart.splice(i, 1);
        }
    }
    saveCart();
    checkCart();
    showItem(arrayCart);
}

// getCart
const getCart = () =>{
    let a  = localStorage.getItem(`shoppingCart`);
    return a;
}

// saveCart
const saveCart = ()=>{
    localStorage.setItem(`shoppingCart`, JSON.stringify(arrayCart));
}

// Plus Minus
const btnPlus = (nameItem) =>{
    if(getCart()){
        arrayCart = JSON.parse(getCart());
    }
    for(let i in arrayCart){
        if(arrayCart[i][`name`] == nameItem){
            arrayCart[i][`count`] ++;
        }
    }
    saveCart();
    checkCart()
    showItem(arrayCart);
}

const btnMinus = (nameItem, countItem) =>{
    if(getCart()){
        arrayCart = JSON.parse(getCart());
    }
    for(let i in arrayCart){
        if(arrayCart[i][`name`] == nameItem && countItem > '1'){
            arrayCart[i][`count`] --;
        }
    }
    saveCart();
    checkCart();
    showItem(arrayCart);
}

// Price 
const checkPrice = (nameItem) => {
    if(getCart()){
        arrayCart = JSON.parse(getCart())
    }
    for(let i in arrayCart){
        if(arrayCart[i][`name`] == nameItem){
            let priceItem = arrayCart[i][`price`] * arrayCart[i][`count`];
            return priceItem;
        }
    }
}

// Total
const totalPrice = () => {
    let sum = 0;
    if(getCart()){
        arrayCart = JSON.parse(getCart());
    }
    for(let i in arrayCart){
        sum += arrayCart[i][`price`] * arrayCart[i][`count`];
    }
    return sum;
}

// ChangeCity
changeCity.addEventListener(`click`, (e)=> {
    localStorage.removeItem(`cityName`);
})

