---
layout: docs
title: Layout Options
description: Learn about the different layout options available in Arsxy Theme
permalink: /docs/layouts/
---
Arsxy Theme comes with several pre-designed layout options to help you create a variety of page types for your Jekyll site. Each layout has been carefully designed to address specific content presentation needs.

## Available Layouts

### Default Layout
The default layout provides a clean, minimal structure that serves as the foundation for other layouts. It includes the main navigation, footer, and basic page structure.

**Usage:**
```yaml
---
layout: default
title: My Page
---
```

### Home Layout
The home layout is specifically designed for your landing page. It features a prominent hero section, featured posts, and other elements to engage visitors.

**Usage:**
```yaml
---
layout: home
title: Home
---
```

### Post Layout
This layout is optimized for blog posts. It includes features like reading time estimation, author information, social sharing buttons, and related posts.

**Usage:**
```yaml
---
layout: post
title: My Blog Post
---
```

### Docs Layout
The docs layout is perfect for documentation pages. It features a sidebar navigation for easy access to different documentation sections, and a table of contents for the current page.

**Usage:**
```yaml
---
layout: docs
title: Documentation
---
```

## Homepage Layout (Redesigned)

The `home` layout now features:
- Animated gradient hero section (configurable in `_config.yml`)
- Featured posts: 1 full-width + 2 grid cards, with images and badges
- Latest articles: Dense, single-row cards with right-aligned thumbnails
- Sidebar: Modern widgets for categories, tags, and about
- Fully responsive and dark mode compatible

**Customization:**
- Mark posts as `featured: true` to show in the featured section
- Adjust hero, featured, and sidebar content via `_config.yml` and includes
- All layout colors and spacing are controlled by CSS variables

## Customizing Layouts

You can customize any of these layouts by:

1. Creating a copy of the layout file in your project's `_layouts` directory
2. Modifying the layout according to your needs
3. The theme's layout system is built with flexibility in mind, using modular includes that you can rearrange or replace

## Layout Variables

Each layout accepts various front matter variables to customize its behavior:

```yaml
---
layout: post         # Specify which layout to use
title: My Post Title # The page title
description: A brief description of the page # Used for SEO
image: /assets/images/featured.jpg # Featured image for the page
sidebar: true        # Enable/disable sidebar
toc: true           # Enable/disable table of contents
comments: true      # Enable/disable comments section
---
```

## Creating Custom Layout Variations

For more information on creating custom layout variations, see the [Creating Custom Layouts](/docs/custom-layouts/) guide.