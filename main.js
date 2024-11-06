let colorsArr = Array.from(document.querySelectorAll(".color"));
let paragraph = document.querySelector("p");
let color;
colorsArr.forEach(box => {
    color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
});

colorsArr.forEach(box => {
    box.addEventListener("click", function()
    {
        color = box.getAttribute("data-color");
        paragraph.style.color = color;
    })
});