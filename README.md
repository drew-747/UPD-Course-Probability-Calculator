# UPD Course Probability Calculator

This is a simple web-based calculator designed to estimate the probability of a student getting into a course at the University of the Philippines Diliman (UPD) based on the total class size, available slots, and total demand.

## Usage

### Prerequisites

You only need a web browser to use this calculator. No server or backend setup is required.

### How to Use

1. Clone the repository or download the `index.html` file.
2. Open the `index.html` file in your web browser.
3. Enter the following details:
   - **Total Class Size:** The total number of slots available in the course.
   - **Available Slots:** The number of slots still open for students.
   - **Total Demand:** The total number of students who want to enroll in the course.
4. Click the "Calculate Probability" button.
5. The probability of securing a slot will be displayed in the results section.

### Example

If a course has:
- 100 total slots,
- 20 slots still available, and
- 50 students wanting to enroll,

Entering these values will show you the likelihood of getting into the course.

### Calculation Logic

The probability is calculated as:

\[
\text{Probability} = \frac{\text{Available Slots}}{\text{Total Demand}}
\]

### Future Enhancements

- Include the probability of getting the course, when the course prioritizes X number of students from N Degree Program. 

## Contributing

Feel free to fork this project, submit issues, or make pull requests to suggest improvements. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

**Disclaimer:** This tool provides a basic probability calculation and should not be solely relied upon for course selection decisions.
