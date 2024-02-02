import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetails } from '../model/AccountDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  api="http://localhost:8080/account"

  constructor(private http:HttpClient) { }

  getDetailsbyId():Observable<any>{
    return this.http.get<any>(`${this.api}`)
  }
  addDetails(data:any){
    return this.http.post(this.api,data,{responseType:'text'})
  }
  editDetails(data:any):Observable<string>{
    return this.http.put(this.api,data,{responseType:'text'})
  
  }}