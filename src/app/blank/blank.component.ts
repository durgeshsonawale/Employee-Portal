import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit{
  tokenBody:any
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
    const userDataString = localStorage.getItem("userId");

if (userDataString !== null) {
    this.tokenBody = JSON.parse(userDataString);
 }
    this.employeeService.getEmployeeById().subscribe((a)=>{this.employeeDetails=a;console.log(this.employeeDetails)})
  }

}
