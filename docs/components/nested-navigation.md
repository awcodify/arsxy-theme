---
layout: docs
title: Nested Navigation
description: Learn how to create multi-level dropdown navigation menus in Arsxy Theme
---

# Nested Navigation

The Arsxy Theme supports multi-level nested navigation with dropdown menus, allowing you to create sophisticated navigation structures for your Jekyll site.

## Configuration

Configure nested navigation in your `_config.yml` file using the `children` property:

```yaml
navigation:
  - title: Home
    url: /
    icon: home
  - title: Documentation
    url: /docs
    icon: book-open
    children:
      - title: Getting Started
        url: /docs/installation
      - title: Configuration
        url: /docs/configuration
      - title: Components
        children:
          - title: Navigation
            url: /docs/components/navigation
          - title: Table of Contents
            url: /docs/components/toc
          - title: Search
            url: /docs/components/search
      - title: Customization
        url: /docs/customization
  - title: Blog
    url: /articles
    icon: edit
    children:
      - title: All Articles
        url: /articles
      - title: Categories
        url: /categories
        icon: folder
      - title: Tags
        url: /tags
        icon: tag
  - title: About
    url: /about
    icon: info
  - title: Contact
    url: /contact
    icon: mail
```

## Features

### Multi-Level Support
- **Top Level**: Primary navigation items
- **Second Level**: Dropdown menu items
- **Third Level**: Submenu items (nested dropdowns)

### Responsive Design
- **Desktop**: Hover-activated dropdown menus
- **Mobile**: Touch-friendly accordions with toggle buttons
- **Keyboard Navigation**: Full accessibility support

### Visual Indicators
- **Dropdown Arrows**: Automatically added to items with children
- **Active States**: Current page highlighting
- **Hover Effects**: Smooth transitions and animations

## Navigation Structure

### Basic Dropdown
Items with `children` automatically become dropdown menus:

```yaml
- title: Services
  url: /services
  children:
    - title: Web Design
      url: /services/web-design
    - title: Development
      url: /services/development
```

### Nested Submenu
Create third-level navigation by adding `children` to second-level items:

```yaml
- title: Products
  url: /products
  children:
    - title: Software
      children:
        - title: Desktop Apps
          url: /products/software/desktop
        - title: Mobile Apps
          url: /products/software/mobile
    - title: Hardware
      url: /products/hardware
```

### Icons in Navigation
Add icons to any level of navigation:

```yaml
- title: Resources
  url: /resources
  icon: folder
  children:
    - title: Downloads
      url: /resources/downloads
      icon: download
    - title: Documentation
      url: /resources/docs
      icon: book-open
```

## Customization

### Styling Dropdowns
Customize dropdown appearance in `_sass/components/_header.scss`:

```scss
.dropdown-menu {
  background: rgba($background-color, 0.95);
  border-radius: $border-radius;
  box-shadow: $shadow-lg;
  min-width: 220px;
}

.dropdown-link {
  padding: $spacing-xs $spacing-sm;
  font-size: 0.9rem;
  
  &:hover {
    background-color: rgba($primary-color, 0.1);
    color: $primary-color;
  }
}
```

### Mobile Behavior
Customize mobile dropdown behavior:

```scss
@media screen and (max-width: $on-palm) {
  .dropdown-menu {
    position: static;
    width: 100%;
    background: rgba($border-color, 0.1);
    box-shadow: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    
    &.active {
      max-height: 300px;
    }
  }
}
```

### JavaScript Hooks
Access navigation events in your custom JavaScript:

```javascript
// Listen for dropdown toggles
document.addEventListener('dropdown:toggle', function(e) {
  console.log('Dropdown toggled:', e.detail.dropdown);
});

// Listen for submenu toggles
document.addEventListener('submenu:toggle', function(e) {
  console.log('Submenu toggled:', e.detail.submenu);
});
```

## Accessibility

The nested navigation includes comprehensive accessibility features:

- **Keyboard Navigation**: Tab through all navigation items
- **ARIA Attributes**: Proper labeling and states
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Descriptive text for dropdown states

### Keyboard Shortcuts
- **Tab**: Navigate through menu items
- **Enter/Space**: Activate dropdown toggles
- **Escape**: Close all open dropdowns
- **Arrow Keys**: Navigate within dropdowns (future enhancement)

## Best Practices

### Navigation Depth
- Limit to 3 levels maximum for usability
- Consider using mega menus for complex structures
- Group related items logically

### Mobile Considerations
- Keep menu labels concise
- Test touch targets are large enough
- Ensure dropdowns don't exceed viewport height

### Performance
- Icons are automatically optimized SVGs
- Dropdowns use CSS transforms for smooth animations
- JavaScript is loaded asynchronously

## Troubleshooting

### Dropdowns Not Working
1. Check JavaScript is loaded: `initNestedNav()` function exists
2. Verify CSS classes are applied correctly
3. Ensure navigation structure in `_config.yml` is valid YAML

### Mobile Menu Issues
1. Test on actual devices, not just browser dev tools
2. Check touch event handlers are working
3. Verify viewport meta tag is set correctly

### Styling Problems
1. Check CSS specificity issues
2. Verify SCSS variables are defined
3. Test in different browsers

## Examples

### E-commerce Site
```yaml
navigation:
  - title: Shop
    url: /shop
    children:
      - title: Categories
        children:
          - title: Electronics
            url: /shop/electronics
          - title: Clothing
            url: /shop/clothing
          - title: Books
            url: /shop/books
      - title: Brands
        url: /shop/brands
      - title: Sale
        url: /shop/sale
```

### Documentation Site
```yaml
navigation:
  - title: Docs
    url: /docs
    children:
      - title: Getting Started
        children:
          - title: Installation
            url: /docs/installation
          - title: Quick Start
            url: /docs/quick-start
      - title: API Reference
        children:
          - title: Authentication
            url: /docs/api/auth
          - title: Endpoints
            url: /docs/api/endpoints
```

The nested navigation system provides a flexible and accessible way to organize complex site structures while maintaining excellent user experience across all devices.
