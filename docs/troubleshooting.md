---
layout: docs
title: Troubleshooting
description: Common issues and solutions when working with Arsxy Theme
permalink: /docs/troubleshooting/
---
This guide covers common issues you might encounter when working with Arsxy Theme and provides solutions to help you resolve them quickly.

## Installation Issues

### Bundle Install Errors

**Issue**: Errors when running `bundle install` to set up your Jekyll site.

**Solution**: 
1. Ensure you have the correct Ruby version installed (Arsxy Theme requires Ruby 2.5.0 or higher)
2. Try updating Bundler: `gem update bundler`
3. Clear your gem cache: `gem cleanup`
4. Try installing with: `bundle install --path vendor/bundle`

### Jekyll Build Failures

**Issue**: Jekyll fails to build your site with Arsxy Theme.

**Solution**:
1. Run `bundle exec jekyll build --verbose` to see detailed error information
2. Check that all gem dependencies are correctly specified in your Gemfile
3. Ensure your _config.yml settings are properly formatted (no tab characters, correct indentation)

## Theme Styling Issues

### CSS Not Loading

**Issue**: Your site appears unstyled or CSS is not applying correctly.

**Solution**:
1. Check browser console for 404 errors on CSS files
2. Verify your `baseurl` setting in _config.yml is correct
3. Make sure you've properly referenced the theme in your Gemfile and _config.yml
4. Try running `bundle exec jekyll clean` followed by `bundle exec jekyll serve`

### Dark Mode Toggle Not Working

**Issue**: Dark mode toggle doesn't switch themes properly.

**Solution**:
1. Check browser console for JavaScript errors
2. Ensure you have the dark mode JavaScript included in your layout
3. Verify that your browser supports localStorage (required for theme persistence)
4. Make sure your CSS variables for dark mode are correctly defined

### Whitescreen or Flash of Unstyled Content (FOUC)

**Issue**: Page shows white background briefly when loading as remote theme.

**Solution**:
1. The theme now includes critical CSS (`critical.css`) that loads first to prevent this
2. If still experiencing issues, ensure `critical.css` is loading before `main.css` in your layout
3. Check that your `_config.yml` has `remote_theme: awcodify/arsxy-theme` configured correctly
4. Clear browser cache and try hard refresh
5. See the [Remote Theme Optimization](/docs/remote-theme-optimization/) guide for detailed information

## Layout Problems

### Sidebar Missing or Misaligned

**Issue**: Documentation sidebar is missing or appears incorrectly.

**Solution**:
1. Check that you're using the correct layout (e.g., `layout: docs`)
2. Verify front matter includes the necessary parameters
3. Check responsive breakpoints if the issue only appears on certain screen sizes
4. Validate your HTML structure for unclosed tags or nesting errors

### Table of Contents Not Generating

**Issue**: Table of contents is not appearing or missing entries.

**Solution**:
1. Ensure your Markdown headings are properly formatted (space after # symbols)
2. Check that the `toc: true` parameter is set in your front matter
3. Verify your headings follow a proper hierarchy (h1 → h2 → h3)
4. Confirm the toc.html include is properly referenced in your layout

## Content Issues

### Syntax Highlighting Not Working

**Issue**: Code blocks are not properly highlighted.

**Solution**:
1. Ensure you've specified the language in your code blocks (e.g., ```ruby)
2. Check that the syntax highlighting CSS is included
3. Verify you have the correct syntax highlighter set in _config.yml
4. Try using explicit `highlight` Liquid tags instead of backtick code blocks

### Images Not Displaying

**Issue**: Images in your posts or pages are not visible.

**Solution**:
1. Check image paths are correct (relative to site root or using absolute paths)
2. Use the `{{ site.baseurl }}` prefix for image paths if needed
3. Verify image files exist in the correct location
4. Check for permissions issues or case-sensitivity in file paths

## Development Environment

### Local Server Issues

**Issue**: `bundle exec jekyll serve` fails or doesn't reflect changes.

**Solution**:
1. Try running with the `--livereload` flag
2. Check if a process is already using port 4000 (default Jekyll port)
3. Kill any zombie Jekyll processes: `pkill -f jekyll`
4. Use `jekyll clean` to clear cache before serving

### GitHub Pages Deployment Issues

**Issue**: Site doesn't deploy correctly to GitHub Pages.

**Solution**:
1. Check the GitHub Actions or Pages build logs for specific errors
2. Ensure your repository is structured correctly for GitHub Pages
3. Verify your _config.yml has the correct settings for GitHub Pages
4. Make sure you're using a GitHub Pages-compatible gem configuration

## Getting Further Help

If you're still experiencing issues after trying these troubleshooting steps:

1. Search the [GitHub Issues](https://github.com/awcodify/arsxy-theme/issues) for similar problems
2. Check the Jekyll documentation for common Jekyll-related issues
3. Create a new issue on the Arsxy Theme repository with:
   - A clear description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Your environment details (OS, Jekyll version, etc.)