import {HttpClient} from "@angular/common/http";
import {IEmployee} from "../interfaces/employee.interface";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {
  constructor(private readonly http: HttpClient) {
  }

  // @ts-ignore
  getAllEmployees(): Observable<Array<IEmployee>> {
    // this.http.get('local://employee')
    // returnezi lista cu toti
  }

  // @ts-ignore
  getEmployee(id: number): Observable<IEmployee> {
    // return this.http.get('local://employee');
  }

  // @ts-ignore
  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    console.log(employee)
    return of(employee);
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return of({...employee, startTime: new Date().toDateString()});
  }
}
