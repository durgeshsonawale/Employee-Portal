import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit{
  employeeDetails:Employee={
    firstName: "",
    lastName: "",
    joiningDate: "",
    birthDate: "",
    password: "",
    designation: "",
    designationId:""
  }
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    
    this.employeeService.getEmployeeById(localStorage.getItem("userId")).subscribe((a)=>{this.employeeDetails=a;console.log(this.employeeDetails)})
  }

}
