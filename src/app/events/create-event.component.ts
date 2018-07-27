import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px
    }

    .error input {
      background-color: #e3c3c5
    }

    .error ::-webkit-input-placeholder {
      color: #999
    }
  `]
})

export class CreateEventComponent {

  newEvent;

  constructor(private router: Router,
              private eventService: EventService) {

  }

  saveEvent(values) {
    this.eventService.saveEvent(values);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }


}
