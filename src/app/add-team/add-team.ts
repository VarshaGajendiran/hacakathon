import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team, Teamservice } from '../service/teamservice';

@Component({
  selector: 'app-add-team',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-team.html',
  styleUrl: './add-team.css'
})
export class AddTeam  implements OnInit{
ngOnInit(): void {
  
}
teams:Team[]=[];
newTeam:Team={teamname:"",hackathonid:0}

searchId:number=0;
constructor(private service:Teamservice){}
addteam():void{
  this.service.addTeam(this.newTeam).subscribe();
    this.newTeam={teamname:"", hackathonid:0};
}

getTeamById():void{
  this.service.getTeamById(this.searchId).subscribe();
  this.searchId=0;
}
}
