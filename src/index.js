
import  "../src/index.css" 
import  "../src/index.js" 
import logo from "../images/navneet.jpg"

let image = document.createElement("img");
image.setAttribute("class","photo");
image.src = logo;
document.querySelector("#logo").append(image);

document.querySelector("form").addEventListener("submit", show);

function show(event){
    event.preventDefault();

    let text = document.getElementById("note").value
    // console.log(text);
    let para = document.createElement("p");
    para.textContent = "";
    para.textContent = text;

    document.getElementById("para").append(para);

}