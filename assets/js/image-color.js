document.addEventListener('DOMContentLoaded', () => {
  const postHeroImageContainer = document.querySelector('.post-hero-image');

  if (postHeroImageContainer) {
    const image = postHeroImageContainer.querySelector('img');

    if (image) {
      const colorThief = new ColorThief();

      const setBackgroundColor = () => {
        try {
          const dominantColor = colorThief.getColor(image);
          // To avoid a jarringly bright background, we can check the brightness
          // of the color and darken it if it's too light.
          const brightness = (dominantColor[0] * 299 + dominantColor[1] * 587 + dominantColor[2] * 114) / 1000;
          
          let finalColor;
          if (brightness > 200) { // If the color is very light
            // Darken the color by 20%
            finalColor = dominantColor.map(c => Math.max(0, c - c * 0.2));
          } else {
            finalColor = dominantColor;
          }

          postHeroImageContainer.style.backgroundColor = `rgb(${finalColor.join(',')})`;
        } catch (e) {
          console.error("Error getting dominant color:", e);
          // Fallback for cross-origin images or other errors
          postHeroImageContainer.style.backgroundColor = 'var(--bg-color)';
        }
      };

      if (image.complete) {
        setBackgroundColor();
      } else {
        image.addEventListener('load', setBackgroundColor);
        // Add a cross-origin attribute to handle images from other domains
        image.crossOrigin = "Anonymous";
      }
    }
  }
});
