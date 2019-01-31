import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  list(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8282/employees');
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:8282/employees/' + id);
  }

  post(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8282/employees', employee);
  }

  getImage(imgUrl) {
    if (imgUrl !== undefined && imgUrl.length > 0) {
      return imgUrl;
    } else {
      return 'http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-3.png';
    }
  }
}
