const main = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
<h1>my dynamic section </h1>
<p>extra text added inside paragraph</p>
<ul>
<li>first item</li>
<li>second item</li>
<li>third item</li>
</ul>
`

main.appendChild(section)