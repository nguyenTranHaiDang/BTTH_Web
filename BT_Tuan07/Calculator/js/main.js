  let operands1 = "";
  let operands2 = "";
  let opt

  function buttonHandler(btn) {
    const pressedValue = btn.innerText

    const resultInput = document.getElementById('resultInput')

    if (isNaN(pressedValue)){
        if(pressedValue == 'AC')
        {
            operands1 = "";
            operands2 = "";
            opt = undefined;
            resultInput.value = "";
            return;
        }
        if(pressedValue == '=')
        {
            const result = perform(operands1, operands2, opt)
            resultInput.value = result;
            operands1 = "";
            operands2 = "";
            opt = undefined;
        }else{
            opt = pressedValue;
        }
    } else{
        if (opt){
            operands2 += pressedValue;
            resultInput.value = operands2;
        } else{
            operands1 += pressedValue;
            resultInput.value = operands1;
        }
    }
}

function perform(orand1, orand2, otor){
    orand1 = Number(orand1)
    orand2 = Number(orand2)

    switch(otor)
    {
        case '+':
            return orand1 + orand2
        case '-':
            return orand1 - orand2
        case '*':
            return orand1 * orand2
        case '/':
            return orand1 / orand2    
    }
}
