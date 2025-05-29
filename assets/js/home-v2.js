// Social Media Inspired Homepage (home-v2) JavaScript
// Interactive features for social media-style engagement

document.addEventListener('DOMContentLoaded', function() {
  // Only run on home-v2 layout
  if (!document.querySelector('.home-v2')) return;
  
  // Initialize all features
  initStoriesNavigation();
  initPostFiltering();
  initViewToggle();
  initShareActions();
  initLoadMore();
  
  // Stories Navigation
  function initStoriesNavigation() {
    const storyItems = document.querySelectorAll('.story-item');
    
    storyItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all stories
        storyItems.forEach(story => story.classList.remove('active'));
        
        // Add active class to clicked story
        this.classList.add('active');
        
        // Get category filter
        const category = this.dataset.category;
        
        // Filter posts based on category
        filterPostsByCategory(category);
        
        // Smooth scroll to posts section
        const postsSection = document.querySelector('.posts-feed');
        if (postsSection) {
          postsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  
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
    
    viewToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const view = this.dataset.view;
        
        // Update active toggle
        viewToggles.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Apply view style
        if (view === 'grid') {
          postsContainer.style.display = 'grid';
          postsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
          postsContainer.style.gap = '1.5rem';
          
          // Adjust post cards for grid view
          document.querySelectorAll('.post-card').forEach(card => {
            card.style.marginBottom = '0';
          });
        } else {
          postsContainer.style.display = 'flex';
          postsContainer.style.flexDirection = 'column';
          postsContainer.style.gap = '2rem';
          postsContainer.style.gridTemplateColumns = 'none';
          
          // Reset post cards for feed view
          document.querySelectorAll('.post-card').forEach(card => {
            card.style.marginBottom = '';
          });
        }
      });
    });
  }
  
  // Share Actions
  function initShareActions() {
    // Share dropdown functionality
    const shareDropdowns = document.querySelectorAll('.share-dropdown');
    
    shareDropdowns.forEach(dropdown => {
      const shareBtn = dropdown.querySelector('.share-btn');
      const shareMenu = dropdown.querySelector('.share-menu');
      
      shareBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        shareDropdowns.forEach(other => {
          if (other !== dropdown) {
            other.querySelector('.share-menu').style.display = 'none';
          }
        });
        
        // Toggle current dropdown
        const isVisible = shareMenu.style.display === 'block';
        shareMenu.style.display = isVisible ? 'none' : 'block';
        
        // Animate share button
        shareBtn.style.transform = 'scale(1.1) rotate(15deg)';
        setTimeout(() => {
          shareBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
      });
    });
    
    // Copy link functionality
    document.addEventListener('click', function(e) {
      if (e.target.textContent === 'Copy Link') {
        const post = e.target.closest('.post-card');
        const postUrl = post.querySelector('.post-title a').href;
        
        navigator.clipboard.writeText(postUrl).then(() => {
          showNotification('Link copied to clipboard!');
          // Close the dropdown
          e.target.closest('.share-menu').style.display = 'none';
        });
      }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.share-dropdown')) {
        document.querySelectorAll('.share-menu').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });
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
  
  // Load More functionality
  function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const postsContainer = document.querySelector('.posts-feed');
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
      // Show loading state
      const loadText = this.querySelector('.load-text');
      const loadIcon = this.querySelector('.load-icon');
      
      loadText.textContent = 'Loading...';
      loadIcon.style.animation = 'spin 1s linear infinite';
      this.disabled = true;
      
      // Simulate loading more posts (in a real implementation, you'd fetch from server)
      setTimeout(() => {
        // Reset button
        loadText.textContent = 'Load More Posts';
        loadIcon.style.animation = '';
        this.disabled = false;
        
        // In a real implementation, you would append new posts here
        showNotification('All posts loaded!');
      }, 2000);
    });
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
    
    .share-menu {
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    
    .load-icon {
      transition: transform 0.3s ease;
    }
  `;
  document.head.appendChild(style);
});
