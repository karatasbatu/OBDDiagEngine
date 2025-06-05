console.log("app.js no problem its work");

const dataSets = [
  //Data Types
  {
    rpm: 1100,
    speed: 30,
    temp: 85,
    errors: [],
  },
  {
    rpm: 3500,
    speed: 130,
    temp: 102,
    errors: [
      "P0128: Coolant Thermostat (Coolant Temperature Below Thermostat Regulating Temperature)",
      "P0171: System Too Lean (Bank1)",
      "P0300: Random/Multiple Cylinder Misfire Detected ",
      "P0442: Evaporative Emission System Leak Detected (Small Leak)",
    ],
  },
  {
    rpm: 2500,
    speed: 90,
    temp: 92,
    errors: [
      "P0455: Evaporative Emission Control System Leak Detected",
      "P0113: Intake Air Temperature Sensor 1 Circuit High Input",
    ],
  },
  {
    rpm: 1400,
    speed: 40,
    temp: 88,
    errors: ["P0442: Evaporative Emission System Leak Detected (Small Leak)"],
  },
];
//Background Process
let currentIndex = 0;

function updateDisplay() {
  const data = dataSets[currentIndex];

  document.getElementById("rpm-value").textContent = data.rpm;
  document.getElementById("speed-value").textContent = data.speed;
  document.getElementById("temp-value").textContent = data.temp;

  const errorList = document.getElementById("error-list");
  errorList.innerHTML = "";

  if (data.errors.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No Error";
    errorList.appendChild(li);
  } else {
    data.errors.forEach((error) => {
      const li = document.createElement("li");
      li.textContent = error;
      errorList.appendChild(li);
    });
  }
}
//Show Data Start
updateDisplay();

//Button listener
document.getElementById("update-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % dataSets.length;
  updateDisplay();
});
