---
layout: default
title: Contact
permalink: /contact/
---

<div class="page-content">
  <h1 class="page-title">Contact</h1>
  
  <p class="lead">Have questions or feedback? Get in touch with us!</p>
  
  <div class="contact-options">
    <div class="contact-option">
      <h2>Email</h2>
      <p>
        <a href="mailto:{{ site.email }}" class="email-link">
          <img src="{{ '/assets/images/icons/mail.svg' | relative_url }}" alt="Email" class="contact-icon" width="20" height="20">
          {{ site.email }}
        </a>
      </p>
    </div>
    
    <div class="contact-option">
      <h2>Social Media</h2>
      <p>Connect with us on social media:</p>
      <ul class="social-links">
        {% if site.social.github %}
        <li>
          <a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/icons/github.svg' | relative_url }}" alt="GitHub" class="social-icon" width="20" height="20">
            <span>GitHub</span>
          </a>
        </li>
        {% endif %}
        
        {% if site.social.twitter %}
        <li>
          <a href="https://twitter.com/{{ site.social.twitter }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/icons/twitter.svg' | relative_url }}" alt="Twitter" class="social-icon" width="20" height="20">
            <span>Twitter</span>
          </a>
        </li>
        {% endif %}
        
        {% if site.social.linkedin %}
        <li>
          <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/icons/linkedin.svg' | relative_url }}" alt="LinkedIn" class="social-icon" width="20" height="20">
            <span>LinkedIn</span>
          </a>
        </li>
        {% endif %}
        
        {% if site.rss_enabled != false %}
        <li>
          <a href="{{ 'feed.xml' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/icons/rss.svg' | relative_url }}" alt="RSS Feed" class="social-icon" width="20" height="20">
            <span>RSS Feed</span>
          </a>
        </li>
        {% endif %}
      </ul>
    </div>
  </div>
</div>