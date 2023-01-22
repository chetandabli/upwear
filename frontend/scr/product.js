import { get, create, verify } from "./sortcuts.js";
const baseURL = "https://gold-lively-peacock.cyclic.app/products";
const cartDataURL = "https://gold-lively-peacock.cyclic.app/cart"

let productdiv = get("products");

// fetching all data!
async function fetchData(x){
    try {
        let data = await fetch(baseURL);
        let acualData = await data.json();
        displayData(acualData)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

function displayData(data){
    productdiv.innerHTML = "";
    data.forEach(el => {
        let maindiv = create("div");
        maindiv.classList = "maindivproduct"

        let firstdiv = create("div");
        let seconddiv = create("div");

        firstdiv.style.backgroundImage = `url(${el.images})`;
        firstdiv.classList = "firstdiv"
        let p = create ("p");
        p.innerHTML = `<span>${el.rating} </span><svg xmlns="http://www.w3.org/2000/svg" style="color: #ff3f6c;" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg> | <span> ${el.rating_count}</span>`
        p.classList = "pforrating"
        firstdiv.append(p);

        let buttondiv = create("button");
        buttondiv.classList = "buttondiv";
        let whishlistbtn = create("button");
        whishlistbtn.setAttribute("id", el._id)
        whishlistbtn.innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-heart" viewBox="0 0 16 16">
        <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>WISHLIST</p>`;
        whishlistbtn.onclick = ()=>{
            addWish(el._id)
        }
        whishlistbtn.classList = "whishlistbtn";
        let addbtn = create("button");
        addbtn.innerHTML = `<p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
          </svg>
          ADD TO CART
    </p>`
        addbtn.setAttribute("id", `added${el._id}`)
        addbtn.classList = "addbtn"
        addbtn.onclick = ()=>{
            addFun(el._id)
        }
        buttondiv.append(whishlistbtn, addbtn)

        let brandname = create("p");
        brandname.innerText = el.title;
        brandname.classList = "brandname";

        let subtitle = create("p");
        let newsub = el.subtitle
        if(el.subtitle.length > 33){
            newsub = ""
            for(let i = 0; i < 31; i++){
                newsub += el.subtitle[i]
            }
            newsub += ".."
        }
        subtitle.innerText = newsub;
        subtitle.classList = "subtitle";

        let price = create("p");
        price.innerHTML = `Rs. ${el.discounted_price}<span id="strikeprice">Rs. ${el.strike_price}</span><span id="discountspan">${el.discount}</span>`
        price.classList = "price"


        seconddiv.append(buttondiv, brandname, subtitle, price)
        maindiv.append(firstdiv, seconddiv)

        productdiv.append(maindiv)
    });
};

async function addWish(id){
  window.onload = async ()=>{
    let is_login = await verify();
    if(is_login){
      get(id).style.backgroundColor = "rgb(202, 202, 202)";
    get(id).innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" style="color: #ff3f6c;"  width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg>WISHLISTED</p>`
      }else{
        location.assign("/login.html")
      }
  } 
    
}
async function addFun(id){
    let is_login = await verify();
    if(is_login){
      try {
        const res = await fetch(cartDataURL, {
          method: "POST",
          body: JSON.stringify({"productid": id}),
          headers: {
            "Content-Type": "application/json",
            authorization: `${localStorage.getItem("token")}`,
          },
        });
        let data = await res.json();
        if (data.message == "Product Added") {
        //   need to update cart count
        get(`added${id}`).style.backgroundColor = "#ff3f6c";
        get(`added${id}`).innerHTML = `<p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    </svg>
          ADDED
    </p>`;
        getcartItem()
        }else{
            alert(data.message)
            if(data.message == "please login first!"){
              location.assign("./login.html")
            }
        }
      } catch (error) {
        console.log("error: ", error);
      }
      }else{
        location.assign("/login.html")
      }

}

// fetching cart items;

async function getcartItem() {
    try {
      const res = await fetch(cartDataURL, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      cartrelated(data)
    } catch (error) {
      console.log("error: ", error);
    }
  }
setTimeout(() => {
    getcartItem()
}, 1000);

function cartrelated(data){
    get("cartcount").innerText = data.length || "";
    for(let i = 0; i < data.length; i++){
        get(`added${data[i].productid}`).innerHTML = `<p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    </svg>
          ADDED
    </p>`
    }
}
