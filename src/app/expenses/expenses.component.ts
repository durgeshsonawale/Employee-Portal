import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExpensesService } from '../service/expenses.service';
import { EmployeeService } from '../service/employee.service';
import { Element } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('sort1') sort1!: MatSort;
  
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('sort2') sort2!: MatSort;
  
  @ViewChild('paginator3') paginator3!: MatPaginator;
  @ViewChild('sort3') sort3!: MatSort;
  add() {
    this.dialog.open(AddExpensesComponent, {
      width: '500px',
      disableClose: true,
      data: {},
    });
  }

  displayedColumns: string[] = [
    'Id',
    'date',
    'cost',
    'comment',
    'status',
    'expense1',
  ];
  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  dataSource3!: MatTableDataSource<any>;
  list: any;
  constructor(
    private expenseService: ExpensesService,
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.expenseService
      .getById()
      .subscribe((a) => {
        this.list = a;
        this.dataSource1 = new MatTableDataSource<any>(this.list[0]);
        this.dataSource2 = new MatTableDataSource<any>(this.list[1]);
        this.dataSource3 = new MatTableDataSource<any>(this.list[2]);
        console.log(this.dataSource1)

        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
        this.dataSource3.paginator = this.paginator3;
        this.dataSource3.sort = this.sort3;
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();

    if (this.dataSource3.paginator) {
      this.dataSource3.paginator.firstPage();
    }
  }
  applyFilter3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
}
