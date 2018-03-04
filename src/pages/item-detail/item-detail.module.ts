import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { itemFilter,supplyFilter,customersFilter } from '../../pipes';

import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage,
    itemFilter,
    supplyFilter,
    customersFilter
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
