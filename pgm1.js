

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
console.log(text)

const x = (x, y) => { return x * y };

console.log(x(5,6));

var m = 10;

{
  let m = 2;
  console.log(m);
}
console.log(m);