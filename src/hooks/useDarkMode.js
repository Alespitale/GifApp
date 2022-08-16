export const useDarkMode = () => {
  const moon = document.querySelector(".lnr-moon");
  const sun = document.querySelector(".lnr-sun");
  const body = document.body.classList;
  body.toggle("dark-mode")
  if (moon.style.display !== "none") {
    moon.style.display = "none"
    sun.style.display = "flex"
  } else {
    sun.style.display = "none"
    moon.style.display = "flex"
  }
}
