// theme.js
(function () {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = saved === "light" ? "🌙" : "☀️";
      btn.onclick = () => {
        const newTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        btn.textContent = newTheme === "light" ? "🌙" : "☀️";
      };
    }
  })();
  