import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesComponent } from './components/employees/employees.component'
import { frontPageComponent } from './components/front-page/front-page'


const routes: Routes = [
  {
    path: '*',
    redirectTo: 'front-page',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'front-page' },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'front-page',
    component: frontPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
