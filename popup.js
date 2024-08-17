document.addEventListener('DOMContentLoaded', function() {
  var calculateBtn = document.getElementById('calculateBtn');
  var resultElement = document.getElementById('result');

  calculateBtn.addEventListener('click', function() {
    var totalSlots = parseInt(document.getElementById('totalSlots').value);
    var availableSlots = parseInt(document.getElementById('availableSlots').value);
    var totalDemand = parseInt(document.getElementById('totalDemand').value);

    if (isNaN(totalSlots) || isNaN(availableSlots) || isNaN(totalDemand) || 
        totalSlots <= 0 || availableSlots <= 0 || totalDemand <= 0) {
      resultElement.textContent = "Please enter valid positive numbers for all fields.";
      return;
    }

    if (availableSlots > totalSlots) {
      resultElement.textContent = "Available slots cannot be greater than total class size.";
      return;
    }

    var probability = (availableSlots / Math.max(totalDemand, totalSlots)) * 100;
    probability = Math.min(probability, 100); // Cap the probability at 100%

    resultElement.textContent = "Probability of getting the course: " + probability.toFixed(2) + "%";
  });
});