function ScaleGrid(maxValue=10) {
    if(maxValue < 0.1 || maxValue == Infinity) {
        throw new Error("You should provide max value >= 0.1 and less than Infinity");
    }
    if(typeof(maxValue) != "number") {
        throw new Error("Enter single number value");
    }
    this.maxValue = maxValue;

}
ScaleGrid.prototype.draw=function(){
    var containerDiv = document.createElement('div');
    containerDiv.classList.add('container', 'container-max');
    var scaleDiv = createScaleGrid();
    var horizontalVals = createScaleHorizontalValues(this.maxValue);
    var verticalVals = createScaleVerticalValues(this.maxValue);
    containerDiv.appendChild(scaleDiv);
    containerDiv.appendChild(horizontalVals);
    containerDiv.appendChild(verticalVals);

    document.body.appendChild(containerDiv);

    return scaleDiv;
}

ScaleGrid.prototype.setMaxValue=function(maxValue) {
    if(maxValue < 0.1 || maxValue == Infinity) {
        throw new Error("You should provide max value >= 0.1 and less than Infinity");
    }
    if(typeof(maxValue) != "number") {
        throw new Error("Enter single number value");
    }
    this.maxValue = maxValue;
}


function createScaleHorizontalLines(){
    var hLinesDiv = document.createElement('div');
    hLinesDiv.classList.add('lines', 'lines-h');
    for(let i = 0; i < 11; i++) {
        var line = document.createElement('div');
        line.classList.add('line');
        hLinesDiv.appendChild(line);
    }
    return hLinesDiv;
}
function createScaleVerticalLines(){
    var vLinesDiv = document.createElement('div');
    vLinesDiv.classList.add('lines', 'lines-v');
    for(let i = 0; i < 11; i++) {
        var line = document.createElement('div');
        line.classList.add('line');
        vLinesDiv.appendChild(line);
    }
    return vLinesDiv;
}
function createScaleGrid() {
    var scaleDiv = document.createElement('div');
    scaleDiv.classList.add('scale');
    var vLines = createScaleVerticalLines();
    var hLines = createScaleHorizontalLines();
    scaleDiv.appendChild(vLines);
    scaleDiv.appendChild(hLines);
    return scaleDiv;
}
function createScaleHorizontalValues(num){
    let step = +(num / 10).toFixed(2);
    var valuesDiv = document.createElement('div');
    valuesDiv.classList.add('scale-vals-h');
    for(let i = 0; i <= num; i = +(i + step).toFixed(2)) {
        var val = document.createElement('div');
        val.classList.add('scale-val');
        val.innerHTML = i;
        valuesDiv.appendChild(val);
    }
    return valuesDiv;
}
function createScaleVerticalValues(num){
    let step = +(num / 10).toFixed(2);
    var valuesDiv = document.createElement('div');
    valuesDiv.classList.add('scale-vals-v');
    for(let i = 0; i <= num; i = +(i + step).toFixed(2)) {
        var val = document.createElement('div');
        val.classList.add('scale-val');
        val.innerHTML = i;
        valuesDiv.appendChild(val);
    }
    return valuesDiv;
}