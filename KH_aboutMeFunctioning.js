// Code for showing and hiding the skill, education and experience portion

document.querySelector("#skills").addEventListener("click", () => {
    document.querySelector(".aboutMeExperience").classList.add("inactiveTab");
    document.querySelector(".aboutMeEducation").classList.add("inactiveTab");
    document.querySelector(".aboutMeSkills").classList.remove("inactiveTab");
    document.querySelector(".aboutMeSkills").classList.add("activeTab");
    document.querySelector("#experience").style.color = 'white';
    document.querySelector("#education").style.color = 'white';
    document.querySelector("#skills").style.color = 'red';

})
document.querySelector("#experience").addEventListener("click", () => {
    document.querySelector(".aboutMeExperience").classList.remove("inactiveTab");
    document.querySelector(".aboutMeExperience").classList.add("activeTab");
    document.querySelector(".aboutMeEducation").classList.add("inactiveTab");
    document.querySelector(".aboutMeSkills").classList.add("inactiveTab");
    document.querySelector("#experience").style.color = 'red';
    document.querySelector("#education").style.color = 'white';
    document.querySelector("#skills").style.color = 'white';
})
document.querySelector("#education").addEventListener("click", () => {
    document.querySelector(".aboutMeEducation").classList.remove("inactiveTab");
    document.querySelector(".aboutMeEducation").classList.add("activeTab");
    document.querySelector(".aboutMeExperience").classList.add("inactiveTab");
    document.querySelector(".aboutMeSkills").classList.add("inactiveTab");
    document.querySelector("#experience").style.color = 'white';
    document.querySelector("#education").style.color = 'red';
    document.querySelector("#skills").style.color = 'white';
})

// Code to show less and show more for the portfolios

document.querySelector(".showMoreButton").addEventListener("click", () => {
    for(let i=0; i<document.querySelectorAll(".toggling").length; i++) {
        document.querySelectorAll(".toggling")[i].classList.toggle('visible');
    }
    if((document.querySelector(".showMoreButton").textContent) == 'Show more') {
        document.querySelector(".showMoreButton").textContent = 'Show less';
    }
    else if((document.querySelector(".showMoreButton").textContent) == 'Show less') {
        document.querySelector(".showMoreButton").textContent = 'Show more';
    }
    
})




