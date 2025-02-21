console.log('hello from js')
console.log(document.body)

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li, li.innerText);
}


const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1, h1.innerText);
}

const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'fruits changed by javascript'

const places = document.getElementsByClassName('important-places');
// console.log(places);
for(const place of places){
    console.log(place.innerText)
}