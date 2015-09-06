"use strict";

/*Removes the last item in the array and returns it
 Returns undefined on 0 length array
 Behavior undefined on non-array-like targets*/
function pop() {
    /*jshint validthis:true */  //Allow use of this in function
    var lastItem;           //Temporarily holds the last item

    if (!this.length) {     //Empty arrays return undefined
        return undefined;
    }

    lastItem = this[this.length - 1];//Get last array Item

    this.length = this.length - 1;   //Truncate array

    return lastItem;                 //Return remove item
}