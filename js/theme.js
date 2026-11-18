(function () {
  function initTheme(darkModeBtn) {
    if (!darkModeBtn) return;

    const { themeStorageKey } = window.PROFILE;

    function setDarkMode(isDark) {
      document.body.classList.toggle("dark", isDark);
      darkModeBtn.setAttribute("aria-checked", String(isDark));
    }

    darkModeBtn.addEventListener("click", () => {
      const nextValue = darkModeBtn.getAttribute("aria-checked") !== "true";
      setDarkMode(nextValue);

      try {
        localStorage.setItem(themeStorageKey, nextValue ? "dark" : "light");
      } catch {
        // localStorage may be unavailable
      }
    });

    try {
      const savedTheme = localStorage.getItem(themeStorageKey);
      if (savedTheme === "dark") {
        setDarkMode(true);
      }
    } catch {
      // Ignore storage errors
    }
  }

  window.initTheme = initTheme;
})();