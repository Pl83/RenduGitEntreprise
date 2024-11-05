import {soustraction} from "./source.js";

const subsBtn = document.getElementById('susb');

subsBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  soustraction(nbmOne, nbmTwo);
});
