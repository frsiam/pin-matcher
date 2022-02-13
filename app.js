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

function catchElement(id){
    return document.getElementById(id);
}

function generatePin(){
    const pin = getPin();
    catchElement('pin-output').value = pin;
}

catchElement('key-pad').addEventListener('click',function(e){
    const number = e.target.innerText;
    const calcInput = catchElement('display')
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
    const generatedPin = catchElement('pin-output').value;
    const typedPin = catchElement('display').value;
    if(generatedPin == typedPin){
        catchElement('matched').style.display = 'block';
        catchElement('not-matched').style.display = 'none';
    }
    else{
        catchElement('not-matched').style.display = 'block';
        catchElement('matched').style.display = 'none';
    }
}