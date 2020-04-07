import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ChildComponent } from '../data-binding/child/child.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  canDeactivate(component: ChildComponent,
                currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    return component.canDeactivate ?  component.canDeactivate() : true;
  }
}
