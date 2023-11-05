<script>
    document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll("nav a");
  menuItems.forEach(item => {
        item.addEventListener("click", scrollToSection);
  });

    function scrollToSection(event) {
        event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust the offset as needed
            behavior: "smooth",
        });
    }
  }
});
</script>
