import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Hackathon, HackathonService } from "../service/hackathonservice";

@Component({
  selector: 'app-add-hackathon',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-hackathon.html',
  styleUrl: './add-hackathon.css'
})
export class AddHackathon implements OnInit {

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  hackathons:Hackathon[]=[];
  newHackathon:Hackathon=
  { hackathonname:"", hackathondate:""}


searchId:number=0;

constructor(private  service:HackathonService,private cdr: ChangeDetectorRef){}

addhackathon():void{
  this.service.addHackathon(this.newHackathon).subscribe();
    this.newHackathon={hackathonname:"", hackathondate:""};
}


}