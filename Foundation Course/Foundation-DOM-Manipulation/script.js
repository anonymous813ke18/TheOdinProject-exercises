const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

const para = document.createElement("p");
para.style["color"] = "red";
para.textContent = "Hey I\'m red!";

const heading3 = document.createElement("h3");
heading3.style["color"] = "blue";
heading3.textContent = "I\'m blue h3";

const div = document.createElement("div");
div.style["border"] = "solid 5px black";
div.style["background-color"] = "pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I\'m in a div";
div.appendChild(heading1);

const paraInDiv = document.createElement("p");
paraInDiv.textContent = "Me Too";
div.appendChild(paraInDiv);

//Append in the parent class
container.appendChild(content);
container.appendChild(para)
container.appendChild(heading3);
container.appendChild(div);

