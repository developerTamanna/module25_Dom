// console.log('append.js')
const placeslist = document.getElementById('places-list')
// console.log(placeslist)
const li = document.createElement('li')
li.innerText = 'pahartoli bon';

placeslist.appendChild(li);

// 1. whare to ad
const mainContainer = document.getElementById('main-container')
// console.log(mainContent);
// w2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'my-food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'birani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'borhani'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'salat'
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section);



// set innerhtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My dress section</h1>
<ul>
  <li>T-Shirt</li>
  <li>pangabi</li>
  <li>reshirt</li>
 </ul>
`
mainContainer.appendChild(sectionDress);

