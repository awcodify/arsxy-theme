---
layout: docs
title: Remote Theme Optimization
description: How to prevent whitescreen and FOUC when using Arsxy Theme as a remote theme
---

# Remote Theme Optimization

When using Arsxy Theme as a remote theme (via `remote_theme` in `_config.yml`), you might experience a brief whitescreen or Flash of Unstyled Content (FOUC) during page loads. This document explains why this happens and what we've done to fix it.

## The Problem

When using a remote theme, Jekyll needs to:
1. Download theme files from GitHub
2. Process and compile SCSS files
3. Load CSS in the browser
4. Apply dark mode preferences

This process can create a timing gap where the page shows a white background before the proper theme styles load.

## Our Solution

We've implemented several optimizations to prevent this issue:

### 1. Critical CSS File

We load a separate critical CSS file (`critical.css`) before the main CSS that:
- Sets immediate background colors for both light and dark modes
- Applies proper theme colors before external CSS loads
- Uses the exact same SCSS variables as the main theme files
- Maintains all styles in maintainable SCSS format

### 2. Optimized Loading Strategy

- Main CSS loads synchronously to prevent FOUC
- Non-critical styles load asynchronously for performance
- Color scheme hints help browsers prepare for theme switching

### 3. Enhanced Dark Mode Detection

The dark mode detection script:
- Runs immediately in an IIFE (Immediately Invoked Function Expression)
- Includes error handling for localStorage access
- Adds loading states for smoother transitions
- Works correctly even if external resources are slow to load

### 4. Browser Optimization Hints

Added meta tags to help browsers:
```html
<meta name="color-scheme" content="light dark">
```

This tells browsers to use appropriate default colors while loading.

## Usage as Remote Theme

To use Arsxy Theme as a remote theme, add this to your `_config.yml`:

```yaml
remote_theme: awcodify/arsxy-theme
```

The optimization is automatic - no additional configuration needed.

## Performance Impact

These optimizations have minimal impact:
- Critical CSS adds ~1KB inline (gzipped)
- Dark mode script runs in ~5ms
- Overall page load feels smoother and more responsive

## Troubleshooting

If you still experience issues:

1. **Verify your config**: Ensure `remote_theme: awcodify/arsxy-theme` is in `_config.yml`
2. **Check browser cache**: Clear cache and hard refresh (`Ctrl+F5` or `Cmd+Shift+R`)
3. **Test in incognito**: Try in a private/incognito window
4. **GitHub Pages delay**: Remote theme changes may take 5-10 minutes to propagate

## Technical Details

### Critical CSS Colors

The inline critical CSS uses these exact colors from the theme:

**Light Mode:**
- Background: `#ffffff` (from `$background-color`)
- Text: `#2c3e50` (from `$text-color`)

**Dark Mode:**
- Background: `#0f172a` (from `$dark-background`)
- Text: `#e2e8f0` (from `$dark-text-color`)
- Surface: `#1e293b` (from `$dark-surface`)

### Loading States

The theme uses CSS classes to manage loading:
- `.theme-loading`: Applied during initial theme detection
- `.theme-ready`: Applied when theme is fully configured

This allows for smooth transitions and prevents jarring switches.

## Related Issues

- [GitHub Pages Build Times](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#limitations)
- [Jekyll Remote Themes](https://github.com/benbalter/jekyll-remote-theme)
- [FOUC Prevention Techniques](https://webkit.org/blog/66/the-fouc-problem/)