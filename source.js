function soustraction(a, b) {
    let c = (a) - (b);
    return c ;
};

function addition(a, b) {
  let c = (a) + (b);
    return c ;
};

function multiplication(a, b) {
    let c = (a) * (b);
    return c ;
};

function division(a, b) {
    if ((b) === 0) {
      throw new Error("Cannot divide by zero"); 
    } else {
      let c = (a) / (b);
      return c ;
    }
    
};

export { multiplication, division, addition, soustraction };
