//VIDEO HANDLER
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");
const play = document.querySelector(".play > a");
const close = document.querySelector(".close");

play.addEventListener("click", function () {
  trailer.classList.add("active");
  video.currentTime = 0;
  video.play();
});

close.addEventListener("click", function () {
  trailer.classList.remove("active");
  video.currentTime = 0;
  video.pause();
});
