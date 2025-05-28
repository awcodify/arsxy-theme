---
layout: docs
title: Dark Mode
description: How to use and customize dark mode in the Arsxy theme
permalink: /docs/dark-mode/
---
The Arsxy theme includes a built-in dark mode feature that provides a comfortable reading experience in low-light environments. This documentation explains how to enable, configure, and customize dark mode.

## Enabling Dark Mode

Dark mode is enabled by default in the Arsxy theme. Users can toggle between light and dark modes using the theme toggle button in the site header.

To control dark mode availability in your site configuration, use the following settings in your `_config.yml`:

```yaml
dark_mode:
  enabled: true             # Enable dark mode toggle button
  default: false           # Whether dark mode is the default
```

## Respecting System Preferences

The theme can automatically switch to dark mode if the user's operating system or browser is set to prefer dark color schemes. This is done using the `prefers-color-scheme` media query.

## Logo Configuration in Dark Mode

One common challenge with dark mode is ensuring your site logo remains visible when the background changes. This is especially important for dark or black logos that may become difficult to see against a dark background.

The theme provides several options to handle logos in dark mode through the `dark_mode_class` setting in your `_config.yml`:

```yaml
header_logo:
  enabled: true
  image: "/assets/images/logo.png"
  alt: "Your Site Logo"
  height: 60
  dark_mode_class: "invert-in-dark-mode" # Options explained below
```

### Available Dark Mode Logo Classes

1. **`dark-parts-to-white-dark-mode`**: Primarily affects black and dark colors in your logo while minimizing changes to other colors. This is the best option for targeting mainly black elements.

2. **`all-to-white-dark-mode`**: Converts all colored parts of your logo to white, preserving only transparency. Perfect for logos that should appear as a white silhouette in dark mode.

3. **`selective-lighten-dark-mode`**: Selectively lightens darker colors while better preserving lighter colors. Best for logos with a mix of dark and light elements.

4. **`invert-in-dark-mode`**: Inverts all colors of your logo. This works best for simple black and white logos without transparency.

5. **`outline-in-dark-mode`**: Adds a white outline/glow effect around your logo without changing its colors.

6. **`brighten-in-dark-mode`**: Increases the brightness of your logo without inverting it. Good for colored logos.

For more detailed information and examples, see the [Logo Dark Mode Configuration](/docs/logo-dark-mode/) page.

## Customizing Dark Mode Colors

The dark mode color scheme can be customized by modifying the CSS variables in your site's stylesheets.

### Default Dark Mode Variables

The default dark mode color scheme is defined in `_sass/_dark-mode.scss`:

```scss
:root {
  --dark-bg-color: #121212;
  --dark-text-color: #f5f5f5;
  --dark-link-color: #8ab4f8;
  --dark-border-color: #333;
  --dark-code-bg: #1e1e1e;
  --dark-code-color: #f8f8f2;
  --dark-blockquote-bg: #1e1e1e;
  --dark-blockquote-border: #444;
  --dark-header-bg: #1a1a1a;
  --dark-header-text: #fff;
  --dark-footer-bg: #1a1a1a;
  --dark-footer-text: #ccc;
  --dark-toc-bg: #1e1e1e;
  --dark-toc-border: #333;
}
```

### Customizing Dark Mode

To customize dark mode, create a `_sass/_custom.scss` file in your site and override the default variables:

```scss
:root {
  // Override dark mode variables
  --dark-bg-color: #0d1117;
  --dark-text-color: #e6edf3;
  --dark-link-color: #58a6ff;
  // Add more custom variables as needed
}
```

Then, import your custom SCSS file in your `assets/css/main.scss`:

```scss
---
---

@import "variables";
@import "base";
@import "layout";
@import "typography";
@import "syntax-highlighting";
@import "dark-mode";
@import "custom";  // Import your custom styles last
```

## Dark Mode JavaScript

The theme includes JavaScript to handle dark mode toggling and persistence. The dark mode setting is saved in the user's localStorage so their preference is remembered between visits.

Here's a simplified version of how the dark mode toggle works:

```javascript
// Check for saved dark mode preference or system preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

// Set initial theme
if (storedTheme === 'dark' || (storedTheme === null && prefersDarkMode)) {
  document.documentElement.classList.add('dark-mode');
}

// Add event listener to theme toggle button
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
```

## Advanced Dark Mode Customization

For advanced customization of dark mode, you can:

1. Add additional dark mode variables for custom components
2. Create dark mode variants of your images and swap them using CSS
3. Implement transition effects when switching between modes

### Example: Different Images for Dark Mode

```html
<div class="logo-container">
  <img src="/assets/images/logo-light.png" class="light-mode-image">
  <img src="/assets/images/logo-dark.png" class="dark-mode-image">
</div>
```

```scss
.logo-container {
  position: relative;
  
  img {
    height: 40px;
  }
  
  .dark-mode-image {
    display: none;
  }
  
  .light-mode-image {
    display: block;
  }
}

.dark-mode {
  .logo-container {
    .dark-mode-image {
      display: block;
    }
    
    .light-mode-image {
      display: none;
    }
  }
}
```

## Related Resources

- [Customizing Your Arsxy Theme](/docs/customization/)
- [CSS Variables](/docs/css-variables/)
- [Typography and Readability](/docs/typography/)