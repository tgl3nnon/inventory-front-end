import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers().subscribe(data => console.log(data);
  }
}
