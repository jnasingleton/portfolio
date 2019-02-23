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
      console.log(eventElement);
      const sidebarElements = document.querySelectorAll(".sidebar");
      sidebarElements.forEach(e => {
        e.classList.toggle("slide-in");
      });
    }
  },
  false
);
