import { get, create, verify } from "./sortcuts.js";
const baseURL = "http://localhost:4800/user";


  window.onload = async ()=>{
    let is_login = await verify();
    if(is_login){
        location.assign("/profile.html")
      }
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
            localStorage.setItem("emailofuser", res.email)
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