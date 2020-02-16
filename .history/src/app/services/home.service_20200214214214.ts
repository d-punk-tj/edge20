import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  home = [{
    id: 'about',
    desc: `<h1 class="vhs-message">Techno Main Salt Lake</h1>
          <p>Located amidst the hustle and bustle of the city of joy, Techno Main, Salt Lake is an engineering and management college affiliated to MAKAUT, accredited by NBA and approved by AICTE. It stands strong with its vast campus and faculty members who strengthen its foundation, making Techno Main,Salt Lake one of the most famous colleges in West Bengal. Techno Main has been inspiring and moulding young minds to become the future of the world through their unique endeavour, ever since it was established in 2001.</p>
          <h1 class="vhs-message">Geekonix</h1>
          <p><b>GEEKONIX</b> is the official science and technology club of Techno Main, Salt Lake. It was formed in 2005 with the sole intent of equipping young minds with the ability to think out of the box and ideate, innovate, create and execute events that would aim to promote their creativity and inculcate management and communication skills. Over the years, Geekonix has not only inspired young minds but has also developed a platform where the students have been nurtured and their ideas have been given a practical shape to improve their technical abilities as well as the reputation of the institute as a leader in innovation and creativity. </p>
          <h1 class="vhs-message">Edge</h1>
          <p><b>EDGE </b>is the annual techno-management festival of Techno Main, Salt Lake, organized by Geekonix, which aims at providing a common platform to unite students from various colleges to showcase and nurture their technical skills and innovativeness irrespective of their seniority, branch or experience. It is a 3 day long extravaganza which encompasses more than 50+  events under the flagships of Compute Aid, RRC (Robotics), Cyber Crusade, Infocus, CIIC, Newron Elevation, Food for fun, Fun events etc. With a total prize money of up to 7.75 lakhs, Edge witnesses one of the largest footfall of this region with participants from more than 130+ different colleges pan-India. Edge creates an arena for young and aspiring minds to compete, succeed, leave a mark and create memories through recreation and relaxation of mind, to be cherished forever. For the past 13 years, Edge has delivered it's promise of bringing the best of events and memories and pave the path for talented young minds to showcase their talents. With the fourteenth iteration of Edge coming up, we hope to take the bars higher still, and reach more milestones and be an unforgettable experience for all who witness this magnificent fest.</p>`
  },
  {
    id: 'merch',
    desc: `<h1 class="vhs-message">Merchandise</h1>
    <p>Get your hands on the official merchandise of EDGE_20 and "Revamp your swag".</p>
    <p>Priced at INR 250 each.</p>
    <p>Pre book your merchandise by paying:- 
    Rs 100(For a single merchandise) / Rs 150 (For both the merchandise)</p>
    <p>Those who are buying the merchandise in both the colours i.e white and black, can avail a discount of Rs 40 on the total amount.</p>
    <p>For the ones who have already bought the coupon, the discount that has been mentioned in it can also be availed in addition to the above mentioned one.</p>
    <br>
    <img src="/assets/m1.jpeg" alt="Merchandise" style="padding:20px">
    <img src="/assets/m2.jpeg" alt="Merchandise" style="padding:20px">
    <br>
    <p><b>Hurry up & suit up in your geek armour!</b></p>
          `
  },
  {
    id: 'accomodation',
    desc: `<h1 class="vhs-message">Accomodation</h1>
          <div class="content-centered">
          <h2 class="updating">Comming soon</h2>
          </div>`
  },
  {
    id: 'reg',
    desc: `<h1 class="vhs-message">Schedule & Registration</h1>
          <div class="content-centered">
          <h2 class="updating">Comming soon</h2>
          </div>`
  },
  {
    id: 'contact',
    desc: `<h1 class="vhs-message">Contact</h1>
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
    <h1 class="vhs-message">Campus Ambasador</h1>
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
    desc: `<h1 >Edge Deeds</h1>
            <h2 class="updating">Comming soon</h2>
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
