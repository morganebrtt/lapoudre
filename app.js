var button = document.querySelector(".menuButton");
var menu = document.querySelector("#headerContainer");
var menuButton = document.querySelector(".menuButton");
var outsideMenu = document.querySelector(".headerFilter");

button.addEventListener("click", function(){
    menu.classList.toggle("open");
    menuButton.classList.toggle("bgPink")
});

outsideMenu.addEventListener("click", function(){
    menu.classList.toggle("open");
    menuButton.classList.toggle("bgPink")
});

function loader() {

    var loader = document.querySelector("#loader");
    loader.classList.add("fadeOut");

    setTimeout(function() {
        var fullContent = document.querySelector("#fullContent");
        fullContent.style.display = "initial";
        loader.style.display = "none";
    }, 1000);
}