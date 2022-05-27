function ScatterPlot(pointsArr) {
    this.pointsArr = pointsArr;
}

ScatterPlot.prototype.draw=function() {
    let pointsArr = this.pointsArr;
    let maxValue = getMaxValue(pointsArr);
    let scale = new ScaleGrid(maxValue);
    scale.draw();

    let dotsDiv = createDotsDiv();


    pointsArr.forEach(point => {
        let dot = placeDot(point);
        dotsDiv.appendChild(dot);
    });


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

function placeDot(dotCoordinates) {
    let xPosition = dotCoordinates[0];
    let yPoistion = dotCoordinates[1];

    let dot = document.createElement('div');
    dot.classList.add('dot-blue', 'scale-dot');

    // Move vertically
    var scaleHeight = +getComputedStyle(document.querySelector('.scale')).height.slice(0,-2);
    var verticalStep = scaleHeight / 10;
    var topPositionVW = getComputedStyle(dot).top.slice(0,-2) * 100 / window.innerWidth;
    var verticalStepVW = verticalStep * 100 / window.innerWidth;
    var newTopPosition = topPositionVW - yPoistion*verticalStepVW;
    dot.style.setProperty('top', newTopPosition+'vw');


    // move horizontally
    var scaleWidth = +getComputedStyle(document.querySelector('.scale')).width.slice(0,-2);
    var horizontalStep = scaleWidth / 10;
    var leftPositionVW = getComputedStyle(dot).left.slice(0,-2) * 100 / window.innerWidth;
    var horizontalStepVW = horizontalStep * 100 / window.innerWidth;
    var newLeftPosition = leftPositionVW + xPosition*horizontalStepVW; // change by 30% -> move three horizontal steps
    dot.style.setProperty('left', newLeftPosition+'vw');

    return dot;

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
