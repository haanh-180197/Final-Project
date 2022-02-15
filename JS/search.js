const search = document.querySelector(`.sideBarR .search input[type="text"]`);
const searchUl = document.querySelector(`.sideBarR .searchUl`);


let data2 = [];
search.addEventListener(`keyup`, (e) =>{
    const filter = search.value.toUpperCase();
    const inputDisplay = search.value.length > 1 ? `block`:`none`;
    searchUl.style.display = inputDisplay;

    if(getData()){
        data2 = JSON.parse(getData());
    }
    searchUlShow.innerHTML =``;
    for(let i = 0; i < data.length; i++){
        if(data[i][`name`].toUpperCase().indexOf(filter) > -1){
            showSearch(`${data2[i][`name`]}`);
        }
    }
})

// showSearch
const searchUlShow = document.querySelector(`.sideBarR .searchUl .indexUl`);
const showSearch = (name) =>{
    if(getData()){
        data2 = JSON.parse(getData());
    }
    for(let i in data2 ){
        if(data2[i][`name`] == name){
            const newElementSearch = document.createElement(`li`);
            newElementSearch.innerHTML =`
                <a href="detail.html" onclick="addItemToDetail2('${data2[i][`name`]}')"><p>${data2[i][`name`]}</p></a>
            `
            searchUlShow.appendChild(newElementSearch);
        }
    }
}
// detail
const Item2 = function(name, price, count, src) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.src = src;
};

const addItemToDetail2 = (name) =>{
    if(getData()){
        data2 = JSON.parse(getData());
    }
    for(let i in data2){
        if(data2[i][`name`] == name){
            const item = new Item2(data2[i][`name`], data2[i][`price`], 1, data2[i][`src`]);
            localStorage.setItem(`detail`, JSON.stringify(item));
        }
    }
}
// getData
const getData = () =>{
    const a = localStorage.getItem(`data`);
    return a;
}