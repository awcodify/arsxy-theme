/**
 * Main JavaScript file for the Arsxy Theme
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dark mode
  initDarkMode();
  
  // Initialize table of contents
  initTableOfContents();
  
  // Initialize code copy buttons
  initCodeCopy();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize nested navigation
  initNestedNav();
  
  // Initialize Giscus comments
  initGiscus();
});

/**
 * Dark Mode Functionality
 */
function initDarkMode() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  // Get configuration from data attributes
  const html = document.documentElement;
  const darkModeEnabled = html.getAttribute('data-dark-mode-enabled') === 'true';
  
  // If dark mode is completely disabled, ensure light mode is always applied
  if (!darkModeEnabled) {
    html.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    showLightModeIcon(themeToggle);
  } else {
    // Add dark-active class to the toggle button if currently in dark mode
    if (html.classList.contains('dark-mode')) {
      themeToggle.classList.add('dark-active');
      showDarkModeIcon(themeToggle);
    } else {
      themeToggle.classList.remove('dark-active');
      showLightModeIcon(themeToggle);
    }
  }
  
  themeToggle.addEventListener('click', function() {
    // If dark mode is completely disabled, don't allow toggling to dark mode
    if (!darkModeEnabled) {
      html.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      showLightModeIcon(themeToggle);
      return;
    }
    
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      themeToggle.classList.remove('dark-active');
      localStorage.setItem('theme', 'light');
      showLightModeIcon(themeToggle);
    } else {
      html.classList.add('dark-mode');
      themeToggle.classList.add('dark-active');
      localStorage.setItem('theme', 'dark');
      showDarkModeIcon(themeToggle);
    }
  });
  
  // Helper functions to toggle icons
  function showDarkModeIcon(toggle) {
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
  
  function showLightModeIcon(toggle) {
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  }
}

/**
 * Table of Contents Functionality
 */
