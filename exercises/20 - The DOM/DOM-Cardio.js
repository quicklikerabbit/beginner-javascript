// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.append(myDiv);

// make an unordered list
const uList = document.createElement('ul');

// add three list items with the words "one, two three" in them
['one', 'two', 'three'].forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  uList.appendChild(li);
});
// put that list into the above wrapper
myDiv.appendChild(uList);

// create an image
const image = document.createElement('img');

// set the source to an image
image.setAttribute('src', 'https://source.unsplash.com/random');

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.setAttribute('alt', 'Cute Pupy');

// Append that image to the wrapper
myDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const paragraphs = document.createRange().createContextualFragment(`
  <div>
    <p>Paragraph one</p>
    <p>Paragraph two</p>
  </div>
`);

// put this div before the unordered list from above
myDiv.insertBefore(paragraphs, document.querySelector('ul'));

// add a class to the second paragraph called warning
document.querySelectorAll('p')[1].classList.add('warning');
// remove the first paragraph
document.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function createPlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
  <button>Delete</button>
    </div>`;
  return document.createRange().createContextualFragment(html);
}

function removeCard(event) {
  event.target.closest('.playerCard').remove();
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
const players = [
  { name: 'Alli 🦁', age: 35, height: `6' 2"` },
  { name: 'Steve 🐴', age: 34, height: `6' 0"` },
  { name: 'Aggy 🐶', age: 3, height: `🤷‍♀️` },
];

// Have that function make 4 cards
players.forEach(player => {
  // append those cards to the div
  cards.appendChild(createPlayerCard(player.name, player.age, player.height));
  cards
    .querySelectorAll('button')
    .forEach(button => button.addEventListener('click', removeCard));
});

document.body.insertAdjacentElement('afterbegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
