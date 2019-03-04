function changeWindowLocation(href) {
  console.log(href);
  window.location = href;
}
function animationEndEventName() {
  var i,
    undefined,
    el = document.createElement("div"),
    animations = {
      animation: "animationend",
      Oanimation: "oanimationend", // oanimationEnd in very old Opera
      Mozanimation: "animationend",
      Webkitanimation: "webkitanimationEnd"
    };

  for (i in animations) {
    if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
      return animations[i];
    }
  }

  //TODO: throw 'animationEnd event is not supported in this browser';
}

document.addEventListener(
  "click",
  function(event) {
    clickElement = event.target;

    if (clickElement.matches(".project-btn-details")) {
      // Toggle Visibility of Project Details
      projectDetailsElement = clickElement.nextElementSibling;
      projectDetailsElement.classList.toggle("displayed");
      // Toggle Icon change between Eye and Eye-Slash
      eyeElement = clickElement.children[0];
      eyeElement.classList.toggle("fa-eye");
      eyeElement.classList.toggle("fa-eye-slash");
    } else if (clickElement.matches(".job-title")) {
      const jobTitleCurrentElement = document.querySelector(
        ".job-title-current"
      );
      // Same job-title-current clicked
      if (clickElement.matches(".job-title-current")) {
        event.preventDefault();
        // New job-title clicked and currently not on about-me-title
        // ==> sidebar elements and projects-2 element exist
      } else if (!jobTitleCurrentElement.matches("#about-me-title")) {
        event.preventDefault();
        // Existing job title link to fade in
        jobTitleCurrentElement.classList.remove("job-title-current");
        jobTitleCurrentElement.classList.add("fade-in-partial");
        // Existing sidebars to slide out
        const sidebarElements = document.querySelectorAll(".sidebar");
        sidebarElements.forEach(e => {
          e.classList.remove("slide-in");
          e.classList.add("slide-out");
        });
        // Existing center element to fade out
        const centerElement = document.querySelector(".projects-2");
        centerElement.classList.remove("fade-in");
        centerElement.classList.add("fade-out");
        // Open next webpage once centerElement finishes its animation
        var animationEnd = animationEndEventName();
        animationEnd &&
          centerElement.addEventListener(
            animationEnd,
            function() {
              window.location = clickElement.href;
            },
            false
          );
      } else if (jobTitleCurrentElement.matches("#about-me-title")) {
        // New job-title clicked and currently on about-me-title
        // ==> center element exists
        event.preventDefault();
        // Existing job title link to fade in
        jobTitleCurrentElement.classList.remove("job-title-current");
        jobTitleCurrentElement.classList.add("fade-in-partial");
        // Existing About Me element to fade out
        const aboutMeElement = document.querySelector(".about-me");
        aboutMeElement.classList.remove("fade-in");
        aboutMeElement.classList.add("fade-out");
        // Open next webpage once centerElement finishes its animation
        var animationEnd = animationEndEventName();
        animationEnd &&
          aboutMeElement.addEventListener(
            animationEnd,
            function() {
              window.location = clickElement.href;
            },
            false
          );
      }
    }
  },
  false
);

///*
document.addEventListener(
  "mouseover",
  function(event) {
    mouseoverElement = event.target;
    if (mouseoverElement.matches(".tooltip-link")) {
      const tooltipElement = document.querySelector(
        "#" + mouseoverElement.id + "-tooltip"
      );
      // Toggle Visibility of Related Tooltip
      tooltipElement.classList.toggle("displayed");
    }
  },
  false
);

document.addEventListener(
  "mouseout",
  function(event) {
    mouseoutElement = event.target;
    if (mouseoutElement.matches(".tooltip-link")) {
      const tooltipElement = document.querySelector(
        "#" + mouseoutElement.id + "-tooltip"
      );
      // Toggle Visibility of Related Tooltip
      tooltipElement.classList.toggle("displayed");
    }
  },
  false
);
//*/
