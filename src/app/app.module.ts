import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './services/sidebar.service';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { MatIconModule } from '@angular/material/icon';
import { SubgroupAddComponent } from './subgroup-add/subgroup-add.component';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { UnitComponent } from './unit/unit.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    GroupComponent,
    BrandMainComponent,
    AddBrandComponent,
    SubgroupAddComponent,
    SubgroupComponent,
    UnitComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
