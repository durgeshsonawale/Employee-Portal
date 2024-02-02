import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LeaveService } from '../service/leave.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  constructor(private leaveService:LeaveService,private employeeService:EmployeeService){

  }
  ngOnInit(): void {
    this.leaveService.getMonthlyData().subscribe((a)=>{
      console.log(a)
      this.RenderChart(Object.keys(a),Object.values(a))
    
    
    
    })
    //this.RenderChart();
  }
  RenderChart(label:any[],datas:any){
    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: '# of Votes',
          data: datas,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  

}
