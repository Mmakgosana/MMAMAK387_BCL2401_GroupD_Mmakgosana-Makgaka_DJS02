const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  if (isNaN(dividend) || isNaN(divider)) {
    //Check if inputs are numbers
    result.classList.add("critical-error") //Changes HTML body to red.
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Non-numeric input provided");

  } else if (parseInt(divider) === 0) {
    // check if the divider is Zero
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero")
  } else if (dividend === '' || divider === '') {
    // checks if the inputs are empty
    result.classList.add("error-message") // changes results to red.
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else {
    result.innerText = Math.floor(dividend / divider);
    // I have added the Math.floor to round down the results to the nearest whole number
  }
});