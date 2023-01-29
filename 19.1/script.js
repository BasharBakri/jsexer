
const startHere = document.getElementsByClassName("start-here");
// const startHere = document.querySelector('.start-here');

startHere[0].innerText  = 'main title';

const ul = startHere[0].parentElement.children[2].children;

const liSub4 = document.createElement('li');
liSub4.appendChild(document.createTextNode('subtitle 4'));
ul[0].appendChild(liSub4);

liSub4.remove();

startHere[0].parentElement.children[0].innerText = 'Master of The Dom'
startHere[0].parentElement.children[1].innerText = 'Master of The Dom'
startHere[0].parentElement.children[3].innerText = 'Master of The Dom'

startHere[0].parentElement.nextElementSibling.innerText = 'GoodBye World';
