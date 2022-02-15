const submit = document.querySelector(`.btn`);


submit.addEventListener('click', (e) => {
    e.preventDefault();
    let namea = document.querySelector(`#name`).value;
    let pricea = Number(document.querySelector(`#price`).value);
    let thanhPhana = document.querySelector(`#thanhphan`).value;
    let moTaa = document.querySelector(`#mota`).value;
    let imga = document.querySelector(`#img`).value;
    add(namea, pricea, thanhPhana, moTaa, imga);
    console.log(namea, pricea, thanhPhana, moTaa, imga)
})

const spArray = [];
const Item = function(name, price, thanhPhan, moTa, img){
    this.name = name;
    this.price = price;
    this.thanhPhan = thanhPhan;
    this.moTa = moTa;
    this.img = img;
}

const add = (name, price, thanhPhan, moTa, img) =>{
    const item = new Item(name, price, thanhPhan, moTa, img);
    spArray.push(item);
    saveCart();
}

const saveCart = () =>{
    localStorage.setItem(`listSp`, JSON.stringify(spArray))
}



window.addEventListener(`load`, (e) =>{
    if(getCart()){
        arrayCart = JSON.parse(getCart());
    }
})

const getCart = () =>{
    let a  = localStorage.getItem(`listSp`);
    return a;
}