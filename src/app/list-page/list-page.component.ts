import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IList } from '../list';
import { ListsService } from '../lists.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IItem } from '../item';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  public listId = 0;
  public lists: IList[] = [];
  public crossedOutStyle = {
    textDecoration: 'line-through',
    textDecorationColor: 'red',
    textDecorationThickness: '0.3rem'
  };
  public defaultStyle = {
    textDecoration: 'none',
    textDecorationColor: 'none',
    textDecorationThickness: '0'
  };
  public newItemName: string = '';
  public newItemNote: string = '';
  public editedNameIndex: number = -1;
  public editedNoteIndex: number = -1;

  constructor(private _listsService: ListsService, private route: ActivatedRoute, private router: Router) {};

  ngOnInit() {
    this.lists = this._listsService.lists;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id) {
        this.listId = parseInt(id);
      }
    });
  };

  goToLists() {
    this.router.navigate(['../'], {relativeTo: this.route});
  };

  goToAddItemPage() {
    this.router.navigate(['addItem'], {relativeTo: this.route});
  };

  drop(event: CdkDragDrop<IItem[]>) {
    moveItemInArray(this.lists[this.listId].items, event.previousIndex, event.currentIndex);
  };

  crossOut(event: MouseEvent, item: IItem) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.classList.contains('quantity-container')) {
      return;
    }
    item.isCrossedOut = !item.isCrossedOut;
  };

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  };

  decrementItemQuantity(item: IItem) {
    item.quantity -= 1;
    if (!item.quantity) {
      this.lists[this.listId].items = this.lists[this.listId].items.filter(listItem => listItem.name !== item.name);
    }
    console.log(this.lists[this.listId]);
  }

  incrementItemQuantity(item: IItem) {
    item.quantity += 1;
  };

  addNewItem() {
    if (this.newItemName) {
      const newItem:IItem = {
        "id": this._listsService.lists[this.listId].item_history.length,
        "name": this.newItemName,
        "quantity": 1,
        "note": 'Add Note',
        "isCrossedOut": false
      };
      if (!this._listsService.lists[this.listId].items.some(item => item.name === newItem.name)) {
        this._listsService.lists[this.listId].items.unshift(newItem);
      }
      if (!this._listsService.lists[this.listId].item_history.some(item => item.name === newItem.name)) {
        this._listsService.lists[this.listId].item_history.unshift(newItem);
      }
      this.newItemName = '';
    }
  };

  editItemName(index: number) {
    this.editedNameIndex = index;
  };

  editItemNote(index: number) {
    this.editedNoteIndex = index;
  };

  endNameEdit() {
    this.editedNameIndex = -1;
  };

  cancelNoteEdit() {
    this.newItemNote = '';
    this.editedNoteIndex = -1;
  };

  endNoteEdit(item: IItem) {
    item.note = this.newItemNote;
    this.newItemNote = '';
    this.editedNoteIndex = -1;
  }
}
