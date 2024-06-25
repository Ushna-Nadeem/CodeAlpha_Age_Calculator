function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.innerHTML = "";

    if (!isValidDate(day, month, year)) {
        resultDiv.innerText = "Please enter a valid date.";
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

function isValidDate(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    if (birthDate.getFullYear() != year || birthDate.getMonth() != month - 1 || birthDate.getDate() != day) {
        return false;
    }
    return true;
}

function resetForm() {
    document.getElementById("ageForm").reset();
    document.getElementById("result").innerHTML = "";
}