function initTableOfContents() {
  // Handle static TOC for mobile
  const staticTocContainer = document.querySelector('.table-of-contents');
  if (staticTocContainer) {
    // Make TOC collapsible on mobile
    if (window.innerWidth < 600) { // $on-palm value
      const tocHeading = staticTocContainer.querySelector('h2');
      const tocContent = document.createElement('div');
      tocContent.className = 'toc-content';
      
      // Move all elements after the heading into the content div
      let nextSibling = tocHeading.nextElementSibling;
      while (nextSibling) {
        const currentSibling = nextSibling;
        nextSibling = nextSibling.nextElementSibling;
        tocContent.appendChild(currentSibling);
      }
      
      staticTocContainer.appendChild(tocContent);
      
      // Add click event to toggle
      tocHeading.addEventListener('click', function() {
        tocHeading.classList.toggle('active');
        tocContent.classList.toggle('expanded');
      });
    }
  }
  
  // Handle all TOC containers (floating TOC, docs sidebar, and static TOC)
  const floatingToc = document.querySelector('.floating-toc');
  const docsSidebar = document.querySelector('.docs-sidebar .docs-nav');
  const tocContainers = [floatingToc, staticTocContainer, docsSidebar].filter(Boolean);
  
  if (tocContainers.length) {
    // Add scroll spy functionality for all content areas
    const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4, .docs-body h2, .docs-body h3, .docs-body h4, .docs-content h2, .docs-content h3, .docs-content h4');
    
    // Get all possible TOC links across all containers
    const tocLinks = document.querySelectorAll('.floating-toc .toc a, .table-of-contents .toc a, .docs-sidebar .docs-nav a');
    
    if (headings.length && tocLinks.length) {
      // Set up Intersection Observer for headings
      const headingsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Store entry information in a data attribute for later use
          if (entry.isIntersecting) {
            entry.target.dataset.visible = true;
          } else {
            delete entry.target.dataset.visible;
          }
          
          // Find the heading that's currently most visible
          const visibleHeadings = Array.from(headings).filter(h => h.dataset.visible);
          
          if (visibleHeadings.length > 0) {
            // Sort visible headings by their position from the top
            const sortedHeadings = visibleHeadings.sort((a, b) => {
              return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
            });
            
            // Use the first visible heading (closest to the top)
            const activeHeading = sortedHeadings[0];
            if (activeHeading && activeHeading.id) {
              updateActiveTocLink(activeHeading.id);
            }
          }
        });
      }, {
        rootMargin: '-100px 0px -80% 0px', // Adjust based on when you want to trigger the change
        threshold: 0
      });
      
      // Observe all headings
      headings.forEach(heading => {
        if (heading.id) {
          headingsObserver.observe(heading);
        } else {
          console.warn('Found heading without ID:', heading.textContent.trim());
        }
      });
      
      // Add click event to smooth scroll to sections
      tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          
          // Only handle links that refer to page anchors
          if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              // Calculate proper scroll position with offset
              const headerOffset = 100; // Adjust this value based on your header height and desired spacing
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              // Smooth scroll to target with proper offset
              window.scrollTo({
                top: offsetPosition - 50,
                behavior: 'smooth'
              });
              
              // Update URL hash without jumping
              history.pushState(null, null, `#${targetId}`);
              
              // Update active TOC link
              updateActiveTocLink(targetId);
            }
          }
        });
      });
    }
  }
  
  // Function to update active TOC link and auto-scroll the TOC
  function updateActiveTocLink(id) {
    // Process all TOC containers
    tocContainers.forEach(container => {
      if (!container) return;
      
      let activeLink;
      
      // Handle docs sidebar differently from other TOCs
      if (container.classList.contains('docs-nav')) {
        // For docs sidebar, we need to handle the specific structure
        const allLinks = container.querySelectorAll('.docs-nav-list a');
        
        // Remove active class from all links in this container
        allLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Find the matching link in the docs sidebar
        // First, try direct href match
        activeLink = container.querySelector(`a[href="${window.location.pathname}#${id}"], a[href="#${id}"]`);
        
        // If no direct match, try partial match based on section name
        if (!activeLink) {
          // Sometimes the ID might be a transformed version of the text
          const idParts = id.split('-');
          for (const link of allLinks) {
            const linkText = link.textContent.trim().toLowerCase();
            // Check if the link text contains parts of the ID
            if (idParts.some(part => linkText.includes(part.toLowerCase()))) {
              activeLink = link;
              break;
            }
          }
        }
      } else {
        // Standard TOC (floating or static)
        const allLinks = container.querySelectorAll('.toc a');
        
        // Remove active class from all TOC links in this container
        allLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Find the active link by href
        activeLink = container.querySelector(`.toc a[href="#${id}"]`);
      }
      
      if (activeLink) {
        // Add active class to current link
        activeLink.classList.add('active');
        
        // Find the scrollable container for this TOC
        let tocElement;
        if (container.classList.contains('docs-nav')) {
          tocElement = container.closest('.docs-sidebar');
        } else {
          tocElement = container.closest('.table-of-contents, .floating-toc');
        }
        
        // Auto-scroll the TOC to show the active link
        if (tocElement && tocElement.scrollHeight > tocElement.clientHeight) {
          
          // Calculate the position of the active link relative to the TOC container
          const activeLinkRect = activeLink.getBoundingClientRect();
          const tocRect = tocElement.getBoundingClientRect();
          
          // Check if the active link is outside the visible area of the TOC
          const isLinkAbove = activeLinkRect.top < tocRect.top + 40; // Add padding for better visibility
          const isLinkBelow = activeLinkRect.bottom > tocRect.bottom - 40; // Add padding for better visibility
          
          if (isLinkAbove || isLinkBelow) {
            
            // Get the scroll position of the link relative to the TOC
            // This is more reliable than offsetTop in some cases
            const linkTop = activeLink.getBoundingClientRect().top - tocElement.getBoundingClientRect().top + tocElement.scrollTop;
            
            // Calculate a position that centers the active link in the TOC as much as possible
            const scrollPosition = linkTop - (tocElement.clientHeight / 2) + (activeLink.clientHeight / 2);
            
            // Scroll the TOC smoothly to show the active link
            tocElement.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }
        }
      }
    });
  }
}

