// Social Media Inspired Homepage (home-v2) JavaScript
// Interactive features for social media-style engagement

document.addEventListener('DOMContentLoaded', function() {
  // Only run on home-v2 layout
  if (!document.querySelector('.home-v2')) return;
  
  // Initialize all features
  initPostFiltering();
  initViewToggle();
  
  // Post Filtering
  function initPostFiltering() {
    const filterButtons = document.querySelectorAll('.filter-tab');
    const posts = document.querySelectorAll('.post-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter posts
        posts.forEach(post => {
          let shouldShow = true;
          
          switch(filter) {
            case 'featured':
              shouldShow = post.dataset.featured === 'true';
              break;
            case 'all':
            default:
              shouldShow = true;
              break;
          }
          
          if (shouldShow) {
            post.style.display = 'block';
            setTimeout(() => {
              post.style.opacity = '1';
              post.style.transform = 'translateY(0)';
            }, 100);
          } else {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            setTimeout(() => {
              post.style.display = 'none';
            }, 300);
          }
        });
        
        // Add loading animation
        const postsContainer = document.querySelector('.posts-feed');
        postsContainer.style.opacity = '0.7';
        setTimeout(() => {
          postsContainer.style.opacity = '1';
        }, 300);
      });
    });
  }
  
  // View Toggle (Feed/Grid)
  function initViewToggle() {
    const viewToggles = document.querySelectorAll('.view-toggle');
    const postsContainer = document.querySelector('.posts-feed');
    const STORAGE_KEY = 'home-v2-view-mode';
    
    // Restore saved view state on page load
    const savedView = localStorage.getItem(STORAGE_KEY) || 'feed';
    applyViewStyle(savedView);
    updateActiveToggle(savedView);
    
    viewToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const view = this.dataset.view;
        
        // Save view preference to localStorage
        localStorage.setItem(STORAGE_KEY, view);
        
        // Apply view style
        applyViewStyle(view);
        updateActiveToggle(view);
      });
    });
    
    // Helper function to apply view styles
    function applyViewStyle(view) {
      if (view === 'grid') {
        postsContainer.classList.add('grid-view');
        postsContainer.style.display = 'grid';
        postsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
        postsContainer.style.gap = '1.5rem';
        
        // Adjust post cards for grid view
        document.querySelectorAll('.post-card').forEach(card => {
          card.style.marginBottom = '0';
        });
      } else {
        postsContainer.classList.remove('grid-view');
        postsContainer.style.display = 'flex';
        postsContainer.style.flexDirection = 'column';
        postsContainer.style.gap = '2rem';
        postsContainer.style.gridTemplateColumns = 'none';
        
        // Reset post cards for feed view
        document.querySelectorAll('.post-card').forEach(card => {
          card.style.marginBottom = '';
        });
      }
    }
    
    // Helper function to update active toggle button
    function updateActiveToggle(view) {
      viewToggles.forEach(btn => btn.classList.remove('active'));
      const activeToggle = document.querySelector(`.view-toggle[data-view="${view}"]`);
      if (activeToggle) {
        activeToggle.classList.add('active');
      }
    }
  }
  
  
  // Show notification toast
  function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageEl = notification.querySelector('.notification-message');
    
    if (messageEl) {
      messageEl.textContent = message;
    }
    
    notification.classList.add('visible');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove('visible');
    }, 3000);
  }
  
  // Category filtering from stories
  function filterPostsByCategory(category) {
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
      const postCategories = post.dataset.categories || '';
      const shouldShow = category === 'all' || postCategories.includes(category);
      
      if (shouldShow) {
        post.style.display = 'block';
        setTimeout(() => {
          post.style.opacity = '1';
          post.style.transform = 'translateY(0)';
        }, 100);
      } else {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        setTimeout(() => {
          post.style.display = 'none';
        }, 300);
      }
    });
    
    // Update filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('.filter-tab[data-filter="all"]').classList.add('active');
  }
  
  // Helper Functions
  function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.home-v2-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'home-v2-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--home-v2-primary);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      z-index: 9999;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 12px var(--home-v2-shadow-hover);
      font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
  
  // Add animations and transitions
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .post-card {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .story-item.active .avatar-ring {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
      padding: 3px !important;
    }
    
    .action-btn {
      transition: all 0.2s ease;
    }
    
    .action-btn:hover {
      transform: translateY(-1px);
    }
    
    .load-icon {
      transition: transform 0.3s ease;
    }
  `;
  document.head.appendChild(style);
});
