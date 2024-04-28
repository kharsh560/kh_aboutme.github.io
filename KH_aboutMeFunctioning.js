// Code for showing and hiding the skill, education and experience portion ##########################################################

document.querySelector("#skills").addEventListener("click", () => {
  document.querySelector(".aboutMeExperience").classList.add("inactiveTab");
  document.querySelector(".aboutMeEducation").classList.add("inactiveTab");
  document.querySelector(".aboutMeSkills").classList.remove("inactiveTab");
  document.querySelector(".aboutMeSkills").classList.add("activeTab");
  document.querySelector("#experience").style.color = "white";
  document.querySelector("#education").style.color = "white";
  document.querySelector("#skills").style.color = "red";
});
document.querySelector("#experience").addEventListener("click", () => {
  document.querySelector(".aboutMeExperience").classList.remove("inactiveTab");
  document.querySelector(".aboutMeExperience").classList.add("activeTab");
  document.querySelector(".aboutMeEducation").classList.add("inactiveTab");
  document.querySelector(".aboutMeSkills").classList.add("inactiveTab");
  document.querySelector("#experience").style.color = "red";
  document.querySelector("#education").style.color = "white";
  document.querySelector("#skills").style.color = "white";
});
document.querySelector("#education").addEventListener("click", () => {
  document.querySelector(".aboutMeEducation").classList.remove("inactiveTab");
  document.querySelector(".aboutMeEducation").classList.add("activeTab");
  document.querySelector(".aboutMeExperience").classList.add("inactiveTab");
  document.querySelector(".aboutMeSkills").classList.add("inactiveTab");
  document.querySelector("#experience").style.color = "white";
  document.querySelector("#education").style.color = "red";
  document.querySelector("#skills").style.color = "white";
});

// ########################################################## Code to show less and show more for the portfolios ##########################################################

document.querySelector(".showMoreButton").addEventListener("click", () => {
  for (let i = 0; i < document.querySelectorAll(".toggling").length; i++) {
    document.querySelectorAll(".toggling")[i].classList.toggle("visible");
  }
  if (document.querySelector(".showMoreButton").textContent == "Show more") {
    document.querySelector(".showMoreButton").textContent = "Show less";
  } else if (
    document.querySelector(".showMoreButton").textContent == "Show less"
  ) {
    document.querySelector(".showMoreButton").textContent = "Show more";
  }
});

// ########################################################## code to show or hide the nav bars:- ##########################################################

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".fa-bars").classList.toggle("show");
  for (let i = 0; i < document.querySelectorAll(".navItems a").length; i++) {
    document.querySelectorAll(".navItems a")[i].classList.toggle("show");
  }
  document.querySelector(".fa-xmark").classList.toggle("show");
  document.querySelector(".navItems").style.padding = "5px";
  // document.querySelector(".navItems a").classList.toggle('show');
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".fa-xmark").classList.toggle("show");
  for (let i = 0; i < document.querySelectorAll(".navItems a").length; i++) {
    document.querySelectorAll(".navItems a")[i].classList.toggle("show");
  }
  document.querySelector(".fa-bars").classList.toggle("show");
  document.querySelector(".navItems").style.padding = "0px";
  // document.querySelector(".navItems a").classList.toggle('show');
});

// ########################################################## code to show or hide the nav bars after clicking the navitems anchor tags!! ##########################################################

for (let i = 0; i < document.querySelectorAll(".navItems a").length; i++) {
  document.querySelectorAll(".navItems a")[i].addEventListener("click", () => {
    document.querySelector(".fa-xmark").classList.toggle("show");
    for (let i = 0; i < document.querySelectorAll(".navItems a").length; i++) {
      document.querySelectorAll(".navItems a")[i].classList.toggle("show");
    }
    document.querySelector(".fa-bars").classList.toggle("show");
    document.querySelector(".navItems").style.padding = "0px";
  });
}

