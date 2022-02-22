
/*JS for menu*/
const addToCart = document.querySelectorAll(".addtocart");
const itemPhoto = document.querySelectorAll(`.item-photo img`);
// Data
window.addEventListener(`load`, (e) =>{
  for(let i = 0; i < addToCart.length; i++){
    const name = addToCart[i].getAttribute(`data-name`);
    const price = Number(addToCart[i].getAttribute(`data-price`));
    const imgSrc = itemPhoto[i].getAttribute(`src`);
    addItemToData(name, price, 1, imgSrc);
  }
})
// 
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function(event) {
  event.preventDefault();
  const name = event.target.getAttribute("data-name");
  const price = Number(event.target.getAttribute("data-price"));
  const imgSrc = itemPhoto[i].getAttribute(`src`);
  addItemToCart(name, price, 1, imgSrc);
})};

for (let i = 0; i < itemPhoto.length; i++){
  itemPhoto[i].addEventListener(`click`, (e) =>{
  const name = addToCart[i].getAttribute("data-name");
  const price = Number(addToCart[i].getAttribute("data-price"));
  const imgSrc = itemPhoto[i].getAttribute(`src`);
  addItemToDetail(name, price, 1, imgSrc)
  })
}

// const cart = []; //tạo biết cart; gắn cho array rỗng.
let cartArray = [];
let data = [];

const Item = function(name, price, count, src) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.src = src;
  };
// add to Data
const addItemToData = (name, price, count, src) =>{
  for(let i in data){
    if(data[i][`name`] === name){
      return;
    }
  }
  const item = new Item(name, price, count, src);
  data.push(item);
  saveData();
}
// Add item to cart
function addItemToCart(name, price, count, src) {
  for(const item in cartArray) {
      if(cartArray[item].name === name) {
        cartArray[item].count ++;
        saveCart();
        checkCart();
        return;
      }
  }
  const item = new Item(name, price, count, src);
  cartArray.push(item);
  saveCart();
  checkCart();
};
// add item to detail
const addItemToDetail = (name, price, count, src) =>{
  const item = new Item(name, price, count, src);
  localStorage.setItem(`detail`, JSON.stringify(item))
}

// // Save cart
//   function saveCart() {
//     localStorage.setItem('shoppingCart', JSON.stringify(cart));
//   };



// merch
const searchBtn = document.querySelector(`.searchBtn i`);
const sideBarROne = document.querySelector(`.sideBarR`);
const sideBarRTwo = document.querySelector(`.sideBarRight`);


searchBtn.addEventListener(`click`, (e) => {
    sideBarROne.classList.toggle(`close`);
    sideBarRTwo.classList.toggle(`close`);
}) 
// load
window.addEventListener(`load`, (e) => {
  checkCart();
})
// checkCart
const totalItem = document.querySelector(`.sideBarR .cart .cartCount p`);
const totalItem2= document.querySelector(`.sideBarR .cartUl .indexUl .totalItem`)

