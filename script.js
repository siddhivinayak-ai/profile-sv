document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".neon-button");
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  button.addEventListener("click", () => {
    alert("Form Submitted Successfully");
  });

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const tabId = link.getAttribute("data-tab");

      // Remove active class from all tabs and contents
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab and corresponding content
      link.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  


});

document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.querySelector('.rocket');
  rocket.classList.add('launching');
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  menuIcon.addEventListener('click', function() {
      sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('active');
  });

  // Hide sidebar on click outside
  document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
          sidebar.classList.remove('active');
      }
  });
});
