// A rough estimate (cumulative) of % of students belonging to each.
// Cumulative since it's way easier to get % of students with higher prio than you
const CUMULATIVE_PRIO_TO_PERCENTAGE_MAP = {
  "specialNeeds": 0.0, // (0.05)
  "graduating": 0.05, // (0.10)
  "assistant": 0.15, // (0.01)
  "freshman": 0.16, // (0.25)
  "varsity": 0.41, // (0.05)
  "cadetOfficer": 0.46, // (0.01)
  "regular": 0.47, // (0.48)
  "lowPriority": 0.95, // (0.05)
}
// Way easier to get % of students of lower prio than you
const CUMULATIVE_PRIO_TO_PERCENTAGE_MAP_REVERSED = {
  "specialNeeds": 0.95, // (0.05)
  "graduating": 0.85, // (0.10)
  "assistant": 0.84, // (0.01)
  "freshman": 0.59, // (0.25)
  "varsity": 0.54, // (0.05)
  "cadetOfficer": 0.53, // (0.01)
  "regular": 0.05, // (0.48)
  "lowPriority": 0.0, // (0.05)
}

const calculateProbability = (studentPriority, availableSlots, totalDemand, hasStudentsWithPriority=true) => {
  if (hasStudentsWithPriority) {
    // We can actually display all variables for better visibility later on
    const totalDemandOfHigherPrio = totalDemand*(CUMULATIVE_PRIO_TO_PERCENTAGE_MAP[studentPriority])
    const totalDemandOfLowerPrio = totalDemand*(CUMULATIVE_PRIO_TO_PERCENTAGE_MAP_REVERSED[studentPriority])

    const freeSlotsLeft = Math.max(availableSlots-totalDemandOfHigherPrio, 0)
    const demandAfterSlotsTaken = totalDemand - (availableSlots - freeSlotsLeft)
    const remainingDemand = Math.max(demandAfterSlotsTaken - totalDemandOfLowerPrio, 1) // that 1 is you!

    return freeSlotsLeft / remainingDemand
  } else {
    // Assumes everyone has the same prio (e.g. class full of freshmen, major subject, thesis, etc.)
    return availableSlots / totalDemand
  }
}

const getProbability = (studentPriority, availableSlots, totalDemand, hasStudentsWithPriority=true) => {
  const result = calculateProbability(studentPriority, availableSlots, totalDemand, hasStudentsWithPriority)
  return Math.min(result * 100, 100)
}

document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  const resultElement = document.getElementById('result');;

  calculateBtn.addEventListener('click', function() {
    const availableSlots = parseInt(document.getElementById('availableSlots').value);
    const totalDemand = parseInt(document.getElementById('totalDemand').value);
    const studentPriority = document.getElementById('studentPriority').value;
    const hasStudentsWithPriority = document.getElementById('hasStudentsWithPriority').checked;

    if (isNaN(availableSlots) || isNaN(totalDemand) || availableSlots <= 0 || totalDemand <= 0) {
      resultElement.textContent = "Please enter valid positive numbers for all fields.";
      return;
    }

    const probability = getProbability(studentPriority, availableSlots, totalDemand, hasStudentsWithPriority)

    resultElement.textContent = "Probability of getting the course: " + probability.toFixed(2) + "%";
  });
});
