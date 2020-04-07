import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { ChuckModule } from './chuck/chuck.module';
import { InterceptorService } from './interceptor.service';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SimpleComponent } from './layouts/simple/simple.component';
import { UsersModule } from './users/users.module';
const config = {api: 'http://localhost:3001/'};

const ROUTES: Routes = [
  {path: '', redirectTo: 'directives', pathMatch: 'full'},
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'directives',
      loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
      {path: 'father',
      canActivate: [AuthService],
      loadChildren: () =>
        import('./data-binding/data-binding.module').then(m => m.DataBindingModule)},
        {path: 'chuck',
        canActivate: [AuthService],
        loadChildren: () =>
        import('./chuck/chuck.module').then(m => m.ChuckModule)},
        {path: 'users',
        canActivate: [AuthService],
        loadChildren: () =>
        import('./users/users.module').then(m => m.UsersModule)},
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {path: '**', redirectTo: 'directives'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LayoutsModule,
    AuthModule,
    ChuckModule,
    UsersModule
  ],
  providers: [
    {
      provide: 'config',
      useValue: config
    },
    {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
