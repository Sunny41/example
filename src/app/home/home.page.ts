import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public eMail;
  public password;
  public message;
  public hidden;
  public eye = 'eye';
  public passwordType = 'password';
  public passwordShown = false;
  @ViewChild('mail' , { read: ElementRef, static: false }) mail: ElementRef;
  @ViewChild('pw' , { read: ElementRef, static: false }) pw: ElementRef;


  constructor(private navCtrl: NavController, private keyboard: Keyboard) {}

  doSomething() {
    console.log('triggered');
  }

  forgotPassword() {}

  login() {

    this.keyboard.hide();
    this.pw.nativeElement.setBlur();
    this.mail.nativeElement.blur();

  }

  cancel() {
    this.navCtrl.navigateRoot('/home');
  }

  skip() {}

  showPassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.eye = 'eye-off';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
      this.eye = 'eye';
    }
  }
}
