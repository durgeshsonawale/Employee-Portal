import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements  OnInit{
  tokenBody:any
exit() {
  localStorage.clear();
  this.route.navigate(["home"])
}
  employeeDetails:Employee={
    firstName: "",
    lastName: "",
    joiningDate: "",
    birthDate: "",
    password: "",
    designation: "",
    designationId:""
  }
  constructor(private employeeService:EmployeeService, private route:Router){

  }
  ngOnInit(): void {
    const userDataString = localStorage.getItem("userId");

    if (userDataString !== null) {
        this.tokenBody = JSON.parse(userDataString);
     }
    
    this.employeeService.getEmployeeById().subscribe((a)=>this.employeeDetails=a)
  }


}
