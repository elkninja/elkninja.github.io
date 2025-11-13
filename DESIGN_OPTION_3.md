# Design Option 3: Simple Centered Layout with Enhanced Width

## Overview

This option is a refined version of the original centered layout, but with better use of screen space. It maintains the simple, proven pattern while improving readability and image presentation.

## Layout Concept

```
┌────────────────────────────────────┐
│     [Larger Profile Image]         │
│                                    │
│         Eddie Mitchell            │
│   Search and Data Professional    │
│                                    │
│        [Bio Paragraph]            │
│                                    │
│        [Tech Badges]              │
│        [Social Icons]             │
└────────────────────────────────────┘

─────────────────────────────────────

┌─────────┬──────────┬─────────────┐
│ Gallery │ Gallery  │  Gallery    │
│ Image 1 │ Image 2  │  Image 3    │
│         │          │             │
│ Caption │ Caption  │  Caption    │
└─────────┴──────────┴─────────────┘
```

## Key Specifications

### Content Width
- **Max-width**: 900-1000px (up from 740px)
- Provides more breathing room while maintaining readability
- Text paragraphs won't exceed optimal 75-85 characters per line

### Profile Section
- **Profile image**: 300px diameter (larger, more prominent)
- **Name**: 3rem font size, bold
- **Subtitle**: 1.5rem, accent color
- **Bio**: 1.1rem, line-height 1.8 for readability
- **All centered** for clean hierarchy

### Gallery Section
- **Layout**: 3 columns, equal width
- **Image height**: 400-450px
- **Object-fit**: `contain` OR smart `cover` with proper positioning
- **Gap**: 32px between images
- **Full photos visible** - no awkward cropping

### Spacing
- Hero section: 80px padding top/bottom
- Between sections: 64px
- Gallery section: 48px padding top/bottom

## Implementation

### HTML Structure

```html
<div class="home">
  <div class="wrapper">
    <!-- Hero: Profile Section -->
    <section class="hero-section">
      <img src="profile.jpg" alt="Eddie Mitchell" class="profile-image">
      <h1 class="profile-title">Eddie Mitchell</h1>
      <h2 class="profile-subtitle">Search and Data Professional</h2>

      <div class="profile-bio">
        <p>Bio paragraph 1...</p>
        <p>Bio paragraph 2...</p>
      </div>

      <div class="tech-stack">
        <span class="tech-item">SQL Server</span>
        <!-- More tech items -->
      </div>

      <div class="social-links">
        <!-- Social icon links -->
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="action-gallery">
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="photo1.jpg" alt="Description">
          <p class="gallery-caption">Caption</p>
        </div>
        <!-- More gallery items -->
      </div>
    </section>
  </div>
</div>
```

### CSS Implementation

```scss
// Wider wrapper for better space usage
.home .wrapper {
  max-width: 950px; // Adjust between 900-1000px
  margin: 0 auto;
  padding: 0 $double-spacing;
}

// Hero Section: Centered profile
.hero-section {
  text-align: center;
  padding: 80px 0 64px;

  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 auto 32px;
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .profile-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 8px;
    color: $primary-color;
  }

  .profile-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: $secondary-color;
    margin-bottom: 48px;
  }

  .profile-bio {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: left; // Left-align for readability
    margin: 0 auto 48px;
    max-width: 700px; // Optimal line length

    p {
      margin-bottom: 24px;
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 48px auto;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
}

// Gallery Section
.action-gallery {
  margin: 64px 0;
  padding: 48px 0;
  background: linear-gradient(
    to bottom,
    rgba($light-gray, 0.4),
    transparent
  );
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 420px;

    // Option A: Show full image
    object-fit: contain;
    background-color: #f8f9fa;

    // Option B: Cover with smart positioning
    // object-fit: cover;
    // object-position: center top; // Adjust per image
  }

  .gallery-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      transparent
    );
    color: white;
    font-weight: 600;
    text-align: center;
  }
}

// Responsive: Mobile
@media (max-width: 768px) {
  .hero-section {
    padding: 48px 0 32px;

    .profile-image {
      width: 220px;
      height: 220px;
    }

    .profile-title {
      font-size: 2rem;
    }

    .profile-subtitle {
      font-size: 1.2rem;
    }

    .profile-bio {
      font-size: 1rem;
      text-align: center; // Center on mobile
    }
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .gallery-item img {
    height: 300px;
  }
}
```

## Advantages

### Design Benefits
- ✅ **Proven pattern** - users expect and understand this layout
- ✅ **Clear hierarchy** - eyes naturally flow from top to bottom
- ✅ **Centered = professional** - balanced, authoritative feel
- ✅ **Readable** - text doesn't get too wide
- ✅ **Scalable** - works on all screen sizes

### Technical Benefits
- ✅ **Simple to implement** - straightforward CSS
- ✅ **Easy to maintain** - no complex grid calculations
- ✅ **Performant** - minimal layout shifts
- ✅ **Accessible** - natural reading order for screen readers

### Content Benefits
- ✅ **Profile first** - you are the focus
- ✅ **Photos get attention** - prominent gallery below
- ✅ **Full images visible** - proper aspect ratios
- ✅ **Story flow** - "who you are" then "what you do"

## When to Use This Option

Use Option 3 when you want:
- A **safe, proven approach** that works
- **Maximum readability** for text content
- **Simple maintenance** without layout complexity
- A **professional, trustworthy** impression
- To **highlight yourself first**, work second

## Comparison to Other Options

### vs Option 1 (Current)
- Option 3 uses slightly more width (950px vs 800px)
- Gallery is same but with flexibility for full images
- More prominent profile image

### vs Option 2 (Magazine)
- Option 3 is simpler and more straightforward
- Option 2 is more "designed" but requires more work
- Option 3 is easier to scan and understand

### vs Side-by-side layouts
- Option 3 avoids the awkward balance issues
- No need to decide what goes left vs right
- Natural flow top to bottom

## Customization Options

### For More Drama
- Increase profile image to 350px
- Add subtle gradient background behind hero
- Animate images on scroll

### For More Compact
- Reduce max-width to 850px
- Smaller profile image (260px)
- Tighter spacing between sections

### For Better Photos
Use `object-fit: contain` with a light gray background to show full photos without cropping. Users can see complete context of each image.

### For More Visual Impact
Use `object-fit: cover` but carefully adjust `object-position` for each image individually to ensure you're properly centered/visible.

## Implementation Time

- **HTML changes**: 15 minutes
- **CSS updates**: 30 minutes
- **Testing/tweaking**: 15 minutes
- **Total**: ~1 hour

## Future Enhancements

Easy additions later:
- Animate profile image on load
- Add "Featured Work" section below gallery
- Include testimonials/quotes
- Add a video introduction
- Blog post highlights below gallery

---

## Quick Start Command

To implement this design:

1. Update `index.html` with simpler structure
2. Replace profile/gallery sections in `_sass/_enhancements.scss`
3. Test at different widths
4. Adjust image object-fit based on your preference
5. Fine-tune spacing and sizes to taste

**Remember**: Simple and clean beats clever and complex. This layout works because it's predictable, readable, and puts the focus where it belongs - on you and your work.
