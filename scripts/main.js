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

// Seller Dashboard

//  ########### Sidebar for view ###########

var items = document.querySelectorAll(".view h5");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    document.getElementById("myContainer").style.width = "50%";
  });
}

var closebtn = document.getElementById("closebtn");

closebtn.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("myContainer").style.width = "0";
});


//  ########### Sidebar for edit ###########
var items = document.querySelectorAll(".edit h5");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    document.getElementById("myContainer2").style.width = "50%";
  });
}

var closebtn = document.getElementById("closebtn2");

closebtn.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("myContainer2").style.width = "0";
});

//  ########### Seller dashboard menus ###########
 
function showContent(id) {
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
}

//  ########### Get the timer display element ###########
const timerDisplay = document.getElementById("timer-display");

// Get the start button element
const startButton = document.getElementById("start-button");

//Set the initial time to 16 seconds
let time = 16;

// Function to update the timer display
function updateTimer() {
  timerDisplay.textContent = time;
}

// Function to start the timer
function startTimer() {
  // Update the timer display initially
  updateTimer();

  // Decrease the time by 1 every second
  const timerInterval = setInterval(() => {
    time--;

    // Stop the timer when it reaches 0
    if (time <= 0) {
      clearInterval(timerInterval);
      time = 0; // Ensure time doesn't go negative
    }

    updateTimer();
  }, 1000);
}

// Add event listener to the start button
startButton.addEventListener("click", startTimer);

//  ########### sellerdashboard menus active ###########
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".menu-link");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      // Prevent the default action
      e.preventDefault();

      // Remove the "active" class from all links
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }

      // Add the "active" class to the clicked link
      this.classList.add("active");

      // Call the showContent function
      showContent(this.dataset.content);
    });
  }
});

//  ########### JS for active page when the page loads ###########

// Add a class for the active menu item
var activeMenuItem = null;

// Add event listener to all menu items
document.querySelectorAll("a[data-content]").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Call the showContent function
    showContent(this.dataset.content);

    // Remove the active class from the previously active menu item
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }

    // Add the active class to the clicked menu item
    this.classList.add("active");

    // Update the active menu item
    activeMenuItem = this;
  });
});

// Call the function with 'my-cars' as argument to make it active on page load
showContent("my-cars");

// Add the active class to the 'my-cars' menu item
activeMenuItem = document.querySelector('a[data-content="my-cars"]');
activeMenuItem.classList.add("active");
