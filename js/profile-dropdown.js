(function () {
  function initProfileDropdown(profileTrigger, profileMenu, profileSlot) {
    function setMenuOpen(open) {
      profileMenu.classList.toggle("open", open);
      profileTrigger.setAttribute("aria-expanded", String(open));
    }

    profileTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      setMenuOpen(!profileMenu.classList.contains("open"));
    });

    document.addEventListener("click", (event) => {
      if (
        profileSlot &&
        event.target instanceof Node &&
        !profileSlot.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && profileMenu.classList.contains("open")) {
        setMenuOpen(false);
        profileTrigger.focus();
      }
    });

    profileMenu.querySelectorAll(".menu-item[data-menu]").forEach((item) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("danger")) {
          profileMenu.querySelectorAll(".menu-item.active").forEach((activeItem) => {
            activeItem.classList.remove("active");
            activeItem.removeAttribute("aria-current");
          });

          item.classList.add("active");
          item.setAttribute("aria-current", "page");
        }

        setMenuOpen(false);
      });
    });
  }

  window.initProfileDropdown = initProfileDropdown;
})();