---
layout: docs
title: CSS Variables Reference
description: Complete reference for CSS custom properties (variables) used in Arsxy Theme
permalink: /docs/css-variables/
---
Arsxy Theme uses CSS custom properties (variables) to make customization simple and consistent. This reference documents all available CSS variables and how to use them to customize your site's appearance.

## Overview

CSS variables (officially called CSS custom properties) allow you to define reusable values that can be used throughout your stylesheets. The Arsxy Theme uses a comprehensive variable system to control colors, spacing, typography, and more.

## Using CSS Variables

To override any CSS variable, add your custom values to your `_sass/_custom.scss` file:

```scss
:root {
  --primary-color: #3490dc;
  --heading-font-family: 'Montserrat', sans-serif;
}
```

## Color Variables

### Base Colors

```css
/* Primary brand colors */
--primary-color: #3182ce;
--primary-color-rgb: 49, 130, 206;  /* RGB values for rgba() usage */
--primary-color-dark: #2c5282;
--primary-color-light: #63b3ed;

/* Accent color */
--accent-color: #805ad5;
--accent-color-rgb: 128, 90, 213;
--accent-color-dark: #553c9a;
--accent-color-light: #b794f4;

/* Neutral colors */
--background-color: #ffffff;
--text-color: #2d3748;
--light-text-color: #718096;
--border-color: #e2e8f0;
--light-bg-color: #f7fafc;
```

### State Colors

```css
/* Feedback colors */
--success-color: #38a169;
--warning-color: #dd6b20;
--danger-color: #e53e3e;
--info-color: #4299e1;

/* Interactive colors */
--link-color: #3182ce;
--link-hover-color: #2c5282;
--focus-ring-color: rgba(49, 130, 206, 0.3);
```

### Dark Mode Colors

```css
.dark-mode {
  --background-color: #1a202c;
  --text-color: #f7fafc;
  --light-text-color: #a0aec0;
  --border-color: #2d3748;
  --light-bg-color: #2d3748;
  
  --link-color: #63b3ed;
  --link-hover-color: #90cdf4;
  --focus-ring-color: rgba(99, 179, 237, 0.4);
}
```

### Code Colors

```css
/* Light mode code */
--code-bg: #f5f7fa;
--code-color: #2d3748;
--code-comment: #718096;
--code-keyword: #805ad5;
--code-function: #3182ce;
--code-string: #38a169;
--code-number: #dd6b20;
--code-operator: #c53030;
--code-class: #2b6cb0;
--code-variable: #2c5282;

/* Dark mode code */
.dark-mode {
  --code-bg: #1a202c;
  --code-color: #e2e8f0;
  --code-comment: #718096;
  --code-keyword: #b794f4;
  --code-function: #63b3ed;
  --code-string: #68d391;
  --code-number: #fbd38d;
  --code-operator: #fc8181;
  --code-class: #90cdf4;
  --code-variable: #a0aec0;
}
```

## Typography Variables

### Font Families

```css
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
--font-family-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--font-family-serif: "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;

--heading-font-family: var(--font-family-sans);
--body-font-family: var(--font-family-sans);
--code-font-family: var(--font-family-mono);
```

### Font Sizes

```css
/* Base size */
--font-size-base: 1rem;          /* 16px */

/* Type scale */
--font-size-xs: 0.75rem;         /* 12px */
--font-size-sm: 0.875rem;        /* 14px */
--font-size-md: 1rem;            /* 16px */
--font-size-lg: 1.125rem;        /* 18px */
--font-size-xl: 1.25rem;         /* 20px */
--font-size-2xl: 1.5rem;         /* 24px */
--font-size-3xl: 1.875rem;       /* 30px */
--font-size-4xl: 2.25rem;        /* 36px */
--font-size-5xl: 3rem;           /* 48px */
```

### Line Heights and Letter Spacing

```css
/* Line heights */
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;

--line-height-body: 1.7;
--line-height-headings: 1.2;

/* Letter spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

## Spacing Variables

```css
/* Base spacing unit */
--spacing-unit: 1rem;            /* 16px */

/* Spacing scale */
--spacing-0: 0;
--spacing-1: 0.25rem;            /* 4px */
--spacing-2: 0.5rem;             /* 8px */
--spacing-3: 0.75rem;            /* 12px */
--spacing-4: 1rem;               /* 16px */
--spacing-5: 1.25rem;            /* 20px */
--spacing-6: 1.5rem;             /* 24px */
--spacing-8: 2rem;               /* 32px */
--spacing-10: 2.5rem;            /* 40px */
--spacing-12: 3rem;              /* 48px */
--spacing-16: 4rem;              /* 64px */
--spacing-20: 5rem;              /* 80px */
--spacing-24: 6rem;              /* 96px */
--spacing-32: 8rem;              /* 128px */
```

## Layout Variables

```css
/* Container width */
--container-width: 1200px;
--container-narrow-width: 800px;
--container-wide-width: 1400px;

/* Breakpoints */
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;

/* Z-index layers */
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

## Border and Shadow Variables

