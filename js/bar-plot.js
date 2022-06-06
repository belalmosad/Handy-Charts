class BarPlot {
    constructor(title, data, theme) {
        this.title = title;
        this.data = data;
        this.theme = theme;
        this.dataMaxValue = Math.max(...Array.from(data.values()));
    }
    setTitle(title) {this.title = title;}
    setData(data) {this.data = data;}
    setTheme(theme) {this.theme = theme;}
    draw() {

        let containerDiv = createContainerDiv();
        let titleDiv = createTitleDiv(this.theme);
        let barsDiv = createBarsDiv();
        titleDiv.innerHTML = this.title;
        containerDiv.appendChild(titleDiv);
        containerDiv.appendChild(barsDiv);
        document.body.appendChild(containerDiv);
        for(let value of this.data.values()) {
            let barDiv = createBar(this.theme);
            barsDiv.appendChild(barDiv);
            setBarHeight(barDiv, value, this.dataMaxValue);
            
        }




        // Helper functions
        function createContainerDiv() {
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('container');
            return containerDiv;
        }
        function createTitleDiv(theme) {
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('title', `txt-${theme}`);
            return titleDiv;
        }
        function createBarsDiv() {
            let barsDiv = document.createElement('div');
            barsDiv.classList.add('bars');
            return barsDiv;
        }
        function createBar(theme) {
            let barDiv = document.createElement('div');
            barDiv.classList.add('bar', `bar-${theme}`);
            return barDiv;
        }
        function setBarHeight(barElement, value, maxValue) {
            let percent = value / maxValue;
            let elementHeight = barElement.clientHeight;
            let percentToDecrease = 1 - percent;
            let newElementHeight = elementHeight - percentToDecrease*elementHeight;
            barElement.style.height = newElementHeight+'px';
            barElement.style.transform = `translateY(${elementHeight-newElementHeight}px)`;
        }
        
    }
}


