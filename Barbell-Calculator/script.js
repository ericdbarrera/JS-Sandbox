// JavaScript code for handling the barbell app

  // Variables to store the current barbell weight and total weight
  let currentBarbellWeight = 0;
  let totalWeight = 0;

  // Function to update the total weight display
  function updateTotalWeight() {
    let resultElement = document.querySelector('.result p');
    resultElement.textContent = `Total Weight: ${totalWeight}lbs`;
  }

  // Function to handle weight selection and calculate the total weight
  function addWeight(weight) {
    totalWeight += weight;
    updateTotalWeight();
  }

  // Function to handle barbell selection
  function selectBarbell() {
    let barbellSelect = document.querySelector('.barbell');
    let selectedBarbell = barbellSelect.value;

    // Set the current barbell weight based on the selection
    switch (selectedBarbell) {
      case 'olympic':
        currentBarbellWeight = 45;
        break;
      case 'ezCurl':
        currentBarbellWeight = 35;
        break;
      case 'hex':
        currentBarbellWeight = 25;
        break;
      default:
        currentBarbellWeight = 0;
        break;
    }

    // Update the total weight display with the new barbell weight
    totalWeight = currentBarbellWeight;
    updateTotalWeight();
  }

  // Event listener for the barbell selection
  let barbellSelect = document.querySelector('.barbell');
  barbellSelect.addEventListener('change', selectBarbell);

  // Event listeners for weight selection
  let fourtyFiveElement = document.getElementById('fourty-five');
  let thirtyFiveElement = document.getElementById('thirty-five');
  let twentyFiveElement = document.getElementById('twenty-five');
  let tenElement = document.getElementById('ten');
  let fiveElement = document.getElementById('five');
  let twoPointFiveElement = document.getElementById('two-point-five');

  fourtyFiveElement.addEventListener('click', () => addWeight(90));
  thirtyFiveElement.addEventListener('click', () => addWeight(70));
  twentyFiveElement.addEventListener('click', () => addWeight(50));
  tenElement.addEventListener('click', () => addWeight(20));
  fiveElement.addEventListener('click', () => addWeight(10));
  twoPointFiveElement.addEventListener('click', () => addWeight(5));

  // Event listener for the CLEAR button
  let clearButton = document.querySelector('.reset');
  clearButton.addEventListener('click', () => {
    totalWeight = currentBarbellWeight;
    updateTotalWeight();
  });