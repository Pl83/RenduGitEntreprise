const addBtn = document.getElementById('add');

function addition(a, b) {
  let c = (a) + (b);
  return c ;
};

addBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  addition(nbmOne, nbmTwo);
});
