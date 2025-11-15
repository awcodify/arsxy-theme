document.addEventListener('DOMContentLoaded', () => {
  // Gather containers we want to process: post hero and featured card images
  const containers = [];
  const postHero = document.querySelector('.post-hero-image');
  if (postHero) containers.push(postHero);

  document.querySelectorAll('.featured-posts .card-image').forEach(el => containers.push(el));

  if (!containers.length) return;

  const colorThief = new ColorThief();

  const processContainer = (container) => {
    const image = container.querySelector('img');
    if (!image) return;

    const applyStyles = () => {
      try {
        // Set blurred background image via CSS variable used in SCSS (::before)
        container.style.setProperty('--hero-image-url', `url('${image.src}')`);

        // Extract dominant color and apply as background-color with brightness check
        const dominantColor = colorThief.getColor(image);
        const brightness = (dominantColor[0] * 299 + dominantColor[1] * 587 + dominantColor[2] * 114) / 1000;

        let finalColor;
        if (brightness > 200) {
          finalColor = dominantColor.map(c => Math.max(0, Math.round(c - c * 0.2)));
        } else {
          finalColor = dominantColor.map(c => Math.round(c));
        }

        container.style.backgroundColor = `rgb(${finalColor.join(',')})`;
      } catch (e) {
        console.error('Error getting dominant color:', e);
        container.style.backgroundColor = 'var(--bg-color)';
      }
    };

    if (image.complete) {
      applyStyles();
    } else {
      image.crossOrigin = 'Anonymous';
      image.addEventListener('load', applyStyles);
    }
  };

  containers.forEach(processContainer);
});
