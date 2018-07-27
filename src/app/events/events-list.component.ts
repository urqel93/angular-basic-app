import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';


@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let e of events">
          <events-thumbnail [event]="e">
          </events-thumbnail>
        </div>
      </div>
    </div>

  `
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}
