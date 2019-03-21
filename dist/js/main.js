function animationEndEventName() {
  let i,
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
      projectDetailsElement = clickElement.parentNode.nextElementSibling;
      projectDetailsElement.classList.toggle("displayed");
      // Toggle Icon change between Eye and Eye-Slash
      eyeElement = clickElement.children[0];
      eyeElement.classList.toggle("fa-eye");
      eyeElement.classList.toggle("fa-eye-slash");
    } else if (clickElement.matches(".job-title")) {
      event.preventDefault();
      const jobTitleCurrentElement = document.querySelector(
        ".job-title-current"
      );
      if (!clickElement.matches(".job-title-current")) {
        // New job-title clicked
        // Existing job title link to fade in
        jobTitleCurrentElement.classList.remove("job-title-current");
        jobTitleCurrentElement.classList.add("fade-in-partial");
        // Define centerElement
        let centerElement = {};
        if (!jobTitleCurrentElement.matches("#about-me-title")) {
          // Set centerElement
          centerElement = document.querySelector(".projects-2");
          // Existing sidebars to slide out
          const sidebarElements = document.querySelectorAll(".sidebar");
          sidebarElements.forEach(e => {
            e.classList.remove("slide-in");
            e.classList.add("slide-out");
          });
        } else if (jobTitleCurrentElement.matches("#about-me-title")) {
          // Set centerElement
          centerElement = document.querySelector(".about-me");
        }
        // centerElement to fade out
        centerElement.classList.remove("fade-in");
        centerElement.classList.add("fade-out");
        // Open next webpage once centerElement finishes its animation
        let animationEnd = animationEndEventName();
        animationEnd &&
          centerElement.addEventListener(
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

document.addEventListener(
  "mouseover",
  function(event) {
    mouseoverElement = event.target;

    if (mouseoverElement.matches(".tooltip-link")) {
      tooltipElement = document.querySelector("#tooltip");
      // Toggle Visibility of Related Tooltip
      tooltipElement.classList.add("fade-in");
      // Add Text
      const tooltipType = mouseoverElement.id.split("-").pop();
      var tooltipText = "Click this icon to ";
      switch (tooltipType) {
        case "resume":
          tooltipText += "download/view my resume";
          break;
        case "github":
          tooltipText += "view my Github page";
          break;
        case "email":
          tooltipText += "send me an email at jamie@jnasingleton.com";
          break;
        default:
          tooltipText = "";
          break;
      }
      tooltipElement.innerText = tooltipText;
    }
  },
  false
);

document.addEventListener(
  "mouseout",
  function(event) {
    mouseoutElement = event.target;

    if (mouseoutElement.matches(".tooltip-link")) {
      tooltipElement = document.querySelector("#tooltip");
      // Toggle Visibility of Related Tooltip
      tooltipElement.classList.remove("fade-in");
      // Remove Text
      tooltipElement.innerText = "";
    }
  },
  false
);
