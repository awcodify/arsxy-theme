---
layout: docs
title: Responsive Design
description: Learn how the Arsxy Theme implements responsive design for all screen sizes
permalink: /docs/responsive-design/
---
Arsxy Theme is built with a mobile-first responsive design approach, ensuring your site looks great and functions perfectly across all devices and screen sizes, from smartphones to desktop monitors.

## Mobile-First Approach

The theme follows mobile-first principles, meaning:

1. The base styles are designed for mobile devices
2. Media queries are used to enhance the layout for larger screens
3. Core functionality works on all devices without compromise
4. Performance is prioritized on mobile connections

## Responsive Breakpoints

The theme uses these breakpoints for responsive design:

```scss
// In _sass/_variables.scss
$breakpoints: (
  'xs': 0,
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1400px
);
```

### Using Breakpoints in SCSS

The theme includes mixins to easily use these breakpoints:

```scss
// Example usage
.my-component {
  padding: 1rem;
  
  @include media-breakpoint-up(md) {
    padding: 2rem;
  }
  
  @include media-breakpoint-up(lg) {
    padding: 3rem;
  }
}
```

## Responsive Typography

Typography automatically scales across device sizes:

```scss
// Base font size for mobile
html {
  font-size: 16px;
  
  @include media-breakpoint-up(md) {
    font-size: 17px;
  }
  
  @include media-breakpoint-up(lg) {
    font-size: 18px;
  }
}

// Responsive headings
h1 {
  font-size: 1.875rem;
  
  @include media-breakpoint-up(md) {
    font-size: 2.25rem;
  }
  
  @include media-breakpoint-up(lg) {
    font-size: 2.5rem;
  }
}
```

## Responsive Grid System

The theme uses a flexible grid system based on CSS Grid and Flexbox:

```scss
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gap, 1rem);
  
  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(8, 1fr);
  }
  
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(12, 1fr);
  }
}
```

### Grid Usage Example

```html
<div class="grid">
  <div class="grid-item col-span-4 md:col-span-4 lg:col-span-3">
    <!-- Content -->
  </div>
  <div class="grid-item col-span-4 md:col-span-4 lg:col-span-9">
    <!-- Content -->
  </div>
</div>
```

## Responsive Navigation

The navigation system adapts to different screen sizes:

- **Mobile**: Collapsible hamburger menu
- **Tablet**: Compact horizontal menu
- **Desktop**: Full horizontal menu with dropdowns

The mobile menu is implemented using accessible markup and JavaScript:

```html
<button class="menu-toggle" aria-expanded="false" aria-controls="primary-menu">
  <span class="sr-only">Menu</span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
</button>

<nav id="primary-menu" class="site-navigation" aria-label="Primary Navigation">
  <!-- Navigation items -->
</nav>
```

## Responsive Images

Images automatically adapt to their containers:

```scss
img {
  max-width: 100%;
  height: auto;
}
```

For more control, the theme includes a responsive image component:

```html
{% include image.html 
   src="/assets/images/example.jpg" 
   srcset="/assets/images/example-small.jpg 400w, 
           /assets/images/example-medium.jpg 800w, 
           /assets/images/example-large.jpg 1200w"
   sizes="(max-width: 600px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"
   alt="Responsive image example" 
   loading="lazy" 
%}
```

## Fluid Containers

Content containers scale proportionally:

```scss
.container {
  width: 100%;
  padding-right: var(--container-padding);
  padding-left: var(--container-padding);
  margin-right: auto;
  margin-left: auto;
  
  @include media-breakpoint-up(sm) {
    max-width: 540px;
  }
  
  @include media-breakpoint-up(md) {
    max-width: 720px;
  }
  
  @include media-breakpoint-up(lg) {
    max-width: 960px;
  }
  
  @include media-breakpoint-up(xl) {
    max-width: 1140px;
  }
  
  @include media-breakpoint-up(xxl) {
    max-width: 1320px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: var(--container-padding);
  padding-left: var(--container-padding);
  margin-right: auto;
  margin-left: auto;
}
```

## Responsive Layout Components

### Cards

Cards adjust their layout based on screen size:

```scss
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Blog Post Lists

Post lists change from a single column to multiple columns:

```scss
.post-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include media-breakpoint-up(lg) {
    // Two-thirds for content, one-third for sidebar
    &.with-sidebar {
      grid-template-columns: 2fr 1fr;
    }
    
    // Equal columns for post grids
    &.post-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
```

### Sidebar Positioning

Sidebar positioning changes based on screen size:

```scss
.layout-with-sidebar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @include media-breakpoint-up(lg) {
    grid-template-columns: 7fr 3fr;
    
    &.sidebar-left {
      grid-template-columns: 3fr 7fr;
      
      .main-content {
        order: 2;
      }
      
      .sidebar {
        order: 1;
      }
    }
  }
}
```

## Responsive Tables

Tables adapt to small screens with horizontal scrolling:

```scss
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

For very complex tables, the theme provides a card-based layout on mobile:

```scss
.table-responsive-cards {
  @include media-breakpoint-down(md) {
    thead {
      display: none;
    }
    
    tr {
      display: block;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
    }
    
    td {
      display: block;
      text-align: right;
      padding: 0.75rem;
      
      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
      }
    }
  }
}
```

Usage example:

