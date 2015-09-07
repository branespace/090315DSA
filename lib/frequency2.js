"use strict";

/*Takes an array of English words and figures out what the most common
  letter anywhere in the words is.  Returns a single value.
    In the case of a tie, only the last of the winning letters will be returned,
    depending on the ordering of the words.
    Empty arrays will get a return value of null */
module.exports = function frequency2(array) {
    var i,          //Loop index
        j,          //Inner loop index
        dict = {},  //Dictionary for counts
        highLetter = null,  //Current top letter
        highCount = 0;      //Current top letter count

    for (i = 0; i < array.length; i++) {                    //Iterate over words
        for (j = 0; j < array[i].length; j++) {             //Iterate over letters
            if (!dict[array[i][j].toLowerCase()]) {         //New letter
                dict[array[i][j].toLowerCase()] = 1;        //Add to dictionary
            } else {                                        //Already seen?
                dict[array[i][j].toLowerCase()]++;          //Add to the count
            }
            if (dict[array[i][j].toLowerCase()] > highCount){ //If dict value greater than current
                highCount = dict[array[i][j].toLowerCase()];  //Set the new high count
                highLetter = array[i][j].toLowerCase();       //Set the high letter
            }
        }
    }
    return highLetter;                      //Return a single match
};