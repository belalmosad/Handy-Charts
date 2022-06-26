function VennDiagram(firstSetData, firstSetTheme, secondSetData, secondSetTheme) {
    this.firstSetData = firstSetData;
    this.firstSetTheme = firstSetTheme;
    this.secondSetData = secondSetData;
    this.secondSetTheme = secondSetTheme;
    this.firstSetTitle = "Set One";
    this.secondSetTitle = "Set Two";
}

VennDiagram.prototype.addFirstSetTitle = function (firstSetTitle) {
    this.firstSetTitle = firstSetTitle;
}

VennDiagram.prototype.addSecondSetTitle = function (secondSetTitle) {
    this.secondSetTitle = secondSetTitle;
}

VennDiagram.prototype.draw = function () {
    let vennDiagramDiv = document.createElement('div');
    vennDiagramDiv.classList.add('venn-diagram');

    let firstSetDiv = createFirstSet(this.firstSetTitle,this.firstSetTheme);
    let secondSetDiv = createSecondSet(this.secondSetTitle,this.secondSetTheme);

    vennDiagramDiv.appendChild(firstSetDiv);
    vennDiagramDiv.appendChild(secondSetDiv);

    document.body.appendChild(vennDiagramDiv);
    
    return vennDiagramDiv;

}
function createFirstSet(firstSetTitleContent,firstSetTheme) {
    let firstSetDiv = document.createElement('div');
    let firstSetTitle = document.createElement('div');
    firstSetTitle.innerHTML = firstSetTitleContent;
    firstSetDiv.classList.add('set-one', `set-bg-${firstSetTheme}`);
    firstSetTitle.classList.add('set-one-title', `set-title-${firstSetTheme}`);
    firstSetDiv.appendChild(firstSetTitle);
    return firstSetDiv;
}
function createSecondSet(secondSetTitleContent,secondSetTheme) {
    let secondSetDiv = document.createElement('div');
    let secondSetTitle = document.createElement('div');
    secondSetTitle.innerHTML = secondSetTitleContent;
    secondSetDiv.classList.add('set-two', `set-bg-${secondSetTheme}`);
    secondSetTitle.classList.add('set-two-title', `set-title-${secondSetTheme}`);
    secondSetDiv.appendChild(secondSetTitle);
    return secondSetDiv;
}

export default VennDiagram;