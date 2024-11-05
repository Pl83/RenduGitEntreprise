import { division } from "./source.js";

const divBtn = document.getElementById('div');

divBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  division(nbmOne, nbmTwo);
});

