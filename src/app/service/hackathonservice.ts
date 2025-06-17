import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Hackathon{
hackathonid?:number;
hackathonname:string;
hackathondate:string;
}
@Injectable({
  providedIn: 'root'
})


export class HackathonService{
  private baseUrl='http://localhost:1051/hackathon';
    
    constructor(private http:HttpClient) {}

    addHackathon(hackathon :Hackathon ): Observable<Hackathon>{
      return this.http.post<Hackathon>(`${this.baseUrl}/save`, hackathon);
      
  }
  getAllHackathon():Observable<Hackathon[]>{
      return this.http.get<Hackathon[]>(`${this.baseUrl}/all`);
  }
  getHackathonById(id: number): Observable<Hackathon> {
      return this.http.get<Hackathon>(`${this.baseUrl}/${id}`);
    }
}
  

