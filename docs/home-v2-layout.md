---
title: "Home-v2 Layout: Social Media Inspired Design"
description: "Learn how to use the social media-inspired home-v2 layout for modern, engaging blog homepages"
layout: docs
---

# Home-v2 Layout: Social Media Inspired Design

The `home-v2` layout provides a modern, social media-inspired alternative to the traditional blog homepage. This layout encourages visitors to explore content through Instagram-style stories, engaging post cards, and an elegant sidebar with comprehensive interactive features.

## Features

### 🎯 Instagram-Style Stories Navigation
- Category-based story navigation with gradient rings and visual feedback
- Smooth scrolling and interactive filtering by category
- Touch-friendly design optimized for mobile interactions
- Custom imagery support with emoji fallbacks for categories
- Gradient ring animations for active and featured categories

### 📱 Social Media-Style Post Cards
- Clean, card-based design with author avatars and personal touch
- Reading time estimates and publication dates for context
- Featured post badges to highlight important content
- Interactive action buttons for seamless engagement
- Responsive design that adapts to different screen sizes

### 🔧 Interactive Controls & Views
- **Filter Tabs**: All Posts, Featured (quick content filtering)
- **View Toggles**: Feed view (vertical scrolling) vs Grid view (Pinterest-style)
- **Progressive Loading**: Smooth pagination without page refreshes
- **View Persistence**: Remembers user's preferred view mode
- **Performance Optimized**: Only loads content as needed

### 📊 Engaging Sidebar Experience
- **Profile Card**: Author information with site statistics
- **Site Statistics**: Dynamic metrics showcase (total posts, categories, tags)
- **Popular Tags**: Dynamic tag cloud with smart styling
- **Trending Categories**: Highlight most popular content areas
- **Quick Navigation**: Fast access to important pages
- **Content Discovery**: Widgets that keep readers engaged

### ⚡ Smart Action Buttons
- **Read Article**: Direct navigation to the full post
- **Comments**: Jump straight to the Giscus comment section
- **Share Dropdown**: Native sharing with fallback to copy-to-clipboard
- **Social Integration**: Twitter, Facebook, LinkedIn sharing options
- **Accessibility**: Full keyboard navigation and ARIA labels

### 🎨 Advanced Theming & Dark Mode
- **Automatic Dark Mode**: Respects user's OS settings
- **CSS Custom Properties**: 20+ customizable theme variables
- **High Contrast**: Readable in both light and dark modes
- **System Integration**: Seamless theme switching
- **Consistent Experience**: All components support both themes

### ⚡ Performance & Technical Excellence
- **Lazy Loading**: Images load only when needed
- **Optimized JavaScript**: Minimal, efficient interactions
- **Progressive Enhancement**: Works with JavaScript disabled
- **Semantic HTML**: Screen reader friendly structure
- **Modern Browser Support**: Chrome 80+, Firefox 80+, Safari 13+, Edge 80+

## How to Use

### 1. Enable the Layout

Create a new page or modify an existing one to use the `home-v2` layout:

```yaml
---
layout: home-v2
title: "Welcome to My Blog"
description: "A modern, social media-inspired homepage"
---
```

### 2. Configure Site Settings

Add comprehensive author information to your `_config.yml`:

```yaml
author: "Your Name"
author_avatar: "/assets/images/author.jpg"
description: "Your engaging site description for the profile card"

# Optional: Homepage widgets configuration
home:
  stats_widget: 
    enabled: true
    title: "Site Statistics"

# Social media links for profile card
social:
  twitter: "yourusername"
  github: "yourusername"
  linkedin: "yourusername"
```

### 3. Optimize Your Posts

For the best experience, use comprehensive post frontmatter:

```yaml
---
title: "Your Post Title"
author: "Author Name"
author_avatar: "/assets/images/author-avatar.jpg"
featured: true  # For featured badge and enhanced visibility
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: "post-featured-image.jpg"
description: "Engaging post description for card previews"
reading_time: 5  # minutes (optional, auto-calculated if not provided)
---
```

### 4. Add Category Images (Optional)