```css
/* Borders */
--border-width: 1px;
--border-width-md: 2px;
--border-width-lg: 4px;
--border-style: solid;
--border-color: #e2e8f0;
--border-radius-sm: 0.125rem;     /* 2px */
--border-radius: 0.25rem;         /* 4px */
--border-radius-md: 0.375rem;     /* 6px */
--border-radius-lg: 0.5rem;       /* 8px */
--border-radius-xl: 1rem;         /* 16px */
--border-radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
--shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
--shadow-none: none;
```

## Transition Variables

```css
/* Transitions */
--transition-fastest: 0.05s;
--transition-fast: 0.1s;
--transition-normal: 0.2s;
--transition-slow: 0.3s;
--transition-slowest: 0.5s;

/* Easing functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-linear: linear;
```

## Component-specific Variables

### Header Variables

```css
--header-height: 4rem;
--header-background: var(--background-color);
--header-border-color: var(--border-color);
--header-shadow: var(--shadow);
```

### Footer Variables

```css
--footer-background: var(--light-bg-color);
--footer-text-color: var(--light-text-color);
--footer-border-color: var(--border-color);
--footer-spacing: var(--spacing-8);
```

### Button Variables

```css
--button-padding-x: 1rem;
--button-padding-y: 0.5rem;
--button-border-radius: var(--border-radius);
--button-font-weight: var(--font-weight-medium);
--button-transition: all var(--transition-normal) var(--ease-in-out);

--button-primary-bg: var(--primary-color);
--button-primary-text: white;
--button-primary-border: var(--primary-color);
--button-primary-hover-bg: var(--primary-color-dark);
--button-primary-hover-text: white;
--button-primary-hover-border: var(--primary-color-dark);

--button-secondary-bg: transparent;
--button-secondary-text: var(--primary-color);
--button-secondary-border: var(--primary-color);
--button-secondary-hover-bg: var(--primary-color);
--button-secondary-hover-text: white;
--button-secondary-hover-border: var(--primary-color);

--button-disabled-opacity: 0.65;
```

### Form Variables

```css
--input-padding-x: 0.75rem;
--input-padding-y: 0.5rem;
--input-border-radius: var(--border-radius);
--input-border-color: var(--border-color);
--input-background: var(--background-color);
--input-focus-border-color: var(--primary-color-light);
--input-focus-ring: 0 0 0 3px var(--focus-ring-color);
--input-placeholder-color: var(--light-text-color);
--input-disabled-bg: var(--light-bg-color);
```

### Card Variables

```css
--card-background: var(--background-color);
--card-border-radius: var(--border-radius-lg);
--card-border-color: var(--border-color);
--card-shadow: var(--shadow);
--card-padding: var(--spacing-6);
--card-hover-shadow: var(--shadow-md);
```

### Table Variables

```css
--table-border-color: var(--border-color);
--table-stripe-background: var(--light-bg-color);
--table-heading-background: var(--light-bg-color);
--table-cell-padding: 0.75rem;
```

### Homepage-Specific Variables

The homepage redesign uses the following key CSS variables for layout and color:

```css
--bg-card:         /* Card background for featured and article cards */
--bg-secondary:    /* Sidebar and widget backgrounds */
--text-title:      /* Main heading and card title color */
--text-secondary:  /* Subtitle and secondary text color */
--border-color:    /* Card and widget border color */
```

These variables are defined for both light and dark mode in `_sass/_base.scss` and can be overridden in your custom SCSS.

- To remove card backgrounds, set `--bg-card: transparent;` in your custom CSS.
- To adjust card or sidebar appearance, override `--bg-card`, `--bg-secondary`, and `--border-color`.
- All homepage cards and widgets use these variables for consistent theming.

## Using CSS Variables in Custom Code

### Basic Usage in CSS

```css
.my-custom-element {
  color: var(--primary-color);
  font-family: var(--heading-font-family);
  padding: var(--spacing-4);
  border-radius: var(--border-radius);
}
```

### Using with Fallbacks

```css
.my-custom-element {
  color: var(--custom-color, var(--primary-color));
  padding: var(--custom-spacing, 1rem);
}
```

### Combining Variables

```css
.my-custom-element {
  /* Using spacing variables to create consistent margin */
  margin: var(--spacing-2) var(--spacing-4);
  
  /* Using multiple variables for box shadow */
  box-shadow: var(--shadow), 0 0 0 var(--border-width) var(--primary-color-light);
  
  /* Creating derived values */
  padding: calc(var(--spacing-2) + var(--spacing-1));
}
```

### Using in Media Queries

```css
@media (min-width: var(--breakpoint-md)) {
  .my-responsive-element {
    font-size: var(--font-size-lg);
  }
}
```

## Best Practices

1. **Use variables for consistent values**: Always use variables for colors, spacing, etc. instead of hardcoding values
2. **Modify sparingly**: Focus on changing key variables like primary colors
3. **Keep a CSS Specificity**: Override variables at the :root level when possible
4. **Test both themes**: Always test your changes in both light and dark mode
5. **Keep overrides organized**: Maintain a structured list of overrides in your custom CSS
6. **Consider print styles**: Create print-specific variable overrides when needed
7. **Be careful with derivatives**: Remember that changing base variables affects all components that use them

## Related Resources

- [Customizing Your Arsxy Theme](/docs/customization/)
- [Typography](/docs/typography/)
- [Dark Mode](/docs/dark-mode/)