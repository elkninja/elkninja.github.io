---
layout: post
title: "Draft Preview - This is What Your Posts Will Look Like"
date: 2025-11-12
categories: [Search, Data]
author: Eddie Mitchell
excerpt: "This is a placeholder draft to show you how posts will appear on your site. Delete this when you're ready to publish real content!"
---

## 🚧 This is a Draft Preview

**You're seeing this because you're running with `--drafts` enabled.**

This post won't appear on your live site until you:
1. Move it from `_drafts/` to `_posts/`
2. Rename it with a date: `YYYY-MM-DD-title.md`
3. Push to GitHub

---

## Quick Workflow Reminder

### Writing a new post:
```bash
# Copy a template
cp _drafts/_TEMPLATE.md _drafts/my-new-idea.md

# Edit it, preview it
# (You're previewing now!)

# When ready, publish it
mv _drafts/my-new-idea.md _posts/2025-11-12-my-new-idea.md
git add _posts/2025-11-12-my-new-idea.md
git commit -m "Publish: My New Idea"
git push
```

---

## What Your Content Will Look Like

This is what your **Search and Data** posts will look like to readers.

### Code Examples

Here's how SQL will render:

```sql
-- Example: Finding duplicate records
SELECT
    user_id,
    COUNT(*) as duplicate_count
FROM user_events
GROUP BY user_id
HAVING COUNT(*) > 1;
```

And Elasticsearch queries:

```json
{
  "query": {
    "bool": {
      "must": [
        { "match": { "status": "active" } }
      ],
      "filter": [
        { "range": { "created_at": { "gte": "2025-01-01" } } }
      ]
    }
  }
}
```

### Lists and Formatting

Your key takeaways will look like this:

- **Bold points** stand out
- _Italic emphasis_ for nuance
- `Inline code` for technical terms
- Regular text for explanations

### Tables

Data tables render cleanly:

| Metric | SQL Server | Elasticsearch |
|--------|-----------|---------------|
| Speed | Fast | Very Fast |
| Scale | Vertical | Horizontal |
| Use Case | Transactions | Search/Analytics |

### Blockquotes

> "It depends" - Every good architect's answer
>
> Context matters. There's rarely one perfect solution.

---

## Remember

- This draft **won't appear** on your live site
- The "Blogs" link **only shows** because drafts are being previewed
- Delete this file when you publish your first real post
- Check `CONTENT_WORKFLOW.md` for the complete guide

---

**Ready to write?** Create a GitHub Issue with your post idea, then use one of the templates in `_drafts/`!