// ########################################################## Code to link entire WorkDiv to the webpage ##########################################################
// For laptops
for (let i = 0; i < document.querySelectorAll(".work").length; i++) {
  document.querySelectorAll(".work")[i].addEventListener("click", () => {
    window.location.href = document.querySelectorAll(".work a")[i].href;
  });
}
// Not working!!
// For Mobiles -- Using click
// for (let i = 0; i < document.querySelectorAll(".workMobiles").length; i++) {
//   document.querySelectorAll(".workMobiles")[i].addEventListener("click", () => {
//     window.location.href = document.querySelectorAll(".workMobiles a")[i].href;
//   });
// }
// For Mobiles --
// Not working using the "hammer tap event" also!
// for (let i = 0; i < document.querySelectorAll(".workMobiles").length; i++) {
//   var tapEvent = new Hammer(document.querySelectorAll(".workMobiles")[i]);
//   document
//     .querySelectorAll(".workMobiles")
//     [i].addEventListener("touchend", () => {
//   window.location.href =
//     document.querySelectorAll(".workMobiles a")[i].href;
//     });
//   tapEvent.on("tap", () => {
//     window.location.href = document.querySelectorAll(".workMobiles a")[i].href;
//   });
// }

// ########################################################## Code for numbering the workMobiles ##########################################################

for (let i = 0; i < document.querySelectorAll(".workMobiles").length; i++) {
  document.querySelectorAll(".numberingWorkMobiles")[i].innerHTML = `${i + 1}`;
}
// document.querySelectorAll(".workMobiles")

// ########################################################## For custom slider:- ##########################################################

// const predefinedValues = [20, 50, 100, 500, 1000];
const predefinedValues = [
  "26th June 2023",
  "24th August 2023",
  "26th August 2023",
  "8th September 2023",
  "15th March 2024",
  "22nd April 2024",
  "25th April 2024",
];
const slider = document.getElementById("customSlider");
const display = document.getElementById("sliderValue");

// Set initial display value
display.textContent = predefinedValues[slider.value];

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Code to handel the slider changes &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
slider.oninput = function () {
  // Update the display value based on slider position
  display.textContent = predefinedValues[this.value];
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Code to make the paraDivs of the blogs of different dates visible and hidden &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.remove("inactiveTab");

  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.add("activeTab");

  for (let i = 0; i < predefinedValues.length; i++) {
    if (i == slider.value) continue;
    else {
      document.querySelectorAll(".paraDiv")[i].classList.remove("activeTab");
      document.querySelectorAll(".paraDiv")[i].classList.add("inactiveTab");
    }
  }
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Uptill here &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
};

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Code to handel the Forward button clicks &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

document.getElementById("sliderButtonsFwd").addEventListener("click", (e) => {
  e.preventDefault();
  if (slider.value < predefinedValues.length) {
    slider.value++;
  }
  display.textContent = predefinedValues[slider.value];
  //   console.log(slider.value);

  //   Code to make the paraDivs of the blogs of different dates visible and hidden
  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.remove("inactiveTab");

  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.add("activeTab");

  for (let i = 0; i < predefinedValues.length; i++) {
    if (i == slider.value) continue;
    else {
      document.querySelectorAll(".paraDiv")[i].classList.remove("activeTab");
      document.querySelectorAll(".paraDiv")[i].classList.add("inactiveTab");
    }
  }
});

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Code to handel the Backward button clicks &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

document.getElementById("sliderButtonBk").addEventListener("click", (e) => {
  e.preventDefault();
  if (slider.value >= 0) {
    slider.value--;
  }
  display.textContent = predefinedValues[slider.value];
  //   console.log(slider.value);

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Code to make the paraDivs of the blogs of different dates visible and hidden &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.remove("inactiveTab");

  document
    .querySelectorAll(".paraDiv")
    [slider.value].classList.add("activeTab");

  for (let i = 0; i < predefinedValues.length; i++) {
    if (i == slider.value) continue;
    else {
      document.querySelectorAll(".paraDiv")[i].classList.remove("activeTab");
      document.querySelectorAll(".paraDiv")[i].classList.add("inactiveTab");
    }
  }
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Uptill here &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
});
