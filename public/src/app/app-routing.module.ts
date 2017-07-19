import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingsComponent } from './rankings/rankings.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
   {
    path: '',
    component: NewComponent,
  },

  {
    path: 'rankings',
    component: RankingsComponent,
  },
  {
    path: 'results/:winner',
    component:ResultsComponent,
  },
  {
    path: 'show',
    component: ShowComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
