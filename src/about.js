import './tailwind.css'
//button  works sending back to login in page
// I dont know why the page set up like this
const logout = document.getElementById('logOut_btn')
logout.onclick = function () {
    window.location.assign('./index.html')
}