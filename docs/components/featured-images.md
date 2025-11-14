---
layout: docs
title: Featured Images Component
description: Learn how to use and customize featured images in Arsxy Theme
permalink: /docs/components/featured-images/
---
Featured images enhance the visual appeal of your content and provide a preview of your posts. Arsxy Theme includes robust support for featured images across various layouts.

## Adding Featured Images to Posts

To add a featured image to a post, include the `image` front matter variable:

```yaml
---
layout: post
title: "My Blog Post"
description: "A description of my blog post"
image: /assets/images/posts/featured-image.jpg
---
```

## Image Display Locations

Featured images appear in several locations throughout the theme:

1. **Post Headers**: At the top of individual posts
2. **Post Lists**: As thumbnails in post listing pages
3. **Related Posts**: As thumbnails in the related posts section
4. **Social Sharing Cards**: Used when your content is shared on social media

## Automatic Featured Images

If you don't specify a featured image, Arsxy Theme can generate one automatically based on the post title. To enable this feature, add the following to your `_config.yml`:

```yaml
featured_images:
  auto_generate: true
  text_color: "#ffffff"
  background_color: "#1a1a1a"
  font: "Roboto"
```

## Image Size Recommendations

For optimal display across all devices, use the following image dimensions:

- **Recommended size**: 1200×630 pixels
- **Minimum size**: 600×315 pixels
- **Aspect ratio**: 1.91:1

## Image Optimization

To improve page load times, Arsxy Theme automatically applies responsive image techniques:

1. **Responsive srcset**: Multiple image sizes for different devices
2. **Lazy loading**: Images load only when scrolled into view

Example of the HTML generated:

```html
<img src="/assets/images/posts/featured-image.jpg" 
     srcset="/assets/images/posts/featured-image-small.jpg 400w,
             /assets/images/posts/featured-image-medium.jpg 800w,
             /assets/images/posts/featured-image.jpg 1200w"
     sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
     alt="Post title"
     loading="lazy">
```

## Customizing Featured Image Display

### Overlay Options

You can add text overlays on featured images by setting options in the front matter:

```yaml
---
image: /assets/images/posts/featured-image.jpg
image_overlay:
  title: true # Show post title on the image
  text_color: "#ffffff"
  gradient: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))"
---
```

### Cropping Behavior

Control how featured images are cropped and displayed:

```yaml
---
image: /assets/images/posts/featured-image.jpg
image_options:
  position: "center" # Options: top, center, bottom
  crop: "fill" # Options: fill, fit, none
---
```

Alternatively, set global defaults in your `_config.yml`:

```yaml
featured_images:
  position: "center"
  crop: "fill"
```

## Styling Featured Images

You can customize the appearance of featured images by modifying the CSS in `_sass/components/_image.scss`:

```scss
.featured-image {
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  // Caption styles
  figcaption {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-align: center;
    padding-top: 0.5rem;
  }
}
```

## Image Captions

Add captions to your featured images with the `image_caption` front matter variable:

```yaml
---
image: /assets/images/posts/featured-image.jpg
image_caption: "Photo by Jane Doe on Unsplash"
---
```

## Full-width Images

For extra impact, make featured images span the full width of the page:

```yaml
---
image: /assets/images/posts/featured-image.jpg
image_fullwidth: true
---
```

## Accessibility Considerations

For better accessibility:

1. Always include descriptive alt text for your images
2. Ensure sufficient contrast between any text overlay and the image
3. Don't rely solely on images to convey important information

```yaml
---
image: /assets/images/posts/featured-image.jpg
image_alt: "Detailed description of the image content" # Will fallback to post title if not specified
---
```

## Seamless Background Effect

Arsxy Theme includes a feature to create a seamless, blurred background effect that matches the featured image. This creates a visually stunning and immersive hero section.

### How It Works

The theme uses a small JavaScript snippet (`assets/js/image-color.js`) along with the ColorThief.js library to:

1.  **Extract the Image URL**: The script gets the URL of the featured image.
2.  **Apply a Blurred Background**: It then sets a CSS variable (`--hero-image-url`) with the image URL.
3.  **CSS Styling**: A pseudo-element (`::before`) on the image container uses this variable to create a blurred, full-bleed background that sits behind the main image.

This effect is applied automatically to all posts with a featured image.

### Customization

You can adjust the blur and brightness of the background effect by modifying the CSS in `_sass/components/_post.scss`:

```scss
.post-hero-image::before {
  filter: blur(25px) brightness(0.8);
  // Adjust the blur and brightness values to your liking
}
```