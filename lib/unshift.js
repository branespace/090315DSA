"use strict";

/*Adds arguments to the front of an array in sequential order, shifting existing
 indices right, and returning the new length of the array
 Makes no changes and returns original length if given no arguments
 Behavior undefined on non-array-like targets*/
function unshift() {
    /*jshint validthis:true */  //Allow use of this in function
    var index;      //Loop index

    this.length += arguments.length;     //Expand array to new size

    for (index = this.length; index >= arguments.length; index--) {
        this[index] = this[index - arguments.length];   //Shift items right
    }

    for (index = 0; index < arguments.length; index++) {
        this[index] = arguments[index]; //Populate now empty indices
    }

    return this.length;             //Return new array length
}