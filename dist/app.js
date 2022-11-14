"use strict";
function reverse(arr) {
    return [...arr].reverse();
}
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    first() {
        return this.items[0] || null;
    }
}
//https://www.youtube.com/watch?v=MlwFhfdEVwo : 9:32
