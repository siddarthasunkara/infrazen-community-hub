
export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    },
    { threshold: 0.1 }
  );

  const fadeElements = document.querySelectorAll(".fade-in-element");
  fadeElements.forEach((el) => observer.observe(el));

  return observer;
};

export const handleBackToTop = () => {
  const backToTopButton = document.querySelector(".back-to-top") as HTMLElement;
  
  if (!backToTopButton) return;
  
  const toggleBackToTopButton = () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTopButton);
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return () => {
    window.removeEventListener("scroll", toggleBackToTopButton);
  };
};
