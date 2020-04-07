import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';

const ROUTES: Routes = [
  {path: '', component: ListUsersComponent}
];

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule { }
