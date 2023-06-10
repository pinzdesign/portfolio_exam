function toggleMenu() {
    console.log("click");
    document.querySelector("#menu").classList.toggle("visible");
}

document.querySelector("#burger_btn").addEventListener("click", toggleMenu);