Place category-specific images in `/assets/images/categories/` for enhanced visual appeal:
- `tutorial.jpg` or `tutorial.webp`
- `features.jpg` or `features.webp`
- `demo.jpg` or `demo.webp`
- etc.

The layout gracefully falls back to emoji representations and default icons if images aren't available.

### 5. Configure Sidebar Widgets (Optional)

Customize sidebar widgets in your `_config.yml`:

```yaml
# Sidebar configuration
sidebar:
  stats:
    show_posts: true
    show_categories: true
    show_tags: true
    show_reading_time: true
  
  popular_tags:
    limit: 10
    show_count: true
  
  trending_categories:
    limit: 6
    show_count: true
```

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

The layout includes comprehensive interactive JavaScript features:

- **Stories Navigation**: Click story items to filter posts by category with smooth animations
- **Post Filtering**: Use filter tabs to show all posts or featured posts only
- **View Toggle**: Switch between feed view (vertical) and grid view (Pinterest-style) with persistence
- **View Persistence**: Remembers user's preferred view mode using localStorage
- **Share Actions**: Native Web Share API with fallback to copy-to-clipboard
- **Progressive Loading**: Smooth pagination with loading states
- **Touch Interactions**: Optimized for mobile with proper touch targets
- **Keyboard Navigation**: Full accessibility support with proper focus management
- **Responsive Animations**: Smooth transitions and micro-interactions
- **Performance Optimization**: Debounced interactions and efficient DOM updates

### Interactive Features Details

#### View Toggle Functionality
- **Feed View**: Traditional blog layout with vertical scrolling (default)
- **Grid View**: Pinterest-style grid layout for visual content browsing
- **Smart Persistence**: Saves user preference and restores on page reload
- **Responsive Grid**: Automatically adjusts columns based on screen size
- **Smooth Transitions**: Animated switching between view modes

#### Filter System
- **All Posts**: Complete content library display
- **Featured Posts**: Curated content highlighting
- **Category Filtering**: Stories navigation provides category-based filtering
- **Real-time Updates**: Instant content filtering without page refreshes
- **Visual Feedback**: Clear indication of active filters and states

#### Share Integration
- **Native Sharing**: Uses Web Share API where available
- **Social Platforms**: Direct sharing to Twitter, Facebook, LinkedIn
- **Copy Link**: Fallback copy-to-clipboard functionality
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **User Feedback**: Visual confirmation of successful actions

## Responsive Design

The layout is fully responsive:

- **Desktop (1024px+)**: Full layout with sidebar
- **Tablet (768px-1024px)**: Hides sidebar, single column
- **Mobile (<768px)**: Optimized touch interactions, compact design

## Best Practices

### Content Strategy
1. **Use Featured Posts Strategically**: Highlight your best content for maximum visibility in the featured filter
2. **Organize with Clear Categories**: Create logical content groupings for intuitive stories navigation
3. **Write Engaging Excerpts**: First paragraphs become card previews, so make them compelling
4. **Tag Strategically**: Popular tags widget showcases your content themes and improves discoverability
5. **Balance Content Types**: Mix different post types to create visual variety in the feed
6. **Regular Publishing**: Maintain consistent posting schedule to keep the homepage fresh

### Visual Optimization
1. **Optimize Images**: Use WebP format and appropriate sizes for faster loading
2. **Author Avatars**: Use personal photos to create connection and trust with readers
3. **Category Images**: Custom imagery enhances stories navigation visual appeal
4. **Consistent Branding**: Maintain visual consistency across all elements and components
5. **Featured Images**: Use high-quality, consistent aspect ratios for post cards
6. **Color Harmony**: Ensure category colors work well with your overall theme

### Performance Optimization
1. **Image Compression**: Compress images for faster loading without quality loss
2. **Content Planning**: Balance featured vs. regular posts for optimal performance
3. **Mobile Testing**: Ensure great experience on all devices and screen sizes
4. **Browser Testing**: Test across different browsers for consistent functionality
5. **Lazy Loading**: Leverage built-in lazy loading for images beyond the fold
6. **Caching Strategy**: Use appropriate caching headers for static assets

