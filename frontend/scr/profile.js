

async function getcartItem() {
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
  
  let is_login = getcartItem();

  if(!is_login){
    location.assign("/login.html")
  }