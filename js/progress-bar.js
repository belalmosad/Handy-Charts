function ProgressBar(title, percent){
    if(typeof(percent) != "number" || percent > 100 || percent < 0) {
        throw new Error("Enter a valid percent");
    }
    this.title = title;
    this.percent = percent;
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
    label.classList.add("row", "label", "col-4");
    title.classList.add("label-txt", "col-6");
    percent.classList.add("label-txt", "col-6");
    fullBar.classList.add("full-bar", "col-8");
    amountBar.classList.add("amount-bar");

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
