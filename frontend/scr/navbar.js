import { navbar } from "../components/navbar_compo.js";
import { footer } from "../components/footer.js"
import { get } from "./sortcuts.js";

const cartDataURL = "https://gold-lively-peacock.cyclic.app/cart"

get("navbar").innerHTML = navbar();
get("footer").innerHTML = footer();

get("nav_logo").onclick = ()=>{
    location.assign("/index.html")
}
get("cart").onclick = ()=>{
    location.assign("/cart.html")
}
get("profile").onclick = ()=>{
    location.assign("/login.html")
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

async function getcartItem() {
  try {
    const res = await fetch(cartDataURL, {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    });
    let data = await res.json();
    get("cartcount").innerText = data.length || "";
  } catch (error) {
    console.log("error: ", error);
  }
}

getcartItem()

