import { Component, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,} from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MatSidenav } from '@angular/material';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('snav') drawer: MatSidenav;
  mobileQuery: MediaQueryList;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faYT = faYoutube;

  // fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  fillerNav = ['home','events','mega-events','intra','team','sponsors','highlights']

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
  }


  onclick(){
    if(this.mobileQuery.matches){
      this.drawer.toggle();
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

}
