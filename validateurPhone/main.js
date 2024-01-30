




let inter=document.querySelector("inp").value

let resultat=document.querySelector(".res")

function Valudnmbr() {
    const inputText = document.getElementById('inp').value;
    const resultElement = document.getElementById('result');
    const result = validnmbr(inputText);

    resultElement.innerHTML = result;
    
    // Clear the input field after checking
    document.getElementById('inp').value = '';}