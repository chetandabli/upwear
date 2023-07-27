import { get, create, verify, getcartItem } from "./sortcuts.js";
const orderHistoryURL = "https://taupe-spider-cap.cyclic.app/order";

if(!localStorage.getItem("nameofuser")){
  location.assign("./login.html")
}

get("nameofuser").innerText = localStorage.getItem("nameofuser");
get("emailofuser").innerText = localStorage.getItem("emailofuser");


const fetchOrderData = async()=>{
  try {
    const res = await fetch(orderHistoryURL, {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    });
    let data = await res.json();
    if(data.message == "please login first!"){
      location.assign("./login.html")
    }else{
      displayData(data)
    }
  } catch (error) {
    console.log(error)
  }
}
fetchOrderData()
function displayData(data){
    get("ordershistory").innerHTML = "";
    get("ordercount").innerHTML = data.length;
    let i = 0;
    data.forEach(el => {
        let maindiv = create("div");
        maindiv.classList = "maindiv";

        let topdiv = create("div");
        topdiv.classList = "topdiv";
        let topinnerdiv = create("div");
        topinnerdiv.classList = "topinnerdiv"
        let svg = create("p");
        let status = create("p");
        let date = create("p");
        date.classList = "date"
        date.innerText = `On ${new Date(data[i].createdAt).toString().slice(0, 21)}`
        
        let productdetails = create("div");
        productdetails.classList = "productdetails"
        let proimg = create("img");
        proimg.src = el.images;

        let newinsiderdiv = create("div")
        let title = create("h4");
        title.innerText = el.title;

        let subtitle = create("p");
        subtitle.innerText = el.subtitle;

        let size = create("p");
        size.innerText = `${el.size[0]} & Above`

        newinsiderdiv.append(title, subtitle, size)

        productdetails.append(proimg, newinsiderdiv)

        topinnerdiv.append(status, date)

        let buttomdiv = create("div");
        buttomdiv.classList = "buttomdiv";
        if(data[i++].is_delivered){
          status.innerText = "Delivered";
          status.classList = "delivered";
          svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
        </svg>`
        svg.classList = "svgcomplated";
          let star = create("div");
          let s1 = create("p");
          let s2 = create("p");
          let s3 = create("p");
          let s4 = create("p");
          let s5 = create("p");
          s1.classList = "star1";
          s1.onmouseover = ()=>{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9734";
            s3.innerHTML = "&#9734";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }
          s2.classList = "star2";
          s2.onmouseover = ()=>{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9734";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }
          s3.classList = "star3";
          s3.onmouseover = ()=>{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }
          s4.classList = "star4";
          s4.onmouseover = ()=>{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9733";
            s5.innerHTML = "&#9734";
          }
          s5.classList = "star5";
          s5.onmouseover = ()=>{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9733";
            s5.innerHTML = "&#9733";
          }
          star.onmouseleave = ()=>{
            if(el.rate == 0){
              s1.innerHTML = "&#9734";
              s2.innerHTML = "&#9734";
              s3.innerHTML = "&#9734";
              s4.innerHTML = "&#9734";
              s5.innerHTML = "&#9734";
            }else if(el.rate == 1){
              s1.innerHTML = "&#9733";
              s2.innerHTML = "&#9734";
              s3.innerHTML = "&#9734";
              s4.innerHTML = "&#9734";
              s5.innerHTML = "&#9734";
            }else if(el.rate == 2){
              s1.innerHTML = "&#9733";
              s2.innerHTML = "&#9733";
              s3.innerHTML = "&#9734";
              s4.innerHTML = "&#9734";
              s5.innerHTML = "&#9734";
            }else if(el.rate == 3){
              s1.innerHTML = "&#9733";
              s2.innerHTML = "&#9733";
              s3.innerHTML = "&#9733";
              s4.innerHTML = "&#9734";
              s5.innerHTML = "&#9734";
            }else if(el.rate == 4){
              s1.innerHTML = "&#9733";
              s2.innerHTML = "&#9733";
              s3.innerHTML = "&#9733";
              s4.innerHTML = "&#9733";
              s5.innerHTML = "&#9734";
            }else{
              s1.innerHTML = "&#9733";
              s2.innerHTML = "&#9733";
              s3.innerHTML = "&#9733";
              s4.innerHTML = "&#9733";
              s5.innerHTML = "&#9733";
            }
          }
          if(el.rate == 0){
            s1.innerHTML = "&#9734";
            s2.innerHTML = "&#9734";
            s3.innerHTML = "&#9734";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }else if(el.rate == 1){
            s1.innerHTML = "&#9733";
            
            s2.innerHTML = "&#9734";
            s3.innerHTML = "&#9734";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }else if(el.rate == 2){
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9734";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }else if(el.rate == 3){
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9734";
            s5.innerHTML = "&#9734";
          }else if(el.rate == 4){
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9733";
            s5.innerHTML = "&#9734";
          }else{
            s1.innerHTML = "&#9733";
            s2.innerHTML = "&#9733";
            s3.innerHTML = "&#9733";
            s4.innerHTML = "&#9733";
            s5.innerHTML = "&#9733";
          }
          s1.onclick = ()=>{
            updaterating(el._id, 1);
          }
          s2.onclick = ()=>{
            updaterating(el._id, 2);
          }
          s3.onclick = ()=>{
            updaterating(el._id, 3);
          }
          s4.onclick = ()=>{
            updaterating(el._id, 4);
          }
          s5.onclick = ()=>{
            updaterating(el._id, 5);
          }
          star.append(s1, s2, s3, s4, s5);
          star.classList = "star";
          buttomdiv.append(star);
      }else{
          status.innerText = "Pending";
          status.classList = "undelivered";
          svg.classList = "svg";
          svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
          <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
        </svg>`
          let cancelbtn = create("button");
          cancelbtn.innerText = "Cancel Order";
          cancelbtn.classList = "cancelbtn";
          cancelbtn.onclick = ()=>{
            cnfbtn.style.visibility = "visible";
            cnfnobtn.style.visibility = "visible"
          };
          let cnfbtn = create("button");
          let cnfnobtn = create("button");
          cnfbtn.innerText = "Yes";
          cnfbtn.classList = "cancelbtn";
          cnfbtn.style.visibility = "hidden";
          cnfbtn.onclick = ()=>{
            cancelorder(el._id)
          }
          cnfnobtn.innerText = "No";
          cnfnobtn.classList = "cancelbtn";
          cnfnobtn.style.visibility = "hidden";
          cnfnobtn.onclick = ()=>{
            cnfbtn.style.visibility = "hidden";
            cnfnobtn.style.visibility = "hidden";
          }
          buttomdiv.append(cancelbtn, cnfbtn, cnfnobtn);
      }
      
        // console.group(productdetails)
        topdiv.append(svg, topinnerdiv);
        maindiv.append(topdiv, productdetails, buttomdiv);
        get("ordershistory").append(maindiv)
    });
  }
  get("logoutbtn").addEventListener("click", ()=>{
    localStorage.clear();
    location.replace("/index.html")
  })

async function cancelorder(id){
  try {
    let res=await fetch(`${orderHistoryURL}/${id}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    });
    res = await res.json();
    fetchOrderData()
  } catch (error) {
    console.log(error);
  }
}

async function updaterating(id, data){
  let obj = {
    rating: data
  }
  try {
    let res=await fetch(`${orderHistoryURL}/${id}`, {
      method:"PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    });
    res = await res.json();
    fetchOrderData()
  } catch (error) {
    console.log(error);
  }
}