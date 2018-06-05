import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { DeleteBeerComponent } from './delete-beer/delete-beer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavBarComponent, BeerListComponent, AddBeerComponent, DeleteBeerComponent],
  imports: [BrowserModule, HttpClientModule, CollapseModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
