# Handy-Charts
JavaScript library that helps you to create charts for data visualisation.

## Technologies Used
- Vanilla JavaScript.
- Sass.
- CSS.

## How it works (Elements Implemented so far!).
---
> **NOTE:** Elements are continuously updated (new elements added and exisiting elements modified).
---

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
- [ ] Implement `ScatterPlot` to displaye dots on scale grid.
