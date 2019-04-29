import {ChangeDetectorRef, Component, EventEmitter, HostListener, Output} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Material PWA';
  mobileQuery: MediaQueryList;
  nav = [
    {
      'title': 'Home',
      'path': '/'
    },
    {
      'title': 'Posiłki',
      'path': '/meals'
    }
  ];
  private _mobileQueryListener: () => void;

  // private innerWidth: any;
  @Output() toggleSideNav = new EventEmitter();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.innerWidth = window.innerWidth;
  }

  onSwipe(evt, nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
      if (x == "left") {
        nav.close();
      } else if (x == "right") {
        nav.open()
      }
    }
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}
