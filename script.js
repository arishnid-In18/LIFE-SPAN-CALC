let dobValue;

function startJourney() {

    let name = document.getElementById("name").value;
    dobValue = document.getElementById("DOB").value;

    if (name === "" || dobValue === "") {
        alert("Please fill all details");
        return;
    }

    // hide page1
    document.getElementById("placeholder").style.display = "none";

    // show page2
    document.getElementById("page2").style.display = "block";

    document.getElementById("welcomeText").innerHTML =
        "Welcome " + name;

    startCountdown();
}

function startCountdown() {

    let count = 3;

    document.getElementById("countdown").innerHTML = count;

    let timer = setInterval(() => {

        count--;

        if (count > 0) {
            document.getElementById("countdown").innerHTML = count;
        } else {
            clearInterval(timer);

            document.getElementById("countdown").innerHTML =
                "Journey Started 🚀";

            document.getElementById("ageSection").classList.remove("hidden");

            startAgeCounter();
        }

    }, 1000);
}

function startAgeCounter() {

    setInterval(() => {

        let birth = new Date(dobValue);
        let now = new Date();

        let diff = now - birth;

        let seconds = Math.floor(diff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let years = Math.floor(days / 365.25);

        document.getElementById("years").innerText = "Years: " + years;
        document.getElementById("days").innerText = "Days: " + days;
        document.getElementById("hours").innerText = "Hours: " + hours;
        document.getElementById("minutes").innerText = "Minutes: " + minutes;
        document.getElementById("seconds").innerText = "Seconds: " + seconds;

    }, 1000);
}

function showCalculator() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}

/* CALCULATOR */

function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}