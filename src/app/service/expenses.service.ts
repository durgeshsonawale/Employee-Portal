import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

    api = "http://localhost:8080/expenses"
  constructor(private http:HttpClient) { }
 getById(){
  return this.http.get(`${this.api}`)
 }

  addExpense(expense:any){
  return this.http.post(this.api,expense,{responseType:'text'})
  }
}