### User Experience
1. **Responsive Design**: Test thoroughly on mobile, tablet, and desktop viewports
2. **Touch Interactions**: Ensure all interactive elements work well on touch devices
3. **Loading States**: Provide clear feedback during content loading and filtering
4. **Error Handling**: Graceful fallbacks when JavaScript is disabled or fails
5. **Accessibility**: Test with screen readers and keyboard-only navigation
6. **Page Speed**: Monitor and optimize Core Web Vitals for better user experience

### SEO & Discoverability
1. **Structured Data**: Ensure proper schema markup for posts and author information
2. **Meta Descriptions**: Write compelling descriptions that work as card previews
3. **URL Structure**: Use clear, descriptive URLs for categories and posts
4. **Internal Linking**: Leverage the sidebar widgets for strategic internal linking
5. **Social Sharing**: Optimize for social media sharing with proper Open Graph tags
6. **XML Sitemap**: Keep your sitemap updated with new content and categories

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

The home-v2 layout supports all modern browsers with graceful degradation:
- **Chrome 80+** - Full feature support including native sharing
- **Firefox 80+** - Complete functionality with all interactive features
- **Safari 13+** - Full compatibility including iOS Safari
- **Edge 80+** - Complete feature set with Chromium engine

**Advanced Features**: Some features like native Web Share API may not be available on all browsers, with smart fallbacks provided for universal compatibility.

## Roadmap & Future Features

The home-v2 layout is continuously evolving. Planned enhancements include:

### Coming Soon
- **Enhanced Analytics Integration**: Deeper insights into content performance and user engagement
- **Advanced Filtering Options**: More granular content discovery with custom filter categories
- **Social Media Integration**: Direct posting and syndication features for major platforms
- **User Personalization**: Customizable layouts and individual user preferences
- **Performance Monitoring**: Built-in Core Web Vitals tracking and optimization suggestions

### Under Consideration
- **Real-time Updates**: Live content updates without page refreshes
- **Progressive Web App**: Enhanced offline functionality and app-like experience
- **Advanced Search**: Full-text search integration with the stories interface
- **Content Recommendations**: AI-powered content suggestions based on reading patterns
- **Multi-language Support**: Internationalization for global audiences

### Community Requests
We actively consider community feedback for future development. Popular requests include:
- Custom story animations and transitions
- Integration with external content management systems
- Advanced SEO optimization tools
- Enhanced social sharing analytics
- Custom widget development framework

