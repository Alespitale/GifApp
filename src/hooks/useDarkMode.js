export const useDarkMode = () => {
  const moon = document.querySelector(".lnr-moon");
  const sun = document.querySelector(".lnr-sun");
  const lnr = document.querySelector(".lnr");
  const body = document.body.classList;
  moon !== null
    ? lnr.addEventListener("click", () => {
        body.toggle("dark-mode");
        moon.classList.replace("lnr-moon", "lnr-sun");
      })
    : lnr.addEventListener("click", () => {
        body.remove("dark-mode");
        sun.classList.replace("lnr-sun", "lnr-moon");
      });
};
