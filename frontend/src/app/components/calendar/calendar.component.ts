import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class calendarComponent implements OnInit {


  today = new Date();

  dateint0 = this.today.setDate(new Date().getDate());
  dateraw0 = new Date(this.dateint0);
  date0 = this.dateraw0.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay0 = this.dateraw0.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint1 = this.today.setDate(new Date().getDate()+1);
  dateraw1 = new Date(this.dateint1);
  date1 = this.dateraw1.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay1 = this.dateraw1.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint2 = this.today.setDate(new Date().getDate()+2);
  dateraw2 = new Date(this.dateint2);
  date2 = this.dateraw2.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay2 = this.dateraw2.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint3 = this.today.setDate(new Date().getDate()+3);
  dateraw3 = new Date(this.dateint3);
  date3 = this.dateraw3.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay3 = this.today.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint4 = this.today.setDate(new Date().getDate()+4);
  dateraw4 = new Date(this.dateint4);
  date4 = this.dateraw4.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay4 = this.today.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint5 = this.today.setDate(this.dateraw4.getDate() + 1);
  dateraw5= new Date(this.dateint5);
  date5 = this.dateraw5.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay5 = this.today.toLocaleString('de-DE',{weekday:'long'}); //Wochentag

  dateint6 = this.today.setDate(this.dateraw5.getDate() + 1);
  dateraw6= new Date(this.dateint6);
  date6 = this.dateraw6.toLocaleString('de-DE',{day:'numeric',month: 'long'});
  weekDay6 = this.today.toLocaleString('de-DE',{weekday:'long'}); //Wochentag
  
  constructor() { }

  ngOnInit(): void {
  }

}
