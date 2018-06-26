import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { DeleteBeerComponent } from './delete-beer/delete-beer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, BeerListComponent, AddBeerComponent, DeleteBeerComponent, HomeComponent, SidebarComponent],
  imports: [BrowserModule, HttpClientModule, CollapseModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
