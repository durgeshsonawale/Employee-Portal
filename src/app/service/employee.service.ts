import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api="http://localhost:8080/employee"
  api1="http://localhost:8080/employee/LogIn/Vaishnav/string"
  //id=new BehaviorSubject<number>(-1);
  availableLeaves:BehaviorSubject<number>=new BehaviorSubject<number>(-1);


  constructor(private http:HttpClient) { }
  getEmployeeById():Observable<any>{
    //console.log(id.token + "assssssss")
    return this.http.get<any>(`${this.api}`)
  }
  //LogIn/{name}/{password}
  validateEmployee(name:string,password:string):Observable<any>{
    return this.http.get<any>(`${this.api}/LogIn/${name}/${password}`)
    //return this.http.get<any>(this.api1);
  }
  addUser(user:any){
    return this.http.post(`${this.api}/register`,user)
  }
}
