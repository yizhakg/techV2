import { JOBS } from "./data.js";
console.log(JOBS);
function toggleMenu() {
  if (window.innerWidth < 600) {
    let navUl = document.querySelector(".navUl");
    let toggle = document.querySelector(".toggle");
    navUl.classList.toggle("active");
    toggle.classList.toggle("active");
  }
}

function toggleJob(id) {
  const job = document.querySelector(".currentJob");
  job.classList.toggle("active");
  changeInfoClass(0);
  const jobInfo = JOBS[id[0]][id[1]];
  document.getElementById("currentJobTitle").innerHTML = "";
  document.getElementById("info1").querySelector("p").innerHTML = "";
  document.getElementById("info2").querySelector("p").innerHTML = "";
  document.getElementById("info3").querySelector("p").innerHTML = "";
  const { about, responsibilities, requirement } = jobInfo;
  document.getElementById("currentJobTitle").innerHTML = jobInfo.title;
  document.getElementById("info1").querySelector("p").innerHTML = about;
  document
    .getElementById("info2")
    .querySelector("p").innerHTML = responsibilities;
  document.getElementById("info3").querySelector("p").innerHTML = requirement;
}
function changeInfoClass(num) {
  for (let i = 0; i < jobsNavChildrens.length; i++) {
    jobsNavChildrens[i].classList.remove("active");
  }
  jobsNavChildrens[num].classList.add("active");
}
function navToInfo(num) {
  switch (num) {
    case 0:
      jobsInfo.scrollTop = info1.offsetTop - (jobsHeader.offsetHeight + 20);
      break;
    case 1:
      jobsInfo.scrollTop = info2.offsetTop - (jobsHeader.offsetHeight + 20);
      break;
    case 2:
      jobsInfo.scrollTop = info3.offsetTop - (jobsHeader.offsetHeight + 20);
      break;
    case 3:
      jobsInfo.scrollTop = applying.offsetTop - (jobsHeader.offsetHeight + 20);
      break;
  }
}
window.onload = () => {
  const cont4Li = document.getElementById("cont4").querySelectorAll("li");
  cont4Li.forEach((item) => {
    item.addEventListener("click", () => toggleJob(item.id));
  });
  const jobsNavLi = document.getElementById("jobsNav").querySelectorAll("li");
  jobsNavLi.forEach((item, index) => {
    item.addEventListener("click", () => navToInfo(index));
  });
  const close = document
    .getElementById("close")
    .addEventListener("click", () => {
      const job = document.querySelector(".currentJob");
      job.classList.remove("active");
    });
  const toggle = document
    .getElementById("toggle")
    .addEventListener("click", toggleMenu);

  const navUlLi = document.getElementById("navUl").querySelectorAll("li");
  navUlLi.forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
};
const jobsInfo = document.getElementById("jobsInfo");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const applying = document.getElementById("applying");
const jobsHeader = document.getElementById("jobsHeader");
jobsInfo.addEventListener("scroll", (e) => {
  const scrollMax =
    applying.offsetTop - jobsInfo.offsetHeight - jobsHeader.offsetHeight;

  jobsInfo.scrollTop >= 0 &&
    jobsInfo.scrollTop < info2.offsetTop - jobsHeader.offsetHeight-40 &&
    changeInfoClass(0);
  jobsInfo.scrollTop >= info2.offsetTop - jobsHeader.offsetHeight-40 &&
    jobsInfo.scrollTop < info3.offsetTop - jobsHeader.offsetHeight-40 &&
    changeInfoClass(1);
  jobsInfo.scrollTop >= info3.offsetTop - jobsHeader.offsetHeight-40 &&
    jobsInfo.scrollTop < scrollMax &&
    changeInfoClass(2);
  jobsInfo.scrollTop >= scrollMax && changeInfoClass(3);
});
const jobsNavChildrens = document.getElementById("jobsNav").children;