**Stay Updated**: Follow our [GitHub repository](https://github.com/awcodify/arsxy-theme) for the latest updates and release announcements.

## Troubleshooting

### Stories Not Showing
- **Check Categories**: Ensure you have categories defined in your posts' frontmatter
- **Verify Images**: Check that category images exist in `/assets/images/categories/` or confirm emoji fallbacks are working
- **Category Limit**: The layout displays a maximum of 8 categories in stories navigation
- **Post Requirements**: Categories need at least one post with content to appear in stories

### JavaScript Features Not Working
- **Verify Script Loading**: Ensure `home-v2.js` is properly loaded and accessible
- **Check Console**: Look for JavaScript errors in browser developer console
- **Layout Class**: Confirm the layout class `.home-v2` is present in the HTML
- **DOM Elements**: Verify required DOM elements exist (filter tabs, view toggles, etc.)
- **Browser Support**: Confirm browser supports modern JavaScript features

### Styling Issues
- **SCSS Import**: Check that `_home-v2.scss` is imported in your main stylesheet
- **CSS Variables**: Verify CSS custom properties are supported in target browsers
- **Dark Mode**: Test both light and dark modes separately for styling consistency
- **Responsive Design**: Test across different screen sizes and device orientations
- **Cache Issues**: Clear browser cache and rebuild site to see style changes

### Performance Issues
- **Image Optimization**: Ensure images are properly compressed and sized
- **Loading Speed**: Check for large files or unoptimized assets
- **JavaScript Performance**: Monitor for memory leaks or excessive DOM manipulation
- **Network Issues**: Verify all assets are loading correctly from CDN or local sources
- **Bundle Size**: Check JavaScript and CSS bundle sizes for optimization opportunities

### View Toggle Problems
- **LocalStorage**: Ensure browser supports localStorage for view persistence
- **Grid Layout**: Verify CSS Grid support in target browsers
- **Toggle Buttons**: Check that view toggle buttons have proper data attributes
- **Container Elements**: Confirm posts container has correct CSS classes

### Share Functionality Issues
- **Web Share API**: Native sharing requires HTTPS and modern browser support
- **Fallback System**: Verify copy-to-clipboard fallback works when native sharing unavailable
- **Social Links**: Check that social sharing URLs are properly formatted
- **Permissions**: Ensure any required permissions are granted for native sharing

### Mobile Responsiveness
- **Touch Targets**: Verify all interactive elements meet minimum touch target sizes (44px)
- **Viewport Meta**: Ensure proper viewport meta tag is present
- **Touch Events**: Test touch interactions work correctly on mobile devices
- **Scroll Performance**: Check for smooth scrolling and no layout shifts

### Content Display Issues
- **Featured Posts**: Verify featured posts have `featured: true` in frontmatter
- **Author Information**: Check author names and avatar paths are correct
- **Reading Time**: Ensure reading time calculation is working properly
- **Post Excerpts**: Verify post excerpts or first paragraphs display correctly

### Getting Help
If you're still experiencing issues:

1. **Check Documentation**: Review the [complete documentation](index.md) for additional guidance
2. **Browser DevTools**: Use browser developer tools to inspect HTML, CSS, and JavaScript
3. **Community Support**: Ask questions in [GitHub Discussions](https://github.com/awcodify/arsxy-theme/discussions)
4. **Bug Reports**: Report bugs via [GitHub Issues](https://github.com/awcodify/arsxy-theme/issues)
5. **Example Sites**: Compare with working examples and demo implementations

## Examples & Implementation

### Live Demo
- **[Demo Site](/v2/)**: Experience the layout in action with sample content
- **[Development Server](http://127.0.0.1:4000/v2/)**: Local demo when development server is running

### Sample Configurations

#### Minimal Setup
```yaml
---
layout: home-v2
title: "My Blog"
---
```

#### Full Configuration
```yaml
---
layout: home-v2
title: "Welcome to My Social Blog"
description: "A modern, engaging homepage for my content"
sidebar: true
featured_limit: 6
categories_limit: 8
---
```

#### Advanced Post Setup
```yaml
---
title: "Building Modern Web Experiences"
author: "Jane Developer"
author_avatar: "/assets/images/authors/jane.jpg"
featured: true
categories: [Web Development, UI/UX, Modern Design]
tags: [javascript, css, responsive, user-experience]
image: "web-experiences-hero.webp"
description: "Learn how to create engaging, modern web experiences that delight users and drive engagement."
reading_time: 8
date: 2025-05-30
---
```

### Integration Examples

#### With Jekyll Collections
```yaml
# _config.yml
collections:
  tutorials:
    output: true
    permalink: /:collection/:name/
  
# Use in home-v2 layout
layout: home-v2
include_collections: ['tutorials']
```

#### With Custom Filters
```javascript
// Custom filtering for specific categories
document.addEventListener('DOMContentLoaded', function() {
  const customFilters = ['tutorial', 'featured', 'popular'];
  // Implementation for custom filter logic
});
```

### Deployment Considerations

#### GitHub Pages
```yaml
# _config.yml for GitHub Pages
plugins:
  - jekyll-sitemap
  - jekyll-seo-tag
  
# Ensure proper base URL
url: "https://yourusername.github.io"
baseurl: "/your-repository-name"
```

#### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "bundle exec jekyll build"
  publish = "_site"

[build.environment]
  RUBY_VERSION = "3.0.0"
```

For more implementation examples and advanced customization, see:
- **[Customization Guide](customization.md)** - Advanced theming and modifications
- **[Performance Guide](performance.md)** - Optimization best practices
- **[Contributing Guide](contributing.md)** - How to contribute improvements
