
export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add a small delay based on the element's index to create a staggered effect
        if (entry.isIntersecting) {
          const delay = parseFloat(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => {
            entry.target.classList.add("appear");
          }, delay);
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  const fadeElements = document.querySelectorAll(".fade-in-element");
  fadeElements.forEach((el, index) => {
    // Add a data-delay attribute with a staggered value
    el.setAttribute('data-delay', `${index * 100}`);
    observer.observe(el);
  });

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

// Add parallax effect for specific elements
export const setupParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.dataset.speed || '0.1');
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Add a staggered entrance animation for grid items
export const setupStaggeredEntrance = () => {
  const gridContainers = document.querySelectorAll('.staggered-grid');
  
  gridContainers.forEach((container) => {
    const items = container.querySelectorAll('.staggered-item');
    
    items.forEach((item, index) => {
      const el = item as HTMLElement;
      el.style.animationDelay = `${index * 100}ms`;
      el.classList.add('animate-scale');
    });
  });
};

// Add floating animation to 3D elements
export const setupFloatingElements = () => {
  const floatingElements = document.querySelectorAll('.floating');
  
  floatingElements.forEach((el, index) => {
    const element = el as HTMLElement;
    // Set different animation delays to create an organic feeling
    element.style.animationDelay = `${index * 300}ms`;
  });
};

// Add ripple effect to buttons
export const setupRippleEffect = () => {
  const buttons = document.querySelectorAll('.ripple-effect');
  
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const rect = (button as HTMLElement).getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left; 
      const y = (e as MouseEvent).clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

// Initialize all animations
export const initializeAllAnimations = () => {
  const observer = observeElements();
  handleBackToTop();
  setupParallaxEffect();
  setupStaggeredEntrance();
  setupFloatingElements();
  setupRippleEffect();
  
  return () => {
    if (observer) {
      observer.disconnect();
    }
  };
};
