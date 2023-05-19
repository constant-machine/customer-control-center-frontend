import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {HomeComponent} from "./home/home.component";
import {ListProjectsComponent} from "./list-projects/list-projects.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'create-project', component: CreateComponent },
  { path: 'all-projects', component: ListProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
