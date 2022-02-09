/*JS for menu*/
const menu_container = document.getElementById("menu-container")
const addToCart = document.querySelectorAll(".addtocart");

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function(event) {
  event.preventDefault();
  const name = event.target.getAttribute("data-name");
  const price = Number(event.target.getAttribute("data-price"));
  addItemToCart(name, price, 1);
})};

const cart = []; //tạo biết cart; gắn cho array rỗng.


const Item = function(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  };

// Add item to cart
function addItemToCart(name, price, count) {
  for(const item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
  }
  const item = new Item(name, price, count);
  cart.push(item);
  saveCart();
};

// Save cart
  function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  };

/*JS for Popup*/
const popup_container=document.getElementById("popup-container");

const cityName=localStorage.getItem("cityName");
if (cityName) {
  popup_container.style.display = "none";
} else {
}
popup_container.addEventListener("submit", function (event) {
  event.preventDefault();
  const city=document.getElementById("city").value;
  popup_container.style.display = "none";
  
  localStorage.setItem("cityName", city);
});