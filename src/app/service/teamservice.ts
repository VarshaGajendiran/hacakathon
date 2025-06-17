import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Team{
  teamid?:number;
  teamname:string;
  hackathonid:number;
}
@Injectable({
  providedIn: 'root'
})
export class Teamservice {
  
  private baseUrl='http://localhost:1051/team';

  constructor(private http:HttpClient) { }addTeam(team :Team ): Observable<Team>{
        return this.http.post<Team>(`${this.baseUrl}/save`, team);
        
    }
    getAllTeam():Observable<Team[]>{
        return this.http.get<Team[]>(`${this.baseUrl}/all`);
    }
    getTeamById(id: number): Observable<Team> {
        return this.http.get<Team>(`${this.baseUrl}/${id}`);
      }
  }
    
  
  