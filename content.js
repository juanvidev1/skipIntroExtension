function clickSkipButton() {
  // Netflix
  const netflixSkipButton = document.querySelector(
    ".watch-video--skip-content-button"
  );
  if (netflixSkipButton) {
    netflixSkipButton.click();
  }

  // Disney+
  const disneySkipButton = document.querySelector(".skip__button");
  if (disneySkipButton) {
    disneySkipButton.click();
  }
}

// Verificar cada cierto tiempo por si aparece el botón
setInterval(clickSkipButton, 1000);
