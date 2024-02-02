import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,  } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  //id:any;
  loginForm!: FormGroup;
  token:any;


constructor(private router : Router,private fb: FormBuilder,private employeeService:EmployeeService,private dialog:MatDialog){}
ngOnInit(): void {
  // Initialize the reactive form
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
OnLogin() {
  this.employeeService.validateEmployee(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).subscribe((a)=>
  {
  if(a!=null){
    this.token=JSON.stringify(a)
    localStorage.setItem("userId",this.token)
    console.log(localStorage.getItem("userId"));
    this.router.navigate(['/employee'])
  }
  
  
  })
 
}

openSignupModal() {
  this.dialog.open(SignUpComponent, {
    width: '400px',
    disableClose: true
  });
}

}
