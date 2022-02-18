// load
window.addEventListener(`load`, (e) =>{
    showDetail();
})

// showDetail
let detailOj = {};
let cartArray = [];
const detailCenter = document.querySelector(`.detailIndex .detail .center`);
const showDetail = () =>{
    detailCenter.innerHTML =``;
    if(getDetail()){
        detailOj = JSON.parse(getDetail());
    }
    const newElement = document.createElement(`div`);
    newElement.innerHTML = `
    <section class="img">
        <div class="big">
            <img src="${detailOj[`src`]}" alt="">
        </div>
        <div class="small">
            <img src="${detailOj[`src`]}" alt="">
         </div>
    </section>
    `
    const newElement2 = document.createElement(`div`);
    newElement2.innerHTML =`
    <section class="namePrice">
        <p>${detailOj[`name`]}</p>
        <p><span class="red">${detailOj[`price`]}₫</span></p>
    </section>
    `
    const newElement3 = document.createElement(`div`);
    newElement3.innerHTML =`
    <section class="btn">
        <div>
            <i class="fa-solid fa-minus" onclick="btnMinus('')"></i>
            <p>${detailOj[`count`]}</p>
            <i class="fa-solid fa-plus" onclick="btnPlus('')"></i>
        </div>
        <form>
            <button onclick="btnAdd(event)">Dat Mon</button>
        </form>
    </section>
    `
    detailCenter.appendChild(newElement);
    detailCenter.appendChild(newElement2);
    detailCenter.appendChild(newElement3);
}

// Plus
const btnPlus = () =>{
    if(getDetail()){
        detailOj = JSON.parse(getDetail());
    }
    detailOj[`count`] ++;
    saveDetail();
    showDetail();
}
// Minus
const btnMinus = () =>{
    if(getDetail()){
        detailOj = JSON.parse(getDetail());
    }
    if(detailOj[`count`] > 1){
        detailOj[`count`] --;
    }
    saveDetail();
    showDetail();
}
// add
const btnAdd = (e) =>{
    e.preventDefault();
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    if(getDetail()){
        detailOj = JSON.parse(getDetail());
    }
    for(let i in cartArray){
        if(cartArray[i][`name`] === detailOj[`name`]){
            cartArray[i][`count`] += detailOj[`count`];
            saveCart();
            return;
        }
    }
    cartArray.push(detailOj);
    saveCart();
}
// getDetail
const getDetail = () =>{
    const a = localStorage.getItem(`detail`);
    return a;
}
// getCart
const getCart = () =>{
    const a = localStorage.getItem(`shoppingCart`);
    return a
}
// saveDetail
const saveDetail = () =>{
    localStorage.setItem(`detail`, JSON.stringify(detailOj));
}
// saveCart
const saveCart = () =>{
    localStorage.setItem(`shoppingCart`, JSON.stringify(cartArray))
}