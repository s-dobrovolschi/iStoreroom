import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateService} from 'ng2-translate';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddNewOrderPage } from '../pages/add-new-order/add-new-order';
import { OrdersListPage } from '../pages/orders-list/orders-list';

@Component({
  templateUrl: 'app.html'
})
export class iStoreroom {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate: TranslateService) {
    this.initializeApp();
    this.initializePages();

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('it');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializePages(){
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'View Orders', component: OrdersListPage },
      { title: 'Add new order', component: AddNewOrderPage },

    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

