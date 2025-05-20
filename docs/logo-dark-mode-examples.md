---
layout: page
title: Logo Dark Mode Examples
permalink: /docs/logo-dark-mode-examples/
---

# Logo Dark Mode Examples

This page demonstrates how different dark mode treatments affect logo visibility.

<div class="logo-demo">
  <h2>Original Logo</h2>
  <div class="logo-container">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Original Logo" class="demo-logo" />
  </div>
  
  <h2>Dark Parts to White in Dark Mode (Targeting Black)</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Dark Parts to White Logo" class="demo-logo dark-parts-to-white-dark-mode" />
  </div>
  
  <h2>All to White in Dark Mode</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="All to White Logo" class="demo-logo all-to-white-dark-mode" />
  </div>
  
  <h2>Selective Lighten in Dark Mode</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Selectively Lightened Logo" class="demo-logo selective-lighten-dark-mode" />
  </div>
  
  <h2>Invert All Colors in Dark Mode</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Inverted Logo" class="demo-logo invert-in-dark-mode" />
  </div>
  
  <h2>Outline in Dark Mode</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Outlined Logo" class="demo-logo outline-in-dark-mode" />
  </div>
  
  <h2>Brighten in Dark Mode</h2>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Brightened Logo" class="demo-logo brighten-in-dark-mode" />
  </div>
</div>

<style>
  .logo-demo {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .logo-container {
    padding: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    background-color: #f5f5f5;
  }
  
  .dark-bg {
    background-color: #202124;
  }
  
  .demo-logo {
    max-height: 60px;
    width: auto;
  }
</style>

## Implementation in your site

To use one of these styles, update your `_config.yml`:

```yaml
header_logo:
  enabled: true
  image: "/assets/images/logo.png"
  alt: "Your Logo Alt Text"
  height: 60
  dark_mode_class: "invert-in-dark-mode" # Choose one of the options above
```

See the [Logo Dark Mode Configuration](/docs/logo-dark-mode/) page for more details.
