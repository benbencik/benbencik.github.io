document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.theme-toggle');
  if (!toggleButton) return;

  // Don't apply theme toggle to music page
  if (document.body.classList.contains('music-page')) return;

  // SVG icon HTML
  const moonIcon = `❨ dark mode`;
  const sunIcon = `☀︎ light mode`;

  // Get saved theme or default
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleButton.innerHTML = currentTheme === 'dark' ? sunIcon : moonIcon;

  function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    toggleButton.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    localStorage.setItem('theme', newTheme);
  }

  toggleButton.addEventListener('click', toggleTheme);

  // System preference for first-time visitors
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleButton.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    }
  }
});