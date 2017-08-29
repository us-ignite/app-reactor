import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FooterComponent } from './components/footer/footer.component';
import { EchosystemComponent } from './components/echosystem/echosystem.component';

import { DataService } from './services/data.service';
import { IdeaListComponent } from './components/idea-list/idea-list.component';
import { IdeaComponent } from './components/idea/idea.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IdeasComponent,
    FooterComponent,
    EchosystemComponent,
    IdeaListComponent,
    IdeaComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
