import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {

  dateTime = new Date();

  constructor() { }

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    interval(1).subscribe(data=>{
      this.dateTime=new Date();
    })
  }

}
