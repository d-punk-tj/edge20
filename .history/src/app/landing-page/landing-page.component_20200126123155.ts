import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


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

  constructor() { }

  ngOnInit() {
  }

}
