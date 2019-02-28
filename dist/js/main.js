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
    eventElement = event.target;

    if (eventElement.matches(".project-btn-details")) {
      // Toggle Visibility of Project Details
      projectDetailsElement = eventElement.nextElementSibling;
      projectDetailsElement.classList.toggle("displayed");
      // Toggle Icon change between Eye and Eye-Slash
      eyeElement = eventElement.children[0];
      eyeElement.classList.toggle("fa-eye");
      eyeElement.classList.toggle("fa-eye-slash");
    } else if (
      eventElement.matches(".job-title") ||
      eventElement.matches("#about-me-title")
    ) {
      if (eventElement.matches(".job-title-current")) {
        // Same job-title-current clicked
        event.preventDefault();
      } else {
        // New job-title-current clicked
        const jobTitleCurrentElement = document.querySelector(
          ".job-title-current"
        );
        // jobTitleCurrentElement ==> sidebar elements and projects-2 element exists
        if (jobTitleCurrentElement) {
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
                console.log(eventElement.href);
                window.location = eventElement.href;
              },
              false
            );
        }
      }
    }
  },
  false
);
