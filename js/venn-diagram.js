function VennDiagram(firstSetData, firstSetTheme, secondSetData, secondSetTheme) {
    this.firstSetData = firstSetData;
    this.firstSetTheme = firstSetTheme;
    this.secondSetData = secondSetData;
    this.secondSetTheme = secondSetTheme;
}

VennDiagram.prototype.addFirstSetTitle = function (firstSetTitle = "Set One") {
    this.firstSetTitle = firstSetTitle;
}

VennDiagram.prototype.addSecondSetTitle = function (secondSetTitle = "Set Two") {
    this.secondSettitle = secondSetTitle;
}

VennDiagram.prototype.draw = function () {
    let vennDiagramDiv = document.createElement('div');
    vennDiagramDiv.classList.add('venn-diagram');

    let firstSetDiv = createFirstSet(this.firstSetTheme);
    let secondSetDiv = createSecondSet(this.secondSetTheme);

    vennDiagramDiv.appendChild(firstSetDiv);
    vennDiagramDiv.appendChild(secondSetDiv);

    document.body.appendChild(vennDiagramDiv);
    
    return vennDiagramDiv;

}
function createFirstSet(firstSetTheme) {
    let firstSetDiv = document.createElement('div');
    firstSetDiv.classList.add('set-one', `set-bg-${firstSetTheme}`);
    return firstSetDiv;
}
function createSecondSet(secondSetTheme) {
    let secondSetDiv = document.createElement('div');
    secondSetDiv.classList.add('set-two', `set-bg-${secondSetTheme}`);
    return secondSetDiv;
}

export default VennDiagram;