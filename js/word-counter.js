function WordCounter (title, data, theme) {
    this.title = title;
    this.data = data;
    this.theme = theme;
}

WordCounter.prototype.draw = function() {
    let wordsCounterContainer = document.createElement('div');
    let titleDiv = generateTitleDiv(this.title, this.theme);
    wordsCounterContainer.appendChild(titleDiv);
    wordsCounterContainer.classList.add('word-counter');
    let wordsMap = generateWordsMap(this.data);
    let wordsDiv = generateWordsCountsDivs(wordsMap);
    wordsCounterContainer.appendChild(wordsDiv);

    document.body.appendChild(wordsCounterContainer);
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


export default WordCounter;