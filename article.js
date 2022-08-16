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
let headings = document.querySelectorAll("#content h3");
let bigger_headings = document.querySelector("#content h2");
let spans = document.querySelectorAll("#content span");
let caption_background = document.querySelectorAll("figcaption");
let results = document.querySelector('google maps')
let html = document.querySelector("html");

let darkOn = false;

let dark = {
    top_nav_bar: "#001219",
    top_nav_bar_text: "#ffffff",
    mode_button: "#1b4965",
    mode_button_text: "#ffffff",
    article_text: "#FFFFFF",
    content_background: "#162F32",
    mode_text_content: "Light Mode",
    headings: "#B8B7B7",
    spans: "#001219",
    caption_background: "#001219"
}

let light = {
    top_nav_bar: "#F5F5F5",
    top_nav_bar_text: "#1F1F1F",
    mode_button: "#999999",
    mode_button_text: "#ffffff",
    article_text: "#000000",
    content_background: "#FFFFFF",
    mode_text_content: "Dark Mode",
    headings: "#767474",
    spans: "#B8DEE0",
    caption_background: "#dbd7d7"
}

let currentColorMode = darkOn == true ? dark : light

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
    bigger_headings.style.color = currentColorMode.headings;
    main.style.backgroundColor = currentColorMode.content_background;
    html.style.backgroundColor = currentColorMode.content_background;

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = currentColorMode.headings;
    }

    for (let i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = currentColorMode.spans;
    }

    for (let i = 0; i < caption_background.length; i++) {
        caption_background[i].style.backgroundColor = currentColorMode.caption_background;
    }
}

function toggleMenu() {
    let path = document.querySelector("#side-nav-arrow svg path");
    let svg = document.querySelector("#side-nav-arrow svg");
    console.log(path);
    if (side_nav.classList.contains("hidden")) {
        side_nav.classList.remove("hidden");
        path.setAttribute("d", leftArrowPath);
        svg.setAttribute("fill", "white");
    } else {
        side_nav.classList.add("hidden");
        path.setAttribute("d", rightArrowPath);
        if (!darkOn) {
            svg.setAttribute("fill", "black");
        }
    }
}

function changeFontFamily(family) {
    let html = document.querySelector("html");
    if (family == "open-sans") {
        html.style.fontFamily = "'Open Sans', Arial, sans-serif";
    } else if (family == "georgia") {
        html.style.fontFamily = "Georgia, serif";
    } else {
        html.style.fontFamily = "'Arvo', serif";
    }
}

function changeFontSize(size) {
    let content_p = document.querySelectorAll("#content p");
    let side_nav_a = document.querySelectorAll("#side-nav ul li a");
    let figcap = document.querySelectorAll("figcaption");
    for (let i = 0; i < content_p.length; i++) {
        content_p[i].style.fontSize = size;
    }
    for (let i = 0; i < side_nav_a.length; i++) {
        side_nav_a[i].style.fontSize = size;
    }
    let article_size = "1.5rem";
    if (size == "2.6rem") {
        article_size = "1.95rem";
    } else if (size == "3rem") {
        article_size = "2.25rem";
    }
    for (let i = 0; i < figcap.length; i++) {
       figcap[i].style.fontSize = article_size;
    }
}

dmButton.addEventListener("click", toggleDarkMode);
closeSideNavBtn.addEventListener("click", toggleMenu);

let open_sans_btn = document.querySelector("#open-sans-btn");
let georgia_btn = document.querySelector("#georgia-btn");
let arvo_btn = document.querySelector("#arvo-btn");

open_sans_btn.addEventListener("click", () => {
    changeFontFamily("open-sans");
});

georgia_btn.addEventListener("click", () => {
    changeFontFamily("georgia");
});

arvo_btn.addEventListener("click", () => {
    changeFontFamily("arvo");
});

let normal_font_btn = document.querySelector("#font-small-btn");
let large_font_btn = document.querySelector("#font-large-btn");
let largest_font_btn = document.querySelector("#font-largest-btn");

normal_font_btn.addEventListener("click", () => {
    changeFontSize("2rem");
});

large_font_btn.addEventListener("click", () => {
    changeFontSize("2.6rem");
});

largest_font_btn.addEventListener("click", () => {
    changeFontSize("3rem");
});