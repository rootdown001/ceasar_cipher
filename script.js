function rot13(str) {
    
    // create array from str
    let arr = str.split(" ");
    console.log(arr);

    // function to find alphabet charCode position after cipher
    function position(initChar) {
        // if statement to add 13 places, and return new position
        if ((initChar + 13) > 26) {
          return (initChar + 13) - 26;
        } else {
          return initChar + 13;
        }
    }

    // create loop to go through new array
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        // create loop to go through 4 letter segment
        for (let j = 0; j < 4; j++) {
            
        }

    } 


    
    
    
    


    
    
    console.log(position(26))
    
    
    
    
    
      return str;
}
    
rot13("SERR PBQR PNZC");