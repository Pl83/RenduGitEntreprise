import {addition} from "./source.js"

const addBtn = document.getElementById('add');

addBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  addition(nbmOne, nbmTwo);
});
