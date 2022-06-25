import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { emp_data } from './data';
import { Employee } from './employee.model';
import { User } from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-project';
  user: User;
  ngOnInit():void{

  }
  constructor(){
    this.user = new User();
    this.user.name = "Akshat Singh Rajput";
    this.user.Address = "daru ka adda";
    this.user.phone = ["900000000","9999999999","900000000ss"];
  }
  // employeeForm : FormGroup;
  // employee : Employee;
  // employees: Employee[];
  // totalEmployee: number;
  // countDevelopment: number;
  // countAdmin : number;
  // countSales : number;
  // ngOnInit() : void{
  //   this.employeeForm = new FormGroup({
  //     eno: new FormControl(''),
  //     ename: new FormControl(''),
  //     esalary: new FormControl(''),
  //     city: new FormControl(''),
  //     department : new FormControl('')
  //   });
  //   this.employees = emp_data;
  //   this.computeStat();
  // }

  // onFormSubmit(employeeForm : FormGroup){
  //   if(employeeForm.valid){
  //     let enoVal = employeeForm.value.eno;
  //     let enameVal = employeeForm.value.ename;
  //     let esalaryVal = employeeForm.value.esalary;
  //     let cityVal = employeeForm.value.city;
  //     let departmentVal = employeeForm.value.department;
      
  //     this.employee = {
  //       eno : enoVal,
  //       ename : enameVal,
  //       esalary : esalaryVal,
  //       city: cityVal,
  //       department : departmentVal
  //     };
  //     this.employees.push(this.employee);
  //     this.computeStat();
  //     console.log(this.employees);
      
  //   }
  //   else{
  //     console.log(employeeForm.errors);
      
  //   }
  // }
  // computeStat(){
  //   this.totalEmployee = this.employees.length;

  //   this.countDevelopment = this.employees
  //         .filter(e=>e.department == 'development')
  //         .length;

  //   this.countAdmin = this.employees
  //         .filter(e=>e.department == 'admin')
  //         .length;

  //   this.countSales = this.employees
  //         .filter(e=>e.department == 'sales')
  //         .length;
  // }
}
