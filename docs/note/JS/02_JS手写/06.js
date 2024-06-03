function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = (str) => {
    let arr = str.split(" ");
    let a = +arr[0];
    let cp = arr[1];
    let b = +arr[2];
    return this.methods[cp](a, b);
  };
  this.addMethod = (cp, fun) => {
    this.methods[cp] = fun;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);
