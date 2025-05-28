---
layout: docs
title: Customizing Arsxy Theme
description: Learn how to customize the Arsxy theme for your Jekyll site
permalink: /docs/customization/
---
The Arsxy theme is designed to be highly customizable while maintaining its clean and modern aesthetic. This guide covers various ways to personalize the theme to match your brand and preferences.

## Basic Customization Methods

There are several ways to customize the Arsxy theme:

1. **Configuration Options**: Using settings in `_config.yml`
2. **Custom CSS**: Creating your own stylesheet to override default styles
3. **Layout Modifications**: Extending or modifying the theme's layouts
4. **Component Customization**: Tailoring specific components like headers, footers, etc.

## Customizing with Configuration

Many aspects of the theme can be customized through your `_config.yml` file without touching any code. See the [Configuration Guide](/docs/configuration/) for a complete list of options.

Key customization options include:

```yaml
# Site branding
title: Your Site Title
name: Your Site Name
description: Your site description

# Color scheme preferences
features:
  dark_mode: true

# Navigation and content organization
navigation:
  - title: Home
    url: /
    icon: home  # Optional: adds colorful icon to nav item
  # Add more items as needed

# Homepage sections
homepage:
  hero:
    title: "Your Custom Headline"
    subtitle: "A catchy tagline for your site"
    button_text: "Explore"
    button_url: "/articles/"
```

## Social Media & Icons

The Arsxy theme includes colorful icons for social media and navigation links. You can configure social links in your `_config.yml`:

```yaml
# Social media links
social:
  github: yourusername
  twitter: yourusername
  linkedin: yourusername
  email: your@email.com

# RSS feed
rss_enabled: true
```

These icons will appear in both the footer and contact page with modern, colorful designs.

## Customizing the Logo

You can easily replace the site title text with an image logo by configuring the logo settings in `_config.yml`:

```yaml
# Logo settings for the site header
header_logo:
  enabled: true # Set to true to use logo image instead of text title
  image: "/assets/images/your-logo.png" # Path to your logo image
  alt: "Your Site Logo" # Alt text for logo
  height: 60 # Logo height in pixels

# Logo URL for the Jekyll SEO Tag plugin (for social sharing and SEO)
logo: "/assets/images/your-logo.png"
```

For best results, use a logo with transparent background (PNG format) and ensure it's properly sized. The recommended height is 50-70px, but you can adjust this based on your design needs.

> **Note**: The `logo` setting is used for SEO metadata and social sharing previews, while the `header_logo` object controls the visual appearance in your site header. Make sure both point to the same image for consistency.

## Customizing the Favicon

You can easily customize your site's favicon by configuring the appropriate settings in `_config.yml`:

```yaml
favicon:
  enabled: true                # Set to false to disable favicons completely
  icon16: "/path/to/your/favicon-16x16.png"
  icon32: "/path/to/your/favicon-32x32.png"
  apple_touch_icon: "/path/to/your/apple-touch-icon.png"
  manifest: "/path/to/your/site.webmanifest"
  # Optional additional favicon formats
  mask_icon: "/path/to/your/safari-pinned-tab.svg"
  mask_icon_color: "#5bbad5"
  shortcut_icon: "/path/to/your/favicon.ico"
  ms_config: "/path/to/your/browserconfig.xml"
```

To implement favicon customization:

1. Create your favicon files using tools like [Favicon Generator](https://realfavicongenerator.net/)
2. Add the files to your site (typically in `/assets/images/favicon/`)
3. Configure the paths in your `_config.yml` file

## Custom CSS

For more advanced visual customization, you can add your own CSS files to override the theme's default styles.

### Creating a Custom CSS File

1. Create a file at `assets/css/custom.css` or `_sass/_custom.scss` in your site

2. Add your custom styles that will override the theme defaults:

```scss
// Example custom styles
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}

.site-header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-title {
  font-size: 2.5rem;
  letter-spacing: -0.5px;
}
```

3. Import your custom CSS in your site's main stylesheet:

```scss
// In assets/css/main.scss
---
---

@import "variables";
@import "base";
// ... other theme imports
@import "custom"; // Add your custom styles last
```

## Customizing Fonts

To change the fonts used in the theme:

1. Add custom font imports to your CSS or use a service like Google Fonts

```html
<!-- In _includes/head.html or through a custom CSS file -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

2. Override the font variables in your custom CSS:

```scss
:root {
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

## Customizing Colors

The theme uses CSS variables for colors, making it easy to change the color scheme:

```scss
:root {
  --primary-color: #3498db;        // Main brand color
  --secondary-color: #2ecc71;      // Secondary brand color
  --text-color: #333333;           // Primary text color
  --light-text-color: #666666;     // Secondary text color
  --link-color: var(--primary-color);
  --link-hover-color: #2980b9;
  --bg-color: #ffffff;             // Background color
  --light-bg-color: #f5f5f5;       // Secondary background
  --border-color: #e1e4e8;
}
```

## Customizing Layouts

To modify the theme's layouts:

1. Create a `_layouts` directory in your site if it doesn't exist
2. Copy the layout file you want to modify from the theme's `_layouts` directory
3. Modify the copied file as needed

For example, to customize the post layout:

{% raw %}
```html
---
layout: default
---

<div class="custom-post-layout">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <div class="post-meta">
      <time>{{ page.date | date: "%B %d, %Y" }}</time>
      {% if page.reading_time %}
        • {{ content | number_of_words | divided_by: 200 | plus: 1 }} min read
      {% endif %}
    </div>
  </header>

  <!-- Custom post layout -->
  <div class="post-content">
    {{ content }}
  </div>
  
  <!-- Custom post footer -->
  <div class="post-footer">
    <div class="author-bio">
      <h3>About the Author</h3>
      <p>Your custom author bio here</p>
    </div>
  </div>
</div>
```
{% endraw %}

## Customizing Components

To modify specific components:

1. Create an `_includes` directory in your site if it doesn't exist
2. Copy the component file you want to modify from the theme's `_includes` directory
3. Modify the copied file as needed

For example, to customize the footer:

{% raw %}
```html
<!-- In _includes/footer.html -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-branding">
        <h2>{{ site.title }}</h2>
        <p>{{ site.description }}</p>
      </div>
      
      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          {% for item in site.navigation %}
            <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
          {% endfor %}
        </ul>
      </div>
      
      <div class="footer-social">
        <h3>Connect</h3>
        {% include social-links.html %}
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ site.time | date: '%Y' }} {{ site.name }}. All rights reserved.</p>
    </div>
  </div>
</footer>
```
{% endraw %}

## Adding Custom JavaScript

To add custom JavaScript:

1. Create a file at `assets/js/custom.js`
2. Add your custom JavaScript code
3. Include your script in the site footer or head

```javascript
// Example: Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
```

## Best Practices for Customization

1. **Use Configuration First**: Always try to use `_config.yml` options before custom code
2. **Minimize Overrides**: Only override styles you need to change
3. **Keep Theme Updated**: Use customization methods that won't prevent theme updates
4. **Maintain Responsiveness**: Test all customizations on multiple device sizes
5. **Document Changes**: Keep track of your customizations for future reference

## Related Resources

- [Configuration Options](/docs/configuration/)
- [CSS Variables Reference](/docs/css-variables/)
- [Creating Custom Layouts](/docs/custom-layouts/)
- [Typography Customization](/docs/typography/)