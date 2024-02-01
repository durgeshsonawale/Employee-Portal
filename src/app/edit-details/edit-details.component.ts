import { Component } from '@angular/core';
import { AccountDetails } from '../model/AccountDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddDetailsComponent } from '../add-details/add-details.component';
import { EmployeeService } from '../service/employee.service';
import { AccountDetailsService } from '../service/account-details.service';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent {


  accountForm!: FormGroup;
  
 
  constructor(private fb: FormBuilder,private dialog:MatDialogRef<EditDetailsComponent>,private empService:EmployeeService,private accDetails:AccountDetailsService,private editService:EditService) {
    
  }
 
  ngOnInit(): void {
    
    console.log(this.editService.accountDetEdit.id + "hhhhhhhhhh")
    this.accountForm = this.fb.group({
      bankName: [this.editService.accountDetEdit.bankName, Validators.required],
      accountNumber: [this.editService.accountDetEdit.accountNumber, Validators.required],
      ifscCode: [this.editService.accountDetEdit.ifscCode, Validators.required],
      branch: [this.editService.accountDetEdit.branch, Validators.required],
      nameOnAccount: [this.editService.accountDetEdit.nameOnAccount, Validators.required],
    });
    

  }
 
  onSubmit() {
    const details:AccountDetails={
      id:this.editService.accountDetEdit.id,
      bankName:  this.accountForm.get('bankName')?.value,
      accountNumber:  this.accountForm.get('accountNumber')?.value,
      ifscCode: this.accountForm.get('ifscCode')?.value,
      branch:this.accountForm.get('branch')?.value,
      nameOnAccount: this.accountForm.get('nameOnAccount')?.value,
      employeeId:{
        id:localStorage.getItem("userId")
      }
    }
    this.accDetails.editDetails(details).subscribe(a=>console.log(a));
    
    
    this.dialog.close();
    
   
  }
 
  closeDialog() {
    this.dialog.close();
  }
}
