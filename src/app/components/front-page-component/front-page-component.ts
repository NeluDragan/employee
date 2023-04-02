import { Component } from '@angular/core'
import { frontPageComponent } from '../front-page/front-page'
import { filter, switchMap } from 'rxjs'

@Component({
  selector: 'app-front-page-component',
  templateUrl: './front-page-component.html',
  styleUrls: ['./front-page-component.scss'],
})
export class {
  dialog: any
  addEmployee() {
    const dialogRef = this.dialog.open(frontPageComponent, {
      width: '400px',
      data: {
        editState: false,
      },
    })

    dialogRef.afterClosed().pipe().subscribe()
  }
}
