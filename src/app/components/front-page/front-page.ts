import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.html',
  styleUrls: ['./front-page.scss'],
})
export class frontPageComponent {
  constructor(private readonly router: Router) {}
  redirectToManager() {
    console.log('adsfd')
    return this.router.navigate(['employees'])
  }
}
