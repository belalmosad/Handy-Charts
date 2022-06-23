import {BarPlot} from "./handy-charts.js";

function WordCounter (title, data, theme) {
    this.title = title;
    this.data = data;
    this.theme = theme;
    this.htmlDOMElement = this;
}

WordCounter.prototype.draw = function() {
    let wordsCounterContainer = document.createElement('div');
    let titleDiv = generateTitleDiv(this.title, this.theme);
    wordsCounterContainer.appendChild(titleDiv);
    wordsCounterContainer.classList.add('word-counter');
    let wordsMap = generateWordsMap(this.data);
    let wordsDiv = generateWordsCountsDivs(wordsMap);
    wordsCounterContainer.appendChild(wordsDiv);

    let barPlot = addBarPlot(wordsMap, this.theme);
    wordsCounterContainer.appendChild(barPlot);
    document.body.appendChild(wordsCounterContainer);

    this.htmlDOMElement = wordsCounterContainer;
    return wordsCounterContainer;
}

function generateWordsMap(data) {
    let wordsMap = new Map();
    let wordsArray = data.split(/[' ',.,!,?,',']/);
    wordsArray.forEach(word => {
        let lowerCaseWord = word.toLocaleLowerCase();
        if(wordsMap.has(lowerCaseWord)) {
            wordsMap.set(lowerCaseWord, wordsMap.get(lowerCaseWord) + 1);
        } else if (lowerCaseWord !== "") {
            wordsMap.set(lowerCaseWord, 1);
        }
    });
    return wordsMap;
}

function generateWordsCountsDivs(wordsMap) {
    let wordsDiv = document.createElement('div');
    wordsDiv.classList.add('words');
    for(let [word, count] of wordsMap.entries()) {
        let wordDiv = document.createElement('div');
        wordDiv.classList.add('word-info');
        wordDiv.innerHTML = word + ' ➜ ' + count;
        wordsDiv.appendChild(wordDiv);
    }
    return wordsDiv
}

function generateTitleDiv(title, theme) {
    let titleDiv = document.createElement('div');
    titleDiv.innerHTML = title;
    titleDiv.classList.add('word-count-title', `txt-${theme}`);
    return titleDiv;
}

function addBarPlot(wordsMap,theme) {
    let barPlot = new BarPlot('Bar Plot representing Words distribution', wordsMap, theme);
    return barPlot.draw();
}

export default WordCounter;