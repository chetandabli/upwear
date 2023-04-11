import { navbar } from "../components/navbar_compo.js";
import { footer } from "../components/footer.js"
import { get, create, verify, getcartItem } from "./sortcuts.js";

get("navbar").innerHTML = navbar();
get("footer").innerHTML = footer();

get("nav_logo").onclick = ()=>{
    location.assign("./index.html")
}
get("cart").onclick = ()=>{
    location.assign("./cart.html")
}
get("profile").onclick = ()=>{
    location.assign("./profile.html")
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

window.onload = async ()=>{
  let is_login = await verify();
  if(is_login){
    getcartItem();
  }else{
    if(location.pathname == "./profile.html" || location.pathname == "/profile.html"){
      location.assign("./login.html")
    }
  }
}


