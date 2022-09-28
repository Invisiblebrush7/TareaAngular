import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { MyUpperCasePipe } from './shared/pipes/my-upper-case.pipe';
import { NoticiaDetailsComponent } from './pages/noticias/noticia-details/noticia-details.component';
import { NewsListComponent } from './pages/noticias/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyUpperCasePipe,
    NoticiaDetailsComponent,
    NewsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
