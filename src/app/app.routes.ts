import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddHackathon } from './add-hackathon/add-hackathon';
import { ListHackathon } from './list-hackathon/list-hackathon';
import { AddParticipant } from './add-participant/add-participant';
import { ListParticipant } from './list-participant/list-participant';
import { AddTeam } from './add-team/add-team';
import { ListTeam } from './list-team/list-team';


export const routes: Routes = [
{path: '', component: Home},

{path:"add-hackathon",component:AddHackathon},
{path:"list-hackathon",component:ListHackathon},
{path:"add-participant",component:AddParticipant},
{path:"list-participant",component:ListParticipant},
{path:"add-team",component:AddTeam},
{path:"list-team",component:ListTeam}

];