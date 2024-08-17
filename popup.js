document.addEventListener('DOMContentLoaded', function() {
  var calculateBtn = document.getElementById('calculateBtn');
  var resultElement = document.getElementById('result');;

  calculateBtn.addEventListener('click', function() {
    var totalSlots = parseInt(document.getElementById('totalSlots').value);
    var availableSlots = parseInt(document.getElementById('availableSlots').value);
    var totalDemand = parseInt(document.getElementById('totalDemand').value);
    var totalPriority = parseInt(document.getElementById('totalPriority').value) || 0;
    var isPriority = document.getElementById('isPriority').checked;

    if (isNaN(totalSlots) || isNaN(availableSlots) || isNaN(totalDemand) ||
        totalSlots <= 0 || availableSlots <= 0 || totalDemand <= 0 || totalPriority < 0) {
      resultElement.textContent = "Please enter valid positive numbers for all fields.";
      return;
    }

    if (availableSlots > totalSlots) {
      resultElement.textContent = "Available slots cannot be greater than total class size.";
      return;
    }

    if (totalPriority != 0) { // Only if the totalPriority is given
      if (isPriority) {
        // Priority students will only compete with other priority students
        // assuming that 25% of the applicants are priority students
        totalDemand = Math.round(0.25*totalDemand);
        availableSlots = Math.min(availableSlots, totalPriority);
      }
      else {
        // priority students will get the available slots first
        // hence non-priority students' available slots will be the residue (could be 0)
        totalDemand = Math.round(0.75*totalDemand);        
        availableSlots = Math.max(availableSlots - totalPriority, 0);

      }
    }

    var probability = (availableSlots / totalDemand) * 100;
    probability = Math.min(probability, 100); // Cap the probability at 100%

    resultElement.textContent = "Probability of getting the course: " + probability.toFixed(2) + "%";
  });
});
