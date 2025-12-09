/**
 * Blog Post Outline (Table of Contents)
 * Automatically generates a clickable outline from post headings,
 * highlights the current section, and provides smooth scrolling navigation.
 */
document.addEventListener('DOMContentLoaded', function () {
  const outline = document.getElementById('post-outline');
  const content = document.querySelector('.post-content');
  const postTitle = document.querySelector('.post-title');
  
  // Exit if required elements are missing
  if (!outline || !content) return;

  // Collect all headings (h1 title + h2/h3 from content)
  const headings = [];
  
  // Add the h1 title as the first item
  if (postTitle) {
    if (!postTitle.id) postTitle.id = 'post-title';
    headings.push(postTitle);
  }
  
  // Add all h2 and h3 headings from the content
  content.querySelectorAll('h2, h3').forEach(h => headings.push(h));
  
  // Exit if no headings found
  if (headings.length === 0) return;

  // Build outline HTML
  let outlineHtml = '<ul>';
  headings.forEach((h, idx) => {
    // Ensure each heading has an id for linking
    if (!h.id) h.id = 'section-' + idx;
    outlineHtml += `<li class="outline-${h.tagName.toLowerCase()}"><a href="#${h.id}">${h.textContent}</a></li>`;
  });
  outlineHtml += '</ul>';
  outline.innerHTML = outlineHtml;

  // Highlight current section based on scroll position
  const links = outline.querySelectorAll('a');
  function onScroll() {
    let current = 0;
    headings.forEach((h, i) => {
      if (window.scrollY + 80 >= h.offsetTop) current = i;
    });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial highlight

  // Smooth scroll when clicking outline links
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute('href').substring(1));
      if (target) {
        window.scrollTo({ 
          top: target.offsetTop - 60, 
          behavior: 'smooth' 
        });
      }
    });
  });
});