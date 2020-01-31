import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticlesModule } from 'angular-particle';
import { CountdownModule } from 'ngx-countdown';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { EventsComponent } from './events/events.component';
import { MegaEventsComponent } from './mega-events/mega-events.component';
import { LogosComponent } from './logos/logos.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { IntraComponent } from './intra/intra.component';

import { HomeService } from './services/home.service';
import { EventService } from './services/event.service';
import { MegaEventService } from './services/mega-event.service';
import { IntraEventService } from './services/intra-event.service';
import { HighlightsComponent } from './highlights/highlights.component';
import { ErorrPageComponent } from './erorr-page/erorr-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    EventsComponent,
    MegaEventsComponent,
    LogosComponent,
    SubEventsComponent,
    TeamComponent,
    SponsorsComponent,
    IntraComponent,
    HighlightsComponent,
    ErorrPageComponent,
    LandingPageComponent,
    SidenavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    CountdownModule,
    FontAwesomeModule,
    DeferLoadModule,
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule  
    
    
  ],
  providers: [
    HomeService,
    EventService,
    MegaEventService,
    IntraEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){ }
}
