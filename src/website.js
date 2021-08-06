import './tailwind.css'
import './magnifying-glass.png'
import './cool-background.png'
import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

const timeline = mockroblog.getPublicTimeline()

const element = document.getElementById('posts')

function displayPublicTimeline(){
  for(let i = 0; i < timeline.length; i++){
    const cont = document.createElement('div')
    const foo = document.createElement('div')
    const bar = document.createElement('p')
    foo.textContent = timeline[i].text
    bar.textContent = mockroblog.getUserName(timeline[i].user_id)
    cont.setAttribute('id', 'posts_' + i)
    cont.appendChild(foo)
    cont.appendChild(bar)
    element.appendChild(cont)
  }
};

displayPublicTimeline();

const searchForm = document.querySelector('#search')
const keyword = document.querySelector('#keyword')

const resultDiv = document.querySelector('#results')
const result = document.querySelector('#result-value')

async function search (term = '') {
  const query = encodeURIComponent(`%%${term}%%`)
  const response = await fetch(`http://localhost:5000/posts/?text=${query}`)
  const data = await response.json()

  result.textContent = JSON.stringify(data.resources, null, 2)
  resultDiv.hidden = !term
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

keyword.addEventListener('input', (event) => {
  search(keyword.value)
})
