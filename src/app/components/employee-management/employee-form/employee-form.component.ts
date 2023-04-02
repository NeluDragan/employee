import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employeesGroup!: FormGroup

  employeeChanges: any

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) private currentEmployee: any,
  ) {
    this.initForm()

    this.employeesGroup.valueChanges.subscribe(
      (employee) => (this.employeeChanges = employee),
    )
  }

  initForm(): FormGroup<any> {
    if (this.currentEmployee.editState) {
      return (this.employeesGroup = this.fb.group({
        email: [this.currentEmployee.employee.email, Validators.required],
        position: [this.currentEmployee.employee.position, Validators.required],
        quickInfo: [
          this.currentEmployee.employee.quickInfo,
          Validators.required,
        ],
      }))
    }

    return (this.employeesGroup = this.fb.group({
      email: ['', Validators.required],
      position: ['', Validators.required],
      quickInfo: ['', Validators.required],
    }))
  }

  saveEmployee(): void {
    if (this.employeeChanges) {
      return this.dialogRef.close({
        ...this.currentEmployee.employee,
        ...this.employeeChanges,
      })
    }
  }
}
