import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @ViewChild('drawer') drawer: MatSidenav;

  isOpenSideBar: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router
  ) {}

  onChangeScreenMode(): void {
    this.isOpenSideBar = !this.isOpenSideBar;
    this.drawer.toggle();
  }

  validateRoute() {
    const { url } = this.route;
    switch (url) {
      case '/latest-movies':
        return `Latest Movies`;
      case '/top-movies':
        return `Top 10 Rated Movies`;
      case '/home':
        return '';
      default:
        return '';
    }
  }

}
