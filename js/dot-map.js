function DotMap(data) {
    validateParams(data);
    this.data = data;
}

function validateParams(data) {
    const getType = obj => Object.prototype.toString.call(obj).slice(8, -1);
    if(getType(data) !== 'Map'){
        throw new Error("You should provide a map");
    }
    if(data.size > 8) {
        throw new Error("You should provide no more than 8 categories");
    }
    for(var val of data.values()){
        if(typeof(val) !== "number") {
            throw new Error("You should provide discrete values")
        }
    }
}