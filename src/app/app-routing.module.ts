import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardMainComponent},
  {path: 'group', component: GroupComponent},
  {path: 'brand', component: BrandMainComponent},
  {path: 'group/addGroup', component: AddGroupComponent},
  {path: 'group/editGroup/:id', component: EditGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
