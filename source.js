function division(a, b) {
    if ((b) === 0) {
      throw new Error("Cannot divide by zero"); 
    } else {
      let c = (a) / (b);
      return c ;
    }
    
};

export { division };