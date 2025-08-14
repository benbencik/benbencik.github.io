---
layout: page
title: blog
permalink: /blog/
order: 2
---

<style>
  .terminal-line {
    font-family: monospace;
    text-align: center;
    color: #666;
    opacity: 0.8;
  }

  /* Styled Post List */
  .post-list {
    margin-left: 0;
    list-style: none;
    border-left: 3px dotted #e8e8e8;
    padding-left: 1.5rem;
  }

  .post-list>li {
    margin-bottom: 2rem;
    position: relative;
  }

  .post-list>li::before {
    content: "○";
    position: absolute;
    left: -1.8rem;
    color: var(--primary-color);
    font-family: monospace;
    font-size: 1.1rem;
  }

  /* Custom List Styles */
  .post-content ul {
    list-style: none;
    margin-left: 1.5rem;
  }

  .post-content ul li {
    position: relative;
    margin-bottom: 0.4rem;
    padding-left: 1.3rem;
  }

  .post-content ul li::before {
    content: "✦ ";
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-size: 1rem;
  }
</style>
Comming soon!

<!-- 
<div class="home">
  {% if site.posts.size > 0 %}
  <h2 class="post-list-heading">{{ page.list_title | default: "All Posts" }}</h2>
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>
  {% endif %}
</div> 
-->
