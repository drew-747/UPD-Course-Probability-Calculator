document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const resultElement = document.getElementById('result');

    if (!form) {
        console.error('Calculator form not found');
        return;
    }

    const CUMULATIVE_PRIO_TO_PERCENTAGE_MAP = {
        "specialNeeds": 0.0,
        "graduating": 0.05,
        "assistant": 0.15,
        "freshman": 0.16,
        "varsity": 0.41,
        "cadetOfficer": 0.46,
        "regular": 0.47,
        "lowPriority": 0.95,
    };

    function calculateProbability(studentPriority, availableSlots, totalDemand, hasStudentsWithPriority) {
        if (hasStudentsWithPriority) {
            const cumulativePercentage = CUMULATIVE_PRIO_TO_PERCENTAGE_MAP[studentPriority];
            const demandForThisPriority = totalDemand * (cumulativePercentage - (CUMULATIVE_PRIO_TO_PERCENTAGE_MAP[getPreviousPriority(studentPriority)] || 0));
            const totalDemandOfHigherPrio = totalDemand * cumulativePercentage;

            if (availableSlots > totalDemandOfHigherPrio) {
                return 1; // 100% chance if there are more slots than higher priority demand
            } else {
                const slotsForThisPriority = Math.max(availableSlots - (totalDemandOfHigherPrio - demandForThisPriority), 0);
                return slotsForThisPriority / demandForThisPriority;
            }
        } else {
            return Math.min(availableSlots / totalDemand, 1);
        }
    }

    function getPreviousPriority(priority) {
        const priorities = Object.keys(CUMULATIVE_PRIO_TO_PERCENTAGE_MAP);
        const index = priorities.indexOf(priority);
        return index > 0 ? priorities[index - 1] : null;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const availableSlots = parseInt(document.getElementById('availableSlots').value);
        const totalDemand = parseInt(document.getElementById('totalDemand').value);
        const studentPriority = document.getElementById('studentPriority').value;
        const hasStudentsWithPriority = document.getElementById('hasStudentsWithPriority').checked;

        if (isNaN(availableSlots) || isNaN(totalDemand) || availableSlots <= 0 || totalDemand <= 0) {
            resultElement.textContent = "Please enter valid positive numbers for all fields.";
            return;
        }

        const probability = calculateProbability(studentPriority, availableSlots, totalDemand, hasStudentsWithPriority);
        const percentage = (probability * 100).toFixed(2);

        resultElement.textContent = `Probability of getting the course: ${percentage}%`;
    });
});
