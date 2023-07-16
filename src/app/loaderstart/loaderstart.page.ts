import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loaderstart',
  templateUrl: './loaderstart.page.html',
  styleUrls: ['./loaderstart.page.scss'],
})
export class LoaderstartPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(()=> {
      this.router.navigateByUrl("login");
    }, 4000)
   }

  ngOnInit() {
  }

}
