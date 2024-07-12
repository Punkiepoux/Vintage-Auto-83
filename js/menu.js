function menu() {
    const btn = document.querySelector(".navbar-menu-btn");

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("click");
        const menu = document.querySelector(".navbar-menu");
        console.log(menu);
        menu.classList.add("displayBlock");
    });
}

menu();