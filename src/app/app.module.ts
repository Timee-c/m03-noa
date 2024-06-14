import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { UnitComponent } from './unit/unit.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { SubGroupComponent } from './sub-group/sub-group.component';
import { AddSubGroupComponent } from './add-sub-group/add-sub-group.component';
import {RouterModule} from '@angular/router';
import { EditSubGroupComponent } from './edit-sub-group/edit-sub-group.component';import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidebarComponent, GroupComponent,
    BrandMainComponent,
    AddBrandComponent,
    AddGroupComponent,
    EditGroupComponent,
    BrandEditComponent,
    UnitComponent,
    AddUnitComponent,
    EditUnitComponent,
    SubGroupComponent,
    AddSubGroupComponent,
    EditSubGroupComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule, BrowserAnimationsModule,
    FormsModule, RouterModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
