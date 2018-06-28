import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
