import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { ResultsComponent } from './results/results.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    NewComponent,
    ShowComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
