import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Username!: string
  Password!: string

  constructor(private navCtrl: NavController, private alert: AlertController) { }

  async login(){
    if(this.Username === "admin" && this.Password === "admin"){
      this.navCtrl.navigateForward("loaderlogin")
      setTimeout(() => {
        this.navCtrl.navigateForward("/feeding")
      }, 2000)
    }else{
      const alert = await this.alert.create({
        header: 'Wrong Credentials',
        message: 'Please Enter an Invalid Input',
        buttons: ['Ok'],
        
      });

      await alert.present()
    }
  }

  ngOnInit() {
  }

}
