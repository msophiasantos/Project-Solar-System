function calculateWeight() {
  const weightInput = document.getElementById("weight");
  const planetSelect = document.getElementById("planet");
  const resultElement = document.getElementById("result");

  const weightOnEarth = parseFloat(weightInput.value);
  const planet = planetSelect.value;

  const gravity = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06
  };

  if (gravity.hasOwnProperty(planet)) {
    const weightOnPlanet = weightOnEarth * gravity[planet];
    resultElement.textContent = `Weight on ${planet} is ${weightOnPlanet.toFixed(2)} kilograms.`;
  } else {
    resultElement.textContent = "Invalid planet name. Please select a valid planet.";
  }
}