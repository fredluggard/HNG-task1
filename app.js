let currentDate = new Date();

let hours = currentDate.getUTCHours();
let minutes = currentDate.getUTCMinutes();
let seconds = currentDate.getUTCSeconds();

let utcTime = `${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

let getDate = document.querySelector(".date");
getDate.innerHTML = utcTime;
let options = { weekday: "long" };
let day = currentDate.toLocaleDateString("en-US", options);
let getDay = document.querySelector(".day");
getDay.innerHTML = day;

let hamburger = document.querySelector(".menu");
let hamburgerLink1 = document.querySelector(".bum1");
let hamburgerLink2 = document.querySelector(".bum2");
let hamburgerLink3 = document.querySelector(".bum3");

let activeMenu = document.querySelector(".overlay");

let activeMenuLinks = document.querySelectorAll(".tab");

hamburger.addEventListener("click", () => {
  document.querySelector(".bum1").classList.toggle("ham1");

  document.querySelector(".bum2").classList.toggle("ham2");

  document.querySelector(".bum3").classList.toggle("ham3");

  document.body.classList.toggle("no-scroll");

  activeMenu.classList.toggle("overlay-active");
});

activeMenuLinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".bum1").classList.toggle("ham1");

    document.querySelector(".bum2").classList.toggle("ham2");

    document.querySelector(".bum3").classList.toggle("ham3");

    document.body.classList.toggle("no-scroll");
    activeMenu.classList.toggle("overlay-active");
  });
});
