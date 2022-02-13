function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('pin-output').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(e){
    const number = e.target.innerText;
    const calcInput = document.getElementById('display')
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';   
        }
    }
    else{
        const previouNumber = calcInput.value;
        const newNumber = previouNumber + number;
        calcInput.value = newNumber;     
    }
})
function verifyPin(){
    const generatedPin = document.getElementById('pin-output').value;
    const typedPin = document.getElementById('display').value;
    if(generatedPin == typedPin){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
    }
    else{
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
}