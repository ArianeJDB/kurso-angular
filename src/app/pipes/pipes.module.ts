import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DecoratorPipe } from './decorator.pipe';


@NgModule({
  declarations: [DecoratorPipe],
  imports: [
    CommonModule
  ],
  exports: [DecoratorPipe]
})

export class PipesModule { }
