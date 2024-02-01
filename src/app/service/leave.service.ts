import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  api='http://localhost:8080/leave'

  constructor(private http:HttpClient) { }
  getAllLeaves(id:any){
    return this.http.get(`${this.api}/${id}`)
  }
  applyLeave(leave:any){
    return this.http.post( `http://localhost:8080/leave`,leave)
  }

  convertData(date1 : any){
    // Input date string
const dateString = date1;

// Create a new Date object by parsing the input date string
const date = new Date(dateString);

// Extract year, month, and day from the Date object
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(date.getDate()).padStart(2, '0');

// Format the date in the desired format (YYYY-MM-DD)
const formattedDate = `${year}-${month}-${day}`;

return formattedDate; // Output: 2024-01-01

  }


  getMonthlyData(id:any){
    //console.log(this.http.get(`${this.api}/monthly/${id}`));
    return this.http.get(`${this.api}/monthly/${id}`)
  }
}

