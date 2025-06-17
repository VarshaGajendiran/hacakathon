import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Participant, Participantservice } from '../service/participantservice';

@Component({
  selector: 'app-list-participant',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './list-participant.html',
  styleUrl: './list-participant.css'
})
export class ListParticipant implements OnInit {
  participants:Participant[]=[];
  participant?:Participant;
  searchId:number=0;
  participantList: Participant[] | undefined;
  constructor(private  service:Participantservice){}

  ngOnInit(): void {
    
  }
  getParticipantById():void{
    this.service.getParticipantById(this.searchId).subscribe(
      (data) => {
        this.participant = data;  
        
      }
     
    );
   }

   getAllParticipant():void{
    console.log("Inside Component")
    this.service.getAllParticipant().subscribe(
      (data) => {
        this.participantList= data;
      }
    )
   }



}
