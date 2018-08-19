import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, ToastController, Slides } from 'ionic-angular';

/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePage');
  }
tst(){
    const toast = this.toastCtrl.create({
      message: 'Message was send successfully',
      duration: 3000
    });
    toast.present();
  }
}
