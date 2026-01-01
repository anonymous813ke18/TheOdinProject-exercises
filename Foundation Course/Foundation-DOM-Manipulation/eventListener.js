const btn = document.querySelector("#btn")

// btn.onclick = () => alert("Hello World"); We don't use this because a DOM element can have only ony onclick property

// btn.addEventListener("click", () => {
//     alert("Hello world!!");
// });

// btn.addEventListener("click", alertFunction);

// function alertFunction () {
//     alert("Hello World!!");
// }

btn.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = "blue";
})

