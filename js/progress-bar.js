function ProgressBar(title, percent, theme){
    validateParams(arguments);
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

    container.classList.add("container", "row");
    label.classList.add("row", "label", "col-4", "txt-"+this.theme);
    title.classList.add("label-txt", "col-6");
    percent.classList.add("label-txt", "col-6");
    fullBar.classList.add("full-bar", "col-8");
    amountBar.classList.add("amount-bar", "bg-"+this.theme);

    fillAmountBar(this.percent, amountBar, percent);
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

function validateParams(args) {
    if(args.length != 3){
        throw new Error("You should enter three parameters");
    }
    if(typeof(args[1]) != "number" || args[1] > 100 || args[1] < 0) { // percent
        throw new Error("Enter a valid percent");
    }
}