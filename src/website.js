import './tailwind.css'
import './magnifying-glass.png'
import './cool-background.png'
import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

let timeline = mockroblog.getPublicTimeline();

let element = document.getElementById("posts");

for(let i = 0; i < timeline.length; i++){
  let foo = document.createElement("div");
  foo.textContent = timeline[i].text;
  foo.setAttribute("id", "post_" + i);
  element.appendChild(foo);
}

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

// document.getElementById('DOMContentLoaded', () => {
  
// })




// let timeline = mockroblog.getPublicTimeline();

// // for(let i = 0; i < timeline.length; i++){
//     let foo = document.createElement("div");
//     let quote = document.createElement("blockquote");
//     let user_name = document.createElement("p");
//     // // Retrieve text from an array from getdivublicTimeline()
//     // let text = document.createTextNode(timeline[i].text);
//     // // Add the text to the <div></div>
//     // quote.appendChild(text);
//     quote.innerHTML = "Bro";

//     user_name.innerHTML = "Broski";
//     foo.appendChild(quote);
//     foo.appendChild(user_name);

//     // Find an element with ID "posts", and place the <div></div> in there.
//     let element = document.getElementById("posts");
//     element.appendChild("foo");
// }
// // 