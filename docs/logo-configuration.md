---
layout: page
title: Logo Configuration
permalink: /docs/logo-configuration/
---

# Logo Configuration

The Arsxy theme provides options for configuring your site logo, including special handling for dark mode. This documentation covers how to set up your logo and ensure it remains visible in both light and dark mode.

## Basic Logo Setup

Configure your site logo in the `_config.yml` file:

```yaml
header_logo:
  enabled: true  # Set to true to use logo image instead of text title
  image: "/assets/images/logo.png"  # Path to your logo image
  alt: "Your Site Logo"  # Alt text for accessibility
  height: 60  # Logo height in pixels
  dark_mode_class: "inverted"  # Dark mode treatment (detailed below)
```

When `enabled` is set to `true`, the theme will display your logo image in the site header. If set to `false`, the site title text will be displayed instead.

## Dark Mode Support

One common challenge with dark mode is ensuring your logo remains visible when the background changes to a darker color. This is especially important for dark or black logos that may become difficult to see against a dark background.

### Available Dark Mode Classes

The theme provides three predefined options for handling logos in dark mode:

1. **`original`**: No filter is applied to the logo. Use this when your logo already has good contrast in dark mode or if you want to maintain its exact appearance.

2. **`inverted`**: Inverts all colors of your logo. This works best for black and white logos, turning black elements white and vice versa.

3. **`selective-lighten`**: Selectively lightens darker colors while better preserving lighter colors. Best for logos with a mix of dark and light elements.

If no option is specified, the theme defaults to `inverted`.

## Visual Examples

Below are examples of how different dark mode treatments affect logo visibility:

<div class="logo-demo">
  <h3>Original Logo (Light Mode)</h3>
  <div class="logo-container">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Original Logo" class="demo-logo" />
  </div>
  
  <h3>Original (No Filter in Dark Mode)</h3>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Original Logo (No Filter)" class="demo-logo original" />
  </div>
  
  <h3>Inverted in Dark Mode</h3>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Inverted Logo" class="demo-logo inverted" />
  </div>
  
  <h3>Selective Lighten in Dark Mode</h3>
  <div class="logo-container dark-bg">
    <img src="{{ site.header_logo.image | relative_url }}" alt="Selectively Lightened Logo" class="demo-logo selective-lighten" />
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

## Creating Custom Logo Treatments

If you need more control over how your logo appears in dark mode, you can create custom CSS by extending the theme's styles in your own CSS file or by modifying the `_sass/components/_logo.scss` file directly.

Example of adding a custom logo treatment:

```scss
/* Custom logo treatment for dark mode */
html.dark-mode .custom-logo-treatment {
  filter: sepia(0.5) hue-rotate(180deg) saturate(1.5);
}
```

Then, set `dark_mode_class: "custom-logo-treatment"` in your `_config.yml` file.

## Testing Your Logo

To ensure your logo looks good in both light and dark modes:

1. Upload your logo file to the `assets/images` directory
2. Configure the path in `_config.yml`
3. Toggle between light and dark mode using the theme toggle button in the header
4. Try different `dark_mode_class` options to find the best look for your logo
