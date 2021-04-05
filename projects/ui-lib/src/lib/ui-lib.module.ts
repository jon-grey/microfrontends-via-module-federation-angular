import { NgModule } from '@angular/core';
import { UiLibComponent } from './ui-lib.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [UiLibComponent],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [UiLibComponent]
})
export class UiLibModule { }
