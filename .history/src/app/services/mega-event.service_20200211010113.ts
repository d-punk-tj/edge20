import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MegaEventService {

  megaEvents = [{
    id: 'nights',
    desc: `<h1 vhs-message>Edge Nights</h1>
          <br>
          <p>The star-spangled night, where stars come down to illuminate our stage and freeze the moment with their intriguing speeches and rib-tickling performances ushering in a phenomenal blend of warmth and fervour.  Being a perfect medley of interaction, innovation and recreation, Edge Night ensures that friends who laugh together, stay together and almost certainly, slay together.</p>
          <br>
          <h2>Past Guests</h2>
          <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <img src="../../assets/zkhan.webp" alt="" srcset="">
                <p class="guest_caption">Zakir khan</p>
                </div>
                <div class="col-sm-4">
                <img src="..//assets/zkhan.webp" alt="" srcset="">
                <p class="guest_caption">Sorabh Pant</p>
                </div>
                <div class="col-sm-4">
                <img src="../../assets/zkhan.webp" alt="" srcset="">
                <p class="guest_caption">Nishant Tanwar</p>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <img src="../../assets/zkhan.webp" alt="" srcset="">
            <p class="guest_caption">Karunesh Talwar</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/zkhan.webp" alt="" srcset="">
            <p class="guest_caption">Rahul Subhramanian</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/zkhan.webp" alt="" srcset="">
            <p class="guest_caption">Sahil Shah</p>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption"></p>
        </div>
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption">Biswa Kalyan Rath</p>
        </div>
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption"></p>
        </div>
    </div>
          </div>
          `
  },
  {
    id: 'talks',
    desc: `<h1 class="vhs-message">Edge Talks</h1>
          <br>
          <h2>""An idea is salvation by imagination."</h2>
          <br>
          <p>The goal of EDGE Talks is to inform and educate students in an accessible way. Our speakers take the stage to present valuable new knowledge, innovative researches and ideas, worth spreading. Through EDGE Talks, students are exposed to speakers who are doing cutting edge work across numerous causes. EDGE Talks aims to inspire innovation and broaden your horizons. Stay tuned for further updates.</p>`

  },
  {
    id: 'deeds',
    desc: `<h1 vhs-message>Edge Deeds</h1>
          <br>
          <h2>Every good deed is like a feather in the crown of your achievement, indeed!</h2>
          <br>
          <p>With the utmost enthusiasm, we at EDGE'20 try to give bring warmth to the forsaken hearts of forlorn people. We aspire to reflect a little sunshine in their grey. EDGE DEEDS is a train which conveys happiness, smile, peace, succor etc. and provide these in every underprivileged and unheeded station.</p>`
  },

]

  constructor() { }

  public getDescription(id: string){
    const detail = this.megaEvents.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
