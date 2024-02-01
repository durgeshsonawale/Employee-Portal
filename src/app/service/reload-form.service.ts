import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LeaveService } from './leave.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ReloadFormService {
  allLeaves:BehaviorSubject<any> =new BehaviorSubject<any>(-1);

  constructor(private leaveService:LeaveService,private empService:EmployeeService) { 
    this.leaveService.getAllLeaves(localStorage.getItem("userId")).subscribe((a)=>{this.allLeaves.next(a)})

  }
}
