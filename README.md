# Arsxy Theme for Jekyll

A clean, modern Jekyll theme optimized for technical blogs and documentation sites. This theme prioritizes readability, performance, and responsive design.

> **Current Status**: This theme is currently in beta (v1.0.0-beta). While it's functional and feature-rich, it may receive some refinements before the final stable release.

> **Built with AI**: This theme was developed with the assistance of GitHub Copilot and Claude 3.7 Sonnet.

![Arsxy Theme Screenshot](assets/images/ss-arsxy-theme.png)

## Features

- **Clean & Modern Design** - Minimal, distraction-free reading experience
- **Responsive Layout** - Optimized for all devices from mobile to desktop
- **Dark Mode Support** - Built-in dark mode toggle option
- **Code Highlighting** - Beautiful syntax highlighting for technical content
- **Table of Contents** - Automatically generated for longer articles
- **SEO Optimized** - Built-in support for meta tags and structured data
- **Performance Focused** - Fast loading times with minimal dependencies
- **Reading Time** - Automatic reading time estimation for each post
- **Featured Posts** - Highlight your best content on the homepage
- **Categories & Tags** - Organized content structure

## Installation

### As a remote theme (recommended)

Add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: awcodify/arsxy-theme
```

And install the necessary plugins:

```ruby
# In your Gemfile
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end
```

### As a regular theme

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "arsxy-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: arsxy-theme
```

And then execute:

```bash
$ bundle install
```

## Usage

### Configuration

Here's a sample configuration with commonly used options:

```yaml
# Site settings
name: Your Site Name
title: Your Site Title
description: >-
  Your site description for SEO and social sharing.
baseurl: "/"
url: "https://yourdomain.com"

# Theme settings
remote_theme: awcodify/arsxy-theme
# - OR if installing as a gem -
# theme: arsxy-theme

# Navigation menu
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Articles
    url: /articles
  - title: Tags
    url: /tags
  - title: Contact
    url: /contact

# Social links
social:
  github: yourusername
  twitter: yourusername
  linkedin: yourusername
  email: your.email@example.com

# Plugin settings
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
```

### Creating Posts

Create a new file in the `_posts` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
description: "A brief description of your post for SEO and previews."
categories: Category
tags: tag1 tag2 tag3
image: path/to/featured-image.jpg
---

Your content goes here...
```

### Featured Images

For best results, use featured images in your posts. The recommended image size is 1200×630 pixels for optimal display on both the homepage and social media shares.

### Table of Contents

The table of contents is automatically generated for posts. If you want to disable it for a specific post, add `toc: false` to the front matter.

## Customization

### Colors and Typography

You can override the default colors and typography by creating a `_sass/_custom.scss` file in your site and importing it in your `assets/css/main.scss`.

## Important Notes

- This theme requires Jekyll 3.10 or compatible versions
- For best performance, optimize your images before adding them to your site
- The theme includes built-in dark mode that respects user system preferences

## License

This theme is available as open source under the terms of the [MIT License](LICENSE).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/awcodify/arsxy-theme.

We appreciate your contributions to make Arsxy Theme better! Please check out our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- How to submit pull requests
- Coding standards
- Development process

When submitting pull requests, please use the appropriate PR template to help maintainers understand and review your changes efficiently.