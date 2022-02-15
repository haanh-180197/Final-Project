const searchBtn = document.querySelector(`.searchBtn i`);
const sideBar = document.querySelector(`.sideBar`)


searchBtn.addEventListener(`click`, (e) => {
    sideBar.classList.toggle(`close`)
})

