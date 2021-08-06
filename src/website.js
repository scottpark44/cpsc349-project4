import './tailwind.css'
import './magnifying-glass.png'
import './cool-background.png'
import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

const timeline = mockroblog.getPublicTimeline()

const element = document.getElementById('posts')

if(window.localStorage.getItem("current_user") != null){
  const current_user = document.getElementById("user_name")
  current_user.innerHTML = window.localStorage.getItem("current_user")
}else{
  alert("Please Log In To Use This Service")
  location.replace('./index.html');
}



function displayUserTimeline(username){
  let user_timeline = mockroblog.getUserTimeline(username)

  for(let i = 0; i < user_timeline.length; i++){

    const append_container = document.createElement('li')
    
    const main_cont = document.createElement('article')

    const header_cont = document.createElement('div')
    const user_link = document.createElement('a')
    const user_name_pic = document.createElement('div')
    const user_img_cont = document.createElement('div')
    const user_img = document.createElement('img')
    const user_name_cont = document.createElement('div')
    const user_name = document.createElement('p')


    main_cont.classList.add("main_cont")
    header_cont.classList.add("header_cont")
    user_link.classList.add("user_link")
    user_name_pic.classList.add("user_name_pic")
    user_img.classList.add("user_img")
    user_name_cont.classList.add("user_name_cont")
    user_name.classList.add("user_name")

    user_img.setAttribute("src", "https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_grande.jpg?v=1571152418")
    user_name.innerHTML = mockroblog.getUserName(user_timeline[i].user_id);
    
    user_name_cont.appendChild(user_name)
    user_img_cont.appendChild(user_img)
    user_name_pic.appendChild(user_img_cont)
    user_name_pic.appendChild(user_name_cont)
    user_link.appendChild(user_name_pic)
    header_cont.appendChild(user_link)


    const message_cont = document.createElement('div')
    const message_text = document.createElement('p')
    const break_content = document.createElement('hr')
    const break_line = document.createElement('br')


    message_cont.classList.add("message_cont")
    message_text.classList.add("message_text")
    break_content.classList.add("break_content")


    message_text.innerHTML = user_timeline[i].text

    message_cont.appendChild(message_text)

    const time_stamp = document.createElement('div')
    time_stamp.innerHTML = user_timeline[i].timestamp
    time_stamp.classList.add("message_text")
    time_stamp.classList.add("pl-16")

    main_cont.appendChild(header_cont)
    main_cont.appendChild(message_cont)
    main_cont.appendChild(time_stamp)
    main_cont.appendChild(break_line)
    main_cont.appendChild(break_content)




    append_container.appendChild(main_cont)

    element.appendChild(append_container)

  }
}




//    IMPLEMENTING JARED'S TWITTER FORMAT THING
function displayPublicTimeline(){
  for(let i = 0; i < timeline.length; i++){

    const append_container = document.createElement('li')
    
    const main_cont = document.createElement('article')

    const header_cont = document.createElement('div')
    const user_link = document.createElement('a')
    const user_name_pic = document.createElement('div')
    const user_img_cont = document.createElement('div')
    const user_img = document.createElement('img')
    const user_name_cont = document.createElement('div')
    const user_name = document.createElement('p')

// WHEN CLICKING ON THE USER'S NAME, BRING ALL POSTS BY USER
    user_link.onclick = function user_link_click(){
      element.innerHTML = " "
      displayUserTimeline( mockroblog.getUserName(timeline[i].user_id))
    }



    main_cont.classList.add("main_cont")
    header_cont.classList.add("header_cont")
    user_link.classList.add("user_link")
    user_name_pic.classList.add("user_name_pic")
    user_img.classList.add("user_img")
    user_name_cont.classList.add("user_name_cont")
    user_name.classList.add("user_name")

    user_img.setAttribute("src", "https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_grande.jpg?v=1571152418")
    user_name.innerHTML = mockroblog.getUserName(timeline[i].user_id)
    
    user_name_cont.appendChild(user_name)
    user_img_cont.appendChild(user_img)
    user_name_pic.appendChild(user_img_cont)
    user_name_pic.appendChild(user_name_cont)
    user_link.appendChild(user_name_pic)
    header_cont.appendChild(user_link)


    const message_cont = document.createElement('div')
    const message_text = document.createElement('p')
    const break_content = document.createElement('hr')
    const break_line = document.createElement('br')


    message_cont.classList.add("message_cont")
    message_text.classList.add("message_text")
    break_content.classList.add("break_content")


    message_text.innerHTML = timeline[i].text

    message_cont.appendChild(message_text)

    const time_stamp = document.createElement('div')
    time_stamp.innerHTML = timeline[i].timestamp
    time_stamp.classList.add("message_text")
    time_stamp.classList.add("pl-16")

    main_cont.appendChild(header_cont)
    main_cont.appendChild(message_cont)
    main_cont.appendChild(time_stamp)
    main_cont.appendChild(break_line)
    main_cont.appendChild(break_content)




    append_container.appendChild(main_cont)

    element.appendChild(append_container)

  }
};

displayPublicTimeline();

//HOME TIMELINE DISPLAY

