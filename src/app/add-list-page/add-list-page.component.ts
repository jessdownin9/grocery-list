import { Component } from '@angular/core';
import { ListsService } from '../lists.service';
import { IList } from '../list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list-page',
  templateUrl: './add-list-page.component.html',
  styleUrls: ['./add-list-page.component.css']
})
export class AddListPageComponent {
  newListName: string = '';

  constructor(private _listsService: ListsService, private router: Router) {};

  goToLists() {
    this.router.navigate(['lists']);
  };

  addNewList() {
    if (this.newListName) {
      const newList:IList = {
        "id": this._listsService.lists.length,
        "name": this.newListName,
        "items": []
      };
      this._listsService.lists.push(newList);
      this.newListName = '';
    }
    this.router.navigate(['lists']);
  };
}
