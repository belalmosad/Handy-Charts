function ScatterPlot(title,pointsArr,theme="blue") {
    this.title = title;
    this.pointsArr = pointsArr;
    this.theme = theme;
}

ScatterPlot.prototype.draw=function() {
    addScatterPlotTitle(this.title, this.theme);
    let pointsArr = this.pointsArr;
    let maxValue = getMaxValue(pointsArr);
    let scale = new ScaleGrid(maxValue);
    let scaleDiv = scale.draw();

    let dotsDiv = createDotsDiv();


    pointsArr.forEach(point => {
        let dot = placeDot(this.theme);
        dotsDiv.appendChild(dot);
        moveDot(dot, point, scaleDiv, maxValue);
    });
}

ScatterPlot.prototype.setTitle=function(title) {
    this.title = title;
}
ScatterPlot.prototype.setTheme=function(theme) {
this.theme = theme;
}
ScatterPlot.prototype.setPointsArr=function(pointsArr) {
    this.pointsArr = pointsArr
}

function addScatterPlotTitle(title, theme) {
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('container', `scatter-plot-title-${theme}`);
    titleDiv.innerHTML = title;
    document.body.appendChild(titleDiv);
}


function getMaxValue(pointsArr) {
    let max = -Infinity;
    pointsArr.forEach(point => {
        let x = point[0];
        let y = point[1];
        x > max ? max = x : max;
        y > max ? max = y : max;
        return max;
    });
    return max;
}

function placeDot(theme) {
    let dot = document.createElement('div');
    dot.classList.add('scale-dot', `dot-${theme}`);
    return dot;
}

function moveDot(dot, coords, scaleDiv, maxValue) {
    let xPosition = coords[0];
    let yPoistion = coords[1];
    let stepFactor = 10 / maxValue;


    //Move vertically
    var scaleHeight = +getComputedStyle(scaleDiv).height.slice(0,-2);
    var verticalStep = scaleHeight / 10;
    var topPositionVW = getComputedStyle(dot).top.slice(0,-2) * 100 / window.innerWidth;
    var verticalStepVW = verticalStep * 100 / window.innerWidth;
    var newTopPosition = topPositionVW - yPoistion*verticalStepVW*stepFactor;
    dot.style.setProperty('top', newTopPosition+'vw');


    //move horizontally
    var scaleWidth = +getComputedStyle(scaleDiv).width.slice(0,-2);
    var horizontalStep = scaleWidth / 10;
    var leftPositionVW = getComputedStyle(dot).left.slice(0,-2) * 100 / window.innerWidth;
    var horizontalStepVW = horizontalStep * 100 / window.innerWidth;
    var newLeftPosition = leftPositionVW + xPosition*horizontalStepVW*stepFactor;
    dot.style.setProperty('left', newLeftPosition+'vw');
}

function createDotsDiv() {
    let dotsContainerDiv = document.createElement('div');
    dotsContainerDiv.style.position = 'relative';
    let dotsDiv = document.createElement('div');
    dotsDiv.classList.add('dots');
    dotsContainerDiv.appendChild(dotsDiv);
    document.body.appendChild(dotsContainerDiv);
    return dotsDiv;
}