function displayHomeTimeline(username){
  let home_timeline = mockroblog.getHomeTimeline(username)

  for(let i = 0; i < home_timeline.length; i++){

    const append_container = document.createElement('li')
    
    const main_cont = document.createElement('article')

    const header_cont = document.createElement('div')
    const user_link = document.createElement('a')
    const user_name_pic = document.createElement('div')
    const user_img_cont = document.createElement('div')
    const user_img = document.createElement('img')
    const user_name_cont = document.createElement('div')
    const user_name = document.createElement('p')

// WHEN CLICKING ON THE USER'S NAME, BRING ALL POSTS BY USER
    user_link.onclick = function user_link_click(){
      element.innerHTML = " "
      displayUserTimeline( mockroblog.getUserName(home_timeline[i].user_id))
    }



    main_cont.classList.add("main_cont")
    header_cont.classList.add("header_cont")
    user_link.classList.add("user_link")
    user_name_pic.classList.add("user_name_pic")
    user_img.classList.add("user_img")
    user_name_cont.classList.add("user_name_cont")
    user_name.classList.add("user_name")

    user_img.setAttribute("src", "https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_grande.jpg?v=1571152418")
    user_name.innerHTML = mockroblog.getUserName(home_timeline[i].user_id);
    
    user_name_cont.appendChild(user_name)
    user_img_cont.appendChild(user_img)
    user_name_pic.appendChild(user_img_cont)
    user_name_pic.appendChild(user_name_cont)
    user_link.appendChild(user_name_pic)
    header_cont.appendChild(user_link)


    const message_cont = document.createElement('div')
    const message_text = document.createElement('p')
    const break_content = document.createElement('hr')
    const break_line = document.createElement('br')


    message_cont.classList.add("message_cont")
    message_text.classList.add("message_text")
    break_content.classList.add("break_content")


    message_text.innerHTML = home_timeline[i].text

    message_cont.appendChild(message_text)

    const time_stamp = document.createElement('div')
    time_stamp.innerHTML = home_timeline[i].timestamp
    time_stamp.classList.add("message_text")
    time_stamp.classList.add("pl-16")

    main_cont.appendChild(header_cont)
    main_cont.appendChild(message_cont)
    main_cont.appendChild(time_stamp)
    main_cont.appendChild(break_line)
    main_cont.appendChild(break_content)




    append_container.appendChild(main_cont)

    element.appendChild(append_container)

  }
}

//PUBLIC MESSASGE POST

let message_submit = document.getElementById("post_message")

message_submit.onclick = function post_Message(){

  let user_text_input = document.getElementById("text_input").value
  let message_details = mockroblog.postMessage(window.localStorage.getItem("user_id"), user_text_input)


  const append_container = document.createElement('li')
    
  const main_cont = document.createElement('article')

  const header_cont = document.createElement('div')
  const user_link = document.createElement('a')
  const user_name_pic = document.createElement('div')
  const user_img_cont = document.createElement('div')
  const user_img = document.createElement('img')
  const user_name_cont = document.createElement('div')
  const user_name = document.createElement('p')


  main_cont.classList.add("main_cont")
  header_cont.classList.add("header_cont")
  user_link.classList.add("user_link")
  user_name_pic.classList.add("user_name_pic")
  user_img.classList.add("user_img")
  user_name_cont.classList.add("user_name_cont")
  user_name.classList.add("user_name")

  user_img.setAttribute("src", "https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_grande.jpg?v=1571152418")
  user_name.innerHTML = window.localStorage.getItem("current_user");
  
  user_name_cont.appendChild(user_name)
  user_img_cont.appendChild(user_img)
  user_name_pic.appendChild(user_img_cont)
  user_name_pic.appendChild(user_name_cont)
  user_link.appendChild(user_name_pic)
  header_cont.appendChild(user_link)


  const message_cont = document.createElement('div')
  const message_text = document.createElement('p')
  const break_content = document.createElement('hr')
  const break_line = document.createElement('br')

  const time_stamp = document.createElement('div')
  time_stamp.innerHTML = message_details.timestamp
  time_stamp.classList.add("message_text")
  time_stamp.classList.add("pl-16")

  message_cont.classList.add("message_cont")
  message_text.classList.add("message_text")
  break_content.classList.add("break_content")


  message_text.innerHTML = message_details.text

  message_cont.appendChild(message_text)

  main_cont.appendChild(header_cont)
  main_cont.appendChild(message_cont)
  main_cont.appendChild(time_stamp)
  main_cont.appendChild(break_line)
  main_cont.appendChild(break_content)


  append_container.appendChild(main_cont)

  element.insertBefore(append_container, element.firstChild)
}

// WHEN CLICK 'HOME', DISPLAY USER'S FOLLOWER'S STUFF

let home_button = document.getElementById("Home")

home_button.onclick = function post_Message(){

  element.innerHTML = " "
  displayHomeTimeline(window.localStorage.getItem("current_user"))
  
}

// WHEN CLICK 'PUBLIC', DISPLAY USER'S FOLLOWER'S STUFF
let public_button = document.getElementById("Public")

public_button.onclick = function post_Message(){

  element.innerHTML = " "
  displayPublicTimeline()
  
}







// THIS IS CODE FOR THE SEARCH BAR IF WE'RE EVER GOING TO IMPLEMENT IT
// const searchForm = document.querySelector('#search')
// const keyword = document.querySelector('#keyword')

// const resultDiv = document.querySelector('#results')
// const result = document.querySelector('#result-value')

// async function search (term = '') {
//   const query = encodeURIComponent(`%%${term}%%`)
//   const response = await fetch(`http://localhost:5000/posts/?text=${query}`)
//   const data = await response.json()

//   result.textContent = JSON.stringify(data.resources, null, 2)
//   resultDiv.hidden = !term
// }

// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault()
// })

// keyword.addEventListener('input', (event) => {
//   search(keyword.value)
// })
