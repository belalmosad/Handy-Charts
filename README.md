# Handy-Charts
JavaScript library that helps you to create charts for data visualisation.

## Technologies Used
- Vanilla JavaScript.
- Sass.
- CSS.

## How it works (Elements Implemented so far!).
1. <a href="https://github.com/belalmosad/Handy-Charts#1-progress-bar">Progress Bar</a>
2. <a href="https://github.com/belalmosad/Handy-Charts#2-dot-map">Dot Map</a>
3. <a href="https://github.com/belalmosad/Handy-Charts#3-scale-grid">Scale Grid</a>
4. <a href="https://github.com/belalmosad/Handy-Charts#4-scatter-plot">Scatter Plot</a>


---
> **NOTE:** Elements are continuously updated (new elements added and exisiting elements modified).
---
### **1. Progress Bar**
#### Progress Bar is one dimension data element that visualize percentage value.
```js
var progressBar = new ProgressBar(<title>, <percent>, <theme>);
```
- `title` is a string value that describes title of progress bar.
- `percent` the numeric value that represents percentage displayed on progress bar. `percent` must be numerical value and no more than 100 and no less than 0.
- `theme ` is the color of displayed progress bar. Availabe themes so far are as follows:
    ```scss
    $themes: (
        "blue":#003f5c,
        "rose": #f95d6a,
        "orange": #ff7c43,
        "yellow": #ffa600,
        "green": #4f772d,
        "brown": #583101,
        "sky": #90c2e7,
        "red": #902923,
        "pink": #ff6392,
        "grey": #616060
    );
    ```
**Methods**:
```js
progressBar.draw(); // draw the progress bar to the HTML document
progressBar.setTitle(title); // Change title
progressBar.setData(data);// Change data
```
<div>
    <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/progress-bar-blue.PNG" />
    <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/progress-bar-red.PNG" />
    <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/progress-bar-green.PNG" />
<div>

<hr>




### **2. Dot Map**
#### Dot Map is used to visualize two dimensional data. Fist dimension is Categorical data and the second is descrete (count) of this data.
```js
var dotMap = new DotMap(<title>, <data>);
```
- `title` is a string describes the data.
- `data` is a key-value pairs data structure, where `key` is the category and `value` (integer value) is the count.
The maximum number of categories (so far) should be 8 (limited to number of themes).
**Methods**:
```js
dotMap.draw(); // draw the dotmap to the HTML document
dotMap.setTitle(title); // Change title
dotMap.setData(data);// Change data
```

<div>
    <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/dotmap.PNG" />
<div>

<hr>

### **3. Scale Grid**
#### Scale grid is not a visualization element itself, but it's used widely in other visualization elements such as scatter plots and bubble maps.
```js
var scaleGrid = new ScaleGrid(<maxValue>);
```
- `maxValue` is the number that defines the value of each step of the grid. Grid is divided to 10 steps. For example if `maxValue = 20`, each step on the grid will be 2 steps. `maxValue` is set to 10 by default.

**Methods**
```js
scaleGrid.draw(); // draw grid to HTML document
scaleGrid.setMaxValue(maxValue); // change max value
```
Scale grid for `maxValue = 5`. Each step will be (5 / 10) = 0.5
<div>
    <img src = "https://github.com/belalmosad/Handy-Charts/blob/main/Assets/scale-grid.PNG" />
</div>

<hr>

### **4. Scatter Plot**
#### Scatter plot is for representing 2D data. Making use of scale grid we can place data with coordinates position (x,y).
```js
var scatterPlot = new ScatterPlot(<title>, <pointsData>, <theme>);
```
- `title`: Text describing the scatter plot.
- `pointsData`: Array of arrays where each array represents dot position (x position and y position).
- `theme`: color (out of available 8 themes so far) to color dots and title. 

**Methods**
```js
scatterPlot.draw(); // draw scatter plot to HTML document.
scatterPlot.setTitle(title); //reset title.
scatterPlot.setTheme(theme); //reset theme
scatterPlot.setpointsArr(data); // reset array of arrays that represents data positions
```

