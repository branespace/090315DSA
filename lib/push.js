"use strict";

/*Adds any number of arguments to array and returns the new length
 Makes no changes if given no arguments
 Behavior undefined on non-array-like targets*/
module.exports = function push() {
    /*jshint validthis:true */  //Allow use of this in function
    var index;      //current index in the arguments object

    for (index = 0; index < arguments.length; index++) {
        this[this.length] = arguments[index];   //Add each argument
    }

    return this.length;         //Return the new length of the array
};