# Web Accessibility and Search Engine Optimization (SEO)

## Concepts
- Define some common content accessibility considerations.
- Explain what the Document Outline is, and why it's important.
- Define what Section 508c is, and explain common requirements that address it.
- Define what WCAG is, and explain common requirements that adddress it.
- Define what ARIA roles are, and what they're used for.
- Explain image "alt" texts, and what they're used for.
- Explain cross-browser compatibility, and name a few major concerns.
- Explain what SEO is, and why it's important.
- Explain what the document `<title>` tag is, and why it's important.

## Mechanics
- Create an HTML document outline based on content heirarchy.
- Configure ARIA roles on major content divisions.

## Accessibility

[Screen Reader](https://www.youtube.com/watch?v=KFPtxCDUPqs)

* 0:00 - H1
* 0:24 - bullet, links
* 1:00 - H2
* 1:17 - image

## ARIA Roles

**Accessible Rich Internet Applications**

Roles may be assigned to any tag. They're typically added to block-level elements to denote the role of the block's internal content.

```html
 <div role="banner">Welcome to my website!</div>
```

**Common roles**

- `"banner"` : The page header block.
- `"navigation"` : A region of major site navigation.
- `"search"` : The region containing the site's search form.
- `"main"` : The main content region of the page.
- `"complementary"` : A region that complements the main (ie: a sidebar)
- `"contentinfo"` : The page footer.
