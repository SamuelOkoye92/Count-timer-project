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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 10, 13, 8, 0, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
const day = futureDate.getDay();
// inorder to get the month from the array of month baove since javascript returned it as a Number
const monthName = months[month];
// just like i did for the month, the day is also converted to name of the day
const dayName = weekdays[day];

giveaway.textContent = `Code bootcamp application ends on ${dayName} ${date} ${monthName} ${year} ${hours}:${minutes}am`;

// future time in ms

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
   // values in ms
  const oneMinute = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
   //  calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t %oneMinute ) / 1000);
  // set values array;
  const values = [days, hours, minutes, seconds];

  function format (item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired>Sorry the application deadline has elapsed</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
