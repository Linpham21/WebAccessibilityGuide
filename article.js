const rightArrowPath = `M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z`;
const leftArrowPath = `M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z`;

let side_nav = document.querySelector("#side-nav");
let closeSideNavBtn = document.querySelector("#side-nav-arrow svg");
let header = document.querySelector("header");
let main = document.querySelector("main");
let top_nav_button = document.querySelector("#top-nav button");
let top_nav_bar_text = document.querySelectorAll("#top-nav li a");
let dmButton = document.querySelector("button#color-toggle-btn");
let content = document.querySelector("#content");

let darkOn = false;

let dark = {
    top_nav_bar: "#001219",
    top_nav_bar_text: "#ffffff",
    mode_button: "#1b4965",
    mode_button_text: "#ffffff",
    // side_nav_bar: "#003049",
    // side_nav_bar_text: "#cae9ff",
    // side_nav_bar_border: "#669bbc",
    article_text: "#FFFFFF",
    content_background: "#162F32",
    mode_text_content: "Light Mode"
}

let light = {
    top_nav_bar: "#F5F5F5",
    top_nav_bar_text: "#1F1F1F",
    mode_button: "#999999",
    mode_button_text: "#ffffff",
    // side_nav_bar: "#000000",
    // side_nav_bar_text: "#ffffff",
    // side_nav_bar_border: "#595959",
    article_text: "#000000",
    content_background: "#FFFFFF",
    mode_text_content: "Dark Mode"
}

let currentColorMode = darkOn == true ? dark : light

console.log(content)

let toggleDarkMode = function () {
    if (darkOn === false) {
        currentColorMode = dark;
        darkOn = true;
    } else {
        // Change to Light Mode
        currentColorMode = light;
        darkOn = false;
    }

    header.style.backgroundColor = currentColorMode.top_nav_bar;

    for (let i = 0; i < top_nav_bar_text.length; i++) {
        top_nav_bar_text[i].style.color = currentColorMode.top_nav_bar_text;
    }

    dmButton.style.backgroundColor = currentColorMode.mode_button;
    dmButton.style.color = currentColorMode.mode_button_text;
    dmButton.textContent = currentColorMode.mode_text_content;
    side_nav.style.backgroundColor = currentColorMode.side_nav_bar;
    side_nav.style.color = currentColorMode.side_nav_bar_text;
    main.style.backgroundColor = currentColorMode.main;
    content.style.backgroundColor = currentColorMode.content_background;
    content.style.color = currentColorMode.article_text;

}

function toggleMenu() {
    let path = document.querySelector("#side-nav-arrow svg path");
    if (side_nav.classList.contains("hidden")) {
        side_nav.classList.remove("hidden");
        path.setAttribute("d", leftArrowPath);
    } else {
        side_nav.classList.add("hidden");
        path.setAttribute("d", rightArrowPath);
    }
}

dmButton.addEventListener("click", toggleDarkMode);

closeSideNavBtn.addEventListener("click", toggleMenu);