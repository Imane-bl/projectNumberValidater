



  function telephoneCheck(str) {
    let exp = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?(\d{3})[\-\s]?(\d{4})$/;
    if(exp.test(str)){
      
        return  `${str} -->valide`
    }else {
       return `${str} -->not valide`

    }
    }
  
  
  
  //telephoneCheck("555-555-5555");


function  validation() {
    const inputText = document.getElementById('inp').value;
    const resultElement = document.getElementById('res');
    let btn=document.getElementsByClassName("clear-btn");
    const res = telephoneCheck(inputText);
    resultElement.innerHTML= res;

// Clear the input field after checking
      document.getElementById('inp').value = '';
}



function remove(){
   const inputText = document.getElementById('inp').value;
    const resultElement = document.getElementById('res');
    const res = telephoneCheck(inputText);
 
    
    resultElement.innerHTML= " "; 
   document.getElementById('inp').value = ''
}

   