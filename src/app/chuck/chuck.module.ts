import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck/chuck.component';
const ROUTES: Routes = [
  {path: '', component: ChuckComponent}
];


@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ]
})
export class ChuckModule { }
