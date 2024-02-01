import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BlankComponent } from './blank/blank.component';
import { HomeComponent } from './home/home.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { LeaveComponent } from './leave/leave.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [{
  path:'home',component : HomeComponent
},
{ path:'employee',component: Navbar2Component, children:[
   {path:"",component:BlankComponent},
  {path:"leave",component:LeaveComponent},
  {path:"expenses", component:ExpensesComponent},
  {path:"account", component:AccountDetailsComponent}
]},
 {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
