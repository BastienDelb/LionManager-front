import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  endRequest: boolean;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    // recupérer les details de la seance
    this.employeeService.get(id).subscribe((data) => {
      this.employee = data;
      this.endRequest = true;
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
