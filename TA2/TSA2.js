document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const container = document.querySelector(".container");

    let activeBox = null; // Track the current active box

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const color = getComputedStyle(this).backgroundColor;

            if (activeBox) {
                // Move the current box up and fade out
                activeBox.style.top = "-250px"; 
                activeBox.style.opacity = "0";

                setTimeout(() => {
                  
                }, 700);
            }

            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.style.borderColor = color;
            container.appendChild(newBox);

            // Ensure the new box starts above the screen
            newBox.style.top = "-250px"; 
            newBox.style.opacity = "0";

            setTimeout(() => {
                // Animate the new box coming down
                newBox.style.opacity = "1";
                newBox.style.top = "50%"; // Moves down into position
            }, 50);

       
            activeBox = newBox;
        });
    });
});
