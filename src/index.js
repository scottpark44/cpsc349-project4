import './tailwind.css'
import './cool-background.png'

const btn = document.getElementById('form_btn')
//button works for signing in going straight to the main website page 
btn.onclick = function () {
  window.location.assign('./website.html')
}
