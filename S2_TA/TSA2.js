document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const colorBox = document.getElementById("colorBox");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const color = getComputedStyle(this).backgroundColor;
            colorBox.style.borderColor = color;
            colorBox.style.opacity = 1;
            colorBox.style.top = "-100px"; 
        });
    });
});