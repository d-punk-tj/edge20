import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MegaEventsComponent } from './mega-events/mega-events.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { IntraComponent } from './intra/intra.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ErorrPageComponent } from './erorr-page/erorr-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'home', component:LandingPageComponent, data: {animation: 'FilterPage'}},
  {path:'events', component:EventsComponent, data: {animation: 'FilterPage'}},
  {path:'mega-events', component:MegaEventsComponent, data: {animation: 'FilterPage'}},
  {path:'events/:id', component:SubEventsComponent, data: {animation: 'FilterPage'}},
  {path:'intra', component:IntraComponent, data: {animation: 'FilterPage'}},
  {path:'intra/:id', component:SubEventsComponent, data: {animation: 'FilterPage'}},
  {path:'team', component:TeamComponent, data: {animation: 'FilterPage'}},
  {path:'sponsors', component:SponsorsComponent, data: {animation: 'FilterPage'}},
  {path:'highlights', component:HighlightsComponent, data: {animation: 'FilterPage'}},
  {path:'erorr', component:ErorrPageComponent},

  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
