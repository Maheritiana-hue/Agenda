function generateCalendar() {
    const year = document.getElementById("yearInput").value;
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.innerHTML = ""; // Vider l'ancien calendrier
    

    if (!year || year < 1900 || year > 2100) {
        alert("Veuillez entrer une année valide entre 1900 et 2100.");
        return;
    }

    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

    for (let month = 0; month < 12; month++) {
        const firstDay = new Date(year, month, 1);
        const lastDate = new Date(year, month + 1, 0).getDate();
        const firstWeekDay = (firstDay.getDay() + 6) % 7; // Pour commencer par lundi

        let table = `<div class="month"><h3>${monthNames[month]}</h3>`;
        table += "<table><tr>" + days.map(day => `<th>${day}</th>`).join("") + "</tr><tr>";

        let dayCount = 0;
        for (let i = 0; i < firstWeekDay; i++) {
            table += "<td></td>";
            dayCount++;
        }

        for (let date = 1; date <= lastDate; date++) {
            table += `<td>${date}</td>`;
            dayCount++;
            if (dayCount % 7 === 0) {
                table += "</tr><tr>";
            }
        }

        while (dayCount % 7 !== 0) {
            table += "<td></td>";
            dayCount++;
        }

        table += "</tr></table></div>";
        calendarContainer.innerHTML += table;
    }
}
