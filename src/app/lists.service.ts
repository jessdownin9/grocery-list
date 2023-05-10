import { Injectable } from '@angular/core';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  lists: IList[] = [
    {
      "id": 0, 
      "name": "Costco List",
      "items": [
        {
          "id": 0,
          "name": "Apple",
          "quantity": 1,
          "note": ""
        },
        {
          "id": 1,
          "name": "Potato",
          "quantity": 2,
          "note": ""
        }
      ]
    },
    {
      "id": 1, 
      "name": "Walmart List",
      "items": [
        {
          "id": 0,
          "name": "Maple Syrup",
          "quantity": 1,
          "note": ""
        }
      ]
    }
  ];
  constructor() { }
}
