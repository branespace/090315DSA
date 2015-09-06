"use strict";

/*Removes and returns the first item in the array
 Returns undefined on 0 length arrays
 Behavior undefined on non-array-like targets*/
function shift() {
    /*jshint validthis:true */  //Allow use of this in function
    var firstItem,      //Item at 0th index
        index;          //Loop index

    if (!this.length) {       //Return undefined on empty array
        return undefined;
    }

    firstItem = this[0];    //Grab the first item

    for (index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1];  //Shift all items left 1 index
    }

    this.length -= 1;   //Truncate last item (since shifted left)

    return firstItem;   //Return the first item (since removed)
}