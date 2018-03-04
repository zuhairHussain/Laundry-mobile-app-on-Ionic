import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
@IonicPage({
  name: 'item-detail',
  segment: 'item-detail/:id'
})
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  supplies;
  constructor(public navCtrl: NavController, navParams: NavParams,public items: Items) {
    this.item = navParams.get('item');
  }
  ionViewDidLoad() {
    this.items.query('supplies')
    .then(
      data => {
        this.supplies = data;
      }
    );
  }
}
