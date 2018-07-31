import {
  EventsListComponent,
  EventDetailsComponent,
  EventListResolverService, CreateEventComponent, CreateSessionComponent, EventResolver
} from './events/index';
import {Error404Component} from './errors/404.component';

export const appRoutes = [
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '404', component: Error404Component},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
