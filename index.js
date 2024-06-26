document.getElementById("viewTimingsButton").onclick = function (event) {
  event.preventDefault(); // Prevent the default behavior of the button
  const overlay = document.getElementById("timingsOverlay");
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 10); // Delay to ensure display change takes effect before opacity change
};

document.getElementById("closeOverlay").onclick = function () {
  const overlay = document.getElementById("timingsOverlay");
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300); // Match the transition duration
};

// Close the overlay if the user clicks outside of it
window.onclick = function (event) {
  const overlay = document.getElementById("timingsOverlay");
  if (event.target == overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300); // Match the transition duration
  }
};