creating scatter plot with data points with 11 data point and green theme
```js

let points = [[1,2], [2,3], [3,1], [4,4],[4,5],[5,4], [6,6], [6,7], [7,3], [7,7], [10,6]];
let scatterPlot = new ScatterPlot("Scatter plot title",points, "green");
scatter.draw();
```




## Challenge and Solution
- ### **Challenge 1**: Could not imagine how the library works, how to structure files, and how should it be included and used in other projects.
    - **Solution**: I read many articles about how to create JS library and how to organize files.


- ### **Challenge 2**: Implementing squares grid to display data on scale (dots, lines. ..etc) on. 
    ---
    > **NOTE**: Scale Grid is vitally important because it's being used in many visualization elements such as scatter plots (Implemented later!).
    ---
    - **Solution**
        - Create `div with class scale` that contains *two divs* one `div for horizontal lines` and the other for `vertical lines`.
        - Using css properties `position: relative` and `bottom` to overlap the vertical lines div over the horizontal lines div.
        - HTML code:
            ```html
            <div class="scale">
                    <div class="lines lines-v">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>

                    <div class="lines lines-h">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
            </div>
            ```

        - sass code:
            ```scss
            .scale
            {
                width: 60%;
                height: 40vw;
                margin: 0 auto;
                & .lines {
                    @extend .row;
                    height: 40vw;
                    justify-content: space-between;
                }
                & .lines-v{
                    flex-direction: row;
                }
                & .lines-h{
                    flex-direction: column;
                    position: relative;
                    bottom: 40vw;
                }
                & .line {
                    border: 1px solid rgb(238, 238, 238);
                }
            }
            ```

        - Output after putting on scale values (done later!):
        <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/squares-grid.PNG" />



- ### Challenge 3: Placing Dots (with x, y position coords) on the scale grid.
  - The data is passed as (x,y) pairs where each pair corresponds to dot location on the scale grid. How should the dots be placed?
  - The grid is divided to 10 steps horizontally and 10 steps vertically.
  - So, each step in vertical direction or to horizontal direction will correspond to increase or decrease by 10% of the dot location (change `top` and `left` css properties).
  ```js
  // move vertically
  // topPositionVW is top in VW unit.
  var scaleHeight = +getComputedStyle(document.querySelector('.scale')).height.slice(0,-2);
  var verticalStep = scaleHeight / 10;
  var topPositionVW = getComputedStyle(dot).top.slice(0,-2) * 100 / window.innerWidth;
  var verticalStepVW = verticalStep * 100 / window.innerWidth;
  var newTopPosition = topPositionVW - 4*verticalStepVW; // move by 40% -> move four vertical steps
  dot.style.setProperty('top', newTopPosition+'vw');

  // move horizontally
  var scaleWidth = +getComputedStyle(document.querySelector('.scale')).width.slice(0,-2);
  var horizontalStep = scaleWidth / 10;
  var leftPositionVW = getComputedStyle(dot).left.slice(0,-2) * 100 / window.innerWidth;
  var horizontalStepVW = horizontalStep * 100 / window.innerWidth;
  var newLeftPosition = leftPositionVW + 3*horizontalStepVW; // change by 30% -> move three horizontal steps
  dot.style.setProperty('left', newLeftPosition+'vw');

  //This will result in placement in position (x,y) = (3,4) 
  ```
  - <img src="https://github.com/belalmosad/Handy-Charts/blob/main/Assets/dot-placement.png" />



## TODOs
- [x] Implement `ProgressBar` element.
- [x] Implement themes in scss.
- [x] Implement `DotMap` element.
- [x] Implement change data functionality in `ProgressBar` and  `DotMap`.
- [x] Complete scale grid styling and Implement `SquaresGrid` element.
- [x] Implement `ScatterPlot` to displaye dots on scale grid.
