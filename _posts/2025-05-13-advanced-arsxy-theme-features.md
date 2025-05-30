---
layout: post
title: "Advanced Arsxy Theme Features"
description: "Exploring powerful features and advanced customization options in the Arsxy Jekyll theme"
categories: Theme
tags: jekyll arsxy advanced-features customization
author: Awcodify
image: theme-demo-2.webp
featured: true
---

Arsxy theme offers many advanced features beyond the basics. This guide explores the powerful capabilities that make Arsxy an excellent choice for technical blogs, documentation sites, and developer portfolios.

<!--more-->

## Advanced Content Features

Arsxy theme isn't just about looking good—it's built to organize and present technical content effectively.

### Table of Contents

For longer posts, Arsxy automatically generates a table of contents from your headings:

```yaml
---
layout: post
title: "My Detailed Guide"
toc: true
---
```

The TOC is responsive and highlights the current section as readers scroll through your content, making navigation intuitive.

### Content Categories

Arsxy provides powerful content organization through categories and tags:

- **Category pages**: Automatically generated for each category
- **Tag cloud**: Visual representation of your most common topics
- **Related posts**: Intelligent suggestions based on categories and tags

### Code Documentation Features

Arsxy is optimized for developers sharing code and documentation:

#### Syntax Highlighting with Line Numbers

```ruby
# Ruby example with line numbers
class ArsxyTheme
  attr_accessor :options
  
  def initialize(options = {})
    @options = default_options.merge(options)
    validate_options
  end
  
  def default_options
    {
      dark_mode: true,
      syntax_highlighting: true,
      responsive: true
    }
  end
  
  def validate_options
    # Validation logic here
  end
end
```

#### Code Copy Button

Every code block comes with a copy button that appears on hover, making it easy for readers to grab snippets without selecting text manually.

#### Code Annotations

Arsxy supports annotations in code blocks to highlight important parts:

```javascript
function initTheme() {
  // Get saved theme from localStorage
  const savedTheme = localStorage.getItem('theme'); // [!highlight]
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Default to user's system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // [!note] This checks system settings
    document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
  }
}
```

## Performance Optimizations

### Lazy Loading

Images and iframes are automatically lazy-loaded to improve page load times.

```html
<!-- Automatically lazy-loaded by Arsxy -->
<img src="large-image.jpg" alt="A large image">
```

### CSS and JS Minification

The theme automatically minifies all CSS and JavaScript files for production builds:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Font Loading Strategy

Arsxy uses a sophisticated font-loading strategy:

1. **System fonts first**: Starts with system fonts for immediate rendering
2. **Web fonts with `font-display: swap`**: Prevents invisible text while web fonts load
3. **Preloading critical fonts**: Uses `<link rel="preload">` for key fonts

## Advanced Layout Options

### Custom Page Templates

Arsxy includes several specialized page templates:

- **Documentation template**: Ideal for technical documentation with sidebar navigation
- **Portfolio template**: Showcase your projects with filterable categories
- **Landing page template**: Conversion-focused design for product pages

### Component Library

The theme includes a rich library of components you can use in your content:

```html
{% raw %}{% include components/alert.html 
   type="warning" 
   title="Important Note" 
   content="This feature requires JavaScript to be enabled." %}{% endraw %}
```

## SEO and Social Sharing

### Structured Data

Arsxy automatically adds structured data for blog posts:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advanced Arsxy Theme Features",
  "image": "https://example.com/assets/images/theme-demo-2.jpeg",
  "datePublished": "2025-05-14",
  "dateModified": "2025-05-14",
  "author": {
    "@type": "Person",
    "name": "Awcodify"
  }
}
```

### Social Media Preview Cards

The theme generates rich preview cards for social media sharing:

![Social Media Preview Example](/assets/images/theme-demo-2.webp)

## Theme Configuration API

### Global Configuration

The `_config.yml` file provides global configuration options:

```yaml
arsxy:
  # Theme features
  features:
    dark_mode: true
    syntax_highlighting: true
    code_copy: true
    image_lightbox: true
    reading_time: true
    toc_auto: true
    
  # Performance settings
  performance:
    lazy_load_images: true
    preload_fonts: true
    
  # SEO settings
  seo:
    generate_schema: true
    twitter_username: "@yourhandle"
    default_image: "default-social.jpg"
```

### Per-Page Configuration

You can override global settings on a per-page basis:

```yaml
---
layout: post
title: "Custom Page"
arsxy:
  features:
    toc_auto: false
    reading_time: false
  performance:
    lazy_load_images: false
---
```

## Advanced Customization

### CSS Custom Properties

Arsxy uses CSS custom properties (variables) extensively, making it easy to customize the theme's appearance:

```css
:root {
  --primary-color: #3273dc;
  --secondary-color: #363636;
  --accent-color: #ff3860;
  --background-color: #ffffff;
  --text-color: #4a4a4a;
  --heading-color: #363636;
  --link-color: var(--primary-color);
  --link-hover-color: #276cda;
  --border-color: #dbdbdb;
  --code-background: #f5f5f5;
  --code-color: #ff3860;
}
```

### Theme Extension Points

The theme provides several extension points where you can add custom code without modifying the core files:

```
_includes/
  custom/
    head.html    # Custom <head> content
    header.html  # Custom header content
    footer.html  # Custom footer content
    scripts.html # Custom JavaScript
```

## Conclusion

Arsxy theme's advanced features make it a powerful platform for building sophisticated websites while maintaining clean, fast-loading pages. Whether you're creating documentation, a tech blog, or a professional portfolio, these features help you present your content in the most effective way possible.

By leveraging these advanced capabilities, you can create a unique site that stands out while benefiting from the solid foundation that Arsxy provides.