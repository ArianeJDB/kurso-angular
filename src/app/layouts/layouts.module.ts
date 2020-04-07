import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SimpleComponent } from './simple/simple.component';



@NgModule({
  declarations: [SimpleComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent,
    SimpleComponent
  ]
})
export class LayoutsModule { }
