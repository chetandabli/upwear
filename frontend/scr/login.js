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

get("loginbutton").addEventListener("click", async(e)=>{
    e.preventDefault()
    let email = get("loginemail");
    let pass = get("loginpass");

    if(email.value == "" || pass.value == ""){
        alert("please fill all details")
    }else{
        let obj = {
            email: email.value,
            password: pass.value
        }
        let res = await postData(obj);
        if(res.message == "Login done"){
            alert("Login Done!");
            localStorage.setItem("token", res.token)
            localStorage.setItem("nameofuser", res.name)
            location.replace("index.html")
        }else{
            alert(res.message)
        }
    }
});

async function postData(obj){
    try {
        const res = await fetch(`${baseURL}/login`, {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    } catch (error) {
        console.log("error: ", error);
        return 
    }
}