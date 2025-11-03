<script>
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.querySelector(".nev-menu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
</script>
