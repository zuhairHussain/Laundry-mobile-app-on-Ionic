import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems;
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,public http: HttpClient,public loadingCtrl: LoadingController) {
    
  }
  loader = this.loadingCtrl.create({
    content: "Please wait...",
  });

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.loader.present();
    this.items.query('request')
    .then(
      data => {
        this.currentItems = data;
        this.loader.dismiss();
      }
    );
  }


  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
    console.log(item.id)
    this.navCtrl.push('item-detail', {
      id : item.id,
      item: item,
    });
  }
}