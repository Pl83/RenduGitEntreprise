const subsBtn = document.getElementById('susb');

function soustraction(a, b) {
  let c = (a) - (b);
  return c ;
};

subsBtn.addEventListener('onclick', () => {
  let nbmOne = document.getElementById('inputOne').value;
  let nbmTwo = document.getElementById('inputTwo').value;

  soustraction(nbmOne, nbmTwo);
});
