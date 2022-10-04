import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasDetailsPageComponent } from './pages/noticias/noticias-details-page/noticias-details-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:titulo', component: NoticiasDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
