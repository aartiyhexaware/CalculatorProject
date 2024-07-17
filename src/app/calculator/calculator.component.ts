import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  displayValue: string = '';
  history:any[] = []; 
  inputDisplayValue:string;
  LogedinUser:string;
  constructor() { }

  ngOnInit(): void 
  {
    let users = JSON.parse(localStorage.getItem('currentUser'));
    this.LogedinUser= users.id; 
     const storedData = JSON.parse(localStorage.getItem('userCalulateHistory') || '[]') as any[];
     const entry = storedData.find(item => item.userId === this.LogedinUser);
     if(entry != undefined)
      {
        this.history = storedData;
      }
     
   

    // this.history = entry;

    // const filteredData = storedData.filter(item => item.userid.includes(this.LogedinUser));
    // this.history = filteredData;
    
  }

  numberAppendToDisplay(value: string)
  {
    this.displayValue += value;
    this.inputDisplayValue = this.displayValue;
   }

  clearDisplay() {
    this.displayValue = '';
    this.inputDisplayValue = '';
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue);
      

      this.history.push({'userId':this.LogedinUser,'data': this.inputDisplayValue});
      this.history.push({'userId':this.LogedinUser,'data': this.displayValue});    

      localStorage.setItem('userCalulateHistory', JSON.stringify(this.history));

    } catch (error) {
      this.displayValue = 'Error';
    }
  }
 
  getDataForLoggedInUser(): any[] | undefined {
    const entry = this.history.find(item => item.userId === this.LogedinUser);
    return entry ? entry.data : undefined;
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    // Remove non-allowed characters using regular expression
    const validValue = inputValue.replace(/[^0-9+\-*/.]/g, '');
    // Update userInput with the sanitized value
    this.inputDisplayValue = validValue;
    this.displayValue = validValue;
    }

  onKeyPress(event: KeyboardEvent) {
    // Check if the pressed key is not allowed
    const allowedKeys = /[0-9+\-*/.\s]/;
    if (!allowedKeys.test(event.key)) {
      event.preventDefault(); // Prevent the character from being entered
     } else {
     }
  }

}
