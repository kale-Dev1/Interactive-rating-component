const review_card = document.getElementById("review");
const submit_btn = document.querySelector(".submit-btn");
const thank_you = document.getElementById("thank-you");
const ratings = document.getElementById("ratings");
const chosen = document.querySelector(".chosen");

let number = 0;

// Get the chosen rating and toggle active class on buttons
ratings.addEventListener("click", function (e) {
  e.preventDefault();
  [...e.target.parentNode.children].forEach((child) =>
    child.classList.remove("active")
  );
  e.target.classList.toggle("active");
  number = e.target.textContent;
});

// Display the Thank you card
submit_btn.addEventListener("click", function (e) {
  e.preventDefault();

  chosen.textContent = number;
  review_card.style.display = "none";
  thank_you.classList.toggle("hide");
});
