import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../age.pipe';
import { TitlePipe } from '../title.pipe';
import { EmployeecountComponent } from '../employeecount/employeecount.component';
import { Employeecount1Component } from "../employeecount1/employeecount1.component";



@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AgePipe, TitlePipe, EmployeecountComponent, Employeecount1Component],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

 employee : any[] = [];
 selectedRadioButton: String = 'All';

 constructor(){

  this.employee = [

{empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'100000',department:1 ,address:'Hyderabad',dob:'01/01/1990'},
{empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:4,address:'Delhi',dob:'04/04/1980'},

{empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:4,address:'Delhi',dob:'04/04/1980'},


{empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'120000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:4,address:'Delhi',dob:'04/04/1980'},


{empid:'112',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'116',empname:'Varun',gender:'Male',title:'Software Manager',salary:'230000',department:4,address:'Delhi',dob:'04/04/1980'}


  ]
 }

 
  getUpdatedEmplDetails(){
   return this.employee = [
{empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'100000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:4,address:'Delhi',dob:'04/04/1980'},

{empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:4,address:'Delhi',dob:'04/04/1980'},


{empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'120000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:4,address:'Delhi',dob:'04/04/1980'},


{empid:'112',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:1,address:'Hyderabad',dob:'01/01/1990'},
{empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:2,address:'Chennai',dob:'02/02/1991'},
{empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:3,address:'Banglore',dob:'03/03/1989'},
{empid:'116',empname:'charan singh',gender:'Male',title:'Software Manager',salary:'230000',department:4,address:'Delhi',dob:'04/04/1980'},

{empid:'117',empname:'dileep',gender:'Male',title:'Software Lead',salary:'150000',department:3,address:'Banglore',dob:'03/03/1993'},
{empid:'118',empname:'deva',gender:'Male',title:'Software Manager',salary:'230000',department:4,address:'Delhi',dob:'04/04/2021'}

   ]

   }
   trackByEmpCode(index : number , employee: any) : String{
    return employee.code;
}

getAllEmpCount(): number{
  return this.employee.length;
}

getMaleEmpCount(): number{
  return this.employee.filter(e => e.gender == 'Male').length;
}

getFemaleEmpCount(): number{
  return this.employee.filter(e => e.gender == 'Female').length;
  
}

onEmployeeRadioChange(selectedRadioButton: String) : void{
console.log("count component selected radio button value ==>" + selectedRadioButton);
this.selectedRadioButton = selectedRadioButton;
}

onRadioButtonChange(selectedRadioButton: String) : void{
  this.selectedRadioButton = selectedRadioButton;
}
}





