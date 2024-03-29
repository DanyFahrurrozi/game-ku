import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';




const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'leaderboards', component:LeaderboardsComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'tournament', component:TournamentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
