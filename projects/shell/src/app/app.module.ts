import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiLibModule } from 'ui-lib';
import { MessageBusModule } from 'message-bus';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiLibModule,
    MessageBusModule,
    RouterModule.forRoot(APP_ROUTES, { enableTracing: true, useHash: true }) // <-- debugging purposes only
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
