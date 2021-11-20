function HashStorage() {
    this.storage = {};
}

HashStorage.prototype.addValue = function(key, value) {
    this.storage[key] = value;
}

HashStorage.prototype.getValue = function(key) {
    if(key in this.storage) {
        return this.storage[key];
    }

    return undefined;
}

HashStorage.prototype.deleteValue = function(key) {
    if(key in this.storage) {
        delete this.storage[key];
        return 'Напиток удален';
    }

    return 'Напиток не удален';
}

HashStorage.prototype.getKeys = function() {
    return Object.keys(this.storage);
}
 

