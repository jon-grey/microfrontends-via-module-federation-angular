import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBusComponent } from './message-bus.component';

describe('MessageBusComponent', () => {
  let component: MessageBusComponent;
  let fixture: ComponentFixture<MessageBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
