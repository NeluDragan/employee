import { Component } from '@angular/core'
import { IEmployee } from './common/interfaces/employee.interface'
import { EmployeeFormComponent } from '../employee-management/employee-form/employee-form.component'
import { MatDialog } from '@angular/material/dialog'
import { EmployeeService } from './common/services/employee.service'
import { filter, pipe, switchMap } from 'rxjs'

const ELEMENT_DATA: IEmployee[] = [
  {
    id: 1,
    count: 1,
    position: 'Hydrogen',
    email: 'adsfd',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'adfg',
  },
  {
    id: 2,
    count: 2,
    position: 'Helium',
    email: 'arsfd',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'adgsf',
  },
  {
    id: 3,
    count: 3,
    position: 'Lithium',
    email: 'asrfd',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'fad',
  },
  {
    id: 4,
    count: 4,
    position: 'Beryllium',
    email: 'afdg',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'afdg',
  },
  {
    id: 5,
    count: 5,
    position: 'Boron',
    email: 'afdg',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'adgf',
  },
  {
    id: 6,
    count: 6,
    position: 'Carbon',
    email: 'afdga',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'adg',
  },
  {
    id: 7,
    count: 7,
    position: 'Nitrogen',
    email: 'afdg',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'fdag',
  },
  {
    id: 8,
    count: 8,
    position: 'Oxygen',
    email: 'adfgs',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'agdfs',
  },
  {
    id: 9,
    count: 9,
    position: 'Fluorine',
    email: 'radfsg',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'afdgs',
  },
  {
    id: 10,
    count: 10,
    position: 'Neon',
    email: 'safdsg',
    startTime: '2023-04-01T20:41:24.3578409Z',
    quickInfo: 'fadgfs',
  },
]
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent {
  displayedColumns: string[] = [
    'quickInfo',
    'email',
    'position',
    'startTime',
    'actions',
  ]
  dataSource = ELEMENT_DATA

  constructor(
    private readonly employeeService: EmployeeService,
    public dialog: MatDialog,
  ) {}

  editEmployee(employee: IEmployee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      data: {
        editState: true,
        employee,
      },
    })

    dialogRef
      .afterClosed()
      .pipe(
        filter((employee) => !!employee),
        switchMap((editedEmployee) =>
          this.employeeService.updateEmployee(editedEmployee),
        ),
      )
      .subscribe(
        (updatedEmployee) =>
          (this.dataSource = this.dataSource.map((employee) =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee,
          )),
      )
  }

  addEmployee() {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      data: {
        editState: false,
      },
    })

    dialogRef
      .afterClosed()
      .pipe(
        filter((employee) => !!employee),
        switchMap((editedEmployee) =>
          this.employeeService.addEmployee(editedEmployee),
        ),
      )
      .subscribe(
        (updatedEmployee) =>
          (this.dataSource = [...this.dataSource, updatedEmployee]),
      )
  }
}
