const calculator={
    display_value:'0',
    First_operand:null,
    wait_secend_operand:false,
    operator:null,
};
function Input_Digit (digit){
    const {display_value, wait_secend_operand}=calculator;
    if (wait_secend_operand===true){
        calculator.display_value=digit;
        calculator.wait_secend_operand=false;
    }else {
        calculator.display_value=display_value==='0' ? digit :display_value + digit;
    }
}
function Input_Decimal (dot){
    if (calculator.wait_secend_operand===true) return;
    if (!calculator.display_value.includes(dot)){
        calculator.display_value+=dot;
    }
}
function Handle_operator(Next_operator){
    const{First_operand, display_value, operator}=calculator
    const Value_of_Input=parseFloat(display_value);
    if (operator && calculator.wait_secend_operand){
        calculator.operator=Next_operator;
        return;
    }
    if (First_operand==null) {
        calculator.First_operand=Value_of_Input;
    }else if (operator){
        const Value_Now= First_operand|| 0;
        let result= perform_calculation[operator](Value_Now , Value_of_Input);
        result= Number(result).toFixed(9)
        result= (result*1).toString()
        calculator.display_value=parseFloat(result);
        calculator.First_operand= parseFloat(result);
    }
    calculator.wait_secend_operand=true;
    calculator.operator=Next_operator;
}
const perform_calculation ={
    '/':(First_operand, Second_Operand) =>First_operand / Second_Operand,
    '*':(First_operand, Second_Operand) =>First_operand * Second_Operand,
    '+':(First_operand, Second_Operand) =>First_operand + Second_Operand,
    '-':(First_operand, Second_Operand) =>First_operand - Second_Operand,
    '=':(First_operand, Second_Operand) =>Second_Operand

};
function Calculator_Reset(){
    calculator.display_value='0';
    calculator.First_operand=null;
    calculator.operator=null;
}
function Update_display(){
    const display=document.querySelector('.calculator-screen');
    display.value=calculator.display_value;
}
Update_display();
const keys=document.querySelector('.calculator-keys');
keys.addEventListener('click', (event)=>{
    const{target}=event;
    if(!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        Handle_operator(target.value);
        Update_display();
        return;
    }
    if (target.classList.contains('decimal')){
        Handle_operator(target.value);
        Update_display();
        return;
    }
    if (target.classList.contains('operator')){
        Handle_operator(all-clear);
        Update_display();
        return;
    }
    Input_Digit(target.value);
    Update_display();

})