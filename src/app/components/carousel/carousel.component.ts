import { Component, OnInit, Input } from '@angular/core';

import { CarouselItem } from '../../models/carousel-item.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() items: CarouselItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
