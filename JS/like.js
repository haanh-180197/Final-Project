
window.addEventListener(`load`, (e)=>{
    showLike();
})


let like2 = [];
let cart = [];

// show
const likeIndex = document.querySelector(`.likeIndex .like .likeUl ul`)
const showLike = () =>{
    if(getLike()){
        like2 = JSON.parse(getLike());
    }
    likeIndex.innerHTML=``;
    for(let i in like2){
        const newElementLike = document.createElement(`li`);
        newElementLike.innerHTML =`
        <div class="img">
            <img src="${like2[i][`src`]}" alt="">
        </div>
        <div class="name">
            <p>${like2[i][`name`]}</p>
            <p class="red">${like2[i][`price`]}</p>
        </div>
        <div class="btn">
            <p onclick="btnRemove('${like2[i][`name`]}')">x</p>
            <p onclick="btnAdd('${like2[i][`name`]}')">Add</p>
        </div>
        `
        likeIndex.appendChild(newElementLike);
    }
}


// remove
const btnRemove = (name)=>{
    if(getLike()){
        like2 = JSON.parse(getLike())
    }
    for(let i in like2){
        if(like2[i][`name`] == name){
            like2.splice(i, 1);
        }
    }
    saveLike();
    showLike();
}


// add
const Item = function(name, price, count, src) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.src = src;
};

const btnAdd = (name)=>{
    if(getLike()){
        like2 = JSON.parse(getLike());
    }
    if(getCart()){
        cart = JSON.parse(getCart());
    }
    for(let i in cart){
        if(cart[i][`name`] == name){
            return;
        }
    }
    for(let j in like2){
        if(like2[j][`name`] == name){
            const item = new Item(like2[j][`name`], like2[j][`price`], 1, like2[j][`src`]);
            cart.push(item);
        }
    }
    saveCart();
}



const getCart = ()=>{
    const a = localStorage.getItem(`shoppingCart`);
    return a;
}
const saveCart = ()=>{
    localStorage.setItem(`shoppingCart`, JSON.stringify(cart));
}

// get
const getLike = () =>{
    const a = localStorage.getItem(`like`);
    return a;
}
// set
const saveLike = () =>{
    localStorage.setItem(`like`, JSON.stringify(like2));
}