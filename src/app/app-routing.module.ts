import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';

const routes: Routes = [
  {path: 'group', component: GroupComponent},
  {path: 'brand', component: BrandMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
