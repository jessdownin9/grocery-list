import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../item';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
  newItemName: string = '';

  constructor(private _listsService: ListsService, private router: Router, private route: ActivatedRoute) {};

  goToList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  };

  addNewItem() {
    if (this.newItemName) {
      const newItem:IItem = {
        "id": this._listsService.lists[0].items.length,
        "name": this.newItemName,
        "quantity": 1,
        "note": ''
      };
      this._listsService.lists[0].items.push(newItem);
      this.newItemName = '';
    }
    this.goToList();
  };
}
