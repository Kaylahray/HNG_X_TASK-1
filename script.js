//  TO get the current day of the week.
const today = document.querySelector('[ data-testid="currentDayOfTheWeek"]');

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Day = new Date();
const currentDay = Day.getDay();

daysOfWeek.forEach((day, index) => {
  // Check if the index of day value is equal to the returned value of getDay()
  if (index == currentDay) {
    today.innerHTML = `The current Day of the week is: ${day}.`;
    today.classList = "font";
  }
});

//To get the current UTC time in milliseconds.
function updateTime() {
  const now = new Date();
  const timeToday = document.querySelector('[data-testid="currentUTCTime"]');
  const milliseconds = now.getUTCMilliseconds();
  console.log(milliseconds);
  timeToday.innerHTML = `The current UTC time in milliseconds is: ${milliseconds}ms.`;
  timeToday.classList = "font";
}
updateTime();

setInterval(updateTime, 1000);
