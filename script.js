setTimeout(function() {
  var loading = document.querySelector(".loading");

  if (loading) {
    loading.classList.add("hide");
  }
}, 5000);

var words = ["light", "memory", "movement", "image", "absence"];
var index = 0;
var word = document.getElementById("changing-word");

if (word) {
  setInterval(function() {
    word.classList.add("fade");

    setTimeout(function() {
      index = index + 1;

      if (index >= words.length) {
        index = 0;
      }

      word.textContent = words[index];
      word.classList.remove("fade");
    }, 400);
  }, 1400);
}
