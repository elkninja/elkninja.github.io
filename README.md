# Modern Minimalist Jekyll Theme

A modern, minimalist Jekyll theme for GitHub Pages inspired by Medium and Ghost with responsive design and optimized readability. This theme is perfect for personal portfolios, blogs, and project documentation.

![Modern Minimalist Theme Screenshot](screenshot.png)

## Features

- **Clean, Modern Design** - Inspired by Medium and Ghost blog platforms
- **Responsive Layout** - Optimized for all screen sizes from mobile to desktop
- **Personal Portfolio** - Home page features an about section with profile picture and social links
- **Blog Section** - Display your blog posts with clean typography and good readability
- **Presentations Page** - Showcase your talks, presentations, and workshops
- **Customizable** - Easy to customize with variable settings in SCSS files
- **SEO Friendly** - Built with search engine optimization in mind

## Installation

### Option 1: Use as a GitHub Pages Remote Theme

1. Create a new GitHub repository or use an existing one
2. Create a `_config.yml` file in the repository with the following content:

```yaml
remote_theme: yourusername/modern-minimalist
title: Your Name
description: Your tagline or brief description
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com

# Social media links
github_username: yourgithubusername
linkedin_username: yourlinkedinusername
twitter_username: yourtwitterhandle
email: your-email@example.com

# Jekyll settings
plugins:
  - jekyll-remote-theme
```

3. Go to your repository settings → Pages → and enable GitHub Pages

### Option 2: Fork This Repository

1. Fork this repository to your GitHub account
2. Rename the repository to `yourusername.github.io` (replace with your GitHub username)
3. Edit the `_config.yml` file to customize your information
4. Your site will be available at `https://yourusername.github.io`

### Option 3: Clone and Setup Locally

1. Clone this repository:
```bash
git clone https://github.com/yourusername/modern-minimalist.git
cd modern-minimalist
```

2. Install Jekyll and dependencies:
```bash
gem install bundler jekyll
bundle install
```

3. Run the site locally:
```bash
bundle exec jekyll serve
```

4. Your site will be available at `http://localhost:4000`

## Customization

### Site Configuration

Edit the `_config.yml` file to customize your site's title, description, and social media links.

```yaml
# Site settings
title: Your Name
description: Software Developer & Technology Enthusiast

# Author information
author:
  name: Your Name
  email: your-email@example.com

# Social media
twitter_username: yourtwitterhandle
github_username: yourgithubusername
linkedin_username: yourlinkedinusername
email: your-email@example.com
```

### Changing Colors

Edit the `_sass/_variables.scss` file to customize the colors:

```scss
// Colors
$primary-color: #2C3E50;      // Dark blue
$secondary-color: #3498DB;    // Bright blue
$accent-color: #E74C3C;       // Red
$background-color: #FFFFFF;   // White
$text-color: #333333;         // Dark gray
```

### Adding Content

#### Creating Blog Posts

Add new blog posts to the `_posts` directory with the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Blog Post Title"
date: 2025-05-14
categories: [category1, category2]
author: Your Name
featured_image: /assets/images/post-image.jpg
featured_image_alt: Image description for accessibility
---

Your post content goes here. You can use **Markdown** formatting.
```

#### Adding Presentations

Edit the `presentations.html` file to add your presentations or talks.

## File Structure

```
.
├── _data/                 # Data files (navigation.yml)
├── _includes/             # Template partials
├── _layouts/              # Page layouts
├── _posts/                # Blog posts
├── _sass/                 # Sass files
│   ├── _base.scss         # Base styles
│   ├── _home.scss         # Home page styles
│   ├── _layout.scss       # Layout styles
│   ├── _responsive.scss   # Responsive designs
│   ├── _typography.scss   # Typography rules
│   ├── _variables.scss    # Variables for customization
│   └── main.scss          # Main Sass file
├── assets/                # Static assets
│   ├── css/               # Compiled CSS
│   ├── images/            # Images
│   └── js/                # JavaScript files
├── _config.yml            # Jekyll configuration
├── index.html             # Home page
├── blogs.html             # Blog listing page
├── presentations.html     # Presentations page
└── README.md              # This file
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a pull request to improve this theme.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Icons from [Simple Icons](https://simpleicons.org/)