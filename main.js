


function validation(nbr) {
    //pour les nombres
    str=str.replace(/[^5]/gi, '').toLowerCase();//ici doit etre 5
    
    
        for(let i=0;i<(nbr.length);i++){
           if(nbr[i] !== nbr[str.length-i-1]){
             return `"${nbr}"=> valide `;
                 }
        }
                
                 return `"${nbr}"=> pas valide `;
                
    }


let inter=document.querySelector("inp").value

let resultat=document.querySelector(".res")

function validation() {
    const inputText = document.getElementById('inp').value;
    const resultElement = document.getElementById('result');
    const result = validnmbr(inputText);

    resultElement.innerHTML = result;
    
    // Clear the input field after checking
    document.getElementById('inp').value = '';}