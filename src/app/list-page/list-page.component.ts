import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IList } from '../list';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  public listId = 0;
  public lists: IList[] = [];

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
  }
}
