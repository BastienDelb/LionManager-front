import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList: Employee[] = new Array();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.listEmployees();
  }

  listEmployees() {
    this.employeeService.list().subscribe((data) => {
      this.employeesList = data;
    });
  }

  getImage(imgUrl) {
    if (imgUrl !== undefined && imgUrl.length > 0) {
      return imgUrl;
    } else {
      return 'http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-3.png';
    }
  }

}
