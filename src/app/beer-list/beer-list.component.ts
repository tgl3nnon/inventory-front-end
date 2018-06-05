import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): any {
    return this.beerService.getBeers().subscribe(beers => (this.beers = beers));
  }
}
