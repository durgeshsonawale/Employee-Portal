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

  getDetailsbyId(id:any):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(`${this.api}/${id}`)
  }
  addDetails(data:any){
    return this.http.post(this.api,data)
  }
  editDetails(data:any){
    return this.http.put(this.api,data)
  }
}
