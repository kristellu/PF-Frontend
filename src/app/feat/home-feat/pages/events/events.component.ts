import { Component, OnInit } from '@angular/core';
import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker';

import { ContentService } from '@core/services/content.service';
import { Event } from '@shared/interfaces/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  selectedDate: Date;
  today: Date;
  minDate: Date;
  maxDate: Date;
  events: Event[];
  meetUp: any;
  meets: any[];
  selectedEvent: Event;
  selectedEvents: Event[];
  dateCustomClasses: DatepickerDateCustomClasses[];

  constructor(private contentService: ContentService) {
    this.selectedDate = new Date();
    this.today = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 30);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.dateCustomClasses = [
      { date: this.today, classes: ['bg-primary', 'text-white'] }
    ];
  }

  ngOnInit(): void {
    this.getEvents();
    this.getMeetUps();
    this.getEventsMeetUps();
  }

  getEvents(): void {
    this.contentService.getEvents()
    .subscribe((events) => {
      this.events = events;
      this.selectedEvents = [];
      for (const event of events) {
        this.dateCustomClasses.push({ date: event.date, classes: ['date-event']});
        this.selectedEvents.push(event);
      }
    });
  }

  getMeetUps() {
    this.contentService.getMeetUp()
      .subscribe(
        (meetUp) => {
          this.meetUp = meetUp;
          // meet.descrition = meet.description.replace(/<p>|<\/p>/, '');
        }
      );
  }


  getEventsMeetUps() {
    this.contentService.getEventsMeetUp()
      .subscribe(
        (events) => {
          this.meets = events;
          // meet.descrition = meet.description.replace(/<p>|<\/p>/, '');
        }
      );
  }

  selectEvent(event?: Event) {
    this.selectedEvent = event;
  }

  onDateChange(value: Date): void {
    this.selectedDate = value;
    this.selectedEvents = [];
    // console.log('Date changed ' + value.getDay());
    for (const event of this.events) {
      // console.log(event.date.getTime() + ' === ' + this.selectedDate.getTime());
      if (this.equalDate(event.date, value)) {
        // console.log('Event added ' + event.title);
        this.selectedEvents.push(event);
      }
    }
  }

  equalDate(DateA: Date, DateB: Date): boolean {     // this function is good for dates > 01/01/1970
    const a = new Date(DateA);
    const b = new Date(DateB);
    const msDateA = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate());
    const msDateB = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate());
    // console.log(msDateA + ' === ' + msDateB);
    return msDateA === msDateB;
  }
}
