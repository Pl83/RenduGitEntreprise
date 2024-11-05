import {multiplication, division} from './source.js';

const timeBtn = document.getElementById('time');
const divBtn = document.getElementById('div');


timeBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  multiplication(nbmOne, nbmTwo);
});


divBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  division(nbmOne, nbmTwo);
});

