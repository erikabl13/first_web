document.addEventListener("DOMContentLoaded", function() {
    var popUpEstrella = document.getElementById("pop-up-estrella");
    var productoEstrella = document.querySelector(".producto-estrella");
    var closeWindow = document.querySelector(".close-window");

    popUpEstrella.addEventListener("click", function() {
        productoEstrella.style.display = "block";
    });

    closeWindow.addEventListener("click", function() {
        productoEstrella.style.display = "none";
    });
});
