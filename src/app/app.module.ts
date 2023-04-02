import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { EmployeesComponent } from './components/employees/employees.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { EmployeeFormComponent } from './components/employee-management/employee-form/employee-form.component'
import { MatInputModule } from '@angular/material/input'
import { EmployeeService } from './components/employees/common/services/employee.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, EmployeesComponent, EmployeeFormComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
