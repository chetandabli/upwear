import { get } from "./sortcuts.js";

let imges = document.querySelectorAll("img");
for(let i = 0; i < imges.length; i++){
    imges[i].addEventListener("click", ()=>{
        location.replace("/man.html")
    })
}