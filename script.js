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
    today.innerHTML = day;
    today.classList = "font";
  }
});

//To get the current UTC time in milliseconds.
function updateTime() {
  const now = new Date().getTime();
  const timeToday = document.querySelector('[data-testid="currentUTCTime"]');
  timeToday.innerHTML = now;
  timeToday.classList = "font";
}
updateTime();

setInterval(updateTime, 1000);
