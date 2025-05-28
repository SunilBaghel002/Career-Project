document.addEventListener("DOMContentLoaded", function () {
  // --- Calendar Functionality ---
  const calendarElement = document.getElementById("calendar");
  const timeSlotsElement = document.getElementById("timeSlots");
  const selectedDateInput = document.getElementById("selectedDate");
  const selectedTimeInput = document.getElementById("selectedTime");
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function generateCalendar(month, year) {
    calendarElement.innerHTML = "";
    const calendarHeader = document.createElement("div");
    calendarHeader.className = "calendar-header";
    const monthSelector = document.createElement("div");
    monthSelector.className = "month-selector";

    const prevButton = document.createElement("button");
    prevButton.className = "month-btn prev-month";
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener("click", previousMonth);

    const monthYearDisplay = document.createElement("h3");
    monthYearDisplay.textContent = `${months[month]} ${year}`;

    const nextButton = document.createElement("button");
    nextButton.className = "month-btn next-month";
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener("click", nextMonth);

    monthSelector.appendChild(prevButton);
    monthSelector.appendChild(monthYearDisplay);
    monthSelector.appendChild(nextButton);
    calendarHeader.appendChild(monthSelector);
    calendarElement.appendChild(calendarHeader);

    weekdays.forEach((weekday) => {
      const weekdayElement = document.createElement("div");
      weekdayElement.className = "weekday";
      weekdayElement.textContent = weekday;
      calendarElement.appendChild(weekdayElement);
    });

    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    for (let i = 0; i < startingDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-day disabled";
      calendarElement.appendChild(emptyCell);
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day;

      if (date.toDateString() === currentDate.toDateString()) {
        dayElement.classList.add("today");
      }

      if (date < new Date(currentDate.setHours(0, 0, 0, 0))) {
        dayElement.classList.add("disabled");
      } else {
        dayElement.addEventListener("click", function () {
          document
            .querySelectorAll(".calendar-day")
            .forEach((d) => d.classList.remove("selected"));
          this.classList.add("selected");
          selectedDateInput.value = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;
          generateTimeSlots(new Date(year, month, day));
        });
      }
      calendarElement.appendChild(dayElement);
    }
  }

  function generateTimeSlots(date) {
    timeSlotsElement.innerHTML = "";
    const timeSlots = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ];

    timeSlots.forEach((timeSlot) => {
      const slotElement = document.createElement("div");
      slotElement.className = "time-slot";
      slotElement.textContent = timeSlot;
      const isAvailable = Math.random() > 0.3;

      if (!isAvailable) {
        slotElement.classList.add("disabled");
      } else {
        slotElement.addEventListener("click", function () {
          document
            .querySelectorAll(".time-slot")
            .forEach((s) => s.classList.remove("selected"));
          this.classList.add("selected");
          selectedTimeInput.value = timeSlot;
        });
      }
      timeSlotsElement.appendChild(slotElement);
    });
  }

  function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  }

  generateCalendar(currentMonth, currentYear);

  // --- Consultation Type Card Selection ---
  document.querySelectorAll(".type-card").forEach((card) => {
    card.addEventListener("click", function () {
      document
        .querySelectorAll(".type-card")
        .forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
      const type = this.getAttribute("data-type");
      document.getElementById("consultationType").value = type;
    });
  });

  document
    .getElementById("consultationType")
    .addEventListener("change", function () {
      const selectedType = this.value;
      document.querySelectorAll(".type-card").forEach((card) => {
        if (card.getAttribute("data-type") === selectedType) {
          card.classList.add("selected");
        } else {
          card.classList.remove("selected");
        }
      });
    });

  // --- Form Submission Handling ---
  document
    .getElementById("consultationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (this.checkValidity()) {
        const submitBtn = document.getElementById("submitBooking");
        const btnText = submitBtn.querySelector(".btn-text");
        const btnLoader = submitBtn.querySelector(".btn-loader");

        btnText.style.display = "none";
        btnLoader.style.display = "inline-block";

        setTimeout(() => {
          btnText.style.display = "inline-block";
          btnLoader.style.display = "none";
          const successModal = document.getElementById("successModal");
          successModal.style.display = "block";

          this.reset();
          document
            .querySelectorAll(".calendar-day")
            .forEach((day) => day.classList.remove("selected"));
          document
            .querySelectorAll(".time-slot")
            .forEach((slot) => slot.classList.remove("selected"));
          selectedDateInput.value = "";
          selectedTimeInput.value = "";
          document
            .querySelectorAll(".type-card")
            .forEach((card) => card.classList.remove("selected"));
        }, 1500);
      } else {
        this.reportValidity();
      }
    });

  // --- Success Modal Close Functionality ---
  const successModal = document.getElementById("successModal");
  const closeModal = successModal.querySelector(".close-modal");
  const modalBtn = successModal.querySelector(".modal-btn");

  closeModal.addEventListener("click", function () {
    successModal.style.display = "none";
  });

  modalBtn.addEventListener("click", function () {
    successModal.style.display = "none";
    // Uncomment below to redirect to home page
    // window.location.href = '/';
  });

  window.addEventListener("click", function (event) {
    if (event.target === successModal) {
      successModal.style.display = "none";
    }
  });
});
