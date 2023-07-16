import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  hello: string = "show"

  dateTime = new Date();
 
  constructor(private router: Router, private navCtlr: NavController) {
    this.router.events.subscribe((event: NavigationEvent) => {
      if(event instanceof NavigationStart){
        console.log(event.url)
        if(event.url.includes("login")){
          this.hello = "hide"
        } else if(event.url.includes("loaderlogin")){
          this.hello = "hide"
        }else if(event.url.includes("loaderstart")){
            this.hello = "hide"}else{
          this.hello = "show"
        }
      }
    })
  }

  async temperature(){
    this.router.navigateByUrl("loader")
    setTimeout(() => {
      this.router.navigateByUrl("temperature")
    }, 1000)
    
  }

  async feeding(){
    this.router.navigateByUrl("loader")
    setTimeout(() => {
      this.router.navigateByUrl("feeding")
    }, 1000)
    
  }

  async report(){
    this.router.navigateByUrl("loader")
    setTimeout(() => {
      this.router.navigateByUrl("report")
    }, 1000)
    
  }

  async logout(){
    this.router.navigateByUrl("loader")
    setTimeout(() => {
      this.navCtlr.navigateForward("login")
    }, 1000)
    
  }

  ngOnInit() {
    this.startClock();
   
  }
  
  startClock() {
    interval(1).subscribe(data=>{
      this.dateTime=new Date();
    })
  }
}
