import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params) {

      return new Promise(resolve => {
        this.api.get('laundromat/api/'+ params +'/?format=json').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });

  }
  add(item: Item) {
  }

  delete(item: Item) {
  }

}
