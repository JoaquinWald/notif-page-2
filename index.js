const notificationsNumber = document.querySelector(".supNumber");

const webberColor = document.querySelector(".webber");
const aGrayColor = document.querySelector(".a-gray");
const thompsonColor = document.querySelector(".thompson");

const webberRed = document.querySelector(".supRed");
const aGrayRed = document.querySelector(".supRed2");
const thompsonRed = document.querySelector(".supRed3");

const markRead = () => {
  notificationsNumber.textContent = 0;

  webberColor.style.backgroundColor = "white";
  aGrayColor.style.backgroundColor = "white";
  thompsonColor.style.backgroundColor = "white";

  webberRed.style.backgroundColor = "white";
  aGrayRed.style.backgroundColor = "white";
  thompsonRed.style.backgroundColor = "white";
};
