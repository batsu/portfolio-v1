/*
https://getcssscan.com/css-box-shadow-examples

web dev simplified - intersection observer
https://www.youtube.com/watch?v=2IbRtjez6ag
*/

const contents = document.querySelectorAll(".content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    root: null,
    // Margin to when element should take action
    rootMargin: "0px",
    threshold: 0
  }
);

contents.forEach((content) => {
  observer.observe(content);
});