const checkCart = () =>{
  if(getCart()){
    cartArray = JSON.parse(getCart());
    totalItem.innerHTML = (`${cartArray.length}`);
    totalItem2.innerHTML = (`<span class="red">${cartArray.length}</span> Mon`)
  }
  showCart(cartArray);
}
// showCart
const cartUl = document.querySelector(`.sideBarR .cartUl .indexUl`)
const showCart = (cart) => {
  cartUl.innerHTML = ``;
  const newElementHeader = document.createElement(`li`);
  newElementHeader.innerHTML =`
    <p class="totalItem bold">
    <span class="red">${cart.length}</span> Mon
    </p>
    <p><span class="red">${sumPrice()}₫</span></p>
  `
  cartUl.appendChild(newElementHeader);
  for(let i in cart){
    const newElement = document.createElement(`li`);
    newElement.innerHTML =`
      <p>${cart[i][`name`]}</p>
      <p class="bold">${cart[i][`price`]}₫</p>
    `
    cartUl.appendChild(newElement);
    const newElement2 = document.createElement(`li`);
    newElement2.innerHTML=`
      <p>x${cart[i][`count`]}</p>
    `
    cartUl.appendChild(newElement);
    cartUl.appendChild(newElement2);
  }
}
// remove
const remove = (name) =>{
  if(getCart){
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
// sum price
const sumPrice = () =>{
  let sum = 0;
    if(getCart()){
        cartArray = JSON.parse(getCart());
    }
    for(let i in cartArray){
        sum += cartArray[i][`price`] * cartArray[i][`count`];
    }
    return sum;
}
// getCart
const getCart = () => {
  const a = localStorage.getItem(`shoppingCart`);
  return a;
}
// saveCart
const saveCart = () =>{
  localStorage.setItem(`shoppingCart`, JSON.stringify(cartArray));
}
// saveData
const saveData = () =>{
  localStorage.setItem(`data`, JSON.stringify(data));
}

//Xử lý hover filter menu
let filterlist = document.querySelector(".filter-list");
let indexLi = document.querySelectorAll(".indexLi");
indexLi.forEach((el) => {
  el.addEventListener("click", function () {
  filterlist.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});


// btnLike
let like = [];
const btnLike = document.querySelectorAll(`.like-btn-on-food`);
window.addEventListener(`load`, (e)=>{
  checkLike();
  checkLikeCount();
})

for(let i = 0; i < btnLike.length; i++){
  btnLike[i].addEventListener(`click`, (e) =>{
    const classLike = btnLike[i].getAttribute(`class`);
    if(classLike == `like-btn-on-food`){
      const name = addToCart[i].getAttribute("data-name");
      const price = Number(addToCart[i].getAttribute("data-price"));
      const imgSrc = itemPhoto[i].getAttribute(`src`);
      addItemToLike(name, price, 1, imgSrc);
    }
  })
  btnLike[i].addEventListener(`click`, (e) =>{
    const classLike = btnLike[i].getAttribute(`class`);
    if(classLike == `like-btn-on-food click`){
      const name = addToCart[i].getAttribute("data-name");
      removeItemToLike(name);
      btnLike[i].className = `like-btn-on-food`;
    }
    checkLike();
    checkLikeCount();
  })
}

const checkLike = () =>{
  if(getLike()){
    like = JSON.parse(getLike());
  }
  for(let i in like){
    for(let j = 0; j < btnLike.length; j++){ 
      const name = addToCart[j].getAttribute("data-name");
      if(like[i][`name`] == name){
        btnLike[j].className = `like-btn-on-food click`
      }
    }
  }
}

const addItemToLike = (name, price, count, src) =>{
  for(let i in like){
    if(like[i][`name`] == name){
      return;
    }
  }
  const item = new Item(name, price, count, src);
  like.push(item);
  saveLike();
}

const removeItemToLike = (name) =>{
  if(getLike()){
    like = JSON.parse(getLike());
  }
  for(let i in like){
    if(like[i][`name`] == name){
      like.splice(i, 1);
    }
  }
  saveLike();
}


// getLike
const getLike = () => {
  const a = localStorage.getItem(`like`);
  return a;
}
// savelike
const saveLike = () =>{
  localStorage.setItem(`like`, JSON.stringify(like));
}

// LikeUl
const likeUl = document.querySelector(`.likeUl`);
const likeCount = document.querySelector(`.likeCount`)
const checkLikeCount = () =>{
  likeUl.innerHTML =``;
  likeCount.innerHTML =``;
  if(getLike()){
    like = JSON.parse(getLike());
  }
  const newElementLikeCount = document.createElement(`p`);
  newElementLikeCount.innerHTML = `
  ${like.length}
  `
  const newElementLike = document.createElement(`p`);
  newElementLike.innerHTML = `
  Ban da thich <span class="red">${like.length} Mon an</span>
  `
  likeCount.appendChild(newElementLikeCount);
  likeUl.appendChild(newElementLike);
}