```html
<div class="table-responsive-cards">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Name">John Doe</td>
        <td data-label="Position">Developer</td>
        <td data-label="Office">New York</td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</div>
```

## Forms

Forms adapt to screen size:

```scss
.form-group {
  margin-bottom: 1rem;
  
  @include media-breakpoint-up(md) {
    display: flex;
    align-items: center;
    
    label {
      width: 30%;
      padding-right: 1rem;
      margin-bottom: 0;
    }
    
    .form-control {
      width: 70%;
    }
  }
}
```

## Responsive Utility Classes

The theme includes utility classes for responsive design:

```scss
// Hide elements based on screen size
.hide-xs { @include media-breakpoint-down(xs) { display: none !important; } }
.hide-sm { @include media-breakpoint-down(sm) { display: none !important; } }
.hide-md { @include media-breakpoint-down(md) { display: none !important; } }
.hide-lg { @include media-breakpoint-down(lg) { display: none !important; } }
.hide-xl { @include media-breakpoint-down(xl) { display: none !important; } }

// Show elements based on screen size
.show-xs { @include media-breakpoint-up(xs) { display: block !important; } }
.show-sm { @include media-breakpoint-up(sm) { display: block !important; } }
.show-md { @include media-breakpoint-up(md) { display: block !important; } }
.show-lg { @include media-breakpoint-up(lg) { display: block !important; } }
.show-xl { @include media-breakpoint-up(xl) { display: block !important; } }

// Text alignment based on screen size
.text-left-xs { @include media-breakpoint-up(xs) { text-align: left !important; } }
.text-center-md { @include media-breakpoint-up(md) { text-align: center !important; } }
.text-right-lg { @include media-breakpoint-up(lg) { text-align: right !important; } }
```

## Testing Responsive Designs

The theme is tested on multiple devices and screen sizes:

1. **Mobile phones**: Both small (iPhone SE) and large (iPhone Pro Max)
2. **Tablets**: iPad mini, iPad, iPad Pro
3. **Laptops**: 13" through 16" screens
4. **Desktops**: 24" and larger monitors
5. **Ultra-wide displays**: 21:9 and wider aspect ratios

## Best Practices for Responsive Design

When customizing the theme, follow these best practices:

1. **Start mobile-first**: Design for mobile first, then enhance for larger screens
2. **Use relative units**: Prefer `rem`, `em`, and percentages over pixels
3. **Test real devices**: Don't rely solely on browser resizing
4. **Consider touch targets**: Ensure buttons and links are at least 44x44px
5. **Mind the font size**: Keep text readable (16px minimum for body text)
6. **Watch for overflow**: Ensure content doesn't break layouts
7. **Optimize images**: Use appropriate sizes and formats for different screens
8. **Consider network conditions**: Optimize for mobile networks
9. **Use feature detection**: Don't assume device capabilities
10. **Test accessibility**: Ensure usability across all devices

## Customizing Responsive Behavior

### Changing Breakpoints

To modify the theme's breakpoints, edit the `$breakpoints` map in your custom SCSS:

```scss
// In _sass/_custom-variables.scss
$breakpoints: (
  'xs': 0,
  'sm': 600px,    // Changed from 576px
  'md': 800px,    // Changed from 768px
  'lg': 1000px,   // Changed from 992px
  'xl': 1280px,   // Changed from 1200px
  'xxl': 1536px   // Changed from 1400px
);
```

### Custom Responsive Components

Create custom responsive components using the theme's mixins:

```scss
// In _sass/_custom.scss
.my-custom-component {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  
  @include media-breakpoint-up(md) {
    flex-direction: row;
    padding: 2rem;
  }
  
  .component-image {
    width: 100%;
    margin-bottom: 1rem;
    
    @include media-breakpoint-up(md) {
      width: 40%;
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
  
  .component-content {
    width: 100%;
    
    @include media-breakpoint-up(md) {
      width: 60%;
    }
  }
}
```

## Responsive Design Tools

When developing with Arsxy Theme, these tools can help with responsive design:

1. **Browser Dev Tools**: Use the responsive design mode
2. **Browser Extensions**: Such as Responsive Viewer for Chrome
3. **Physical Devices**: Test on real phones and tablets
4. **BrowserStack/LambdaTest**: For testing across many devices
5. **Lighthouse**: For performance testing on mobile

## Responsive Design and Accessibility

Responsive design impacts accessibility:

1. **Keyboard Navigation**: Ensure keyboard focus is visible on all screens
2. **Touch Targets**: Make interactive elements large enough (44x44px minimum)
3. **Font Sizes**: Keep text readable (avoid small fonts on mobile)
4. **Content Reordering**: Maintain logical reading order when rearranging content
5. **Zoom Support**: Support up to 400% zoom without breaking layouts

## Related Resources

- [CSS Variables Reference](/docs/css-variables/)
- [Typography](/docs/typography/)
- [Performance Optimization](/docs/performance/)
- [Layout Components](/docs/components/layout/)

## Homepage Responsive Layout

The homepage uses a modern, responsive grid and flexbox system:
- **Hero section**: Scales headline and buttons for all screen sizes
- **Featured posts**: 1 full-width + 2 grid cards, stack vertically on mobile
- **Article list**: Single-row cards with right-aligned thumbnails, become stacked on small screens
- **Sidebar**: Moves below main content on mobile

All breakpoints and grid settings are controlled by SCSS variables and mixins. See the homepage SCSS for details.