import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  length!:number;
  ngOnInit(): void {
   
   this.length=localStorage.length
  }
  title = 'employee-management';
  
}
