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
          <h2 class="guest_caption ">Past Guests</h2>
          <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/zkhan.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Zakir khan</p>
                </div>
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/spant.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Sorabh Pant</p>
                </div>
                <div class="col-sm-4">
                <img src=".../../assets/mega-events/edge_night/ntanwar.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Nishant Tanwar</p>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <img src=".../../assets/mega-events/edge_night/ktalwar.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Karunesh Talwar</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/mega-events/edge_night/rsubh.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Rahul Subhramanian</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/mega-events/edge_night/sshah.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Sahil Shah</p>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption"></p>
        </div>
        <div class="col-sm-4">
        <img src="../../assets/mega-events/edge_night/bkrath.webp" alt="" srcset="" width="200">
        <p class="guest_caption">Biswa Kalyan Rath</p>
        </div>
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption"></p>
        </div>
    </div>
          </div>


          <h2 class="guest_caption">Inteneted Guests</h2>
          <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/zkhan.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Zakir khan</p>
                </div>
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/epr.webp" alt="" srcset="" width="200">
                <p class="guest_caption">EPR Rapper</p>
                </div>
                <div class="col-sm-4">
                <img src=".../../assets/mega-events/edge_night/agupta.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Appurv Gupta</p>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <img src=".../../assets/mega-events/edge_night/ktalwar.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Karunesh Talwar</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/mega-events/edge_night/rdua.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Rahul Dua</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/mega-events/edge_night/rjoshi.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Rohan Joshi</p>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-4">
        <img src="" alt="" srcset="">
        <p class="guest_caption"></p>
        </div>
        <div class="col-sm-4">
        <img src="../../assets/mega-events/edge_night/asbassi.webp" alt="" srcset="" width="200">
        <p class="guest_caption">Anubhav Singh Bassi</p>
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
          <p>The goal of EDGE Talks is to inform and educate students in an accessible way. Our speakers take the stage to present valuable new knowledge, innovative researches and ideas, worth spreading. Through EDGE Talks, students are exposed to speakers who are doing cutting edge work across numerous causes. EDGE Talks aims to inspire innovation and broaden your horizons</p>
          <h2 class="guest_caption ">Past Guests</h2>
          <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/prvn.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Rj Praveen</p>
                </div>
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/tvf.webp" alt="" srcset="" width="200">
                <p class="guest_caption">TVF</p>
                </div>
                <div class="col-sm-4">
                <img src=".../../assets/mega-events/edge_night/csghosh.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Chandra Shekhar Ghosh</p>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <img src=".../../assets/mega-events/edge_night/cbhagat.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Chetan Bhagat</p>
            </div>
            <div class="col-sm-4">
            <img src="../../assets/mega-events/edge_night/btwala.webp" alt="" srcset="" width="200">
            <p class="guest_caption">Yahya Bootwala</p>
            </div>
            <div class="col-sm-4">
            </div>
          </div>

          <h2 class="guest_caption ">Intended Guests</h2>
          <div class="row">
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/sganguly.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Sourav Ganguly</p>
                </div>
                <div class="col-sm-4">
                <img src="../../assets/mega-events/edge_night/bguy.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Kiran Dutta(Your Bong Guy)</p>
                </div>
                <div class="col-sm-4">
                <img src=".../../assets/mega-events/edge_night/mir.webp" alt="" srcset="" width="200">
                <p class="guest_caption">Mir Afsar Ali</p>
                </div>
            </div>
          </div>
          <h2>contacts</h2>
          <p>Rishav - 8335067136</p>
          `

  },
  {
    id: 'deeds',
    desc: `<h1 vhs-message>Edge Deeds</h1>
          <br>
          <h2>Every good deed is like a feather in the crown of your achievement, indeed!</h2>
          <br>
          <p>With the utmost enthusiasm, we at EDGE'20 try to give bring warmth to the forsaken hearts of forlorn people. We aspire to reflect a little sunshine in their grey. EDGE DEEDS is a train which conveys happiness, smile, peace, succor etc. and provide these in every underprivileged and unheeded station.</p>
          <h2>contacts</h2>
          <p>Sayantan - 9163480278</p>`
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
