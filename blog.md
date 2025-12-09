---
layout: page
title: blog
permalink: /blog/
order: 2
---

<style>
  /* Styled Post List */
  .post-item {
    margin-bottom: 1rem;
  }

  .post-meta {
    font-family: monospace;
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  .post-meta::before {
    content: "✦ ";
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-right: 0.3rem;
  }

  .post-item h3 {
    margin: 0 0 0.5rem 0;
  }

  .post-item h3 a {
    color: var(--primary-color);
    text-decoration: none;
  }

  .post-item h3 a:hover {
    text-decoration: underline;
  }

  .card-tags {
    margin: 0.5rem 0;
  }
</style>


<div class="home">
  {% if site.posts.size > 0 %}
  {% for post in site.posts %}
  <div class="post-item">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {% if post.excerpt %}
      <p><i>{{ post.excerpt }}</i></p>
    {% endif %}
    {% if post.categories %}
    <p class="card-tags">
      {% for category in post.categories %}
      <span class="tag">{{ category }}</span>
      {% endfor %}
    </p>
    {% endif %}
  <hr>
  </div>
  {% endfor %}
  {% endif %}
</div>
