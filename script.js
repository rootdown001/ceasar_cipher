function rot13(str) {


    function position(initChar) {
      
      if ((initChar + 13) > 26) {
        return (initChar + 13) - 26;
      } else {
        return initChar + 13;
      }
    
    }
    
    
    
    
    
    
    console.log(position(26))
    
    
    
    
    
      return str;
    }
    
    rot13("SERR PBQR PNZC");