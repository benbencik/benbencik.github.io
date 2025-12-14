---
layout: page
---

<style>
  .profile-section {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    padding: 3rem 1.25rem 1.5rem;
    border: 2px solid var(--border-color);
    border-radius: 0.5rem;
    background: var(--content-bg-color);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .profile-section::before {
    position: absolute;
    top: 0.4rem;
    left: 1.5rem;
    font-family: monospace;
    color: var(--primary-color);
    font-weight: bold;
    background-color: var(--content-bg-color);
    padding: 0 0.5rem;
  }

  .profile-section::after {
    position: absolute;
    bottom: 0.2rem;
    right: 1.5rem;
    color: var(--primary-color);
    font-weight: bold;
    background-color: var(--content-bg-color);
    padding: 0 0.5rem;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1.5rem;
  }

  .profile-image {
    width: 11rem;
    height: auto;
    border-radius: 50%;
  }

  .profile-content {
    flex: 1;
    min-width: 20rem;
  }

  /* Social links styling */
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
    gap: 0.8rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 2.5rem;
    border-radius: 50%;
    // background-color: var(--code-bg-color);
    color: var(--text-color);
    fill: var(--code-text-color);
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
    transition: all 0.2s ease;
    border: 0px solid var(--border-color);
  }

  .social-link svg {
    stroke: var(--text-color);
  }

  .social-link:hover svg {
    stroke: var(--primary-color);
    transition: all 0.2s ease;
  }


  .social-icon {
    font-size: 1rem;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .profile-left {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }

    .profile-content {
      min-width: auto;
    }
  }
</style>

<div class="profile-section">
  <div class="profile-left">
    <img src="assets/images/profile.jpg" class="profile-image" alt="Profile Image">
    <!-- ! the svg are copied manually from assets/icons/<filename>.svg -->
    <div class="social-links">
      <a href="https://linkedin.com/in/benbencik/" class="social-link" target="_blank" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 1 0 -4 0" />
          <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
      </a>
      <a href="mailto:bencikben@gmail.com" class="social-link" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" /></svg>
      </a>
      <a href="https://github.com/benbencik" class="social-link" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
      </a>
      <a href="https://x.com/BencikBenj91172" class="social-link" target="_blank" aria-label="X">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-twitter-x" viewBox="0 0 16 16">
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" stroke-width="1"></path>
        </svg>
      </a>
      <a href="https://soundcloud.com/kalnavoda" class="social-link" aria-label="SoundCloud">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-soundcloud">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
          <path d="M9 8l0 9" />
          <path d="M6 17l0 -7" />
          <path d="M3 16l0 -2" /></svg>
      </a>
    </div>
  </div>

  <div class="profile-content">
    <!-- <h3>About Me</h3> -->
    <p>
      Pursuing a master's degree in <b>Theoretical Computer Science</b> at <i>Charles University</i> in Prague, focused on cryptography. Enthusiastic about building trustless, privacy-preserving systems. Balancing in between math and engineering. Rust enjoyer.
    </p>
    <p class="card-tags">
      <span class="tag">cryptograhy</span>
      <span class="tag">graph theory</span>
      <span class="tag">complexity</span>
      <span class="tag">web3</span> 
    </p>
  </div>
</div>

<!-- 
<h2>Recent Posts</h2>

<ul class="post-list">
  {% for post in site.posts limit:2 %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {{ post.excerpt }}
  </li>
  {% endfor %}
</ul>

<div class="view-all-link">
  <a href="/blog" class="button">View All Posts</a>
</div> -->