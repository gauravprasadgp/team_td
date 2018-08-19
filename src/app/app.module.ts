import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GdPage } from '../pages/gd/gd';
import { MarketPage } from '../pages/market/market';
import { IotPage } from '../pages/iot/iot';
import { MobilePage } from '../pages/mobile/mobile';
import { QaPage } from '../pages/qa/qa';
import { VrPage } from '../pages/vr/vr';
import { WebPage } from '../pages/web/web';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GdPage,
    MarketPage,
    IotPage,
    MobilePage,
    QaPage,
    VrPage,
    WebPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GdPage,
    MarketPage,
    IotPage,
    MobilePage,
    QaPage,
    VrPage,
    WebPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
