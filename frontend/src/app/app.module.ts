import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './components/goals/goals.component';
import { DeadlinesComponent } from './components/deadlines/deadlines.component';
import { CalenderComponent } from './components/calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    DeadlinesComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
