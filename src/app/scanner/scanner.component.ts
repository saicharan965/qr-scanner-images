import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  showScanner: boolean = false
  enterImageCode: boolean = false
  imageResult!: string | Event
  constructor(private _router: Router) { }
  showResult(result: string | Event) {
    this._router.navigate(['/image'], { queryParams: { result } })
    this.imageResult = result
  }
  toggleScanner() {
    this.showScanner = !this.showScanner
    this.enterImageCode = false
  }
  toggleImageCode() {
    this.enterImageCode = !this.enterImageCode
    this.showScanner = false
  }
}
