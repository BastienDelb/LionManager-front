import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { EmployeesFormComponent } from './employees-form/employees-form.component';

@NgModule({
  declarations: [EmployeesListComponent, EmployeesFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    EmployeesListComponent,
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeesModule { }
