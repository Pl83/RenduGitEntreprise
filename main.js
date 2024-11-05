import {multiplication, division, addition, soustraction} from './source.js';

const subsBtn = document.getElementById('susb');
const timeBtn = document.getElementById('time');
const divBtn = document.getElementById('div');
const addBtn = document.getElementById('add');

function getNumber() {
  let nbmOne = parseInt(document.getElementById('inputOne').value);
  let nbmTwo = parseInt(document.getElementById('inputTwo').value);
  return [nbmOne, nbmTwo]
}

subsBtn.addEventListener('click', () => {
  let [a, b] = getNumber();
  alert("The result is " + soustraction(a, b));
 });


timeBtn.addEventListener('click', () => {
  let [a, b] = getNumber();
  alert("The result is " + multiplication(a, b));
});


divBtn.addEventListener('click', () => {
  let [a, b] = getNumber();
  alert("The result is " + division(a, b));
});

addBtn.addEventListener('click', () => {
  let [a, b] = getNumber();
  alert("The result is " + addition(a, b));
});
