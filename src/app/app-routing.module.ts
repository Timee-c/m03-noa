import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardMainComponent},
  {path: 'group', component: GroupComponent},
  {path: 'brand', component: BrandMainComponent},
  {path: 'brand/brandAdd', component: AddBrandComponent},
  {path: 'brand/brand-edit', component: BrandEditComponent},
  {path: 'brand/brand-edit/:id', component: BrandEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
