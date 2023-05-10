import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from '../lists.service';
import { IList } from '../list';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent {
  public lists: IList[] = [];

  constructor(private _listsService: ListsService, private router: Router, private route: ActivatedRoute) {};

  ngOnInit() {
    this.lists = this._listsService.lists;
  };

  onSelectList(list: IList) {
    this.router.navigate([list.id], {relativeTo: this.route});
  };

  goToAddListPage() {
    this.router.navigate(['addList']);
  }
}
