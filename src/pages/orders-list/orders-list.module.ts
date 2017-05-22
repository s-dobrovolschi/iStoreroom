import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersListPage } from './orders-list';

@NgModule({
  declarations: [
    OrdersListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersListPage),
  ],
  exports: [
    OrdersListPage
  ]
})
export class OrdersListPageModule {}
