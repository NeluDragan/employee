import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesComponent } from './components/employees/employees.component'

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'employees' },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  // {
  //   path: '/add-employee',
  //   component: AddEmployeeComponents
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
