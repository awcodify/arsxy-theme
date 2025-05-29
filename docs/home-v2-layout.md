---
title: "Home-v2 Layout: Social Media Inspired Design"
description: "Learn how to use the social media-inspired home-v2 layout for modern, engaging blog homepages"
---

# Home-v2 Layout: Social Media Inspired Design

The `home-v2` layout provides a modern, social media-inspired alternative to the traditional blog homepage. This layout encourages visitors to explore content through Instagram-style stories, engaging post cards, and an elegant sidebar.

## Features

### 🎯 Instagram-Style Stories Navigation
- Category-based story navigation with gradient rings
- Smooth scrolling and filtering
- Visual feedback for active categories

### 📱 Social Media-Style Post Cards
- Clean, card-based design with author avatars
- Reading time estimates and publication dates
- Featured post badges
- Interactive action buttons

### 🔧 Interactive Controls
- Filter tabs: All Posts, Featured
- View toggles: Feed view vs Grid view
- Load more functionality

### 📊 Engaging Sidebar
- Profile card with stats
- Trending topics
- Category exploration
- Quick navigation links

### ⚡ Smart Actions
- Read Article (direct link to post)
- Comments (links to Giscus comment section)
- Share dropdown with social platforms and copy link

## How to Use

### 1. Enable the Layout

Create a new page or modify an existing one to use the `home-v2` layout:

```yaml
---
layout: home-v2
title: "Social Media Inspired Home"
description: "A modern homepage layout"
---
```

### 2. Configure Site Settings

Add author information to your `_config.yml`:

```yaml
author: "Your Name"
author_avatar: "/assets/images/author.jpg"
description: "Your site description for the profile card"
```

### 3. Set Up Post Metadata

For optimal display, configure your posts with:

```yaml
---
title: "Your Post Title"
author: "Author Name"
author_avatar: "/assets/images/author-avatar.jpg"
featured: true  # For featured badge
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: "post-featured-image.jpg"
reading_time: 5  # minutes (optional, auto-calculated if not provided)
---
```

### 4. Add Category Images (Optional)

Place category-specific images in `/assets/images/categories/`:
- `tutorial.jpg`
- `features.jpg`
- `demo.jpg`
- etc.

If images aren't available, the layout will show emoji placeholders.

## Customization

### CSS Variables

The layout uses CSS custom properties for easy theming:

```css
:root {
  --home-v2-bg: #fafafa;
  --home-v2-card-bg: #ffffff;
  --home-v2-text: #1f2937;
  --home-v2-text-muted: #6b7280;
  --home-v2-border: #e2e8f0;
  --home-v2-primary: #3b82f6;
  --home-v2-accent: #8b5cf6;
  /* ... more variables */
}
```

### Dark Mode

The layout automatically supports dark mode through media queries:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --home-v2-bg: #0f172a;
    --home-v2-card-bg: #1e293b;
    /* ... dark theme variables */
  }
}
```

### JavaScript Features

The layout includes interactive JavaScript features:

- **Stories Navigation**: Click story items to filter posts by category
- **Post Filtering**: Use filter tabs to show all or featured posts
- **View Toggle**: Switch between feed and grid layouts
- **Share Actions**: Native sharing or copy-to-clipboard fallback
- **Load More**: Pagination with smooth loading states

## Responsive Design

The layout is fully responsive:

- **Desktop (1024px+)**: Full layout with sidebar
- **Tablet (768px-1024px)**: Hides sidebar, single column
- **Mobile (<768px)**: Optimized touch interactions, compact design

## Best Practices

### Content Strategy
1. Use featured posts to highlight important content
2. Organize content with clear categories
3. Write engaging excerpts (first paragraph or custom excerpt)
4. Add relevant tags for discoverability

### Performance
1. Optimize images (WebP format recommended)
2. Use appropriate image sizes for different screen sizes
3. Lazy load images for posts beyond the fold

### Accessibility
1. All interactive elements have proper ARIA labels
2. Keyboard navigation support
3. High contrast colors in both light and dark modes
4. Semantic HTML structure

## Switching Between Layouts

You can easily switch between the traditional `home` layout and the new `home-v2` layout:

**Traditional Blog Layout (home.html)**:
```yaml
---
layout: home
---
```

**Social Media Inspired Layout (home-v2.html)**:
```yaml
---
layout: home-v2
---
```

## Browser Support

The home-v2 layout supports all modern browsers:
- Chrome 80+
- Firefox 80+
- Safari 13+
- Edge 80+

Note: Some advanced features like native sharing may not be available on all browsers, with graceful fallbacks provided.

## Troubleshooting

### Stories Not Showing
- Ensure you have categories defined in your posts
- Check that category images exist or emoji fallbacks are working

### JavaScript Not Working
- Verify that `home-v2.js` is properly loaded
- Check browser console for any JavaScript errors
- Ensure the layout class `.home-v2` is present

### Styling Issues
- Check that `_home-v2.scss` is imported in your main stylesheet
- Verify CSS custom properties are supported in your target browsers
- Test dark mode separately

## Examples

Check out these examples of the home-v2 layout in action:
- [Demo Site](http://127.0.0.1:4000/home-v2.html) (when development server is running)

For more advanced customization and troubleshooting, see the [Customization Guide](customization.md) and [Troubleshooting Guide](troubleshooting.md).
