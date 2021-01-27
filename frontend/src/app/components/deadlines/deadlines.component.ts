import { Component, OnInit } from '@angular/core';
import { DEADLINES } from 'src/assets/mocks/deadlines';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss']
})
export class DeadlinesComponent implements OnInit {

  deadlines = DEADLINES;

  constructor() { }

  ngOnInit(): void {
  }

}
