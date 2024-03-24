function InputSpeedOfCar() {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maximumAllowedDemeritPoints = 12;

  // Prompts the user to enter the speed
  const speed = +prompt("Enter your speed:");

  if (!isNaN(speed)) {
    if (speed <= speedLimit) {
      alert("Ok");
    } else {
      const demeritPoints = Math.floor(
        (speed - speedLimit) / kmPerDemeritPoint
      );

      if (demeritPoints > maximumAllowedDemeritPoints) {
        alert("License suspended");
      } else {
        alert("Points: " + demeritPoints);
      }
    }
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

// Call the checkSpeed function
InputSpeedOfCar();
