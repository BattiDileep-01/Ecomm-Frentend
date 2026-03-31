import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecount1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employeecount1.component.html',
  styleUrl: './employeecount1.component.css'
})
export class Employeecount1Component {

  @Input()
  all: number = 30;

  @Input()
  male : number = 10;

  @Input()
  female: number = 10;

  selectedRadioButtonvalue: String= 'All';

  @Output()

  countRadioButtonChanged: EventEmitter<String> = new EventEmitter<String>;

  onRadioButtonChange(){

   this.countRadioButtonChanged.emit(this.selectedRadioButtonvalue);



    //nsole.log("radio button changes from count component ==> " + this.selectedRadioButtonvalue)

  }


}
