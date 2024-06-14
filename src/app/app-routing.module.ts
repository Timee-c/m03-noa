import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { UnitComponent } from './unit/unit.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { SubGroupComponent } from './sub-group/sub-group.component';
import { AddSubGroupComponent } from './add-sub-group/add-sub-group.component';
import { EditSubGroupComponent } from './edit-sub-group/edit-sub-group.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardMainComponent},
  {path: 'group', component: GroupComponent},
  {path: 'subgroup', component: SubGroupComponent},
  {path: 'subgroup/addSubGroup', component: AddSubGroupComponent},
  {path: 'subgroup/editSubGroup/:id', component: EditSubGroupComponent},
  {path: 'brand', component: BrandMainComponent},
  {path: 'group/addGroup', component: AddGroupComponent},
  {path: 'group/editGroup/:id', component: EditGroupComponent},
  {path: 'unit', component: UnitComponent},
  {path: 'unit/addUnit', component: AddUnitComponent},
  {path: 'unit/editUnit/:id', component: EditUnitComponent},
  {path: 'brand/add-brand', component: AddBrandComponent},
  {path: 'brand/brand-edit/:id', component: BrandEditComponent},
  {path: '', component: DashboardMainComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add-product', component: AddProductComponent},
  {path:'product/edit-produtc/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
