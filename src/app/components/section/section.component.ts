import { Component, OnInit, Input } from '@angular/core';

import { ItemComponent } from '../../models/item.component.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, ItemComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
