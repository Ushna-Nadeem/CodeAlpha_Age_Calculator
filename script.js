function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.innerHTML = "";

    const dateValidationMessage = getDateValidationMessage(day, month, year);
    if (dateValidationMessage) {
        resultDiv.innerText = dateValidationMessage;
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultDiv.innerText = `Your age is ${age} years.`;
}

function getDateValidationMessage(day, month, year) {
    if (!day || !month || !year) {
        return "All fields are required.";
    }

    if (month < 1 || month > 12) {
        return "Invalid month. Please enter a value between 1 and 12.";
    }

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > daysInMonth[month - 1]) {
        return `Invalid day for the selected month. Please enter a value between 1 and ${daysInMonth[month - 1]}.`;
    }

    if (year < 1900 || year > new Date().getFullYear()) {
        return `Invalid year. Please enter a value between 1900 and ${new Date().getFullYear()}.`;
    }

    return null;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function resetForm() {
    document.getElementById("ageForm").reset();
    document.getElementById("result").innerHTML = "";
}
