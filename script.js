const button = document.querySelectorAll('.button > button');
const display = document.getElementById('input');
let num1='';
let operators = ['+','-','/','x'];
let operator=''
let num2 = '';
let numbers = [1,2,3,4,5,6,7,8,9,0]
let storredNumber = '0';
button.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.textContent in numbers|| element.textContent ==='.'){
            num1+=element.textContent;
            display.value = num1;
        }else
        if(element.textContent =='+' || element.textContent =='-' ||element.textContent =='/' ||element.textContent =='x'){
            if(num1=='' && element.textContent=='-'){  // if minus is pressed first before any any number;
                num1+=element.textContent;
                display.value = num1;
            }
            else if(num1==''){
                operator = element.textContent;
                display.value=element.textContent;
            }else{
                operator = element.textContent;
                num2 = num1;
                num1='';
                display.value=element.textContent; 
            }
        }
        else if(element.textContent == '='){
            if(operator == '+'){
                display.value = parseFloat(num2) + parseFloat(num1);
            }else if(operator == '-'){
                display.value = parseFloat(num2) - parseFloat(num1);
            }else if(operator == '/'){
                display.value = parseFloat(num2) / parseFloat(num1);
            }else if(operator == 'x'){
                display.value = parseFloat(num2) * parseFloat(num1);
            }
        }
        else if (element.textContent == 'C'){
            num1 = '';
            num2 = '';
            display.value='0';
        }
        else if(element.textContent == 'MC'){
            storredNumber = '';
            display.value='0';
        }
        else if(element.textContent=='MR'){
            display.value = storredNumber;
            console.log(storredNumber)  ;
        }
        else if(element.textContent == 'M+'){
            storredNumber = parseFloat(storredNumber) + parseFloat(display.value);
        }
        else if(element.textContent == 'M-'){
            storredNumber = parseFloat(storredNumber) - parseFloat(display.value);
        }
        else if(element.textContent == '+-'){
            display.value = parseFloat(display.value) * -1;
            
          
        }
});
}); 