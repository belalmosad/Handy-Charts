function ProgressBar(title, percent, theme){
    validateProgressBarParams(arguments);
    this.title = title;
    this.percent = percent;
    this.theme = theme;
}
ProgressBar.prototype.draw=function() {
    var container = document.createElement('div');
    var label = document.createElement('div');
    var title = document.createElement('div');
    var percent = document.createElement('div');
    var fullBar = document.createElement('div');
    var amountBar = document.createElement('div');

    label.appendChild(title);
    label.appendChild(percent);

    fullBar.appendChild(amountBar);
    
    container.appendChild(label);
    container.appendChild(fullBar);

    document.body.appendChild(container);

    title.innerHTML = this.title;
    percent.innerHTML = this.percent+"%";

    container.classList.add("progressbar-container", "row", 'container-sm');
    label.classList.add("row", "label", "col-4", "txt-"+this.theme);
    title.classList.add("label-txt", "col-6");
    percent.classList.add("label-txt", "col-6");
    fullBar.classList.add("full-bar", "col-8");
    amountBar.classList.add("amount-bar", "bg-"+this.theme);

    fillAmountBar(this.percent, amountBar, percent);
    return container
}

ProgressBar.prototype.setTitle=function(title){
    this.title = title;
}
ProgressBar.prototype.setPercent=function(percent){
    if(typeof(percent) != "number" || percent > 100 || percent < 0) { 
        throw new Error("Enter a valid percent");
    }
    this.percent = percent;
}
ProgressBar.prototype.setTheme=function(theme){
    this.theme=theme;
}

function fillAmountBar(percent, amountBar, percentElement) {
    var i = 0;
    var intervalID = setInterval(function() {
        amountBar.style.width = i+'%';
        percentElement.innerHTML = i+'%';
        if(i >= percent) {
            clearInterval(intervalID);
        }
        i++;
    }, 10);
}

function validateProgressBarParams(args) {
    if(typeof(args[1]) != "number" || args[1] > 100 || args[1] < 0) { // percent
        throw new Error("Enter a valid percent");
    }
}