import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardMainComponent},
  {path: 'group', component: GroupComponent},
  {path: 'brand', component: BrandMainComponent},
  {path: 'group/addGroup', component: AddGroupComponent},
  {path: 'group/editGroup/:id', component: EditGroupComponent},
  {path: 'brand/brand-add', component: AddBrandComponent},
  {path: 'brand/brand-edit/:id', component: BrandEditComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add-product', component: AddProductComponent},
  {path:'product/edit-produtc/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
