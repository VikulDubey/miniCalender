const [date, day, month, year] = document.querySelectorAll(
  "#date,#day,#month,#year"
);

const intervalId = setInterval(() => {
  const todayDate = new Date();
  const dateString = todayDate.toDateString();
  const splittedDate = dateString.split(" ");
  date.innerHTML = splittedDate[2];
  day.innerHTML = splittedDate[0] + "day";
  month.innerHTML = splittedDate[1];
  year.innerHTML = splittedDate[3];
}, 1000);
