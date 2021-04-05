import { Component, OnInit } from '@angular/core';
import { MessageBusService } from 'message-bus';
import { UiLibService } from 'ui-lib';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(
    private messageBus: MessageBusService,
    private uiLib: UiLibService,
  ) {
    console.log("Started shell app!");
    messageBus.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }


  ngOnInit() {
    console.log("Loaded shell app ngOnInit!");
    this.messageBus.event.next("Hello messageBus from the shell!");
    this.uiLib.event.next("Hello uiLib from the shell!");
    console.log("Loaded shell app ngOnInit!");
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.messageBus.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
