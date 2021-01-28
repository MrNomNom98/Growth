import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './components/goals/goals.component';
import { DeadlinesComponent } from './components/deadlines/deadlines.component';
import { calendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    DeadlinesComponent,
    calendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
