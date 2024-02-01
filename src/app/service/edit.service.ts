import { Injectable } from '@angular/core';
import { AccountDetails } from '../model/AccountDetails';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  profileEdit:any;
  accountDetEdit!:AccountDetails;

  constructor() { }
}
