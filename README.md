
<img src="https://seeklogo.com/images/U/university-of-the-philippines-diliman-upd-logo-65770383FD-seeklogo.com.png" alt="University of the Philippines Diliman Logo" width="100" height="100">

# UPD Course Probability Calculator

This is a simple web-based calculator designed to estimate the probability of a student getting into a course at the University of the Philippines Diliman (UPD) based on the total class size, available slots, and total demand.

## Usage

### Prerequisites

You only need a web browser to use this calculator. No server or backend setup is required.

### How to Use

1. Clone the repository or download the `popup.html` + `popup.js` files.
2. Open the `popup.html` file in your web browser.
3. Enter the following details:
   - **Total Class Size:** The total number of slots available in the course.
   - **Available Slots:** The number of slots still open for students.
   - **Total Demand:** The total number of students who want to enroll in the course.
   - **Number of Priority Students:** The total number of students who are prioritized in getting the course. (Optional) 
4. Click the "Calculate Probability" button.
5. The probability of securing a slot will be displayed (%) in the results section.

### Example

If a course has:
- 100 total slots,
- 20 slots still available, and
- 50 students wanting to enroll,

Entering these values will show you the likelihood of getting into the course.

### Calculation Logic

Latex to follow -- read `calculateProbability` for more details.

### Future Enhancements

- Use of better calculation logic to estimate the probability.
- Integrate to original [UPD CRS Schedule Converter](https://github.com/drew-747/UPD-CRS-Schedule-Converter)

## Contributing

Feel free to fork this project, submit issues, or make pull requests to suggest improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Disclaimer: 

This tool provides a basic probability calculation and should not be solely relied upon for course selection decisions.
