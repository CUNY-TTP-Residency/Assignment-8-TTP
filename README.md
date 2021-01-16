## Goal:
This is another exercise to further demonstrate an understanding of HTML, CSS, JS, DOM manipulation, and handling user events with ReactJS. This is also an opportunity to for improving organization in a React application.

## Direction:

You'll be re-doing part of the functionality of the DOM Challenges III (grid/row/column/color) assignment, but with Create-React-App this time around. Instead of directly using the DOM API, you'll be managing state (hint: the currently selected color and the grid), writing methods within the class instead of standalone functions, and passing down bounded-event handlers to be fired off in the children components that have event listeners on them (note: since `this` will be bound in a parent, then any child component that receives the bound function as a passed down prop will be able to impact [perform calculations/operations relevant to the parent] the parent component). The MVP (minimum viable product) features can be achieved with four components: App.jsx, Table.jsx, TableCell.jsx, TableRow.jsx, where App.jsx is a stateful, class component and the other three components are purely presentational components. The MVP features are: a user can add a row, a user can add a column, and a user can select a color to change a single cell via click. As a user, I can add a row, add a column, select a color from a dropdown menu of colors, and click on individual cells to color in the cell. Stretch and optional features will be recreating the entirety (clear the grid, fill the grid, fill uncolored cells, etc) of DOM Challenges III, but in ReactJS. There should be a dedicated and individual feature branch for each function you plan on writing as well as a dedicated and individual feature branch for each component you write out.


## Assignment:
Complete the following user stories (bold denotes an MVP/mandatory feature, whereas italics denotes a stretch/optional feature):
As a user, I can:
add rows to the grid
add columns to the grid
remove rows from the grid
remove columns from the grid
select a color from a dropdown menu of colors
click on a single cell, changing its color to the currently selected color
fill all uncolored cells with the currently selected color
fill all cells with the currently selected color
clear all cells/restore all cells to their original/initial color
click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color

[Webpage here](https://cuny-ttp-residency.github.io/Assignment-8-TTP/)