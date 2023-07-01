const review_card = document.getElementById("review");
const submit_btn = document.querySelector(".submit-btn");
const thank_you = document.getElementById("thank-you");
const ratings = document.getElementById("ratings");

submit_btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  review_card.style.display = "none";
  thank_you.classList.toggle("hide");
});

ratings.addEventListener("click", function (e) {
  e.preventDefault();
  [...e.target.parentNode.children].forEach((child) =>
    child.classList.remove("active")
  );
  e.target.classList.toggle("active");
});
