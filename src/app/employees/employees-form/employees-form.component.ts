import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  employee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    sector: '',
    skills: [''],
    remuneration: null,
    imgUrl: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  saveProfile() {
    this.employeeService.post(this.employee);
  }

}
