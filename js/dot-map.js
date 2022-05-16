const themes = ["blue", "rose", "orange" , "yellow", "green", "brown", "sky", "red", "pink", "grey"];

var containerDiv = document.createElement('div');
var dotsDiv = document.createElement('div');
var legendDiv = document.createElement('div');
var keysSpan = document.createElement('span');

function DotMap(data,title) {
    validateDotMapParams(data);
    this.data = data;
    this.title = title;
}

DotMap.prototype.draw=function() {
    addToDocument();
    addClasses();
    addTitle(this.title);
    generateDots(this.data);
}

function generateDots(data) {
    var colorIdx = 0;
    for(var entry of data.entries()) {
        var theme = themes[colorIdx];
        for(var i = 0; i < entry[1]; i++) {
            createDot(theme);
        }
        createLabel(theme, entry[0]);
        colorIdx++;
    }
}

function createDot(theme){
    var dotDiv = document.createElement('div');
    var className = 'dot-'+theme;
    dotDiv.classList.add(className);
    dotsDiv.appendChild(dotDiv);
}
function createLabel(theme, labelTxt){
    var legendItem = document.createElement('div');
    var dotDiv = document.createElement('div');
    var legendLabelDiv = document.createElement('div');

    legendItem.classList.add('row', 'center-v', 'spread');
    dotDiv.classList.add('dot-'+theme);
    legendLabelDiv.classList.add('legend-label', 'txt-'+theme);

    legendItem.appendChild(dotDiv);
    legendItem.appendChild(legendLabelDiv);

    legendDiv.appendChild(legendItem);

    legendLabelDiv.innerHTML = labelTxt

}

function addClasses(){
    containerDiv.classList.add('dotmap-container','container-sm');
    dotsDiv.classList.add('row', 'spread');
    legendDiv.classList.add('legend');
}
function addToDocument(){
    containerDiv.appendChild(dotsDiv);
    containerDiv.appendChild(legendDiv);
    legendDiv.appendChild(keysSpan);
    document.body.appendChild(containerDiv);
    keysSpan.innerHTML = 'Keys';
}

function validateDotMapParams(data) {
    const getType = obj => Object.prototype.toString.call(obj).slice(8, -1);
    if(getType(data) !== 'Map'){
        throw new Error("You should provide a map");
    }
    if(data.size > 10) {
        throw new Error("You should provide no more than 8 categories");
    }
    for(var val of data.values()){
        if(typeof(val) !== "number") {
            throw new Error("You should provide discrete values")
        }
    }
}

function addTitle(title){
    var titleDiv = document.createElement('div');
    titleDiv.classList.add('dotmap-title');
    titleDiv.innerHTML = title;

    containerDiv.prepend(titleDiv);
}