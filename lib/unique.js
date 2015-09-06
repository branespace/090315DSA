"use strict";

/*Takes an array as an argument and returns a copy without any duplicate items
 Behavior undefined if argument missing or not an array*/
module.exports = function unique(arr) {
    var index,          //Loop index
        dict = {},      //Dictionary for pushed elements
        output = [];         //Output array

    for (index = 0; index < arr.length; index++) {
        if (!dict[arr[index]]) {                //If it's not in the dict, we haven't seen it
            dict[arr[index]] = true;            //So we mark it as seen
            output[output.length] = arr[index]; //And push it to the output array (without push)
        }                                       //If we've seen it before, simply ignore it
    }

    return output;      //Return the output array, stable, and with duplicates removed
};