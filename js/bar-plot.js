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
        for(let [key, value] of this.data.entries()) {
            let barDiv = createBar(this.theme);
            barsDiv.appendChild(barDiv);
            setBarHeight(barDiv, value, this.dataMaxValue);
            barDiv.innerHTML = `${key} <br> ${value}`;
            
        }

        let allBars = barsDiv.children;
        for(let bar of allBars) {
            bar.addEventListener('mouseover', () => {
                addBarInfo(bar, this.theme, bar.innerHTML);
            });
            bar.addEventListener('mouseleave', () => {
                removeBarInfo(bar);
            });
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
        function addBarInfo(bar,theme, key) {
            removeBarInfo();
            let barInfoDiv = document.createElement('div');
            barInfoDiv.classList.add('bar-category', `bar-category-${theme}`);
            barInfoDiv.innerHTML = key;
            bar.parentElement.insertBefore(barInfoDiv, bar.nextSibling);
            positionBarInfo(barInfoDiv, bar);
            console.log(barInfoDiv);
            console.log(barInfoDiv.getBoundingClientRect());
        }
        function removeBarInfo() {
            
            for(let barCategory of document.getElementsByClassName('bar-category')) {
                barCategory.parentElement.removeChild(barCategory);
            }
        }

        function positionBarInfo(barInfoDiv, bar) {
            let barPositionX = bar.getBoundingClientRect().x;
            let barPositionY = bar.getBoundingClientRect().top;
            let barWidth = bar.getBoundingClientRect().width;
            let barInfoNewX = barPositionX + barWidth;
            console.log(barInfoNewX);
            barInfoDiv.style.left = `${barInfoNewX}px`;
            barInfoDiv.style.top = `${barPositionY}px`;
        }
        
    }
}


