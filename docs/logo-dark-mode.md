---
layout: page
title: Logo Dark Mode Configuration
permalink: /docs/logo-dark-mode/
---

# Logo Dark Mode Configuration

The Arsxy theme provides several options to ensure your logo is visible in both light and dark mode. This is particularly important if your logo is dark or black, as it may not be visible against the dark background when dark mode is enabled.

## Available Options

Configure your logo's dark mode appearance by setting the `dark_mode_class` option in your `_config.yml` file:

```yaml
header_logo:
  enabled: true
  image: "/assets/images/logo.png"
  alt: "Your Logo Alt Text"
  height: 60
  dark_mode_class: "invert-in-dark-mode" # Choose one of the options below
```

### Available Dark Mode Classes

The theme provides six predefined options for handling logos in dark mode:

1. **`dark-parts-to-white-dark-mode`**: Primarily targets black and dark colors while having a smaller effect on lighter colors. This is the closest option to selectively changing just black elements to white while preserving other colors as much as possible with CSS filters.

2. **`all-to-white-dark-mode`**: Converts all colored parts of your logo to pure white, preserving only transparency. This creates a white silhouette effect and is ideal when you want a consistent white logo regardless of its original colors.

3. **`selective-lighten-dark-mode`**: Selectively lightens darker colors while better preserving lighter colors and hues. This is better for multicolored logos where you want to maintain some color differentiation while ensuring visibility.

3. **`invert-in-dark-mode`**: Inverts all colors of your logo in dark mode. This works best for black and white logos without transparency.

4. **`outline-in-dark-mode`**: Adds a white outline/glow effect around your logo. This works well for dark-colored logos that need more visibility without changing their colors.

5. **`brighten-in-dark-mode`**: Increases the brightness of your logo without inverting it. This is ideal for colored logos that should keep their original colors but need more visibility.

If no option is specified, the theme defaults to `outline-in-dark-mode`.

## Creating Custom Logo Treatments

If you need more control over how your logo appears in dark mode, you can create custom CSS by extending the theme's styles in your own CSS file or by modifying the `_sass/components/_logo.scss` file directly.

Example of adding a custom logo treatment:

```scss
/* Custom logo treatment for dark mode */
html.dark-mode .custom-logo-treatment {
  filter: sepia(0.5) hue-rotate(180deg) saturate(1.5);
}
```

Then, set `dark_mode_class: "custom-logo-treatment"` in your `_config.yml` file.

## Testing Your Logo

To ensure your logo looks good in both light and dark modes:

1. Upload your logo file to the `assets/images` directory
2. Configure the path in `_config.yml`
3. Toggle between light and dark mode using the theme toggle button in the header
4. Try different `dark_mode_class` options to find the best look for your logo
