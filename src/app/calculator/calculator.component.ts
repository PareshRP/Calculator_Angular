import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';  //currentNumber variable holds the string that will be displayed in the result input element
  firstOperand = null;  //firstOperand variable holds the value of the first operand of the operation
  operator = null;      //operator variable holds the operation        
  waitForSecondNumber = false;  /*waitForSecondNumber variable holds a boolean value indicating if the user has
                                finished typing the first operand and ready to enter the second operand of the
                                operation*/  


  //getNumber() method that will be used to get the current number
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    
    }
  }

  //getDecimal() method which appends the decimal point to the current number
  getDecimal(){
    if(!this.currentNumber.includes('.')){
      this.currentNumber += '.';
    }
  }

  //doCalculation() method which performs the calculation depending on the operator type
  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp;
      case '-':
      return this.firstOperand -= secondOp;
      case '*':
      return this.firstOperand *= secondOp;
      case '/':
      return this.firstOperand /= secondOp;
      case '=':
      return secondOp;
    }
  }

  //getOperation() that will be used to get the performed operation
  public getOperation(op: string){
    console.log(op);
    
    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);
    
    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;    
    this.waitForSecondNumber = true;
     console.log(this.firstOperand);
  }
    
  //to clear the result area and reset the calculations
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
    
    
    

  constructor() { }

  ngOnInit(): void {
  }

}
