import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  //genders = Object.values(Genders);
  ngOnInit(): void {
  }
 
  firstName!: string;
  lastName!: string;
  joiningDate!: Date;
  birthDate!: Date;
  password!: string;
  designation!: string;
 
 
  constructor(private dialogRef: MatDialogRef<SignUpComponent>,private employeeService:EmployeeService){}
  closeDialog() {
    this.dialogRef.close();
  }
onSubmit() {
  const formData = {
    firstName: this.firstName,
    lastName: this.lastName,
    joiningDate: this.joiningDate,
    birthDate: this.birthDate,
    password: this.password,
    designation: this.designation
  };
  this.employeeService.addUser(formData).subscribe(a=>console.log("User Added...!!!"))
  // Swal.fire("SignUp Successfully...!!!")
 
  this.dialogRef.close(formData);
}
// getCategoryValues(): string[] {
//   return Object.keys(Genders)
//     .filter(key => typeof Genders[key as keyof typeof Genders] !== 'number')
//     .map(key => Genders[key as keyof typeof Genders] as unknown as string);
// }


}
