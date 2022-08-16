export const useGoUp = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
      block: "start",
    });
  const goUp = document.querySelector(".lnr-arrow-up-circle");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      goUp.style.transform = "scale(1)";
    } else {
      goUp.style.transform = "scale(0)";
    }
  });
};
