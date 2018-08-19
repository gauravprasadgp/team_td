import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MobilePage } from '../mobile/mobile';
import { WebPage } from '../web/web';
import { IotPage } from '../iot/iot';
import { MarketPage } from '../market/market';
import { QaPage } from '../qa/qa';
import { VrPage } from '../vr/vr';
import { GdPage } from '../gd/gd';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
mobile(){
  this.navCtrl.push(MobilePage);
}
web(){
  this.navCtrl.push(WebPage);
}
iot(){
  this.navCtrl.push(IotPage);
}
hr(){
  this.navCtrl.push(MarketPage);
}
qa(){
  this.navCtrl.push(QaPage);
}
vr(){
  this.navCtrl.push(VrPage);
}
gd(){
  this.navCtrl.push(GdPage);
}
}
