import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
