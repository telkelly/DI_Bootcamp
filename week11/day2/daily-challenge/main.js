const largeNumber = 356;

const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Get the month as a word
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
const month = months[currentDate.getMonth()];
const dayOfMonth = currentDate.getDate();
const dayOfMonthSuffix = dayOfMonth;
const formattedDayOfMonth = dayOfMonth + dayOfMonthSuffix;


const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();


const formattedDateTime = `The date and time are currently: ${dayOfWeek}, ${month} ${formattedDayOfMonth}, ${year} ${hours}:${minutes}:${seconds} GMT +0300 (Israel Daylight Time)`;

module.exports = {
    largeNumber: largeNumber,
    formattedDateTime: formattedDateTime
}