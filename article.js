let elements = {
    top_nav_bar: [document.querySelector("header")],
    top_nav_bar_text: document.querySelectorAll(".top_nav_bar_text"),
    mode_button: document.getElementById("color-toggle-btn"),
    mode_button_text: document.getElementById("color-toggle-btn"),
    side_nav_bar: document.getElementById("side-nav"),
    side_nav_bar_text: document.querySelectorAll(".side_nav_bar_text"),
    side_nav_bar_border: document.querySelectorAll("#side-nav ul li a:hover"),
}

let dark = {
    top_nav_bar: "#666666",
    top_nav_bar_text: "#ffffff",
    mode_button: "#999999",
    mode_button_text: "#000000",
    side_nav_bar: "#eeeeee",
    side_nav_bar_text: "#000000",
    side_nav_bar_border: "#595959",
    article_text: "#000000"
}

let light = {
    top_nav_bar: "#001219",
    top_nav_bar_text: "#ffffff",
    mode_button: "#1b4965",
    mode_button_text: "#ffffff",
    side_nav_bar: "#ffffff",
    side_nav_bar_text: "#ffffff",
    side_nav_bar_border: "#669bbc",
    article_text: "#669bbc"
}

/*
maybe do something like this???

let dark = {
    textPrimary: '#fff',
    textSecondary: 'rgb(255, 255, 255)',
    textTertiary: 'rgb(255, 255, 255)',
    backgroundPrimary: '#121212',
    backgroundSecondary: '#252525',
    backgroundTertiary: '#2f2f2f',
    buttonPrimary: '#8cc283',
    buttonSecondary:'rgb(0, 0, 0)',
    buttonTertiary:'rgba(0, 0, 0)',
}

let light = {
    textPrimary: '#121212',
    textSecondary: 'rgb(0, 0, 0)',
    textTertiary: 'rgb(55, 55, 55)',
    backgroundPrimary: '#F1F3F4',
    backgroundSecondary: '#FFFFFF',
    backgroundTertiary: '#6200EE',
    buttonPrimary: '#8cc283',
    buttonSecondary:'#66bb6a',
    buttonTertiary:'#388e3c',
}

let selectedMode = dark
*/


let toggleDarkMode = function() {
    let header = document.querySelector("header");
    let side_nav = document.getElementById("side-nav");
    let main = document.getElementById("main");
}