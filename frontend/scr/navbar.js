import { navbar } from "../components/navbar_compo.js";
import { footer } from "../components/footer.js"
import { get } from "./sortcuts.js";

get("navbar").innerHTML = navbar();
get("footer").innerHTML = footer();

get("nav_logo").onclick = ()=>{
    location.replace("/index.html")
}

let top = get("navbar").offsetTop;
function stickynavbar() {
  if (window.scrollY > top) {    
    get("navbar").classList.add('sticky');
  } else {
    get("navbar").classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickynavbar);

