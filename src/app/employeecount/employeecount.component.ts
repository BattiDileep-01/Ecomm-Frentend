import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employeecount.component.html',
  styleUrl: './employeecount.component.css'
})
export class EmployeecountComponent {

  @Input()
  all: number = 30;

  @Input()
  male: number = 10;

  @Input()
  female: number =10;

  selectedRadioButtonValue: String = 'All';


  @Output()
  countRadioButtonChanged: EventEmitter<String> = new EventEmitter<String>; 

  
  changedRadioButtonValue(){
   // console.log("clicked radio button value " + this.selectedRadioButtonValue)
    this.countRadioButtonChanged.emit(this.selectedRadioButtonValue);

  }



}
