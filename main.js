// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const emptyHeart = document.querySelector(".like-glyph");
  const errorModal = document.getElementById("modal");

  // Event listener for clicking on the empty heart
  emptyHeart.addEventListener("click", () => {
    mimicServerCall()
      .then((response) => {
        // Simulate a successful server response
        emptyHeart.classList.add("activated-heart");
        emptyHeart.innerText = FULL_HEART;
      })
      .catch((error) => {
        // Simulate a failed server response
        errorModal.classList.remove("hidden");
        errorModal.innerText = error;
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });

  // Event listener for clicking on the full heart
  emptyHeart.addEventListener("click", () => {
    if (emptyHeart.classList.contains("activated-heart")) {
      emptyHeart.classList.remove("activated-heart");
      emptyHeart.innerText = EMPTY_HEART;
    }
  });
});