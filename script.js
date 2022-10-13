function rot13(str) {
    
    // create array from str
    let strArr = str.split(" ");
    // declare array for 4 digit string segment
    let segArr = [];
    // declare array for final answer 
    let endArr = [];
    // declare array for final answer 
    let finalStr = "";
    // console.log(strArr);



    // function to find alphabet charCode position after cipher
    function codeChange(num) {

       
        // if statement to add 13 places, and return new position
        if (num < 65 || num > 90) {
            return num;
        } else if ((num + 13) > 90) {
            return (num + 13) - 26;
        } else {
            return num + 13;
        }
    }



    // create loop to go through new array
    for (let i = 0; i < strArr.length; i++) {
        
        // assign string from 
        let workingStr = strArr[i];
        // console.log(workingStr);
        let endStr = "";
        // create loop to go through 4 letter segment
        for (let j = 0; j < workingStr.length; j++) {
            
            let tempLetter = "";
            let newLetter = "";
            let startCode = 0;
            let endCode = 0;

   
            // choose letter from array string
            tempLetter = workingStr[j];
            // console.log(tempLetter);

            // unicode of letter
            startCode = tempLetter.charCodeAt(0);
            // console.log(startCode);

            // call codeChange to find new unicode
            endCode = codeChange(startCode);
            // console.log(endCode);

            // new letter from new unicode
            newLetter = String.fromCharCode(endCode);
            // console.log(newLetter);
   
            endStr = endStr + newLetter;

            // console.log(endStr);
            // console.log(tempLetter)
            // console.log(endArr);
        }

        // add this new string to new array
        endArr.push(endStr);
        //  console.log(endArr);


    } 

    // join endArr to get final string
    finalStr = endArr.join(" ");
    
    console.log(finalStr);
    return finalStr;
}
    
rot13("SERR CVMMN!");