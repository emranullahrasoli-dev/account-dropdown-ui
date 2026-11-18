(function () {
  function applyProfileToDom() {
    const profile = window.PROFILE;
    if (!profile) return;

    document.querySelectorAll("[data-profile-name]").forEach((el) => {
      el.textContent = profile.name;
    });

    document.querySelectorAll("[data-profile-email]").forEach((el) => {
      el.textContent = profile.email;
    });

    document.querySelectorAll("[data-profile-initials]").forEach((el) => {
      el.textContent = profile.initials;
    });

    document.querySelectorAll("[data-profile-avatar]").forEach((img) => {
      if (img instanceof HTMLImageElement) {
        img.src = profile.avatarUrl;
        img.alt = "";
        img.addEventListener("error", () => img.remove());
      }
    });
  }

  function init() {
    applyProfileToDom();

    const profileTrigger = document.getElementById("profileTrigger");
    const profileMenu = document.getElementById("profileMenu");
    const profileSlot = document.querySelector(".profile-slot");
    const darkModeBtn = document.getElementById("darkModeBtn");

    if (!profileTrigger || !profileMenu) return;

    window.initProfileDropdown(profileTrigger, profileMenu, profileSlot);
    window.initTheme(darkModeBtn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();