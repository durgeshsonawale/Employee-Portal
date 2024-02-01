import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LeaveService } from '../service/leave.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../service/employee.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { ReloadFormService } from '../service/reload-form.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'}
  
];

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit,OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  c:any;
add() {
  this.dialog.open(ApplyLeaveComponent, {
    width: '500px',
    disableClose: true
  });
}
  dataSource!:MatTableDataSource<any>
  list:any;
  displayedColumns=['id','toDate','fromDate','status','LeaveTypeId']
  constructor(private leaveService:LeaveService,private employeeService:EmployeeService,private dialog:MatDialog,private reload:ReloadFormService){}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
   this.employeeService.getEmployeeById(localStorage.getItem("userId")).subscribe(
      employee=>{this.c=employee;this.employeeService.availableLeaves.next(this.c.availableLeaves)
    
    this.leaveService.getAllLeaves(localStorage.getItem("userId")).subscribe((a)=>{
      //this.reload.allLeaves.next(a);
      this.reload.allLeaves.asObservable().subscribe(b=>{this.list=b;console.log(this.list);
      
        this.dataSource=new MatTableDataSource<any>(this.list);
        // console.log(this.dataSource)
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      
      } )
      //console.log(a)
    
    
    })})
    
  }
  ngAfterViewInit() {
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

}


