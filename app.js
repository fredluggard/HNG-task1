function handleActiveLink(event) {
  event.preventDefault();

  let activeLink = document.querySelectorAll(".tab");

  activeLink.forEach((tab) => {
    tab.classList.remove("active-link");
  });

  event.currentTarget.classList.add("active-link");
}

let currentDate = new Date();

let hours = currentDate.getUTCHours();
let minutes = currentDate.getUTCMinutes();
let seconds = currentDate.getUTCSeconds();

let utcTime = `${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

let getDate = document.querySelector(".date");
getDate.innerHTML = utcTime;

let day = currentDate.toDateString().slice(0, 3);

let getDay = document.querySelector(".day");
getDay.innerHTML = day;

let hamburger = document.querySelector(".menu");
let hamburgerLink1 = document.querySelector(".bum1");
let hamburgerLink2 = document.querySelector(".bum2");
let hamburgerLink3 = document.querySelector(".bum3");

hamburger.addEventListener("click", () => {
  document.querySelector(".bum1").classList.toggle("ham1");

  document.querySelector(".bum2").classList.toggle("ham2");

  document.querySelector(".bum3").classList.toggle("ham3");
});
