import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageCodeComponent } from './image-code/image-code.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  { path: '', component: ScannerComponent },
  { path: 'image', component: ResultComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    ResultComponent,
    ImageCodeComponent
  ],
  imports: [
    BrowserModule, ZXingScannerModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
