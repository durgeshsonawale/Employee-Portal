import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeaveType } from '../model/LeaveType';
import { LeaveService } from '../service/leave.service';
import { EmployeeService } from '../service/employee.service';
import { ReloadFormService } from '../service/reload-form.service';
 

export interface form{
  leaveTypeId:any,
      fromDate: any,
      toDate: any,
      status:any,
     employeeId:{
      id:any
     };
} 
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  leaveForm!: FormGroup;
  expenseTypes = Object.values(LeaveType);
  id!:any;
 
  constructor(private fb: FormBuilder,private dialogRef:MatDialogRef<ApplyLeaveComponent>, private leaveService :LeaveService, private empService:EmployeeService,private reload:ReloadFormService) { }
 
  ngOnInit() {
    this.initForm();
    this.id=localStorage.getItem("userId")
  }
 
  initForm() {
    this.leaveForm = this.fb.group({
      leaveTypeId: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      status: ['',Validators.required],
      numberOfDays: [{ value: '', disabled: true }]
    });
 
    // Subscribe to changes in 'fromDate' and 'toDate' to calculate the number of days
    this.leaveForm.get('fromDate')?.valueChanges.subscribe(() => this.calculateNumberOfDays());
    this.leaveForm.get('toDate')?.valueChanges.subscribe(() => this.calculateNumberOfDays());
  }
  validate(controlName: string): boolean {
    const control = this.leaveForm.get(controlName);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }
 
  calculateNumberOfDays() {
    const fromDate = this.leaveForm.get('fromDate')?.value;
    const toDate = this.leaveForm.get('toDate')?.value;
 
    if (fromDate && toDate) {
      const timeDifference = toDate.getTime() - fromDate.getTime()+ 1;
      const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
      this.leaveForm.get('numberOfDays')?.setValue(numberOfDays);
    }
  }
 
  submitForm() {
    const formsdata:form = {
      leaveTypeId : this.leaveForm.get('leaveTypeId')?.value ,
      fromDate: this.leaveService.convertData(this.leaveForm.get('fromDate')?.value) ,
      toDate: this.leaveService.convertData(this.leaveForm.get('toDate')?.value) ,
      status:this.leaveForm.get('status')?.value ,
     employeeId: {
      id:this.id
     }
    }
    console.log(this.leaveForm.value);
    this.leaveService.applyLeave(formsdata).subscribe(a => {console.log("Leave applied.")
    this.leaveService.getAllLeaves(localStorage.getItem("userId")).subscribe((a)=>{
      this.reload.allLeaves.next(a);
      //console.log(a);
    })
  
  
  });
    this.dialogRef.close();
  }
 
  cancelForm() {
    // Handle form cancellation logic here
    this.dialogRef.close();
  }
  getCategoryValues(): string[] {
    return Object.keys(LeaveType)
      .filter(key => typeof LeaveType[key as keyof typeof LeaveType] !== 'number')
      .map(key => LeaveType[key as keyof typeof LeaveType] as unknown as string);
  }

}
