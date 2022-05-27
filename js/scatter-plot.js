function ScatterPlot(pointsArr) {
    this.pointsArr = pointsArr;
}

ScatterPlot.prototype.draw=function() {
    let maxValue = getMaxValue(this.pointsArr);
    let scale = new ScaleGrid(maxValue);
    scale.draw();
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