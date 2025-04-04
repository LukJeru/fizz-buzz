const submit_btn = document.getElementById("submit-btn");
let number;
const value_list = document.getElementById("list");
const values = [];

submit_btn.addEventListener("click", function() {
  number = parseInt(document.querySelector("#number").value);
  if (typeof(number) === "number") {
    for (let i = 1; i <= number; i++) {
      if(i%3 === 0 && i%5 !== 0) {
        values.push("Fizz");
      } else if(i%3 !== 0 && i%5 === 0) {
        values.push("Buzz")
      } else if(i%3 === 0 && i%5 === 0) {
        values.push("Fizz Buzz");
      } else {
        values.push(i)
      }
    }
  }
  document.getElementById("my-form").reset();
  value_list.innerHTML = values;
})
