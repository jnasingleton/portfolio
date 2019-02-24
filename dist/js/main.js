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
    } else if (eventElement.matches(".job-title")) {
      if (eventElement.matches(".job-title-chosen")) {
        // Same job-title-chosen = do nothing
      } else {
        // Switch job-title-chosen
        const jobTitleChosenElement = document.querySelector(
          ".job-title-chosen"
        );
        if (jobTitleChosenElement) {
          jobTitleChosenElement.classList.remove("job-title-chosen");
        }
        eventElement.classList.add("job-title-chosen");
        // Check if the sidebars have .slide-in
        const sidebarElements = document.querySelectorAll(".sidebar");
        if (document.querySelector(".sidebar.slide-in")) {
          // Existing sidebars to slide out
          sidebarElements.forEach(e => {
            e.classList.remove("slide-in");
            e.classList.add("slide-out-then-in");
          });
        } else {
          // New sidebars to slide in
          sidebarElements.forEach(e => {
            e.classList.remove("slide-out-then-in");
            e.classList.add("slide-in");
          });
        }

        // HAVE SIDEBARS SLIDE IN?
        //  THEN SLIDE OUT, LOAD, SLIDE IN
        // Slide Out
        // Load
        // Slide In
        /*
        sidebarElements.forEach(e => {
          e.classList.toggle("slide-in");
        }); */
      }
    }
  },
  false
);
