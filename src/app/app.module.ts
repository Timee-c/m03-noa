import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GroupComponent } from './group/group.component';
import { BrandMainComponent } from './brand/brand-main.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { FormsModule } from "@angular/forms";
import { provideHttpClient } from '@angular/common/http';
import { BrandEditComponent } from './brand-edit/brand-edit.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidebarComponent, GroupComponent,
    BrandMainComponent,
    AddBrandComponent,
    BrandEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
