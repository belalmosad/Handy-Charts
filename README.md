# Handy-Charts
JavaScript library that helps you to create charts for data visualisation.

## Technologies Used
- Vanilla JavaScript.
- Sass.
- CSS.

## Problems and Solution
- ### **Problem 1**: Could not imagine how the library works, how to structure files, and how should it be included and used in other projects.
    - **Solution**: I read many articles about how to create JS library and how to organize files.


- ### **Problem 2**: Implementing squares grid to display data (dots, lines. ..etc) on.
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

## TODOs
- [x] Implement `ProgressBar` element.
- [x] Implement themes in scss.
- [x] Implement `DotMap` element.
- [x] Implement change data functionality in `ProgressBar` and  `DotMap`.
- [x] Complete squares grid styling and Implement `SquaresGrid` element.