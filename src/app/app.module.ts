import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { BlankComponent } from './blank/blank.component';
import { ChartComponent } from './chart/chart.component';
import { Chart,registerables } from 'node_modules/chart.js';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
//import { ReactiveFormsModule } from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
//import { SignupComponent } from './signup/signup.component';
//import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { PiechartComponent } from './chart/piechart/piechart.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { JwtInterceptor } from './sign-up/JwtInterceptor';
Chart.register(...registerables);



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlankComponent,
    ChartComponent,
    Navbar2Component,
    HomeComponent,
    LeaveComponent,
    ExpensesComponent,
    AccountDetailsComponent,
    SignUpComponent,
    AddExpensesComponent,
    PiechartComponent,
    ApplyLeaveComponent,
    AddDetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
