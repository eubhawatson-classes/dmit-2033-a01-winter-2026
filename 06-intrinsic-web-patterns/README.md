# Intrinsic Web Design

With intrinsic web design, we're moving into a world of component-first layouts, where each area of the website has its own rules regarding how to behave and adapts itself to whatever amount of space is available. 

## The Core Concepts

- Let things size themselves by using units like `fr`, `auto`, `%`, and `minmax()` so layouts (and, more specifically, components and individual areas) shrink and stretch naturally. 

- Components react to the width of the container, not the whole viewport (so container queries > whole page queries).

- Typography and spacing should be fluid and grow smoothly, not in jumps; we can use `clamp()` for this.

```CSS
:root {
    --spacer: clamp(1.5rem, 4vw, 3rem);
}

section {
    padding: var(--spacer);   
}
```

- Don't worry about (i.e. don't fix) heights; instead, we can use `aspect-ratio` for media like images.

- Page-wide breakpoints will still exist (but there may fewer of them). Instead of relying upon strict media queries, we'll add them only when a component or an area of a page truly needs a layout change.