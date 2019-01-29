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


}