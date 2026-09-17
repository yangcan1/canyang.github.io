(() => {
  "use strict";

  const initialize = () => {
    const navigation = Array.from(
      document.querySelectorAll('.site-nav a[href^="#"]'),
    );
    const sections = Array.from(
      document.querySelectorAll("[data-nav-section][id]"),
    );

    const setCurrentSection = (id) => {
      navigation.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    navigation.forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.getAttribute("href").slice(1);
        if (sections.some((section) => section.id === id)) {
          setCurrentSection(id);
        }
      });
    });

    if (navigation.length && sections.length) {
      const header = document.querySelector(".site-header");
      let framePending = false;

      const updateCurrentSection = () => {
        framePending = false;
        const headerHeight = header?.getBoundingClientRect().height || 0;
        const readingPosition = headerHeight + window.innerHeight * 0.2;
        const page = document.scrollingElement || document.documentElement;
        const atPageBottom =
          page.scrollHeight > page.clientHeight &&
          page.scrollTop + page.clientHeight >= page.scrollHeight - 2;
        let currentSection = null;

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= readingPosition) {
            currentSection = section;
          }
        });
        if (atPageBottom) currentSection = sections[sections.length - 1];
        setCurrentSection(currentSection?.id || "");
      };

      const scheduleUpdate = () => {
        if (framePending) return;
        if (typeof window.requestAnimationFrame !== "function") {
          updateCurrentSection();
          return;
        }
        framePending = true;
        window.requestAnimationFrame(updateCurrentSection);
      };

      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate, { passive: true });
      window.addEventListener("hashchange", scheduleUpdate);
      scheduleUpdate();
    }

    const copyButton = document.querySelector("[data-copy-email]");
    const copyStatus = document.querySelector("[data-copy-status]");
    if (
      !copyButton ||
      !copyStatus ||
      !window.isSecureContext ||
      typeof navigator.clipboard?.writeText !== "function"
    ) {
      return;
    }

    const email = copyButton.dataset.copyEmail || "cy2811@columbia.edu";
    let resetStatus;
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      window.clearTimeout(resetStatus);
      copyButton.disabled = true;
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email address copied.";
        resetStatus = window.setTimeout(() => {
          copyStatus.textContent = "";
        }, 4000);
      } catch {
        copyStatus.textContent = `Copy this address: ${email}`;
      } finally {
        copyButton.disabled = false;
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
