import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: 'employees/add', component: EmployeesFormComponent },
    { path: 'employees/details/:id', component: EmployeeDetailsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
