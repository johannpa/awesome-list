import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'al-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public prefix = 'app';
  public dashboardPath = `${this.prefix}/dashboard`;
  public planningPath = `${this.prefix}/planning`;
  public workdayPath = `${this.prefix}/workday`;
  public profilPath = `${this.prefix}/profil`;
  public parametersPath = `${this.prefix}/parameters`;

  constructor(private router: Router) { }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
  }
}
