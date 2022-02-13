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
        let previouNumber = calcInput.value;
        const newNumber = previouNumber + number;
        calcInput.value = newNumber;
    }
    
})