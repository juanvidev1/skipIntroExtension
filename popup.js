document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  if (!toggleButton) {
    console.error("Toggle button not found in the DOM.");
    return;
  }

  // Set initial state
  chrome.storage.local.get(["skipIntroEnabled"], (result) => {
    if (chrome.runtime.lastError) {
      console.error(
        "Error accessing chrome.storage:",
        chrome.runtime.lastError
      );
      toggleButton.textContent = "Error";
      toggleButton.disabled = true;
      return;
    }
    const isEnabled = result.skipIntroEnabled !== false; // Default to true
    updateToggleButton(isEnabled);
  });

  // Add click event listener
  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get(["skipIntroEnabled"], (result) => {
      if (chrome.runtime.lastError) {
        console.error(
          "Error accessing chrome.storage:",
          chrome.runtime.lastError
        );
        return;
      }
      const isEnabled = result.skipIntroEnabled !== false;
      chrome.storage.local.set({ skipIntroEnabled: !isEnabled }, () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error setting chrome.storage:",
            chrome.runtime.lastError
          );
          return;
        }
        updateToggleButton(!isEnabled);
      });
    });
  });

  function updateToggleButton(isEnabled) {
    toggleButton.textContent = isEnabled
      ? "Disable Skip Intro"
      : "Enable Skip Intro";
    toggleButton.classList.toggle("enabled", isEnabled);
  }
});
