import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team, Teamservice } from '../service/teamservice';

@Component({
  selector: 'app-list-team',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './list-team.html',
  styleUrl: './list-team.css'
})
export class ListTeam implements OnInit {
  teamList:Team[]=[];
  team?:Team;
  
  searchId:number=0;
 
  constructor(private service:Teamservice){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getTeamById():void{
    this.service.getTeamById(this.searchId).subscribe(
      (data) => {
        this.team = data;  
        
      }
     
    );
   }

   getAllTeam():void{
    console.log("Inside Component")
    this.service.getAllTeam().subscribe(
      (data) => {
        this.teamList= data;
      }
    )
   }



}

