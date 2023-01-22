const verifyURL = "https://gold-lively-peacock.cyclic.app/cart/verify"

const get = (x)=>{
    return document.getElementById(`${x}`)
}
const create = (x)=>{
    return document.createElement(`${x}`)
}

const verify= async()=>{
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
      }else{
        return false
      }
    } catch (error) {
      console.log("error: ", error);
      return false
    }
  }

export {
    get,
    create,
    verify
}