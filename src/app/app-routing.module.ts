import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DashboardMainComponent } from './dashboard/dashboard-main.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardMainComponent},
  {path:"group",component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
