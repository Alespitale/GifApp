export const useGoUp = () => {
  const goUp = document.querySelector(".lnr-arrow-up-circle");
  goUp.addEventListener("click", () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      goUp.style.transform = "scale(1)";
    } else {
      goUp.style.transform = "scale(0)";
    }
  });
};