/**
 * Code Copy Button Functionality
 */
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(block => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.textContent = 'Copy';
    
    // Add button to pre element's parent (usually div.highlight)
    const container = block.parentNode;
    container.style.position = 'relative';
    container.insertBefore(copyButton, container.firstChild);
    
    // Add click event
    copyButton.addEventListener('click', function() {
      const code = block.textContent;
      
      navigator.clipboard.writeText(code).then(() => {
        // Visual feedback
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Could not copy text: ', err);
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });
}

/**
 * Mobile Navigation Functionality
 */
function initMobileNav() {
  const navTrigger = document.getElementById('nav-trigger');
  const navContainer = document.querySelector('.nav-container');
  const navLabel = document.querySelector('.nav-trigger-label');
  
  if (!navTrigger || !navContainer) {
    console.error('Missing nav elements!');
    return;
  }
  
  // Test if clicking label toggles checkbox
  navLabel?.addEventListener('click', function(e) {
    e.preventDefault();
    // Toggle the checkbox manually
    navTrigger.checked = !navTrigger.checked;
    // Trigger change event
    navTrigger.dispatchEvent(new Event('change'));
  });
  
  // Monitor checkbox changes
  navTrigger.addEventListener('change', function() {
    
    if (this.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking close button area (top-right of sidebar)
  navContainer.addEventListener('click', function(event) {
    const rect = navContainer.getBoundingClientRect();
    const isCloseButton = event.clientX > (rect.right - 60) && event.clientY < (rect.top + 60);
    
    if (isCloseButton) {
      navTrigger.checked = false;
    }
  });
}

/**
 * Nested Navigation Functionality
 */
function initNestedNav() {
  // Initialize ARIA attributes for accessibility
  initAccessibilityAttributes();
  
  // Handle mobile dropdown toggles
  if (window.innerWidth <= 767) {
    initMobileDropdowns();
  }
  
  // Re-initialize on window resize with debouncing
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth <= 767) {
        initMobileDropdowns();
      } else {
        // Remove mobile event listeners on desktop
        removeMobileDropdowns();
      }
    }, 100); // Debounce resize events
  });
}

function initAccessibilityAttributes() {
  // Add ARIA attributes for dropdowns
  const dropdownToggles = document.querySelectorAll('.has-dropdown');
  dropdownToggles.forEach((toggle) => {
    const dropdownId = toggle.getAttribute('data-dropdown-id');
    if (dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      if (dropdown) {
        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', dropdownId);
      }
    }
  });
  
  // Add ARIA attributes for submenus
  const submenuToggles = document.querySelectorAll('.has-submenu');
  submenuToggles.forEach((toggle) => {
    const submenuId = toggle.getAttribute('data-submenu-id');
    if (submenuId) {
      const submenu = document.getElementById(submenuId);
      if (submenu) {
        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', submenuId);
      }
    }
  });
}

