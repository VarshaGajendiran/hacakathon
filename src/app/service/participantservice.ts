import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Team{
  teamid?:number;
 
}
export interface Participant{

  participantid?:number;
  participantname:string;
  participantemail:string;
  team:Team;
}
@Injectable({
  providedIn: 'root'
})
export class Participantservice {
  private baseUrl='http://localhost:1051/participant';
  constructor(private http:HttpClient) { }
  
      addParticipant(participant :Participant ): Observable<Participant>{
        return this.http.post<Participant>(`${this.baseUrl}/save`, participant);
        
    }
    getAllParticipant():Observable<Participant[]>{
        return this.http.get<Participant[]>(`${this.baseUrl}/all`);
    }
    getParticipantById(id: number): Observable<Participant> {
        return this.http.get<Participant>(`${this.baseUrl}/${id}`);
      }
}
