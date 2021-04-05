import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageBusService } from 'message-bus';
import { UiLibService, getSlideInAnimation } from 'ui-lib';

const slideInAnimationHomeFlights = getSlideInAnimation("home", "not-found");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ slideInAnimationHomeFlights ]
})
export class AppComponent {
  title = 'shell';

  constructor(
    private messageBus: MessageBusService,
    private uiLib: UiLibService,
  ) {
    console.log("Started shell app!");
    this.messageBus.event.next("Hello messageBus from the shell!");
    this.uiLib.event.next("Hello uiLib from the shell!");
    console.log("Loaded shell app!");
  }

  getAnimationData(outlet: RouterOutlet) {
    console.log("Animate shell app data: ", outlet, outlet.activatedRouteData, outlet.activatedRouteData.animation);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}

