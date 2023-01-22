import { get, create } from "./sortcuts.js";
const baseURL = "http://localhost:4800/products";
const cartDataURL = "http://localhost:4800/cart";
const orderHistoryURL = "http://localhost:4800/order";
let productdiv = get("cartitemsdiv")

async function checklogin() {
  try {
    const res = await fetch(cartDataURL, {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    });
    let data = await res.json();
    if(data){
      return true
    }
  } catch (error) {
    console.log("error: ", error);
    return false
  }
}

let is_login = checklogin();

if(!is_login){
  location.assign("/login.html")
}

let rowData;
let newcarddata = []

async function getcartItem() {
    newcarddata = []
    try {
      const res = await fetch(cartDataURL, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      rowData = data
      for(let i = 0; i < data.length; i++){
        let id = data[i]["productid"]
        let carddata = await fetchData(id)
        newcarddata.push(...carddata)
      }
    } catch (error) {
      console.log("error: ", error);
    }
    displayData(newcarddata)
  }
  async function fetchData(id){
    try {
        let data = await fetch(`${baseURL}/${id}`);
        let acualData = await data.json();
        return acualData
    } catch (error) {
        console.log(error)
    }
}
  getcartItem()

  function displayData(data){
    productdiv.innerHTML = "";
    get("cartcount").innerText = data.length || "";
    get("cartitemscount").innerText = `(${data.length} item)`
    let sum = 0;
    data.forEach(el => {
        sum += el.discounted_price
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
        let deletebtn = create("button");
        deletebtn.setAttribute("id", el._id)
        deletebtn.innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>DELETE</p>`;
    deletebtn.onclick = ()=>{
            deletedata(el._id)
        }
        deletebtn.classList = "deletebtn";
        buttondiv.append(deletebtn)

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
    get("totalamount").innerText = `₹${sum}`
    get("totalmrp").innerText = `₹${sum}`
};

async function deletedata(id){
    let res=await fetch(`${cartDataURL}/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    });
    if(res.ok){
        getcartItem()
    }
  }

get("orderdone").addEventListener("click", async()=>{
  let ordredData = [];
  for(let i = 0; i < rowData.length; i++){
    let tempobj = {
      productid: rowData[i].productid
    }
    ordredData.push(tempobj)
  }
  let respose = await addtohistory(ordredData)
  if(respose.message == "order placed"){
    let deleteCartitemofterorder = await deleteCartitemofterorderdone();
    if(deleteCartitemofterorder.message == "Product Deleted from cart after ordered"){
      alert(respose.message);
      location.assign("/index.html")
    }
  }else{
    alert(respose.message)
  }
})

async function addtohistory(data){
  try {
      let res = await fetch(orderHistoryURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      res = await res.json();
      return res
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function deleteCartitemofterorderdone(){
    let res=await fetch(cartDataURL, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    });
    res = res.json();
    return res
  }