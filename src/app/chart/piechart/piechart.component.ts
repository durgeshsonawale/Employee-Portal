import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  data111:any;
  
  constructor(private employeeService:EmployeeService){


  }
  ngOnInit(): void {
    this.employeeService.availableLeaves.asObservable().subscribe(avlb=>{this.data111=avlb;console.log("ghhjj"+this.data111);})
    setTimeout(()=>{this.RenderChart(this.data111)},500)
    
    
  }
  RenderChart(data:any){
    new Chart("piechart", {
      type: 'pie',
      data: {
        labels: ['Consumed', 'Available'],
        datasets: [{
          
          data: [20-data, data],
          borderWidth: 1
        }]
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }
  
}
