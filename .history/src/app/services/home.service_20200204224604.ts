import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  home = [{
    id: 'about',
    desc: `<h1>Techno Main Salt Lake</h1>
          <p><b>Techno Main</b> is an engineering and management college located in West Bengal. Established in 2001 by the Techno India group, it offers both undergraduate and postgraduate courses in various engineering, computer and business disciplines. The college is AICTE approved institution affiliated to West Bengal University of technology. Since its inception, TIG group has strengthened its original emphasis on science and engineering and expanded into management and various other areas.</p>
          <h1>Geekonix</h1>
          <p><b>Geekonix</b> is the official science and technology society of Techno Main, Salt Lake. It was formed back in 2004-2005 with the sole purpose of providing students with opportunities for enhancing their creativity and developing a pathway for exposure for the students zealous in the technical field. Under Geekonix we have various clubs like Robotics Robopalz Club (RRC), Curbrain and many more. With time, Geekonix has grown into a centre of innovation and technical expertise.</p>
          <h1>Edge</h1>
          <p><b>Edge</b> - The annual technical and management festival of Techno Main salt lake, organised by the members of its official science club Geekonix, is a marvel in itself. It was first conducted in the year 2007 and is now one of the largest technical fests of the region par excellence. It is a three-day long festival encompassing a wide range of events with prize money of up to 7 lakhs and witnesses the largest footfall in the region with participants from all over the country. Edge hosts an array of over 40 events under the categories: Robotics, Cyber Crusade (Gaming), Compute Aid, Newron, Infocus, Elevation, Money Matters, Food for fun, Innovati and other fun events; among which Gaming and Robotics acquire the foremost position. After eleven successful years that saw promising talents and immense reception, this time EDGE’19 is set to break all the boundaries and promises to be the unprecedented celebration of budding talent, technical excellence and innovative minds.</p>`
  },
  {
    id: 'merch',
    desc: `<h1>Merchandise</h1>
    <div class="content-centered">
    <h1> Comming soon </h1>
  </div>
          `
  },
  {
    id: 'accomodation',
    desc: `<h1>Accomodation</h1>
          <div class="content-centered">
            <h1> Comming soon </h1>
          </div>`
  },
  {
    id: 'reg',
    desc: `<h1>Schedule & Registration</h1>
          <div class="content-centered">
            <h1>Comming soon </h1>
          </div>`
  },
  {
    id: 'contact',
    desc: `<h1>Contact</h1>
          <p>For queries related to events contact the respective event co-ordinators whose contats are given on the respective event pages.</p>
          <br>
          <p>Email: <a href="mailto:geekonix@gmail.com">geekonix@gmail.com</a></p>
          <p>Soham Biswas - 7602760944</p>
          <p>Sayantan Bhattacharaya - 9163480278</p>
          <br>
          <h3>Sponsorship Contacts:</h3>
          <p>Sroman Guha - 8981570577</p>
          <p>Rishav Bhattacharyya - 8335067136</p>`
  },
  {
    id: 'ca',
    desc: `
    <h1>Campus Ambasador</h1>
    <div class="row">
    <div class="col-sm-6">
    <p>Hello all social butterflies out there who are not a student of TMSL, but intrigued to be a part of Eastern India's 2nd largest techno-management fest, EDGE.</p>
    <p>Don’t worry as EDGE is proud to announce the kickoff of its highly anticipated CAMPUS AMBASSADOR PROGRAM</p>
    <p>Why you ask ? What’s in it for me ? Glad you asked.</p>
    <h3>This program entails the following for the Campus Ambassadors: </h3>
    <ul>
      <li>Imbue leadership and management skills.</li>
      <br>
      <li>Top 10 CAs get assured e-certificates.</li>
      <br>
      <li>A chance to win exciting gifts and accessories.</li>
      <br>
      <li>The top 5 Campus Ambassadors will get certificates along with goodies. </li>
      <br>
      <li>Top 3 CAs will get goodies, certificates and a recommendation letter from the teacher convenor of our Technical Committee as well as LinkedIn recommendation from our official page. </li>
      <br>
      <li>Exciting goodies at the end of every month for the highest point scorers.</li>
      <br>
      <li>The entire system of how to score points will be explained through a meeting, which will be held after we declare our final list of CAs.</li>
      <br>
      <li>An unparalleled experience of associating with EDGE.</li>
    </ul>
    <p>So now is your time to use your skills as an influencer, get yourself registered through:</p>
    <p  class="button"><a href="https://forms.gle/vujB6gvrsVL8W8Xn9">Click here to register</a></p>
    <h3>Contacts:</h3>
    <p>Kumari Bhawna : +91 8240893668</p>
    <p>Meheli Choudhury : +91 7063279355</p>
    <p>Pradipta Roy : +91 7044358389</p>
    <p>Once you are selected as the CA, we shall notify you via mail.</p>
    </div>
    <div class="col-sm-6">
    <img src="/assets/ca.jpeg" alt="Campus Ambassador">
    </div>
    </div>
    
    
          
          `
  },
  {
    id: 'deeds',
    desc: `<h1>Edge Deeds</h1>
            <h1>Comming soon</h1>
          `
  }]

  constructor() { }

  getDescription(id: string){
    const detail = this.home.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
