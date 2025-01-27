# React D3 Chart Material UI State Management Example

## Motivation

State management is one of the most challenging problems when working with charting libraries. Of course, it is easy to create a simple chart, but it gets much more complicated when you need to synchronize the state across the whole app, which contains grids, charts, and UI elements. This React, D3, Material UI app demonstrates how to address the state management problem.

## Step by step tutorial

### 1. First we create an empty React TypeScript app with WebPack

By adding [these files](https://github.com/klishevich/blog/commit/118b24cea3e1385211be3e5eed32d81599d59a9a) we create a new project.
After running it with `npm run dev` we get this

> ![New React App Image](img/img01.jpg)

### 2. Let us add a simple D3 chart to the page

After installing `d3` npm module and types `@types/d3` we create a line chart with the point markers ([git diff](https://github.com/klishevich/blog/commit/1c650ab5a8e1474cfce28754be02e6241b9d336b))

> ![D3 line chart with point markers image](img/img02.jpg)

### 3. Now let's add Material UI table to the page

After installing Material UI modules `@mui/icons-material`, `@mui/material": "^6.4.1`, `@emotion/react`, `@emotion/styled` fonts `@fontsource/roboto` and Webpack style loaders `css-loader`, `style-loader` we can add a grid to the page.

> ![Add material UI table](img/img03.jpg)