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
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidebarComponent, GroupComponent,
    BrandMainComponent,
    AddBrandComponent,
    AddGroupComponent,
    EditGroupComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
