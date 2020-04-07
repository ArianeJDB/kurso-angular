import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { ExampleDirectivesComponent } from './example-directives/example-directives.component';

const ROUTES: Routes = [
  {path: '', component: ExampleDirectivesComponent},
  {path: ':id', component: ExampleDirectivesComponent}
];

@NgModule({
  declarations: [ExampleDirectivesComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [ExampleDirectivesComponent]
})
export class DirectivesModule { }
