import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './nav/navbar.component';
import {TOASTR_TOKEN} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {
  EventListResolverService,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  EventResolver
} from './events/index';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {JQUERY_TOKEN} from './common/jQuery.service';
import {SimpleModalComponent} from './common/simple-modal.component';
import {ModalTriggerDirective} from './common/modalTrigger.directive';
import {VoterService} from './events/event-details/voter.service';
import {HttpClientModule} from '@angular/common/http';

const toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavbarComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {provide: JQUERY_TOKEN, useValue: jQuery},
    EventRouteActivator,
    EventListResolverService,
    AuthService,
    VoterService,
    EventResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
