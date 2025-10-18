function calculateProduct() {
  const val1 = document.getElementById('num1').value;
  const val2 = document.getElementById('num2').value;

  // Convert string inputs to numbers
  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('resultExternal').textContent = "Please enter valid numbers!";
  } else {
    const product = num1 * num2;
    document.getElementById('resultExternal').textContent = "Product = " + product;
  }
}
