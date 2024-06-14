import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { SubgroupAddComponent } from './subgroup-add/subgroup-add.component';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { UnitComponent } from './unit/unit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardMainComponent },
  { path: 'group', component: GroupComponent },
  { path: 'brand', component: BrandMainComponent },
  { path: 'subgroup-add', component: SubgroupAddComponent },
   { path: 'subgroup', component: SubgroupComponent },
   { path: 'unit', component: UnitComponent },
   { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
