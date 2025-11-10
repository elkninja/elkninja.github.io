# Content Creation Workflow

## Quick Reference

### Creating New Content

**Option 1: Full Template (Structured)**
```bash
cp _drafts/_TEMPLATE.md _drafts/my-new-post.md
```
Then edit `_drafts/my-new-post.md` with your content.

**Option 2: Quick Start (Brain Dump)**
```bash
cp _drafts/_QUICK_START.md _drafts/idea-i-want-to-explore.md
```
Just start writing, organize later.

**Option 3: From Scratch**
```bash
# Just create a new file in _drafts/
touch _drafts/my-topic.md
```

### Preview Your Drafts Locally

```bash
bundle exec jekyll serve --drafts
```
Then visit: http://localhost:4000

Your drafts will appear as if they were published (with today's date).

### Publishing a Post

When your draft is ready:

1. **Add the date to the filename:**
   ```bash
   mv _drafts/my-post.md _posts/2025-11-10-my-post.md
   ```

2. **Update the date in the front matter** to match the filename

3. **Commit and push:**
   ```bash
   git add _posts/2025-11-10-my-post.md
   git commit -m "Publish: Your Post Title"
   git push
   ```

4. GitHub Pages will automatically build and deploy (takes 1-2 minutes)

## Content Management with GitHub Issues

### Creating Content Ideas

1. Go to your repository on GitHub
2. Click "Issues" tab
3. Click "New Issue"
4. Title: Your post idea
5. Add labels: `blog-idea`, `search`, `data`, `sql`, etc.
6. Add description/notes
7. When you write the post, reference the issue in your commit:
   ```bash
   git commit -m "Publish: Post title (closes #5)"
   ```

### Suggested Labels

Create these labels in your GitHub repo (Settings → Labels):

- `blog-idea` - Post ideas
- `search` - Search/Elasticsearch topics
- `data` - Data engineering topics
- `sql` - SQL Server topics
- `career` - Career/professional development
- `in-progress` - Currently writing
- `ready-to-publish` - Draft is done, needs final review
- `published` - Posted (auto-closes with commit message)

## Tips for Low-Friction Writing

1. **Don't aim for perfection** - Get ideas down first, edit later
2. **Use the quick start template** for rough ideas
3. **Batch your editing** - Write 3-5 drafts, then edit them all at once
4. **Set a timer** - 25-minute writing sprints (Pomodoro technique)
5. **Write in your voice** - Conversational, like you're explaining to a colleague
6. **Keep a running list** - Use GitHub Issues for all post ideas
7. **Publish imperfect posts** - Done is better than perfect

## Content Calendar Approach

### Weekly (Optional)
- Check GitHub Issues for ideas that excite you
- Pick one to work on
- Spend 30-60 minutes in a draft

### Monthly (Recommended)
- Review all drafts
- Pick 1-2 to polish and publish
- Create new issues for new ideas

### No Pressure
- Write when inspired
- No schedule required
- Quality over quantity

## Front Matter Cheatsheet

```yaml
---
layout: post                    # Always "post" for blog posts
title: "Your Title"            # Required - use quotes
date: 2025-11-10               # Required - YYYY-MM-DD format
categories: [Search, Data]     # Optional - pick 1-3 max
author: Eddie Mitchell         # Optional - defaults to site author
excerpt: "Short summary"       # Optional but recommended for SEO
featured_image: /assets/images/post.jpg  # Optional
featured_image_alt: "Alt text" # Optional but important for accessibility
---
```

## Checking Your Site

- **Local**: http://localhost:4000 (with `jekyll serve`)
- **Live**: https://elkninja.github.io (after git push)
- **Build status**: Check GitHub Actions tab in your repo

## Troubleshooting

**Drafts not showing?**
- Make sure you're using `--drafts` flag with jekyll serve
- Check that file has `.md` extension
- Verify front matter has `---` delimiters

**Post not appearing on live site?**
- Filename must be `YYYY-MM-DD-title.md` in `_posts/` folder
- Date in filename must not be in the future
- Check GitHub Actions for build errors
- Wait 1-2 minutes for GitHub Pages to deploy

**Navigation not updating?**
- Navigation auto-hides "Blogs" until you have at least one published post
- Check `_data/navigation.yml` settings
- Clear browser cache

## Need Help?

- Jekyll documentation: https://jekyllrb.com/docs/
- Jekyll posts guide: https://jekyllrb.com/docs/posts/
- Markdown guide: https://www.markdownguide.org/
