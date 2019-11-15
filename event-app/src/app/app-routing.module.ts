import { BilleterieComponent } from './billeterie/billeterie.component';
import { SocialComponent } from './social/social.component';
import { ArtisteDetailComponent } from './artiste-detail/artiste-detail.component';
import { ConcertsSabComponent } from './concerts-sab/concerts-sab.component';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertsDomComponent } from './concerts-dom/concerts-dom.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'social', component: SocialComponent },
  {path: 'billeterie', component: BilleterieComponent },
  {path: 'concerts/vendredi', component: ConcertsComponent},
  {path: 'concerts/samedi', component: ConcertsSabComponent},
  {path: 'concerts/dimanche', component: ConcertsDomComponent},
  {path: 'concerts/:id', component: ArtisteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
