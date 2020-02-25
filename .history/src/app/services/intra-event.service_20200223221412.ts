import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class IntraEventService {
  events = [
    {
      id: "ca",
      icon: "compute-aid.svg",
      name: "Compute@id",
      subEvents: [
        {
          id: "flawless",
          name: "Flawless",
          icon: "events/compute-aid/flawless.svg",
          class: "deg0",
          desc: `<h1>Flawless</h1>
                <p>If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then this is the perfect event for you. Code your heart out and race with the others to win the battle of wits and will. Be Flawless!</p>
                <h3>Rules</h3>
                <ul>
                  <li>Each team can have either 2 or 3 members.</li>
                  <li>This event will consist a single round of coding.</li>
                </ul>
                <h3>Round 1</h3>
                <p>The teams will be judged based on the number of problems they will solve and the time taken to solve the problems. The teams with the best performances will be chosen as the winners.</p>
                <h3>Contact</h3>
                <p>Indranil Chowdhury – 9635874015</p>
                <p>Shekhar Agarwal - 9883999829</p>`
        },
        {
          id: "bughunt",
          name: "Bug Hunt",
          icon: "events/compute-aid/bug-hunt.svg",
          class: "deg30",
          desc: `<h1>Bug Hunt</h1>
                <p>Do you often find faults in others' codes? Or are you always on the hunt for errors whenever you see a code? Well, then this event might just be for you. Find out the trickiest of bugs in the simplest codes and correct them in the shortest and smartest way possible. Beat the others to the finish and claim the prize.</p>
                <h3>Rules</h3>
                <ul>
                  <li>It is a solo or max of 2 members participation event.</li>
                  <li>The coordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Round 1</h3>
                <p>It is an MCQ round on languages C, C++ or JAVA. This round will test the fundamental skill of participants in the language they choose. Team qualifies on basis of performance.</p>
                <h3>Round 2</h3>
                <p>It is going to be a Debugging Round. Again C, C++ and Java will be the languages of choice for the teams (Teams are allowed to choose a different language for this round). All the teams will be provided with some buggy code snippets and they will have to correct these code snippets in the minimum number of steps possible. Teams will be marked based on the number of steps they take to correct a code snippet and also the time taken to correct it.</p>
                <h3>Contact</h3>
                <p>Abhishek Das – 7033534472</p>
                <p>Sanchita Saha - 9433419864<p>`
        },
        {
          id: "crypto",
          name: "Cryptoquest",
          icon: "events/compute-aid/cryptoquest.svg",
          class: "deg330",
          desc: `<h1>CryptoQuest</h1>
                <p>Can you solve the cipher above and make a meaningful sentence out of it? Well if you can then you are made for this event. In this event you need to be calm and gather all your wits to make meaning of most of the questions. Get ready for a cryptic experience!!!</p>
                <h3>Rules</h3>
                <ul>
                  <li>It is a solo or a group o max 2 members participation event.</li>
                  <li>Various questions involving ciphers and steganography will be provided to you. You will simply have to give us the flags, which will be hidden within the questions.</li>
                  <li>Knowledge of computer programming won’t be required to solve the problems, although it may help to solve some problems faster.</li>
                  <li>The event will be conducted on a Linux Distro like Ubuntu. Basic knowledge of such an environment, can prove helpful during the event</li>
                  <li>Teams won’t be allowed to use any external electronic devices.</li>
                  <li>Internet access may be provided to the participants if the co-ordinators decide that any question will require it. In case it is not provided, we will provide you with almost all the knowledge, you will require to crack the questions.</li>
                  <li>In the event of a tie, the team to solve the most difficult questions first will be considered the winner.</li>
                  <li>The co-ordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Contacts</h3>
                <p>Abhishek Das - 7033534472</p>
                <p>Nishi Patwari – 9051920760</p>`
        },
        {
          id: "webdev",
          name: "Web Dev",
          icon: "events/compute-aid/web-dev.svg",
          class: "deg195",
          desc: `<h1>Web Dev</h1>
                <p>Tired of seeing same old inflexible websites. Try working on User Experience and Responsive Web Design.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Each team can have either single or 2 members.</li>
                  <li>The Judge's call will be final</li>
                  <li>Better design will get more credits</li>
                  <li>Basic MCQs on Frontend Technologies. A webpage will be given, tweak here and there to obtain a responsive web page</li>
                  <li>Build a website out of the given WireFrame.</li>
                </ul>
                <h3>Contact</h3>
                <p>Indranil Chowdhury – 9635874015</p>
                <p>Tejeshwar Kumar- 7004854041</p>`
        }
      ]
    },
    {
      id: "robotics",
      icon: "robotics.svg",
      name: "Robotics",
      subEvents: [
        {
          id: "roborace",
          name: "Robo Race",
          icon: "events/robotics/roborace.svg",
          class: "deg0",
          desc: `<h1>Robo Race</h1>
          <p>
          “Steer your bot expertly to score the maximum number of goals and win the match.”
          </p>
                <p>Design a manually controlled robot capable of pushing blocks along with scoring maximum number of goals against other robots avoiding different obstacles.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A minimum of 3 members and a maximum of 4 members are allowed per team</li>
                  <li>The members must bring IDENTITY CARDS of the college.</li>
                  <li>No person should be a member of two teams.</li>
                  <li>No bot can be shared by two teams.</li>
                  <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
                  <li>Participants themselves will have to arrange for other power supply required for their robot.</li>
                  <li>Teams cannot tinker with their bots during the play-offs</li>
                  <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed.</li>
                  <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
                  <li>No attack on the opponent&#39;s bot is allowed.</li>
                  <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
                  <li>The decision of the coordinators will be final and binding.</li>
                </ul>
                <h3>Specifications</h3>
                <ul>
                  <li>The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%</li>
                  <li>The bot with external mechanism must be fitted in the cubical box of given dimension.</li>
                  <li>The maximum allowable weight of the robot is 2.5 KG without any tolerance.</li>
                  <li>The robot can be powered on-board or off-board.</li>
                  <li>The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.</li>
                  <li>External weights on the bot are not allowed.</li>
                  <li>The robot should not grab/hold the ball at any point of time during the match.</li>
                </ul>
                <h3>Round 1</h3>
                <p>The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.</p>
                <h3>Round 2</h3>
                <p>This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.</p>
                <h3>Round 3</h3>
                <p>Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball.</p>
                <h3>Scoring Rules</h3>
                <p>SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots] -20*[Number of obstacles touched] -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]</p>
                <p>Whoever scores the maximum number of goals, wins the competition</p>
                <h3>Contacts</h3>
                <p>Akash-  9038239197</p>
                <p>Prashant- 9830945321</p>`
        },
        {
          id: "robosoccer",
          name: "Robo Soccer",
          icon: "events/robotics/robosoccer.svg",
          class: "deg180",
          desc: `<h1>Robo Soccer</h1>
          <p>“Steer your bot expertly to score the maximum number of goals and win the match”</p>
                <p>Design a manually controlled robot capable of pushing blocks along with scoring maximum number of goals against other robots avoiding different obstacles.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A minimum of 3 members and a maximum of 4 members are allowed per team</li>
                  <li>The members must bring IDENTITY CARDS of the college.</li>
                  <li>No person should be a member of two teams.</li>
                  <li>No bot can be shared by two teams.</li>
                  <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
                  <li>Participants themselves will have to arrange for other power supply required for their robot.</li>
                  <li>Teams cannot tinker with their bots during the play-offs</li>
                  <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed.</li>
                  <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
                  <li>No attack on the opponent&#39;s bot is allowed.</li>
                  <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
                  <li>The decision of the coordinators will be final and binding.</li>
                </ul>
                <h3>Specifications</h3>
                <ul>
                  <li>The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%</li>
                  <li>The bot with external mechanism must be fitted in the cubical box of given dimension.</li>
                  <li>The maximum allowable weight of the robot is 2.5 KG without any tolerance.</li>
                  <li>The robot can be powered on-board or off-board.</li>
                  <li>The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.</li>
                  <li>External weights on the bot are not allowed.</li>
                  <li>The robot should not grab/hold the ball at any point of time during the match.</li>
                </ul>
                <h3>Round </h3>
                <p>The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.</p>
                <h3>Round </h3>
                <p>This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.</p>
                <h3>Round </h3>
                <p>Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball.</p>
                <h3>Scoring Rules</h3>
                <p>FINAL SCORE: 200*(No. of blocks placed) + 2*(time left in sec)-30*(no. of hand touches)-100*(for 2nd time-out) -300(for restart)</p>
                <p>Whoever scores the maximum number of goals, wins the competition</p>
                <h3>Contacts</h3>
                <p>Sourav Bohra- 9831175078</p>
                <p>Sourav Soni- 8961469304</p>
                <p>Shubham- 8777742613</p>`
        },
        {
          id: "seguidor",
          name: "Seguidor",
          icon: "events/robotics/wallstreet.svg",
          class: "deg30",
          desc: `<h1>Seguidor</h1>
                <p>To build an autonomous line follower bot based on logic gates and capable of following a white path on black surface and detecting crossroads and white blocks along the side of the track.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be from Techno India, Salt Lake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification. </li>
                  <li>Decision of Coordinators would be final.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand touches in each round.</li>
                  <li>After every hand-touch, the bot will be placed on the line; the first hand touch will be free but further will lead to a penalty. </li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>The decision of the event coordinator(s) will be final and binding.</li>
                  <li>In the first round the bot has to follow the line on its way from start to finish within the time limit.</li>
                  <li>In the final round,the bot has to detect checkpoints placed at specified points along the track length and also may have to detect blocks present along the side of the track.</li>
                  <li>The dimensions of the bot should be within 25cm*25cm*25cm.</li>
                </ul>
                <h3>Round 1</h3>
                <p>In this round there is no checkpoint. You have to complete the track in minimum time.</p>
                <p>Scoring: 1000 - [150 if restart (allowed once)]-50*[No. of hand touch] - 2*[Time in seconds]-100*[No. of timeouts(allowed twice)]</p>
                <h3>Round 2</h3>
                <p>In this round there is checkpoint. You have to complete the track with detecting each checkpoint. And stop at the end of the arena in minimum time.</p>
                <p>Scoring: 1000 - [150 if restart (allowed once)]-100*[No. of timeouts (allowed twice)]-50*[No. of hand touch] + [50 for stop at end] -2*[Time in seconds] +50[checkpoints correctly detected] +50[blocks correctly detected]</p>
                <h3>Contacts</h3>
                <p>Sudhanshu Shivam- 6204975235</p>
                <p>Sourav Ghosh- 7980756784</p>`
        },
        {
          id: "micro",
          name: "Micro Machina",
          icon: "events/robotics/jigsaw.svg",
          class: "deg330",
          desc: `<h1>Micro Machina</h1>
          <p>“Being on the line, will make you shine… “</p>
                <p>Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface and detecting crossroads and walls.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be from Techno India, Saltlake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification.</li>
                  <li>Decision of Coordinators would be final.</li>
                </ul>
                <h3>Event Rules</h3>
                <ul>
                  <li>The dimension of the bot should be 25x25x25 cm.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand-touchs &amp; one restart in 1 st round and five hand-touch & two restarts in 2 nd round.</li>
                  <li>After every hand-touch, the bot will be placed on the line, the first hand touch will be free but further will lead to a penalty. For 2 nd round ,after the hand touch bot will be placed on previous check-point.</li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>he decision of the event coordinator(s) will be final and binding.</li>
                  <li>In the first round, the bot has to follow the line and detect the check points present on its way.</li>
                  <li>In the final round the bot also has to detect the walls present on sides. The walls will be approx.  15X15cms and at the distance of 12-15 cm from the line.</li>
                  <li>The bot has to stop at the finishing point.</li>
                  </ul>
                <h3>Round 1</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round only check points are present (no walls)</p>
                <p>Scoring: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected]</p>
                <h3>Round 2</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round checkpoints and walls are present</p>
                <p>Walls are present on the right side.</p>
                <p>If any team wants to skip, the bot will be placed on the 2nd checkpoints.</p>
                <p>In this round bot have to stop at finishing points.</p>
                <h3>Scoring</h3>
                <p>Scoring: 
                1000 – 300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected] + 50*[no of walls] + 100*[if stop at finishing points] </p>
                <h3>Contact</h3>
                <p> Satyaki- 8274038600</p>
                `
        },
        {
          id: "block",
          name: "Block City",
          icon: "events/robotics/stalker.svg",
          class: "deg150",
          desc: `<h1>Block City</h1>
          <p>“I took the path less travelled by and that made all the difference” </p>
                <p>Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface as well as detecting obstacles placed on either right or left side of the track and detecting crossroads.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be only from Techno India, Salt Lake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification.</li>
                  <li>Decision of Coordinators would be final.</li>
                </ul>
                <h3>Events Rule</h3>
                <ul>
                  <li>The dimension of the bot should be 25x25x25 cm.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand-touch &amp; one restart in 1st round, five hand-touch & two restarts in 2 nd round and maximum of two timeouts in each round.</li>
                  <li>After every hand-touch, the bot will be placed on the line, the first hand touch will be free but further will lead to a penalty. For 2nd round, after the hand touch bot will be placed on previous check-point.</li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>In the first round, the bot has to follow the line as well as detect obstacles placed on either right or left side of the track.</li>
                  <li>The obstacles will be approx. 15X15cms and present at the distance of 12-15 cm from the line.</li>
                  <li>In the 2 nd round, the bot has to follow the line as well as detect multiple obstacles, has to detect the crossroads (check points) and has to stop at the finishing point and show the number of obstacles.</li>
                </ul>
                <h3>Round 1</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round there will be obstacles present on either the left or the right side.</p>
                <p>Scoring: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50 [if the bot detect the obstacle properly]</p>
                <h3>Round 2</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round multiple obstacles and checkpoints present.</p>
                <p>All obstacles are present on either the left or right side.</p>
                <p>If any team wants to skip, the bot will be placed on the 2 nd checkpoints.</p>
                <p>In this round bot have to stop at finishing point and show the number of obstacles present through out the track.</p>
                <p>Scoring: 1000 – 300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected] + 50*[no of obstacles] + 100[if stop at finishing points] +200[if the bot shows the total no. of obstacles correctly]</p>
                <h3>Contact</h3>
                <p>Ranjan- 9635497748</p>
                <p>Gaurab- 8436014685</p>`
        },
        {
          id: "rumble",
          name: "Rumble",
          icon: "events/robotics/liftnlay.svg",
          class: "deg210",
          desc: `<h1>Rumble</h1>
                <p>It ain’t how hard you hit; it’s about how hard you can get hit, and still keep moving forward.</p>
                <p>Fight with 3 other competitors to snatch the box that you’re supposed to take home.</p>
                <h3>Rules</h3>
                <ul>
                  <li>It will be a match of 4 manual bots.</li>
                  <li>Where each team should carry a bot with maximum dimension of 30x30x30(including the hand for dragging) with 10% tolerance.</li>
                  <li>Each bot will be placed at the corners of the arena. There will be a box at the center of the arena, the team which is able to successfully take the box towards its end (corner) wins the game.</li>
                  <li>You have to take the box to your respective corner. Bots may engage in fight to do so. If a bot is dragged out of the arena that bot will be eliminated. If the box is kicked out of the arena then there will be no winner.</li>
                  <li>The round will be for 3mins. In case time runs out there will be no winner again.</li>
                  <li>The teams can just pay the entry fee and are eligible to play it. They can replay it as many times. But during a match, once the bot falls off the arena at that time the bot is out of that game. The bot can then replay in another game only.</li>
                  <li>Additional weights are allowed but the total weight of the bot should not exceed 5kgs.</li>
                  <li>The coordinators present there should give out the final verdict. No arguments with the coordinators will be tolerated.</li>
                </ul>
                <h3>Contact</h3>
                <p>Abhishek Jha- 7930212750</p>
                <p>Mann Mohan- 7870268335</p>`
        }
      ]
    },
    {
      id: "cc",
      icon: "cyber-crusade.svg",
      name: "Cyber Crusade",
      subEvents: [
        {
          id: "cs1.6",
          name: "CS 1.6",
          icon: "events/cyber-crusade/csgo-clg.png",
          class: "deg20",
          desc: `<h1>CS 1.6</h1>
                <p>It consists of team based action where two teams battle it out with gun and strategies. Restricted to Techno India college students only. 5v5 standard matchmaking rules as always.</p>
<p>Offense:	Terrorist Side</p>
Defense:	Counter-Terrorist Side
<p>Round:	One 1 minute 45 second cycle on a map</p>
<p>Half:	6 rounds of play on a defending or offensive side</p>
<p>Half time:	The period between halves in which teams swap sides</p>
<p>Match:	First team to win 7 total rounds, or the single overtime round</p>
<p>Overtime:	In the case of a 6-6 score at the end of regulation play, 3 overtime rounds will be played. The start money for each team will be set at $10,000 per player for overtime.</p>
<p>Game Format:</p>

Competition Method:	5 vs. 5
<p>Players:	10 total (5 on each team)</p>
<p>Rounds:	12 rounds for regulation play</p>
<p>Max Rounds Format:	6 rounds as Offense, and 6 rounds as Defense per team until the victory condition is met</p>
<p>Victory Condition:	The first team to win 6rounds in regulation or the team that wins the overtime period.</p>
<p>Buytime:	15 seconds</p>
<p>Startmoney:	$800 for regulation play, $10,000 for overtime periods</p>
<p>Freezetime:	15 seconds</p>
<p>C4 Timer:	35 seconds</p>
<p>Map Pool:</p>

<p>de_dust2</p>
<p>de_inferno</p>
<p>de_nuke</p>
<p>de_train</p>
<p>*The map pool may be changed prior to the tournament. Players will be informed of any such changes as soon as possible.</p>
Side Selection:

<p>By knife round / coin toss, at admin discretion</p>
<p>At half time, teams will switch sides</p>
<p>Half time will be a maximum of two minutes, at which point both teams must be ready</p>
<p>In the event of overtime, teams will switch sides and play an additional 6 rounds (3 on each side) with $10,000 start money; if the score is still tied, another overtime period will be played to determine the winner</p>
<p>All players names must be in the format of their team tag + gaming alias </p>
(i.e. WCG | Bob)
<p>Setup and Configuration:</p>

<p>Non-standard game settings or third party applications that affect game play are not permitted. Players found using either will be penalized at the administrators´ discretion.</p>
<p>Crouch hopping will not be allowed.</p>
<p>Tournament Guidelines:</p>

<p>Any disconnection issues that cannot be resolved by the players in the match must be brought to the attention of an admin immediately</p>
<p>Any use of game exploits, cheats, or any other play deemed “unfair” by an admin may result in disciplinary action up to and including disqualification from the tournament</p>
<p>All players must save game replays and end-of-game score screen shots; in the event of a dispute, these assets will be used as evidence to determine the result of the dispute</p>
<p>Once the match starts, players will not be able to dispute a match on the grounds of match settings</p>
<p>Each team will be responsible for checking the other team's roster is valid BEFORE the match begins, disputes regarding teams using un-rostered players will not be valid after the completion of the match</p>
<p>Any intentional abuse of "pause" by a player on the server will be result in disciplinary action to be decided by an administrator</p>
<p>In-Game Messaging and Communication:</p>

<p>Competitors are not allowed to use global in-game chat in an abusive, offensive, vulgar or spamming manner at any point during a match. This includes pre-match, intermission and post-match periods as well.</p>
<p>When a match is live, only team captains are allowed to use global in-game messages between rounds or at half time, other players must use team-only in-game messages</p>
<p>Violators of these rules are subject to penalties at the administrators’ discretion, which may include player suspension(s) or forfeiture of the match.</p>
<p>All match disputes must be filed by a team captain during regulation play, or within 5 minutes after the match’s conclusion</p>
<p>Violations</p>
<p>Slient or unrechable bomb plants – The bomb must be audible and planted in a position that is accessible without a boost</p>

<p>Flashbang exploits - No flashbang exploits will be allowed</p>

<p>Use of any unapproved textures or models - Only default CS 1.6 models will be allowed</p>

<p>Punishment for any violation will be at the sole discretion of the administrators</p>

<p>Unintentional Issues:</p>

<p>Server Crash:	The server machine crashes/freezes/etc. causing the match server to stop responding</p>
<p>Solution:	An administrator will restart the server, stop the tournament clock, and play will continue from the point of disruption. Points will be added to the amounts totaled before the crash, and the tournament clock will be restarted once the game is live again.</p>
<p>Client Crash:	A player’s computer crashes/freezes/etc. causing the participant to be unable to continue play</p>
<p>Solution:	Play will be paused by a team captain at the freezetime of the NEXT round until the client can reconnect OR 5 mintues passes, whichever comes first.</p>
<p>Rule Changes:</p>
<p>The Administrators reserve the right to modify the rules as needed. This includes changes due to software updates or releases, event organizer decisions and all other changes deemed necessary to run a successful tournament. Teams are responsible to check the rules on a regular basis and prior to the event to ensure they are in complete compliance. Teams must understand that rules listed are guidelines to ensure fair and competitive play and are subject to interpretation by the administrators based on the spirit of the game.</p>

                <h3>Contacts</h3>
                <p>Sarnav Dutta- 8282827171</p>
                <p>Mainak Kundu- 7890694261</p>`
        },
        {
          id: "fifa11",
          name: "FIFA 11",
          icon: "events/cyber-crusade/fifa.png",
          class: "deg340",
          desc: `<h1>FIFA 11</h1>
                <p>This Event is open for all those who take foootball as an emotion. You got what it takes? Come show us.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Custom settings and Custom tactics are not allowed</li>
                  <li>World XI and Classic XI are not allowed</li>
                  <li>Can be played between one joystick player and one keyboard player or two keyboard player</li>
                  <li>Injury and substitution always on</li>
                  <li>Time of each game is 4min</li>
                  <li>Time of final game is 5min</li>
                  <li>Opponent will be chosen randomly</li>
                  <li>Game can only be paused when ball goes out of bounds</li>
                  <li>If the score of the match is equal i.e. draw, then golden goal will be decided the winner</li>
                  <li>Restart of match due to any technical or software issues must be done only by CC members</li>
                </ul>
                <p>(NOTE: The admin’s decision, in any case, is final and irrevocable)</p>
                <h3>Contacts</h3>
                <p>Rohan Chakraborty- 7908613915</p>
                <p>Prithwish Pramanick- 8013643134</p>`
        },
        {
          id: "pubg",
          name: "PUBG Mobile",
          icon: "events/cyber-crusade/pubg.png",
          class: "deg160",
          desc: `<h1>PUBG Mobile</h1>
                <p>Lost your beloved and became a sinner? then you gotta be hungry for a chicken dinner.</p>
                <h3>RULES</h3>
                <ul>
                  <li>The game mode will be TPP - DUO</li>
                  <li>The map for all three match-modes will be Erangel.</li>
                  <li>Use of Aimbots, Wall Hacks, Speedhacks, or any form of unfair advantage-abuse (Teaming up with opponent) is strictly forbidden. All players will be closely monitored and if anyone is caught cheating, that player will be disqualified and banned from all tournaments organised by Cyber Crusade and EDGE.</li>
                  <li>A fixed timeframe will be provided for the players to join the match room, failing to do so will result in disqualification for the match.</li>
                  <li>Players must bring the exact same registered PUBG Mobile ID as mentioned in the form at the time of the registration</li>
                  <li>Playing with any kind of emulator is strictly prohibited.</li>
                  <li>Organisers can authorise any new rules for the betterment of the tournament.</li>
                  <li>The room referee's decisions will be final.</li>
                </ul>
                <h3>Contact</h3>
                <p>SUBHAJIT KONAR : +91 94745 94123</p>`
        },
        {
          id: "nfs",
          name: "Need For Speed",
          icon: "events/cyber-crusade/nfs.png",
          class: "deg200",
          desc: `<h1>Need For Speed</h1>
          <h3>First Round: </h3>
          <ul>
          <li>Map-City Perimeter, 2Laps, BMW M3 GTR</li>
          <li>Players with lowest lap time qualifies. Number depends on participation</li>
          </ul>

          
          <h3>Second Round and Third Round: </h3> 
          <ul>
          <li>Maps- Bay Bridge, Dunwich Bay, Omega, Heritage Heights.</li>
          <li>LAN round. Top 2 players qualify</li>
          </ul>

          <h3>Semi final: </h3>
          
          <p>Maps same. #1 player qualify</p>
          
          <h3>Finals:</h3> 
          <ul>
          <li>Hastings , 3Laps.</li>
          <li>In Finals: Collision on</li>
          <li>Performance max</li>
          <li>No Customer Parts allowed.</li>
          </ul>
                <h3>Contacts:</h3>
                <p>Srinjoy Chatterjee- 8240227648</p>
                `
        }
      ]
    },
    {
      id: "infocus",
      icon: "infocus.svg",
      name: "Infocus",
      subEvents: [
        {
          id: "shoot-m-up",
          name: "Shoot-M-Up",
          icon: "events/infocus/shoot-m-up.svg",
          class: "deg0",
          desc: `<h1>Shoot-M-Up</h1>
              <p>“Where you capture the soul infatuation with your cell-phone.”</p>
                <p>A mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.</p>
                <h3>Rules</h3>
                <ul>
                  <li>In this mobile photography event, your photos can be used with proper copyright statements for Geekonix beneficial.</li>
                  <li>The topic is open. So just give us the best of you.</li>
                  <li>Incoming photograph submissions shall be screened for originality, authenticity, copyright infringement and maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
                  <li>NOT ALLOWED: HDR, Selective Colouring, Manipulation of pictures are not allowed. Tempering with EXIF is also not allowed.</li>
                  <li>ALLOWED: Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed. Cropping upto 15% is allowed. Proper aspect ratios should be maintained.</li>
                </ul>
                <h3>Contact</h3>
                <p>Arghyadeep- 8017318643</p>
                <p>Malakar- 7044759803</p>
                `
        },
        {
          id: "crumbs",
          name: "Crumbs",
          icon: "events/infocus/crumbs.svg",
          class: "deg180",
          desc: `<h1>Crumbs</h1>
          <p>“You don’t take a photograph, you make it!”
          ----- Ansel Adams </p>
                <p>Showcase your skills to win the prize in an event that will put your creativity and talent to the test.</p>
                <h3>Rules</h3>
                <ul>
                <li>Proper EXIF File should be available. The participant will be disqualified if he/she fails to show a proper exif file.</li>
                <li>Plagiarism is a serious offence and we as a Photography Club are against Plagiaristic tendencies.</li>
                <li>Anyone, from any college, field, profession can participate in our competitions.</li>
                <li>No Screenshots, Facebook Downloads etc. will be entertained.</li>
                <li>Plagiarism is a serious offence and we as a Photography Club are against Plagiaristic tendencies.</li>
                <li>Frames, cheap filters must be avoided.</li>
                <li>All submissions must be mailed at submissions.infocus@gmail.com</li>
                <li>The decision of the Judges will be final and in no way are we liable to review the decisions</li>
                </ul>
                <h3>Contact</h3>
                <p>Arghyadeep- 8017318643</p>
                <p>Ushnik- 8479809399</p>`
        },
        {
          id: "crumbs",
          name: "PHOTO STORY",
          icon: "events/infocus/crumbs.svg",
          class: "deg180",
          desc: `<h1>PHOTO STORY</h1>
         
          <p>“Story telling is the powerful way to put ideas into the world.”
          ------- Robert McKee</p>
                <p>The photos submitted must be connected and together should tell the story that the photographer is trying to tell.
                Devices used can be anything – from mobile phones to DSLR</p>
                <h3>Rules</h3>
                <ul>
                  <li>Proper EXIF File should be available. The participant will be disqualified if he/she fails to show a proper exif file.</li>
                  <li>Plagiarism is a serious offence and we as a Photography Club are against Plagiaristic tendencies.</li>
                  <li>Anyone, from any college, field, profession can participate in our competitions.</li>
                  <li>No Screenshots, Facebook Downloads etc. will be entertained.</li>
                  <li>Plagiarism is a serious offence and we as a Photography Club are against Plagiaristic tendencies.</li>
                  <li>Frames, cheap filters must be avoided.</li>
                  <li>All submissions must be mailed at submissions.infocus@gmail.com</li>
                  <li>The decision of the Judges will be final and in no way are we liable to review the decisions</li>
                </ul>
                <h3>Contact</h3>
                <p>Soham Sarkar: 8981933722</p>
                <p>Saptarshi Haldar: 9836285622</p>`
        },
      ]
    },
    {
      id: "elevation",
      icon: "elevation.svg",
      name: "Elevation",
      subEvents: [
        {
          id: "nirmaan",
          name: "Nirmaan",
          icon: "events/elevation/nirmaan.svg",
          class: "deg0",
          desc: `<h1>Nirmaan</h1>
                <p>This event tests your art of constructing Bridges. Bring out the Engineer inside you and create a marvel out of the raw materials provided.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Team consists of maximum 4 members.</li>
                  <li>Wooden Popsicle sticks, white glue will be provided on spot.</li>
                  <li>All other necessary materials (scissors , art paper, blades/other cutting materials, thread, clips etc) may be brought by the participants themselves.</li>
                  <li>Only wooden Popsicle sticks and white glue can be used to construct the bridges. No other materials are permitted. The wooden sticks can be cut to fit as desired.The amount of sticks used in the bridge is limited only by the Dimensions and Weight restrictions.</li>
                  <li>Please note the following when you design and build your bridge:</li>
                  <li>During the strength-test of the bridge, one horizontal bar will be placed on the road deck of the bridge. A downward force will be applied onto the horizontal bar. By placing the bar on the deck in this manner, we ensure that the truss members of the bridge are stressed during the strength test. The builder of the model bridge shall ensure that there is one 3cm X 3cm opening,through the side of the bridge structure, immediately beside the bridge deck, to accomodate the load testing.</li>
                  <li>DIMENSIONS AND WEIGHT:</li>
                  <li>The length of the bridge must be between 50 cm and 60 cm at its base. This is critical and the bridge will be disqualified if it is shorter than 50 cm and will be penalized if it is longer than 60 cm at the base.</li>
                  <li>The road surface of the bridge must be at least 3 cm wide along its entire length (sufficient to allow a match box to pass through) .</li>
                  <li>The overall width of the bridge must be between 10cm and 14 cm. This is critical and the bridge will be penalized if it is wider than 14 cm and bridge will be disqualified if it is shorter than 10cm.</li>
                  <li>The overall height of the bridge – height of 1 popsicle stick(minimum) to 18 cm(maximum). This is critical and the bridge will be penalized if it is higher than 18 cm. Height of a zero member will not be considered.</li>
                  <li>The weight of the bridge shall not exceed 250 grams. “W eight” means finished weight, including sticks and glue, and includes all attachments submitted with the bridge. Penalties will be assessed against overweight bridges.</li>
                
                  <h3>PENALTIES</h3>
                  <li>The self weight of the bridge must be less than 250 gms . If the above mentioned limit is crossed then points will be deducted as per the following-
                  Upto 5 gms over limit – for each 1gms, 0.5 point will be deducted. 5- 10 gms over limit – for each gm, 1 point will be deducted.
                  10 & above over limit – for each 1gms, 1.5 points will be deducted.</li>                  
                  <li>2 points will deducted from the score if the bridge deck is narrower than 3cm.</li>
                  <li>5 points will be deducted for each 1cm (or portion there of) that the bridge's height exceeds 18cm.</li>
                  <li>2 point will be deducted for each 1cm that the bridge's width exceeds 14cm.</li>
                  <li>2 point will be deducted for each 1cm that the bridge's length exceeds 60cm.</li>
                  <h3>GROUNDS FOR DISQUALIFICATION</h3>
                  <li>Entries will be disqualified if they use a material other than fevicol and wooden popsicle sticks.</li>
                  <li>Entries will be disqualified if the bridge length is shorter than 50cm.</li>
                  <li>Entries will be disqualified if the height of the bridge is less than one popsicle stick.</li>
                  <li>Entries will be disqualified if there is evidence of heat treating(baking, etc).</li>
                  <li>Suspension Bridge Model is not permitted in this event.</li>
                  <li>Entries will be disqulified if the bridge width is shorter than 10cm.</li>
                  <li>Entries will be disqualified if there is no road on the bridge.</li>
                  <h3>DURATION OF EVENT</h3>
                  <li>Construction: 4 hours</li>
                  <li>Load Test Outcome: Load Testing will be conducted on the 3rd event day.</li>
                  <h3>JUDGING AND TESTING OF BRIDGES</h3>
                  <li>The bridges will be sbjected to a Efficiency-test in which a downward force will be applied to the bridge and the force will be gradually increased until the bridge fails. This force will be recorded on the Evaluation Sheet.A bridge is considered to fail when at least one member of the bridge breaks. During the test, the bridge will rest on two blocks placed apart.These blocks are loose and will resist the downward force applied to the bridge. The Strength Factor will be computed using the formula: Efficiency=(applied force)/(self weight of the bridge)</li>
                  <li>The bridge with the highest Strength Factor will be given a score of 100. All other bridge entries with in the category will be given a score less than 100, based on the ratio of their Strength Factor score to the highest Strength Factor score.</li>
                  <li>Decisions taken by Judges will be Final</li>
                </ul>
                <h3>Scoring</h3>
                <ul>
                  <li>Keep the glued joints cleaned and trimmed. At the joints, be sure to overlap the sticks and wipe off excess glue.</li>
                  <li>If the edges of the bridge are intended to be straight, use a straight edge while building the bridge.</li>
                  <li>Try to use some artistic imagination</li>
                  <li>Try to use engineering principles, to transfer the force from the middle of the bridge to its supports.</li>
                  <li>Comply with the Weights and Dimensions restrictions to avoid penalties.</li>
                </ul>
                <h3>Contact</h3>
                <p>IFTESHAM -8910308592</p>
                <p>AYESHA -8340454909 </p>
                <p>Vivek- 7631922591</p>
               `
        },
        {
          id: "nirmaan",
          name: "PAPER-O-VATION:-",
          icon: "events/elevation/nirmaan.svg",
          class: "deg0",
          desc: `<h1>PAPER-O-VATION:-</h1>
                <p>This event test your art of Building Bridges with the help of Newspaper. Bring out the Engineer inside you and create a marvel out of the raw materials provided.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Team consists of maximum 4 members and minimum 3 members..</li>
                  <li>News papers , white glue and paper tape will be provided on spot.</li>
                  <li>All other necessary materials ( Scissors ,art paper, blades/other cutting materials , thread , clips, etc )may be brought by the participants themselves.</li>
                  <li>Only news papers ,white glue and paper tape can be used to construct the bridges.</li>
                  <li>Suspension Bridges model are not allowed in this event.</li>
                  <li>30 min will be provided for the construction of the model.</li>
                  <li>Participants are not allowed to use any resources available over the internet and are expected to be honest.</li>
                </ul>
                <h3>Contact</h3>
                <p>SAIF :- 7050125696</p>
                <p>SOUVIK :- 8777686406 </p>
                <p>Vivek- 7631922591</p>
               `
        }
      ]
    },
    {
      id: "newron",
      icon: "newron.svg",
      name: "Newron",
      subEvents: [
        {
          id: "quiz",
          name: "The Quiz",
          icon: "events/newron/quiz.svg",
          class: "deg20",
          desc: `<h1>The Quiz</h1>
                <p>It is a general quiz event that tests the knowledge of an individual about this world. Questions are based on a range of topics namely Music, Entertainment, Literature, Art and Sports abbreviated as MELAS.</p>
                <h3>Rules</h3>
                <ul>
                  <li>This is a team event.each team should consist of 3 members</li>
                  <li>Each team is required to register by arriving at least an hour before the scheduled start.</li>
                  <li>This is a general quiz, format will be made public on the day of the quiz.</li>
                  <li>Any form of cheating will lead to disqualification.</li>
                  <li>In case of a dispute the ruling of the quizmaster is final.</li>
                  <li>There are some star marked questions to decide which team will qualify in case of a tie.</li>
                  <li>Questions can compose of both audio-visual rounds and workout able passages apart from straight questions.</li>
                </ul>
                <h3>Round 1</h3>
                <p>This round is conducted to decide the number of teams qualifying for the Finals. Depending on the number of participating teams in the event the number of rounds and the number of questions are decided.Pouncing is not allowed.</p>
                <h3>Round 2</h3>
                <p>In this round, the top 3 teams who are able to score the maximum points are declared as the winners.</p>
                <h3>Contact</h3>
                <p>Akash- 9007614984</p>
                <p>Angana- 8584805352</p>`
        },
        {
          id: "yp",
          name: "Youth Parliament",
          icon: "events/newron/youth-parliament.svg",
          class: "deg340",
          desc: `<h1>Youth Parliament</h1>
          <p>If you have a keen interest in the Indian parliamentary proceeding then this is an event where you can excel. </p>
                <p>Youth parliament is a form of modern debate to explore your knowledge about Indian parliamentary system. A topic will be given for discussion in the house. The more you research, the hotter you will be able to debate.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Topic :TBD</li>
                  <li>The participants can use either English,Hindi,Bengali I.e., there is no language barrier.</li>
                  <li>Students are allowed to participate individually or in a group of two.</li>
                  <li>The marking will be done on the basis of quality of material and the quality of representation by the speaker.</li>
                  <li>No abusive words are allowed inside the house.</li>
                  <li>Any chance in the rules will be notified prior to the day of event</li>
                </ul>

                <h3>Round 1</h3>
                <p>This is a constructive speech round participants will be given maximum of 2 minutes to speak 
                For the participant in group only 1 can speak.</p>
                <h3>Round 2</h3>
                <p>This a is a rebuttal round,anyone who is against the speaker can ask the question to the speaker and if the speaker fails to answer the question is opened to the house to be answered by anyone who is in favor of the speaker.
                The limitation of the time in cross questioning will be decided by the committee member according to the situation.</p>
                <h3>Contact</h3>
                <p>Jaya Priyadarshini- 9073112644</p>
                <p>Aashu- 9163454702</p>`
        },
        {
          id: "ey",
          name: "Electronically Yours",
          icon: "events/newron/electronically-yours.svg",
          class: "deg180",
          desc: `<h1>Electronically Yours</h1>
                <p>One can’t just simply start making things. So solid modeling is the most vital tool as well as the first step to the solution to the design problem. The aim of this competition is to judge the problem solving skills of the students and Improving the ability to use the techniques of circuit designing.
                participants should have understanding of the basic circuit designing concepts.The competition is divided into two rounds, one is written and the other one is practical hardware based.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The event will comprise of teams competing against each other</li>
                  <li>A team can be of a maximum of 3 members and minimum of 2 members, each of whom should be a college student.</li>
                  <li>Use of calculators, mobile phones or any other electronic gadgets is strictly prohibited.</li>
                  <li>Use of any of the above mentioned equipment may lead to straight disqualification.</li>
                  <li>Decision of the coordinators shall be final and binding.</li>
                </ul>
                <h3>Round 1</h3>
                <p>This round shall consist of 30 multiple choice questions from the subject of electronics engineering to be completed in 45 minutes.Each correct answer will carry one mark and there is no penalty for wrong answer.The team with more than a pre-decided cut-off will qualify for the nect round of the event.</p>
                <h3>Round 2</h3>
                <p>This will be a practical on spot round varying from electronics circuit designing on breadboard.The top 3 teams with getting maximum scores will be declared as the winners.</p>
                <h3>Contact</h3>
                <p>Jaya Priyadarshini- 9073112644</p>
                <p>Aashu- 9163454702</p>`
        }
      ]
    },
    {
      id: "ci",
      icon: "create-it.svg",
      name: "Create It",
      subEvents: [
        {
          id: "mekanix",
          name: "Mekanix",
          class: "deg180",
          icon: "events/create-it/mekanix.svg",
          desc: `<h1>Mekanix</h1>
                <p>This event tests your technical aspect as well as your creativity of building a working model , which will 
                be demonstrated by our team. This event comprises of 4 rounds .The details of each round are as follows:</p>
                <h3>Day 1</h3>
                <h5>Round 1</h5>
                <p>In this round, written test will be taken, for which any 2 members from each team will appear. The
                questions will be from general science & maths( easy to moderate level) and general aptitude.</p>
                <h3>Round 2</h3>
                <p>It is a one-on- one round, that means each team will be paired with other team, then they will 
                compete with one another on some given no. of questions. From each team 2 members will participate 
                in this round( but not those 2 who participated in Round 1). Questions will be from general science and 
                technology.</p>
                <h5>Round 3</h5>
<p>In this round each team will be asked 5 questions each and will be marked accordingly. Questions will be 
from general science and technology. Logical questions can be asked too. From each team any 2 
members can participate.
All the qualifying teams will participate in round 4.</p>
<h3>Day 2</h3>
<h5>Round 4</h5>
<p>This is a model making round. In this, a working model will be shown and demonstrated to all the teams. 
After demonstration and completely understanding the model, all the teams are required to buy the raw 
materials required for the model, with the virtual money assigned. After building the model, each team 
will have to demonstrate their model. Marking will be according to the performance of their model, 
budget utilized. In case of a tie, marks of previous day will be counted for declaring results.</p>
                <h3>Contact</h3>
                <p>Amit Mondal- 8697435197</p>
                <p>Arnab- 9775396520</p>`
        }
      ]
    },
    {
      id: "fff",
      icon: "food-for-fun.svg",
      name: "Food For Fun",
      subEvents: [
        {
          id: "ex",
          name: "Ex-Quizit",
          icon: "events/food-for-fun/xquizit.svg",
          class: "deg0",
          desc: `<h1>Ex-Quizit</h1>
          <p>It is a comprehensive quiz event comprising of questions from different aspects and fields. This event mainly focuses on the knowledge one has about a wide spectrum of topics and is for those who love to play with fun.</p>
                <h3>Rules</h3>
                <ul>
                <li>This is a fun quiz event as it includes questions which suit one’s interest and not the stereotypical quiz questions.</li>
                <li>This is a team event. Each team can have max. 4 members and min. 2 members.</li>
                <li>Each team is required to register by arriving at least an hour before the scheduled start.</li>
                <li>Any form of cheating will lead to disqualification.</li>  
                <li>Questions will be displayed on the screen.</li>
                <li>There will be some special or star marked questions which will carry more points to decide the winners or to help in case of a tie.</li>
                </ul>
                <h3>Round 1</h3> 
                <p>The first round will comprise of 30 questions. It will be a rapid-fire round with each question being displayed on the screen for 30 secs.
                  The top 3 teams will qualify in the next round based on their scores.</p>
 
                <h3>Round 2</h3>
 
                <p>In this round, teams will compete against one another and accordingly the winners will be decided (1st, 2nd and 3rd positions). This round will also comprise of 30 questions with a time interval of 30 secs.</p>
                <h3>Contact</h3>
                <p>Ankita - 9073611863</p>
                <p>Anamika- 8777394308</p>`
        },
        { 
          id: "sell",
          name: "2 Mins To Sell",
          icon: "events/food-for-fun/food-labelling.svg",
          class: "deg30",
          desc: `<h1>2 Mins To Sell</h1>
          <p>The event brings out the marketing skills of the participants, who try to sell their product to the judges in just 2 minutes.</p>
                <h3>Rules</h3>
                <ul>
                <li>Team of min. 2 and max. 3.</li>
                <li>Each team will be given 2 mins to sell their product and 5 mins for the question round.</li>
                <li>The best-selling technique and the most innovative approach will grab the prize. The topics will be of various fields.</li>
                <li>The topics will be provided on the day of the event; the participants can have access to the internet or any reference.</li>

                </ul>
                <h3>Contact</h3>
                <p>Naheli: 8902527422</p>
                <p>Ankita: 9073611863</p>`
        },
        {
          id: "poster",
          name: "Poster Presentation",
          icon: "events/food-for-fun/display-presentation.svg",
          class: "deg330",
          desc: `<h1>Poster Presentation</h1>
          <p>A poster is a temporary promotion of an idea, product or event put up in a public space for mass consumption." Keeping in this mind, this poster making event is organized. The participants need to create a poster and display it in front of the judges.</p>
                <h3>Rules</h3>
                <ul>
                <li>Team of max. 2 members and min. 1 member.</li>
                <li>The participants have to create posters from their home and display it in front of the judges on the day of the event. </li>
                <li>The topics will be given beforehand and the topics will be from social issues or of a similar background.</li>
                <li>The poster needs to be both eye-catching and informative.Using only pen(of any colour) and pencil might add to some extra credit points.</li>
                <li>Using only pen(of any colour) and pencil might add to some extra credit points.</li>
                </ul>
                <h3>Contact</h3>
                <p>Naheli- 8902527422</p>
                <p>Piyali - 8584033889</p>`
        },
        {
          id: "think",
          name: "PROCESS PUZZLE",
          icon: "events/food-for-fun/creation-x-nihilo.svg",
          class: "deg160",
          desc: `<h1>PROCESS PUZZLE</h1>
                  <p>This out of the box event is especially for Intra’20. It is a fun event which combines technology with puzzle solving.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Team of max. 3 members and min. 2 members.</li>
                  <li>Some of the processes will be shown and the participants will have to solve the puzzle given.</li>
                  <li>Since it is a fun event, the other rules will be disclosed on the day of the event.</li>
                </ul>
                <p>P.S: All the topics will be posted on the Facebook page of Food For Fun along with all other details.</p>


                <h3>Contact</h3>
                <p>Piyali- 8584033889</p>
                <p>Ankita - 9073611863</p>`
        },
        {
          id: "relay",
          name: "Food Relay",
          icon: "events/food-for-fun/food-relay.svg",
          class: "deg200",
          desc: `<h1>Food Relay</h1>
                <p>It's a relay of four rounds where you get to showcase your intelligence with your skill of rapidity and attentiveness. It is basically a fun event with no such boundaries of knowledge. Stay hooked and keep the foodie alive!</p>
                <h3>Rules</h3>
                <ul>
                  <li>The most important rule in this event is that the team which finishes the tasks first wins the game like a relay race.</li>
                  <li>This is a team event. Each team can have max. 4 members and min. 2 members.</li>
                  <li>Other rules will be informed on the day of the event.</li>
                </ul>
                <h3>Rounds with 4 games:</h3>
              <p>1. Who am i</p>
            <p>2.Riddles & Puzzles</p>
          <p>3.Spot the difference</p>
          <p>4. Memory game</p>
                <h3>Contact</h3>
                <p>Naheli- 8902527422</p>
                <p>Anamika- 8777394308</p>
                `
        },
        {
          id: "think",
          name: "Animate",
          icon: "events/food-for-fun/creation-x-nihilo.svg",
          class: "deg160",
          desc: `<h1>ANIMATE</h1>
                  <p>The event is an advertisement making contest. Thus, this is the opportunity to shape up your Ad Campaign for a product and enthral your spectators to grab the prize. .</p>
                <h3>Rules</h3>
                <ul>
                  <li>Each team can have a minimum of 2 and a maximum of 4 members.</li>
                  <li>Here the participants have to develop advertisements (like TV advertisements but need not be so perfect) with animations or videos etc.</li>
                  <li>The time limit for the ad is a minimum of 30 secs and a maximum of 1 min.</li>
                  <li>The topics will be disclosed beforehand.</li>
                  <li>The advertisements should be original and free from plagiarism. Any such team found will be disqualified.</li>
                </ul>               

                <h3>Contact</h3>
                <p>Piyali- 8584033889</p>
                <p>Ankita - 9073611863</p>`
        },
      ]
    },
    {
      id: "ciic",
      desc: `<h3>BUSINESS MODEL PLAN- Your Opportunity to Disrupt</h3>
            <h5>Rules<h5>
            <ul>
            <li>The competition is open for teams comprising of undergraduate and postgraduate students.</li>
    
            <li>Team can consist of a maximum of 3 members. Only one of the team member should register as Team Leader.</li>
    
            <li>A participant can also apply individually.</li>
    
            <li>More than 1 team can participate from a college.</li>
    
            <li>One participant cannot be a part of more than one team.</li>
    
            <li>No change of team structure is permitted after the team is registered.</li>
    
            <li>A team can submit more than one business plan/idea after registration but in doing so, it must register separately for each submission. The same email-id and/or team name cannot be used for doing so.</li>
            <h5>Competition timeline-</h5>
    
    <h5>Round 1- Online: </h5>
                <li>Register at - </li>
                <li>The teams must apply with their pitch deck.</li>
                <li>After Result declaration – Submission of Business Model Canvas</li>
    
    <h5>Round 2 - Offline: </h5>
                  <li>Pitch Right - Best start-ups idea will be selected to pitch their ideas in a 180-second elevator ride; to win an investor's heart, you have to get your own "elevator pitch" ready.</li>
                  <li> Ultimate B-Model - The format and other details about the oral presentation will be conveyed later.</li>
                  <h5>The judges will evaluate the presentations based on the following CRITERIA:</h5>
              <li>Background Study.</li>
                <li>Originality in the research work.</li>
                <li>Volume of the work carried out.</li>
                <li>Novelty in thinking.</li>
    </ul>
    <h5>Contacts:</h5>
    <p>Sumit: 9572683975</p>
    <p>Sougata: 8250218868</p>



            <h3>B QUIZ-</h3>
            <p>This is a team event where each team is quizzed on relevant business topics and the market scenario.</p>

            <h5>Rules</h5>
            <ul>
                <li>Team can consist of maximum of 2 members (even solo participation accepted).</li>
                <li>This quiz is open to anyone under 25 years of age.</li>
                <li>Valid ID cards need to be produced at the time of on-spot registration.</li>
                <li>Each member has to be registered individually.</li>
                <li>Any form of cheating will lead to direct disqualification.</li>
                <li>The Prelims will be a set of 25 questions.</li>
                <li>The top 8 teams will make it to the finals.</li>
                <li>It is a BizTech quiz. The questions will be from the fields of Technology and Business both.</p></li>
            </ul>
                <h5>Contacts:</h5>
                <p>Poulami: 9002215596</p>
                <p>Rounak: 7278808933</p>
            `
    }
  ];

  result = [
    {
      name: 'ROBOTICS',
      events: [
        {
          name: 'ROBO SOCCER',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'ROBO SAPIENS',
              members: ['RESHAV DAS', 'RWITAM GHOSH', 'TAMOJIT DUTTA', 'SWAYAM DAS']
            },
            {
              pos: '3RD',
              team: 'X PLOD',
              members: ['SAHASRA BANERJEE', 'SOUGATA DEY', 'SAMRAT DUTTA']
            }
          ]
        },
        {
          name: 'ROBO RACE',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'PATRONUS',
              members: ['UJALA KUMARI', 'RIDDHI NANDI', 'ARJV SINGH', 'RICHA CHOUDHURY']
            },
            {
              pos: '3RD',
              team: 'V BOT',
              members: ['RAJ KUMAR', 'PANJIYARA', 'NILAVA SARKAR', 'VISHAL SHARMA', 'SUDIPTO DUTTA', 'NEELESH KEDIA']
            }
          ]
        },
        {
          name: 'RUMBLE',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'MIRAGE',
              members: ['CHELSI KUMARI', 'ABHISHEK BURNWAL', 'MADHUSREE BERA', 'ADITYA']
            }
          ]
        },
        {
          name: 'BLOCK CITY',
          positions: [
            {
              pos: '1ST',
              team: 'ROBORACERS',
              members: ['AMAN BAID', 'MEHELI CHOUDHURY', 'ANUPAM BARMAN', 'APRATIM BANERJEE']
            },
            {
              pos: '2ND',
              team: 'ASYMPTOTES',
              members: ['BINDUSAN MAURYA', 'HARSIT SARAN', 'GAURAV KUMAR MISHRA', 'SARTHAK RAJ']
            },
            {
              pos: '3RD',
              team: 'CHAOS',
              members: ['DEVENDRA SINGHI', 'ADITI DEEPAK', 'HARSHIT HARSH', 'ANIKET DAS']
            }
          ]
        },
        {
          name: 'MICROMACHINA',
          positions: [
            {
              pos: '1ST',
              team: 'CARBIDE 2.0',
              members: ['SATYAKI SETT', 'RITWICK GORAI', 'SAYAK DAS', 'SOUGATA KONAR']
            },
            {
              pos: '2ND',
              team: 'ROBORACERS',
              members: ['AMAN BAID', 'MEHELI CHOUDHURY', 'ANUPAM BARMAN', 'APRATIM BANERJEE']
            },
            {
              pos: '3RD',
              team: 'ASYMPTOTES',
              members: ['BINDUSAN MAURYA', 'HARSIT SARAN', 'GAURAV KUMAR MISHRA', 'SARTHAK RAJ']
            }
          ]
        }
      ]
    },
    {
      name: 'CYBER CRUSADE',
      events: [
        {
          name: 'FIFA',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SUSMIT GHOSH']
            },
            {
              pos: '2ND',
              team: '',
              members: ['ROHAN CHAKRABORTY']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SUBHOMOY PAUL']
            }
          ]
        },
        {
          name: 'CS',
          positions: [
            {
              pos: '1ST',
              team: 'ACE CALIBRE',
              members: []
            },
            {
              pos: '2ND',
              team: 'LOST LEGION',
              members: []
            }
          ]
        },
        {
          name: 'NFS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['NAVEEN BARICK']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SUJAY DAS']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SUMAN DEBNATH']
            }
          ]
        },
        {
          name: 'PUBG DUO',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SOURAV SARKAR', 'SUPRIYO MUKHERJEE']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHASHANK SOURAV', 'ROHIT KUMAR']
            }
          ]
        }
      ]
    },
    {
      name: 'COMPUTE@ID',
      events: [
        {
          name: 'CODEOUT',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['MD. MUBASIR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['RITAYAN CHAKRABORTY']
            },
            {
              pos: '3RD',
              team: '',
              members: ['YASHASVI AGARWAL']
            }
          ]
        },
        {
          name: 'FLAWLESS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHEKHAR AGARWAL', 'TEJESHWAR KUMAR', 'YASHASVI AGARWAL']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHUBHAM KUMAR', 'PRATIK PATNI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['RITAYAN CHAKRABORTY']
            }
          ]
        },
        {
          name: 'CRYPTOQUEST',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SAKSHI AGARWAL', 'YASHASVI AGARWAL']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHEKHAR DUTTA']
            },
            {
              pos: '3RD',
              team: '',
              members: ['NISHI PATWANI', 'ALISHA GUPTA']
            }
          ]
        },
        {
          name: 'BUGHUNT',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHEKHAR DUTTA']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHUBHAM KUMAR']
            },
            {
              pos: '3RD',
              team: '',
              members: ['MD. MUBASIR']
            }
          ]
        },
        {
          name: 'WEB-D',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['TEJESHWAR KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['NISHI PATWANI', 'SAKSHI AGARWAL']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHUBHAM KUMAR', 'PRIYONKAR MITRA']
            }
          ]
        }
      ]
    },
    {
      name: 'CIIC',
      events: [
        {
          name: 'BUSINESS MODEL PLAN',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['NANDAN KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SUKARNA SIL']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHREYA JAISWAL', 'SHALINI BORAL']
            }
          ]
        }
      ]
    },
    {
      name: 'NEWRON',
      events: [
        {
          name: 'QUIZ',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['ANANYA PAUL', 'SHAMIK BANERJEE', 'SOUMYABRATA CHAKRABORTY']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SABARNA SEN', 'SOMYA MISTI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['INDERJEET SINGH', 'ATISH YADAV', 'BASANT GAGGAR']
            }
          ]
        },
        {
          name: 'ELECTRONICALLY YOURS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHUBHAM KUMAR DUBEY', 'AYUSH KUMAR SHAW']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHRIJITA SOM', 'SULAGNA BHAKTA']
            },
            {
              pos: '3RD',
              team: '',
              members: ['DEBMALAYA MITRA', 'DIBJYOTI MUKHERJEE', 'ABHINABA GHOSH']
            }
          ]
        },
        {
          name: 'YOUTH PARLIAMENT',
          positions: [
            {
              pos: 'BEST SPEAKER FOR THE MOTION',
              team: '',
              members: ['VIVEK KUMAR SINGH']
            },
            {
              pos: 'BEST SPEAKER AGAINST THE MOTION',
              team: '',
              members: ['NAVEEN KUMAR SINGH', 'ANKIT SEN']
            }
          ]
        }
      ]
    },
    {
      name: 'FOOD FOR FUN',
      events: [
        {
          name: 'FOOD RELAY',
          positions: [
            {
              pos: '1ST',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'PABITRA SAHA', 'PUJA SAHA', 'SOUMYA ROY']
            },
            {
              pos: '2ND',
              team: 'BUGS BUNNY',
              members: ['RAKSHITA BHOJAK', 'SOUMI PATRA', 'SHREYA BHATTER', 'RITWIK AGARWAL']
            },
            {
              pos: '3RD',
              team: 'MEARSHISH',
              members: ['MD SHAQUIB', 'MEGHNA BURNWAL', 'DEBARSHI BHATTACHARYA']
            }
          ]
        },
        {
          name: '2 MINUTES TO SELL',
          positions: [
            {
              pos: '1ST',
              team: 'ADRIANA',
              members: ['HARSHIT KUMAR SINGH', 'ADITYA KUMAR']
            },
            {
              pos: '2ND',
              team: 'SRIPARNA',
              members: ['SRIPARNA ROY']
            },
            {
              pos: '3RD',
              team: 'ADRINA 3',
              members: ['BIPUL KARNA', 'SHASHANK HANSRAJ']
            }
          ]
        },
        {
          name: 'EX QUIZ IT',
          positions: [
            {
              pos: '1ST',
              team: 'ENIGMA',
              members: ['SAYAM BOSE', 'SHAMIK BANERJEE', 'ANIKET CHAKRABORTY', 'SHIRSHENDU KUMAR SAHA']
            },
            {
              pos: '2ND',
              team: 'PHEONIX',
              members: ['SHYEREE JORDAR', 'SWETPARNA MONDAL', 'UDISHA SENGUPTA']
            },
            {
              pos: '3RD',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            }
          ]
        },
        {
          name: 'FOOD PRODUCT LABELLING',
          positions: [
            {
              pos: '1ST',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            },
            {
              pos: '2ND',
              team: 'CRAZY FOOD',
              members: ['DIPANJAN GHOSH', 'SUBHANKAR DAS', 'SUBHRAJIT GHOSH']
            },
            {
              pos: '3RD',
              team: 'SQUAD',
              members: ['SMRITI JAISWAL', 'SHALINI KUMARI', 'PUJA SINHA', 'ROHAN KUMAR SINGH']
            }
          ]
        },
        {
          name: 'THINK IT OUT',
          positions: [
            {
              pos: '1ST',
              team: 'SQUAD',
              members: ['VISHAL SINGH']
            },
            {
              pos: '2ND',
              team: 'SAUTIK',
              members: ['SAUTIK SAMUI']
            },
            {
              pos: '3RD',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            }
          ]
        }
      ]
    },
    {
      name: 'ELEVATION',
      events: [
        {
          name: 'NIRMAAN',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['YOGESH KUMAR', 'SOURAV KUMAR JAISWAL', 'PRITAM SAGAR', 'SHRISHTI']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SATYAM', 'SACHIN MAHATHA', 'PIYUSH MAJI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['PAUSHALEE MAJUMDER', 'PANKAJ SAHA', 'AGNISHWAR MANDAL']
            }
          ]
        }
      ]
    },
    {
      name: 'CREATE IT',
      events: [
        {
          name: 'MEKANIX',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['BIPUL KARHA', 'HARSHIT SINGH', 'SHASHANK HANSRAJ', 'ADITYA KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['PRATIK SAHA', 'NAKSHATRA', 'KAUSUM LAHIRI']
            }
          ]
        }
      ]
    },
    {
      name: 'INFOCUS',
      events: [
        {
          name: 'CRUMBS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['ENAKSHI MJUMDER']
            },
            {
              pos: '2ND',
              team: '',
              members: ['MUNSHI BARISH RAHAMAN']
            },
            {
              pos: '3RD',
              team: '',
              members: ['ABHISHEK MALAKAR']
            }
          ]
        },
        {
          name: 'SHOOT-M-UP',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SUDARSHANA CHOWDHURY']
            },
            {
              pos: '2ND',
              team: '',
              members: ['MADHUMITA KUNDU']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHUBHAM KUMAR']
            }
          ]
        },
        {
          name: 'INSTA-CLICK',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SARANA MUKHERJEE']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHALINI KUMARI']
            }
          ]
        }
      ]
    }
  ]

  constructor() {}

  public getDetails(id: string) {
    const details = this.events.find(d => {
      return d.id === id;
    });
    return details;
  }
}
