import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddHackathon } from './add-hackathon/add-hackathon';
import { ListHackathon } from './list-hackathon/list-hackathon';
import { AddParticipant } from './add-participant/add-participant';
import { ListParticipant } from './list-participant/list-participant';
import { AddTeam } from './add-team/add-team';
import { ListTeam } from './list-team/list-team';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,HttpClientModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'final';
}
