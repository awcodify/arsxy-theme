---
layout: post
title: "New Features in Arsxy Theme: Related Posts, Social Sharing, and Search"
categories: [Features, updates]
tags: [related-posts, search, social-sharing, jekyll, theme]
description: "Explore the newest features added to Arsxy Theme: intelligent related posts suggestions, social sharing buttons for enhanced content distribution, and a powerful search functionality."
image: "new-features-update.svg"
---

We're excited to announce three powerful new features that have been added to the Arsxy Theme to enhance user experience and content discoverability. These additions make your Jekyll-powered site more interactive, shareable, and navigable.

## Smart Related Posts

At the end of each article, readers will now find a "Related Articles" section that intelligently suggests content based on tags and categories. This feature helps keep visitors engaged by showing them content that's relevant to what they're currently reading.

{% include image.html url="related-posts-example.svg" alt="Smart Related Posts Feature" caption="The new Related Posts section shows relevant content to readers" %}

### Key Benefits:
- **Tag-based Suggestions**: Articles with matching tags are prioritized
- **Fallback System**: If no matching tags are found, recent posts are shown
- **Configurable**: Easily adjust the number of related posts and other settings
- **Visual Design**: Clean grid layout with featured images (when available)

To configure the related posts feature, you can adjust these settings in your `_config.yml`:

```yaml
# Related posts configuration
related_posts:
  enabled: true
  title: "Related Articles"
  count: 3
  min_common_tags: 1
```

## Social Sharing Buttons

Make your content more shareable with the new social sharing buttons that appear below each post. These buttons make it easy for readers to share your content across various social platforms with a single click.

### Supported Platforms:
- Twitter/X
- Facebook
- LinkedIn
- Reddit
- Email
- Direct link copying

The sharing buttons are designed to be visually appealing while maintaining the clean aesthetic of the Arsxy Theme. On mobile devices, they automatically collapse to icon-only versions to save space.

```yaml
# Social sharing configuration
social_sharing:
  enabled: true
  title: "Share this post"
```

## Powerful Search Functionality

Perhaps the most significant addition is the new search functionality. Users can now quickly find content by clicking the search icon in the header, which opens a centered search modal. For more advanced searches, they can access the dedicated search page.

### Search Features:
- **Keyboard Shortcut**: Press `Ctrl+S` (or `Cmd+S` on Mac) to instantly open the search modal
- **Instant Search**: Results appear as you type
- **Highlighted Matches**: Search terms are highlighted in results
- **Context Preview**: See the surrounding content for each match
- **Full-text Search**: Searches across titles, content, tags, and categories
- **Advanced Search Page**: For more complex search queries

The search functionality is powered by a client-side JavaScript implementation that creates a search index of your site content, allowing for fast and responsive searching without requiring any external services.

## Conclusion

These new features significantly enhance the user experience of sites using the Arsxy Theme. By improving content discovery through related posts, enabling easy sharing, and adding powerful search capabilities, your Jekyll site becomes more engaging and user-friendly.

We're committed to continuously improving the Arsxy Theme with features that help creators showcase their content in the best possible way while providing visitors with an optimal reading experience.

Give these new features a try and let us know what you think!