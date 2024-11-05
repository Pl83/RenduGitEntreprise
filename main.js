import {multiplication} from './source.js';

const timeBtn = document.getElementById('time');

timeBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  multiplication(nbmOne, nbmTwo);
});
