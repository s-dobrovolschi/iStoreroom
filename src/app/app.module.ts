import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { iStoreroom } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { AddNewOrderPage } from '../pages/add-new-order/add-new-order';
import { OrdersListPage } from '../pages/orders-list/orders-list';

@NgModule({
  declarations: [
    iStoreroom,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    AddNewOrderPage,
    OrdersListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(iStoreroom)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    iStoreroom,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    AddNewOrderPage,
    OrdersListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
