document.addEventListener("DOMContentLoaded", function () {
    const start = document.getElementById('start');
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');

    start.addEventListener('click', () => {
        container1.style.display = 'none';
        container2.style.display = 'block';
        
        if (document.getElementById("date").value.trim() !== "") {
            calculateAge();
        } 
        else {
            alert("Please enter your date of birth.");
            container1.style.display = 'block';
            container2.style.display = 'none';
        }
    });

    function calculateAge() {
        let userInput = document.getElementById("date");
        let birthdate = new Date(userInput.value);
        let d1 = birthdate.getDate();
        let m1 = birthdate.getMonth();
        let y1 = birthdate.getFullYear();

        let today = new Date();

        let d2 = today.getDate();
        let m2 = today.getMonth();
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        // Update the HTML content in the second container using template literals
        container2.innerHTML = `
            <div class="data">
                <h1> AGE CALCULATOR</h1>
                <div class="countdown" id="countdown">
                    <h1>Calculated Age</h1>
                    <div class="time">
                        <span id="years" style="font-size: 55px; font-weight: 350;">${y3.toString().padStart(2, '0')}</span>
                        <p style="font-size: 15px; font-weight: 100;">Years</p>
                    </div>
                    <div class="time">
                        <span id="months" style="font-size: 55px; font-weight: 350;">${m3.toString().padStart(2, '0')}</span>
                        <p style="font-size: 15px; font-weight: 100;">Months</p>
                    </div>
                    <div class="time">
                        <span id="days" style="font-size: 55px; font-weight: 350;">${d3.toString().padStart(2, '0')}</span>
                        <p style="font-size: 15px; font-weight: 100;">Days</p>
                    </div>
                </div>
                <button id="backButton" class="startButton">Go Back</button>
            </div>
        `;

        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            container1.style.display = 'block';
            container2.style.display = 'none';
        });
    

    }

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
});