function initMobileDropdowns() {
  // Remove any existing event listeners first
  removeMobileDropdowns();
  
  // Handle main dropdown toggles with improved touch handling
  const dropdownToggles = document.querySelectorAll('.nav-container .has-dropdown');
  dropdownToggles.forEach(toggle => {
    // Prevent double-tap zoom on iOS
    toggle.style.touchAction = 'manipulation';
    
    // Use a single touch/click handler with better event management
    const handleToggle = function(e) {
      const dropdownId = this.getAttribute('data-dropdown-id');
      const dropdown = document.getElementById(dropdownId);
      
      
      if (dropdown) {
        const isActive = dropdown.classList.contains('active');
        
        // If dropdown is not active, prevent navigation and toggle instead
        if (!isActive) {
          e.preventDefault();
          e.stopPropagation();
        }
        // If dropdown is already active, allow navigation to the link
        else {
          // Let the link navigate naturally
          return;
        }
        
        // Close all other dropdowns first
        document.querySelectorAll('.dropdown-menu.active').forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
            const otherToggle = document.querySelector(`[data-dropdown-id="${otherDropdown.id}"]`);
            if (otherToggle) {
              otherToggle.setAttribute('aria-expanded', 'false');
              const otherArrow = otherToggle.querySelector('.dropdown-arrow');
              if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
            }
          }
        });
        
        // Toggle current dropdown (open it)
        dropdown.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        
        // Position dropdown right after the toggle link by inserting it after the toggle
        const navContainer = document.querySelector('.nav-container');
        // Move dropdown to be right after this toggle in the DOM
        this.parentNode.insertBefore(dropdown, this.nextSibling);
        
        // Reset positioning to use normal flow
        dropdown.style.position = 'relative';
        dropdown.style.top = '';
        dropdown.style.left = '';
        dropdown.style.right = '';
        dropdown.style.width = '';
        
        // Force reflow to ensure proper positioning
        void dropdown.offsetHeight; // Trigger reflow
        
        // Update arrow rotation with smooth animation
        const arrow = this.querySelector('.dropdown-arrow');
        if (arrow) {
          arrow.style.transform = 'rotate(180deg)';
        }
        
        // Add focus management for better accessibility
        const firstLink = dropdown.querySelector('.dropdown-link');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      } else {
      }
    };
    
    // Store the handler for later removal
    toggle._mobileToggleHandler = handleToggle;
    toggle.addEventListener('click', handleToggle);
    
    // Add keyboard support
    const handleKeydown = function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle.call(this, e);
      }
    };
    toggle._mobileKeydownHandler = handleKeydown;
    toggle.addEventListener('keydown', handleKeydown);
  });
  
  // Handle submenu toggles with improved touch handling
  const submenuToggles = document.querySelectorAll('.nav-container .has-submenu');
  submenuToggles.forEach((toggle, index) => {
    toggle.style.touchAction = 'manipulation';
    
    const handleSubmenuToggle = function(e) {
      const submenuId = this.getAttribute('data-submenu-id');
      const submenu = document.getElementById(submenuId);
      
      
      if (submenu) {
        const isActive = submenu.classList.contains('active');
        
        // If submenu is not active, prevent navigation and toggle instead
        if (!isActive) {
          e.preventDefault();
          e.stopPropagation();
        }
        // If submenu is already active, allow navigation to the link
        else {
          // Let the link navigate naturally
          return;
        }
        
        // Close all other submenus first
        document.querySelectorAll('.submenu.active').forEach(otherSubmenu => {
          if (otherSubmenu !== submenu) {
            otherSubmenu.classList.remove('active');
            const otherToggle = document.querySelector(`[data-submenu-id="${otherSubmenu.id}"]`);
            if (otherToggle) {
              otherToggle.setAttribute('aria-expanded', 'false');
              const otherArrow = otherToggle.querySelector('.submenu-arrow');
              if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
            }
          }
        });
        
        // Toggle current submenu (open it)
        submenu.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        
        // Position submenu right after this toggle by inserting it after the toggle
        // Move submenu to be right after this toggle in the DOM
        this.parentNode.insertBefore(submenu, this.nextSibling);
        
        // Reset positioning to use normal flow
        submenu.style.position = 'relative';
        submenu.style.top = '';
        submenu.style.left = '';
        submenu.style.right = '';
        submenu.style.width = '';
        
        
        // Force reflow to ensure proper positioning
        void submenu.offsetHeight; // Trigger reflow
        
        // Update arrow rotation
        const arrow = this.querySelector('.submenu-arrow');
        if (arrow) {
          arrow.style.transform = 'rotate(90deg)';
        }
        
        // Focus management
        const firstLink = submenu.querySelector('.submenu-link');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      } else {
      }
    };
    
    toggle._mobileSubmenuHandler = handleSubmenuToggle;
    toggle.addEventListener('click', handleSubmenuToggle);
    
    const handleSubmenuKeydown = function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSubmenuToggle.call(this, e);
      }
    };
    toggle._mobileSubmenuKeydownHandler = handleSubmenuKeydown;
    toggle.addEventListener('keydown', handleSubmenuKeydown);
  });
  
  // Prevent submenu link clicks from closing parent dropdown
  document.querySelectorAll('.nav-container .submenu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  // Close dropdowns when clicking outside with improved detection
  const handleOutsideClick = function(e) {
    // Don't close if clicking on navigation elements (desktop or mobile)
    if (!e.target.closest('.site-nav') && !e.target.closest('.nav-container')) {
      document.querySelectorAll('.dropdown-menu.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        const parentToggle = dropdown.previousElementSibling;
        if (parentToggle) {
          parentToggle.setAttribute('aria-expanded', 'false');
          const arrow = parentToggle.querySelector('.dropdown-arrow');
          if (arrow) arrow.style.transform = 'rotate(0deg)';
        }
      });
      
      document.querySelectorAll('.submenu.active').forEach(submenu => {
        submenu.classList.remove('active');
        const parentToggle = submenu.previousElementSibling;
        if (parentToggle) {
          parentToggle.setAttribute('aria-expanded', 'false');
          const arrow = parentToggle.querySelector('.submenu-arrow');
          if (arrow) arrow.style.transform = 'rotate(0deg)';
        }
      });
    }
  };
  
  // Store handler for removal
  document._mobileOutsideClickHandler = handleOutsideClick;
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('touchstart', handleOutsideClick);
  
  // Enhanced keyboard navigation
  const handleKeydown = function(e) {
    if (e.key === 'Escape') {
      // Close all dropdowns on Escape
      document.querySelectorAll('.dropdown-menu.active, .submenu.active').forEach(menu => {
        menu.classList.remove('active');
        const parentToggle = menu.previousElementSibling;
        if (parentToggle) {
          parentToggle.setAttribute('aria-expanded', 'false');
          parentToggle.focus(); // Return focus to toggle
        }
      });
      
      // Reset all arrows
      document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
      });
      document.querySelectorAll('.submenu-arrow').forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
      });
    }
    
    // Arrow key navigation within dropdowns
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const activeDropdown = document.querySelector('.dropdown-menu.active, .submenu.active');
      if (activeDropdown) {
        e.preventDefault();
        const links = activeDropdown.querySelectorAll('.dropdown-link, .submenu-link');
        const currentIndex = Array.from(links).indexOf(document.activeElement);
        
        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : links.length - 1;
        }
        
        if (links[nextIndex]) {
          links[nextIndex].focus();
        }
      }
    }
  };
  
  document._mobileKeydownHandler = handleKeydown;
  document.addEventListener('keydown', handleKeydown);
}

