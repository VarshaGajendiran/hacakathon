import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hackathon, HackathonService } from '../service/hackathonservice';

@Component({
  selector: 'app-list-hackathon',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './list-hackathon.html',
  styleUrl: './list-hackathon.css'
})
export class ListHackathon implements OnInit{
  hackathonList:Hackathon[]=[];
  hackathon?:Hackathon;
  searchId:number=0;
  constructor(private service:HackathonService){}
  ngOnInit(): void {
   
  }
  getHackathonById():void{
    this.service.getHackathonById(this.searchId).subscribe(
      (data) => {
        this.hackathon = data;  
        
      }
     
    );
   }

   getAllHackathon():void{
    console.log("Inside Component")
    this.service.getAllHackathon().subscribe(
      (data) => {
        this.hackathonList= data;
      }
    );
   }



}
