import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HomeService } from '../services/home.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faYT = faYoutube;

  constructor(private ngxSmartModalService: NgxSmartModalService,private homeService: HomeService) { }

  ngOnInit() {
  }

  openModal(id: string){
    // if(id==='intra')
    //   window.location.href = 'http://intra.edg.co.in';
    const desc = this.homeService.getDescription(id);
    this.ngxSmartModalService.resetModalData('myModal');
    this.ngxSmartModalService.setModalData(desc, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }
}
