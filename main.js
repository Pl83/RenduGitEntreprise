const divBtn = document.getElementById('div');

function division(a, b) {
  let c = (a) / (b);
  return c ;
};

divBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  division(nbmOne, nbmTwo);
});
