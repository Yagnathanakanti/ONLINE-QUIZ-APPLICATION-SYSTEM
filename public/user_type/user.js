document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".role").forEach((role) => {
    role.addEventListener("click", function () {
      document.querySelectorAll(".role").forEach((r) => {
        r.style.transition = "opacity 0.5s ease";
        r.style.opacity = "0";
      });
      const userType = this.classList.contains("faculty")
        ? "faculty"
        : "student";
      setTimeout(() => {
        window.location.href = `/authentication/login_signup.html?role=${userType}`;
      }, 500);
    });
  });
});
