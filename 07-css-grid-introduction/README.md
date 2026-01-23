# CSS Grid: Key Terms

Before we get into the core concepts of CSS Gris, we need to get comfortable with the vocabulary. Grid has its own mental model, and a lot of confusion comes from mixing these terms up or using them interchangeably when they mean different things.

---

## Terminology 

### Grid Container

The element where you declare `display: grid;`. This element established a grid formatting context, and all of it *direct children* become grid items. 

### Grid Item

Any direct child of a grid container. Only direct descendants participate in the grid layout. Grandchildren are laid out normally (unless you explicitly make a grid inside of a grid item).

### Grid Line

The dividing lines that run horizontally and veritcally through the grid. Grid lines form the boundaries of rows and columns and are what you actually reference when you place items using `grid-column` or `grid-row`.

Grid lines are numbered starting at 1, from the starting edge of the grid. Negative numbers count backwards from the end.

### Grid Track

The space between two adjacent grid lines. A column is a vertical track, and a row is a horizontal track. When you define `grid-template-columns` or `grid-template-rows`, you are defining the size of these tracks. 

### Grid Cell

A single unit of the grid, formed by the intersection of one row track and one column track. Think of this as the smallest addressable unit in the grid.

A grid item can occupy one cell or span across many cells. 

### Grid Area

A rectangular region made up of one or more grid cells. Grid areas can be created implicitly by placing an item across multiple rows or columns, or explicitly using `grid-template-areas`.

When you use `grid-template-areas`, you are naming grid areas and placing items by name rather than by line numbers.