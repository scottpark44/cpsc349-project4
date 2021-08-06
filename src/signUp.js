import './tailwind.css'
import './cool-background.png'
import * as mockroblog from './mockroblog.js'


let wrong = document.getElementById("wrong");
let submit_up = document.getElementById("submit_up");
if (submit_up) { submit_up.addEventListener("click",auth_up); }
let myStorage = window.localStorage;
myStorage.clear();


function auth_up() {
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value; // plaintext lmao
    let password2 = document.getElementById("password2").value;

    if (password != password2){
        wrong.innerHTML = "The passwords do not match. Please check again.";
    }
    else{
        let new_user = mockroblog.createUser(username, email, password);
        myStorage.setItem("current_user", username);
        myStorage.setItem("user_id", new_user.id);
        location.replace("./website.html");
    }

}
