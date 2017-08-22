import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FooterComponent } from './components/footer/footer.component';
import { EchosystemComponent } from './components/echosystem/echosystem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IdeasComponent,
    FooterComponent,
    EchosystemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
