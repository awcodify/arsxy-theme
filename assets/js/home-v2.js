// Social Media Inspired Homepage (home-v2) JavaScript
// Interactive features for social media-style engagement

document.addEventListener('DOMContentLoaded', function() {
  // Only run on home-v2 layout
  if (!document.querySelector('.home-v2')) return;
  
  // Initialize all features
  initViewToggle();
  initFilterTabs();
  
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
  
  // Filter Tabs (All Posts / Featured)
  function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const allPostsContainer = document.getElementById('posts-feed');
    const featuredPostsContainer = document.getElementById('posts-featured');
    
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const filter = this.dataset.filter;
        
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show/hide containers based on filter
        if (filter === 'featured') {
          // Show featured posts, hide all posts
          allPostsContainer.style.display = 'none';
          featuredPostsContainer.style.display = 'flex';
        } else {
          // Show all posts, hide featured posts
          allPostsContainer.style.display = 'flex';
          featuredPostsContainer.style.display = 'none';
        }
      });
    });
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
