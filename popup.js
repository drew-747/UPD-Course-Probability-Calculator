document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const resultElement = document.getElementById('result');

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

    const CUMULATIVE_PRIO_TO_PERCENTAGE_MAP_REVERSED = {
        "specialNeeds": 0.95,
        "graduating": 0.85,
        "assistant": 0.84,
        "freshman": 0.59,
        "varsity": 0.54,
        "cadetOfficer": 0.53,
        "regular": 0.05,
        "lowPriority": 0.0,
    };

    function calculateProbability(studentPriority, availableSlots, totalDemand, hasStudentsWithPriority) {
        if (hasStudentsWithPriority) {
            const totalDemandOfHigherPrio = totalDemand * (CUMULATIVE_PRIO_TO_PERCENTAGE_MAP[studentPriority]);
            const totalDemandOfLowerPrio = totalDemand * (CUMULATIVE_PRIO_TO_PERCENTAGE_MAP_REVERSED[studentPriority]);

            const freeSlotsLeft = Math.max(availableSlots - totalDemandOfHigherPrio, 0);
            const demandAfterSlotsTaken = totalDemand - (availableSlots - freeSlotsLeft);
            const remainingDemand = Math.max(demandAfterSlotsTaken - totalDemandOfLowerPrio, 1);

            return freeSlotsLeft / remainingDemand;
        } else {
            return availableSlots / totalDemand;
        }
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
        const percentage = Math.min(probability * 100, 100).toFixed(2);

        resultElement.textContent = `Probability of getting the course: ${percentage}%`;
    });
});
