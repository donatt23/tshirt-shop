const scrollTopBtn = document.getElementById("redirect-to-top-btn");

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
   } else {
      scrollTopBtn.style.display = "none";
   }
}

scrollTopBtn.addEventListener("click", () => {
   scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
