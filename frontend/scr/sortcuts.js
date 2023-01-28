const verifyURL = "https://gold-lively-peacock.cyclic.app/cart/verify"
const cartDataURL = "https://gold-lively-peacock.cyclic.app/cart"

const get = (x)=>{
    return document.getElementById(`${x}`)
}
const create = (x)=>{
    return document.createElement(`${x}`)
}

const verify = async()=>{
    try {
      const res = await fetch(verifyURL, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      if(data.message == "verified"){
        return true
      }else if(data.message == "please login first!"){
        console.log("yes")
        return false
      }
    } catch (error) {
      console.log("error: ", error);
      return false
    }
  }

  async function getcartItem() {
    try {
      const res = await fetch(cartDataURL, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      get("nameonnavbar").innerText = localStorage.getItem("nameofuser") || "Login"
      get("cartcount").innerText = data.length || "";
    } catch (error) {
      console.log("error: ", error);
    }
  }

export {
    get,
    create,
    verify,
    getcartItem
}