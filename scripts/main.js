// Navbar Logic
const mobile_nav = document.querySelector(".responsive_navbar_btn");
const res_navbar = document.querySelector(".responsive_menu_popup");

const toggleNavbar = () => {
  res_navbar.classList.toggle("active_res_nav");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// Tab Logic

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Faqs Logic
var currentVisibleElementId = null;

function toggle() {
  console.log("clicked");
  let clickedIcon = event.target;
  let questionHolder = clickedIcon.closest(".question-holder");
  let para = questionHolder.querySelector(".faq-para");
  if (
    para.style.display === "none" ||
    window.getComputedStyle(para).display === "none"
  ) {
    para.style.display = "block";
    currentVisibleElementId = questionHolder.id;
    questionHolder.style.border = "1px solid orange";
  } else {
    para.style.display = "none";
    currentVisibleElementId = null;
    questionHolder.style.border = "1px solid transparent";
  }
}
