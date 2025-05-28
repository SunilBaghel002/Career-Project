document.addEventListener("DOMContentLoaded", function () {
  // Animate text on scroll
  const animateText = () => {
    const textElement = document.querySelector(".moving-text");
    const textSpans = textElement.querySelectorAll("span");

    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Animate text when in viewport
    if (isInViewport(textElement)) {
      textSpans.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 300 * index);
      });
    }
  };

  // Run animation when page loads
  animateText();

  // Run animation on scroll
  window.addEventListener("scroll", animateText);

  // Parallax effect for image
  const parallaxImage = () => {
    const image = document.querySelector(".image-container img");
    const scrollPosition = window.pageYOffset;

    if (image) {
      // Simple parallax effect
      image.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
  };

  window.addEventListener("scroll", parallaxImage);

  // Add interactive hover effect to feature items
  const featureItems = document.querySelectorAll(".feature-item");

  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px)";
      this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the button with class 'cta-button'
  const button = document.querySelector(".cta-button");

  // Check if the button exists to avoid errors
  if (button) {
    // Add a click event listener to the button
    button.addEventListener("click", function () {
      // Redirect to another HTML file (e.g., 'consultation.html')
      window.location.href = "/video";
    });
  }
});
