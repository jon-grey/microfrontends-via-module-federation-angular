import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { MessageBusService } from 'message-bus';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiLibService } from 'ui-lib';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent implements OnDestroy {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    private messageBus: MessageBusService,
    private uiLib: UiLibService,
  ) {

    console.log("Started mfe1 app...!");
    this.messageBus.event.subscribe(
      msg => console.log('msg received in mfe1:messageBus =>', msg));
    this.uiLib.event.subscribe(
      msg => console.log('msg received in mfe1:uiLib =>', msg));

    this.subscription = this.messageBus.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });

    console.log("Loaded mfe1 app...!");
  }

  confirm() {
    this.confirmed = true;
    this.messageBus.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }


}
