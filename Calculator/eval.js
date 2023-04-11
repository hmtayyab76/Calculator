let OutputScreen = document.getElementById("result");
let solve = document.getElementById("solve");

function display(value) {
  document.getElementById("result").value += value;
}

solve.addEventListener("click", () => {
  let av = OutputScreen.value;
  let res = eval(av);
  OutputScreen.value = res;
  if (res === undefined) {
    OutputScreen.value = "No Result";
    setTimeout(() => {
      OutputScreen.value = "";
    }, 300);
  }
  console.log(OutputScreen.value);
});
// console.log(solve);

let clearScreen = document
  .getElementById("clear")
  .addEventListener("click", () => {
    OutputScreen.value = "";
  });
