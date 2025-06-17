import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Participant, Participantservice} from '../service/participantservice';

@Component({
  selector: 'app-add-participant',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-participant.html',
  styleUrl: './add-participant.css'
})
export class AddParticipant implements OnInit {
  ngOnInit(): void {
    
  }
  participants:Participant[]=[];
  newParticipant:Participant=
  {
    participantname: "", participantemail: "", team:{teamid:0}
  }

  searchId:number=0;
  
  constructor(private  service:Participantservice){}

  
addparticipant():void{
  this.service.addParticipant(this.newParticipant).subscribe();
    this.newParticipant={participantname:"", participantemail:"",team:{teamid:0}};
}

getParticipantById():void{
  this.service.getParticipantById(this.searchId).subscribe();
  this.searchId=0;
}
}
