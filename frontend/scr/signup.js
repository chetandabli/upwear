import { get, create } from "./sortcuts.js";
const baseURL = "http://localhost:4800/user";

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

  if(is_login){
    location.assign("/profile.html")
  }

get("signupbutton").addEventListener("click", async(e)=>{
    e.preventDefault()
    let name = get("name");
    let email = get("signupemail");
    let pass = get("signuppass");

    if(name.value == "" || email.value == "" || pass.value == ""){
        alert("please fill all details")
    }else{
        let obj = {
            name: name.value,
            email: email.value,
            password: pass.value
        }
        const res = await postData(obj)
        if(res.message == "Resgistration done"){
            alert(res.message);
            location.replace("login.html")
        }else{
            alert(res.message);
        }
    }
})

async function postData(obj){
    try {
        const res = await fetch(`${baseURL}/register`, {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.json()
    } catch (error) {
        console.log("error: ", error);
        return 
    }
}