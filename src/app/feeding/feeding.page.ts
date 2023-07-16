import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.page.html',
  styleUrls: ['./feeding.page.scss'],
})
export class FeedingPage implements OnInit {

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
