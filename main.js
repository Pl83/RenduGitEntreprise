const timeBtn = document.getElementById('time');

function multiplication(a, b) {
  let c = (a) * (b);
  return c ;
};

timeBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  multiplication(nbmOne, nbmTwo);
});
