import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Expenses } from '../model/Expenses';
import { LeaveService } from '../service/leave.service';
import { ExpensesService } from '../service/expenses.service';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';


export interface form{
  cost:any,
  comment: any,
  date: any,
  expense1:any,
  employeeId:{
    id:any
  };
}
@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})

export class AddExpensesComponent implements OnInit {
  demoForm: FormGroup;
  expenseTypes = Object.values(Expenses);
  id:any
 
  constructor(private fb: FormBuilder,private router:Router,private dialogRef: MatDialogRef<AddExpensesComponent>,private leaveService : LeaveService, private expenseService:ExpensesService,
    private empService :EmployeeService
    ) {
    this.demoForm = this.fb.group({
      cost: ['', [Validators.required, Validators.min(0)]],
      comment: ['', Validators.required],
      date: ['', Validators.required],
      expense1: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const userDataString = localStorage.getItem("userId");

    if (userDataString !== null) {
        this.id = JSON.parse(userDataString);
     }
  }
 
  validate(controlName: string): boolean {
    const control = this.demoForm.get(controlName);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }
 
  onSubmit() {
   
    const formsdata:form = {
      cost : this.demoForm.get('cost')?.value ,
      comment : this.demoForm.get('comment')?.value ,
      date: this.leaveService.convertData(this.demoForm.get('date')?.value) ,
      expense1:this.demoForm.get('expense1')?.value ,
     employeeId: {
      id:this.id.id
     }
    }
    console.log(this.demoForm.value);
    this.expenseService.addExpense(formsdata).subscribe(a => {console.log("Expense applied.")
   // this.router.navigate(['expense'])
    }
    
    );
    this.dialogRef.close();


    
  }
 
  getCategoryValues(): string[] {
    return Object.keys(Expenses)
      .filter(key => typeof Expenses[key as keyof typeof Expenses] !== 'number')
      .map(key => Expenses[key as keyof typeof Expenses] as unknown as string);
  }
 
  closeDialog() {
    this.dialogRef.close();
   }


}
