// Main JavaScript file for theme functionality

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('is-active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Add anchor links to headings in post content
  const postContent = document.querySelector('.post-content');
  if (postContent) {
    const headings = postContent.querySelectorAll('h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
      // Create an ID from the heading text if it doesn't have one
      if (!heading.id) {
        const id = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, '-');
        
        heading.id = id;
      }
      
      // Create anchor link
      const anchor = document.createElement('a');
      anchor.className = 'anchor';
      anchor.href = `#${heading.id}`;
      anchor.innerHTML = '<svg viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>';
      
      heading.prepend(anchor);
    });
  }

  // Responsive images with srcset for performance
  const responsiveImages = document.querySelectorAll('.post-content img');
  
  responsiveImages.forEach(img => {
    if (!img.getAttribute('srcset') && !img.closest('figure')) {
      const src = img.getAttribute('src');
      
      // Skip images that already have srcset or SVGs
      if (src && !src.endsWith('.svg') && !img.getAttribute('srcset')) {
        // Determine width based on natural width or set default maximum
        const width = img.naturalWidth || 800;
        
        // Create srcset for common viewport sizes
        const srcset = [
          `${src} ${width}w`,
          `${src.replace(/\.(jpg|jpeg|png|webp)$/, '-sm.$1')} ${Math.round(width/2)}w`,
          `${src.replace(/\.(jpg|jpeg|png|webp)$/, '-lg.$1')} ${Math.round(width*1.5)}w`
        ].join(', ');
        
        img.setAttribute('srcset', srcset);
        img.setAttribute('sizes', '(max-width: 768px) 100vw, 740px');
      }
    }
  });

  // Lazy loading of images using Intersection Observer API
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
          }
          
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.removeAttribute('data-srcset');
          }
          
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(image => {
      lazyImageObserver.observe(image);
    });
  }

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty links or javascript void links
      if (href === '#' || href.startsWith('javascript')) return;
      
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        e.preventDefault();
        
        window.scrollTo({
          top: target.offsetTop - 100, // Add some offset for headers
          behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        history.pushState(null, null, href);
      }
    });
  });
  
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the link path matches the current path
    if (linkPath === currentPath || 
        (linkPath !== '/' && currentPath.startsWith(linkPath)) ||
        (currentPath === '/' && linkPath === '/')) {
      link.parentElement.classList.add('active');
    }
  });
});