function removeMobileDropdowns() {
  // Remove active classes
  document.querySelectorAll('.dropdown-menu.active, .submenu.active').forEach(menu => {
    menu.classList.remove('active');
    const parentToggle = menu.previousElementSibling;
    if (parentToggle) {
      parentToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Reset arrow positions
  document.querySelectorAll('.dropdown-arrow, .submenu-arrow').forEach(arrow => {
    arrow.style.transform = 'rotate(0deg)';
  });
  
  // Remove event listeners to prevent memory leaks
  const dropdownToggles = document.querySelectorAll('.has-dropdown');
  dropdownToggles.forEach(toggle => {
    if (toggle._mobileToggleHandler) {
      toggle.removeEventListener('click', toggle._mobileToggleHandler);
      delete toggle._mobileToggleHandler;
    }
    if (toggle._mobileKeydownHandler) {
      toggle.removeEventListener('keydown', toggle._mobileKeydownHandler);
      delete toggle._mobileKeydownHandler;
    }
  });
  
  const submenuToggles = document.querySelectorAll('.has-submenu');
  submenuToggles.forEach(toggle => {
    if (toggle._mobileSubmenuHandler) {
      toggle.removeEventListener('click', toggle._mobileSubmenuHandler);
      delete toggle._mobileSubmenuHandler;
    }
    if (toggle._mobileSubmenuKeydownHandler) {
      toggle.removeEventListener('keydown', toggle._mobileSubmenuKeydownHandler);
      delete toggle._mobileSubmenuKeydownHandler;
    }
  });
  
  // Remove document-level event listeners
  if (document._mobileOutsideClickHandler) {
    document.removeEventListener('click', document._mobileOutsideClickHandler);
    document.removeEventListener('touchstart', document._mobileOutsideClickHandler);
    delete document._mobileOutsideClickHandler;
  }
  
  if (document._mobileKeydownHandler) {
    document.removeEventListener('keydown', document._mobileKeydownHandler);
    delete document._mobileKeydownHandler;
  }
}

/**
 * Utility: Debounce function for scroll events
 */
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Giscus Comments Functionality
 * This function initializes Giscus and handles theme changes
 */
function initGiscus() {
  // Check if Giscus is present on the page
  if (!document.querySelector('.giscus-container')) return;

  // Function to set Giscus theme based on site theme
  function setGiscusTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';
    
    // Get the iframe if it exists
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      // Send message to Giscus to update theme
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app'
      );
    }
  }

  // Set the initial theme after Giscus loads
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://giscus.app') return;
    if (event.data && event.data.giscus && event.data.giscus.resizeHeight) {
      // Giscus has loaded, set the theme
      setGiscusTheme();
    }
  });

  // Update Giscus theme when site theme changes
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Small delay to ensure the DOM class is updated first
      setTimeout(setGiscusTheme, 100);
    });
  }
}