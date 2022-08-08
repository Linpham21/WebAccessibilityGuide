const sideNavArrow = function(path) {
    return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height="40px">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License 
            - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d=${path}></svg>
             `;
}

const rightArrowPath = `M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z`;
const leftArrowPath = `M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z`

let side_nav = document.getElementById("side-nav");
let closeSideNavBtn = document.querySelector("#top-nav svg");

let dark = {
    top_nav_bar: "#001219",
    top_nav_bar_text: "#ffffff",
    mode_button: "#1b4965",
    mode_button_text: "#ffffff",
    side_nav_bar: "#003049",
    side_nav_bar_text: "#cae9ff",
    side_nav_bar_border: "#669bbc",
    article_text: "#cae9ff",
    main: "#FFFFFF",
    content_background: "#1b4965",
}

let light = {
    top_nav_bar: "#666666",
    top_nav_bar_text: "#ffffff",
    mode_button: "#999999",
    mode_button_text: "#ffffff",
    side_nav_bar: "#eeeeee",
    side_nav_bar_text: "#ffffff",
    side_nav_bar_border: "#595959",
    article_text: "#000000"
}

let toggleDarkMode = function() {
    let header = document.querySelector("header");
    let main = document.getElementById("main");

    if (main.style.backgroundColor === light.main) {

    } else {

    }
}

function closeMenu() {
    // side_nav.classList.add("hidden");
    // closeSideNavBtn.style.transform = 'rotate(180)';
    let top_nav = document.getElementById("top-nav");
    let svg = document.createElement("svg");
    svg.innerHTML = sideNavArrow(rightArrowPath);
    top_nav.appendChild(svg);
}

let dmButton = document.querySelector("button#color-toggle-btn");
dmButton.addEventListener("click", toggleDarkMode);

closeSideNavBtn.addEventListener("click", closeMenu);