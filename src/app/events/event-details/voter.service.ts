import {Injectable} from '@angular/core';
import {ISession} from '../shared';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {

  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(url, {}, options).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
}
