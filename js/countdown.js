function countdown() {
  var countDownDate = new Date("Oct 1, 2023 00:00:00").getTime();
  var x = setInterval(function() {
  countdown = document.getElementById("countdown")
    if (countdown) {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdown.innerHTML = days + " dni " + hours + " ur " + minutes + " minut " + seconds + " sekund";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "Odprava se je pričela.";
      }
    }
  }, 1000);
}

countdown();