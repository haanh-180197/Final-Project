const btnSubmit = document.querySelector(`.inforIndex .infor .inforOne .inforTwo button`);
const checkBoxNoShip = document.querySelector(`.inforIndex .infor .inforOne input[name="nonship"]`);

btnSubmit.addEventListener(`click`, (e) =>{
    e.preventDefault();
    const name = document.querySelector(`.inforIndex .infor .inforOne input[name="name"]`).value;
    const number = document.querySelector(`.inforIndex .infor .inforOne input[name="number"]`).value;
    const city = document.querySelector(`.inforIndex .infor .inforOne select[name="city"]`).value;
    const location = document.querySelector(`.inforIndex .infor .inforOne input[name="location"]`).value;
    const date = document.querySelector(`.inforIndex .infor .inforOne input[name="date"]`).value;
    addInfor(name, number, city, location, date)
})

const inFor = function(name, number, city, location, date){
    this.name = name;
    this.number = number;
    this.city = city;
    this.location = location;
    this.date = date;
}

const addInfor = (name, number, city, location, date) =>{
    const infor = new inFor(name, number, city, location, date);
    localStorage.setItem(`infor`, JSON.stringify(infor));
}
// checkBox
const inforTwo = document.querySelector(`.inforIndex .infor .inforOne .inforTwo`)
const checkBoxShip = document.querySelector(`.inforIndex .infor .inforOne input[name="ship"]`);
checkBoxShip.addEventListener(`change`, (e) =>{
    if(e.target.checked){
        inforTwo.className = `inforTwo open`;
    }else{
        inforTwo.className = `inforTwo close`;
    }
})