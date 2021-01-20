import { Component, OnInit } from '@angular/core';
import {DAILY} from '../../../assets/mocks/goals';
import {WEEKLY} from '../../../assets/mocks/goals';
import {MONTHLY} from '../../../assets/mocks/goals';
import {YEARLY} from '../../../assets/mocks/goals';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  
  dailyGoals = DAILY;
  weeklyGoals = WEEKLY; 
  monthlyGoals = MONTHLY;
  yearlyGoals = YEARLY;
 
  constructor() { 
  }

  ngOnInit(): void {
  }

}
