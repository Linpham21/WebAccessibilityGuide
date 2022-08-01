let toggle_color = function() {
    let main = document.querySelector("main");
    let side = document.getElementById("side-nav");
    let header = document.querySelector("header");
    main.classList.add("dark-mode-main");
    side.style.backgroundColor = "rgb(0, 48, 73)";
    header.classList.add("dark-mode-top");
} 

let color_toggle_btn = document.getElementById("color-toggle-btn");
color_toggle_btn.addEventListener("click", toggle_color)