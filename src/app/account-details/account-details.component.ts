import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from '../service/account-details.service';
import { EmployeeService } from '../service/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDetailsComponent } from '../add-details/add-details.component';
import { AccountDetails } from '../model/AccountDetails';
import { EditService } from '../service/edit.service';
import { EditDetailsComponent } from '../edit-details/edit-details.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{
  editCheck:any;
add() {
  this.dialog.open(EditDetailsComponent, {
    width: '400px',
    disableClose: true
  });
}

  acDetails:AccountDetails={
    id:"",
    bankName:  "",
    accountNumber:  "",
    ifscCode: "",
    branch:"",
    nameOnAccount: "",
    employeeId:""
  };
  isPresent!:boolean;
    constructor(private accService : AccountDetailsService, private empService : EmployeeService,private dialog:MatDialog,private editService:EditService ){}

  ngOnInit(): void {
    
      this.accService.getDetailsbyId(localStorage.getItem("userId")).subscribe((a) => {
        if(!a)
        {
          console.log("json is empty")
          this.editCheck=this.acDetails.bankName;
          

        }
        else {
          
          this.acDetails=a;
          console.log(this.acDetails)
        this.editCheck=this.acDetails.bankName;
        this.editService.accountDetEdit=a
        }
        //if(a==null)this.isPresent=false;
        
      
      })
      
    
  }




}
