import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isSidenavCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isSidenavCollapsed$: Observable<boolean> = this.isSidenavCollapsed.asObservable();

  constructor() { }

  public toggleSidenav(){
    this.isSidenavCollapsed.next(!this.isSidenavCollapsed.value);
  }
}
