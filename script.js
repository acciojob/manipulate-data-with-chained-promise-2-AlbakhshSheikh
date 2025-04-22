//your JS code here. If required.
// Get the output div
const output = document.getElementById("output");

// Function to create a delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to process the array with chained promises
function processArray() {
  // Initial promise with 3-second delay (adjusted to match total timing)
  const initialArray = [1, 2, 3, 4];
  
  return new Promise(resolve => {
    // No initial delay needed as first transformation has its own delay
    resolve(initialArray);
  })
    .then(array => {
      // First transformation: filter odd numbers
      return new Promise(resolve => {
        setTimeout(() => {
          const evenNumbers = array.filter(num => num % 2 === 0);
          output.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000); // 1-second delay
      });
    })
    .then(evenNumbers => {
      // Second transformation: multiply by 2
      return new Promise(resolve => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map(num => num * 2);
          output.textContent = doubledNumbers.join(",");
          resolve(doubledNumbers);
        }, 2000); // 2-second delay
      });
    })
    .catch(error => {
      output.textContent = "An error occurred";
      console.error(error);
    });
}

// Execute the function when the page loads
document.addEventListener("DOMContentLoaded", processArray);