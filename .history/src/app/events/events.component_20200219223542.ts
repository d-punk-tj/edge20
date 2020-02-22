import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  items = [
    {name: "events/cyber-crusade.svg", caption: "Cyber Crusade", id: 'cc',
    desc:'This club was founded by and for those gamers for whom gaming is not just a hobby, but also a passion and a field to excel in. Hosting a plethora of events every year, Cyber Crusade,the official gaming club of Geekonix, aims to promote the spirit of healthy competition and dedication in all fellow students'},
    
    {name: "events/innovati.svg", caption: "Innovati", id: 'innovati',
    desc:'If wit and intellect combined with creativity and wishful thinking is your forte, then this club is for you. This club of Geekonix promotes the act of turning new and imaginative ideas into reality while building a strong foundation of scientific knowledge and technology'},
    
    {name: "events/money-matters.svg", caption: "CIIC-Money Matters", id: 'mm',
    desc:'CIIC is the innovation cell of Geekonix that aims to promote entrepreneurial activities among the students through a variety of events. This club provides a wonderful platform for the budding entrepreneurs who emanate creative and innovative perspectives to change the market scenario.'},
    
    {name: "events/compute-aid.svg", caption: "Compute@id", id: 'ca',
    desc:' The official coding club under geekonix,is for those students for whom \'coding\' is what they live for. The passionate coders organize and take part in various innovative coding competitions other than inculcating interest among others through workshops and seminars all throughout the year.'},
    
    {name: "events/newron.svg", caption: "Newron", id: 'newron',
    desc:'Charge your nerves, think differently to outshine the crowd. Newron, the official Quiz, Debate, and Electronics club of Geekonix believes that every person has an aura in them, an aura of potential, of ideas and world-changing solutions. It is in this potential and ideas this club aims to tap and present to the masses.'},
    
    {name: "events/elevation.svg",  caption: "Elevation", id: 'elevation',
    desc:'Elevation ,the official community of Bridge designing of Geekonix,aims at using the analytical acumen and problem-solving skills of engineers to shape up the elevation of a building using CAD software or to build simple model designs of a bridge.'},

    {name: "events/robotics.svg",  caption: "Robotics", id: 'robotics',
    desc:'Robopalz Robotics Club being the official robotics club of Geekonix, is the club for the robotics enthusiasts. For the ones who can showcase and compete with the aggregate of their knowledge of artificial intelligence, mechanical savvy, and algorithmic virtuosity.'},

    {name: "events/food-for-fun.svg",  caption: "Food For Fun", id: 'fff',
    desc:'As the name suggests this club brings out the essence of food, the creative use of technology in making it and involves a lot of fun and frolic. Food for Fun,the club under Geekonix related to food processing and technology, offers firsthand knowledge about the various industry-related problems and helps students to come up with innovative and sustainable solutions.'},

    {name: "events/create-it.svg",  caption: "Create It", id: 'ci',
    desc:'If wit and intellect combined with creativity and wishful thinking is your forte, then this club is for you. This club of Geekonix promotes the act of turning new and imaginative ideas into reality while building a strong foundation of scientific knowledge and technology'},

    {name: "events/infocus.svg", caption: "Infocus", id: 'infocus',
    desc:' With an aim to bring together all the photography enthusiasts, this club was founded under Geekonix. Infocus aims to promote the aesthetic art of photography and help develop associated skills through workshops and events'},

    {name: "events/fun-events.svg", caption: "Fun Events", id: 'fun',
    desc:''},

    {name: "events/just-like-that.svg",  caption: "Just Like That", id: 'jlt',
    desc:''},
    
    {name: "events/design-event.svg", caption: "Designing", id: 'designing',
    desc:''},
  ]; 

  constructor(private router: Router) { }

  ngOnInit() { }

  onEventClick(id: string, name){
    this.router.navigate(['/events', id],{queryParams : {title : name}});
  }

}
