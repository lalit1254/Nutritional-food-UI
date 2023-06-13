document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const texts = ["NUtRITiOUS", "READY MADE", "STRESS FREE", "EASY!!", "DELiCiOUS",];
    let index = 0;

    function changeText() {
      textElement.textContent = texts[index];
      index = (index + 1) % texts.length;
    }

    setInterval(changeText, 1000);
  });