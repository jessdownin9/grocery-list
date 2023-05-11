import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IItem } from '../item';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
  newItemName: string = '';
  newItemQuantity: number = 1;
  newItemNote: string = '';
  listId: number = 0;

  constructor(private _listsService: ListsService, private router: Router, private route: ActivatedRoute) {};

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id) {
        this.listId = parseInt(id);
      }
    });
  }

  goToList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  };

  addNewItem() {
    if (this.newItemName) {
      const newItem:IItem = {
        "id": this._listsService.lists[this.listId].item_history.length,
        "name": this.newItemName,
        "quantity": this.newItemQuantity,
        "note": this.newItemNote
      };
      this._listsService.lists[this.listId].items.push(newItem);
      this._listsService.lists[this.listId].item_history.push(newItem);
      this.newItemName = '';
      this.newItemQuantity = 1;
      this.newItemNote = '';
    }
    this.goToList();
  };
}
