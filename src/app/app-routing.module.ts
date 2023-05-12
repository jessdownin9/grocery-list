import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AddListPageComponent } from './add-list-page/add-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'lists', component: ListsPageComponent },
  { path: 'lists/:id', component: ListPageComponent },
  { path: 'addList', component: AddListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingPageComponent,
  LoginPageComponent,
  ListsPageComponent,
  ListPageComponent,
  AddListPageComponent
];
